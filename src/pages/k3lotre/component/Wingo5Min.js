import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Stack,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import countdownfirst from '../../../assets/images/countdownfirst.mp3';
import countdownlast from '../../../assets/images/countdownlast.mp3';
import timerbg1 from '../../../assets/images/timerbg.png';
import timerbg2 from '../../../assets/images/timerbg2.png';
import {
  dummycounterFun,
  gameHistory_trx_one_minFn,
  myHistory_trx_one_minFn,
  updateNextCounter,
} from '../../../redux/slices/counterSlice';
import { useSocket } from '../../../shared/socket/SocketContext';
import BetNumber from '../BetNumber';
import Chart from '../history/Chart';
import GameHistory from '../history/GameHistory';
import MyHistory from '../history/MyHistory';
import ShowImages from './ShowImages';
import htp from '../../../assets/images/htp.png';
import backbanner from '../../../assets/images/winbackbanner.png';
import Different from './Different';
import Howtoplay from './Howtoplay';
import Same2 from './Same2';
import Same3 from './Same3';
import { apiConnectorPost } from '../../../services/apiconnector';
import { endpoint } from '../../../services/urls';

function Wingo5Min() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let preValue = 0;
  const socket = useSocket();
  const client = useQueryClient();
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const [one_min_time, setOne_min_time] = useState('0_0');
  const audioRefMusic = React.useRef(null);
  const audioRefMusiclast = React.useRef(null);
  const next_step = useSelector((state) => state.aviator.next_step);

  const show_this_three_min_time_sec = React.useMemo(
    () => String(one_min_time?.split('_')?.[1]).padStart(2, '0'),
    [one_min_time]
  );
  const show_this_three_min_time_min = React.useMemo(
    () => String(one_min_time?.split('_')?.[0]).padStart(2, '0'),
    [one_min_time]
  );

  const initialValue = {
    openTimerDialog: false,
  };
  const fk = useFormik({
    initialValues: initialValue,
    onSubmit: () => { },
  });

  React.useEffect(() => {
    const handleFiveMin = (onemin) => {
      const t = Number(String(onemin)?.split('_')?.[1]);
      const min = Number(String(onemin)?.split('_')?.[0]);
      const time_to_be_intro = t > 0 ? 60 - t : t;
      let fivemin = `${4 - (Number(t === 0 ? preValue : min) % 5)
        }_${time_to_be_intro}`;
      preValue = min;
      setOne_min_time(fivemin);
      fk.setFieldValue('show_this_one_min_time', fivemin);
      if (
        Number(fivemin?.split('_')?.[1]) <= 10 && // this is for sec
        fivemin?.split('_')?.[0] === '0' // this is for minut
      ) {
        fk.setFieldValue('openTimerDialog', true);
        Number(Number(fivemin?.split('_')?.[1])) <= 5 &&
          Number(Number(fivemin?.split('_')?.[1])) > 0 &&
          handlePlaySound();
        Number(Number(fivemin?.split('_')?.[1])) === 0 && handlePlaySoundLast();
      } else {
        fk.setFieldValue('openTimerDialog', false);
      }
      if (
        fivemin?.split('_')?.[1] === '0' &&
        fivemin?.split('_')?.[0] === '0'
      ) {
        client.refetchQueries('my_game_history_3');
        client.refetchQueries('wallet_amount');
        client.refetchQueries('my_all_history_3');
        setTimeout(() => {
          dispatch(dummycounterFun());
        }, 2000);
      }
    };

    socket.on('onemin', handleFiveMin);

    return () => {
      socket.off('onemin', handleFiveMin);
    };
  }, []);

  const { data: my_history } = useQuery(
    ['my_all_history_3'],
    async () => {
      const reqbody = {
        game_id: 3,
      };
      return apiConnectorPost(endpoint.k3_my_history, reqbody);
    },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  const { data: game_history } = useQuery(
    ['my_game_history_3'],
    async () => {
      const reqbody = {
        game_id: 3,
      };
      return apiConnectorPost(endpoint.k3_game_history, reqbody);
    },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  React.useEffect(() => {
    dispatch(
      updateNextCounter(
        game_history?.data?.data
          ? Number(game_history?.data?.data?.[0]?.gamesno) + 1
          : 1
      )
    );
    dispatch(gameHistory_trx_one_minFn(game_history?.data?.data));
  }, [game_history?.data?.data]);

  React.useEffect(() => {
    dispatch(myHistory_trx_one_minFn(my_history?.data?.data));
  }, [my_history?.data?.data]);

  const handlePlaySoundLast = async () => {
    try {
      if (audioRefMusiclast?.current?.pause) {
        await audioRefMusiclast?.current?.play();
      } else {
        await audioRefMusiclast?.current?.pause();
      }
    } catch (error) {
      // Handle any errors during play
      console.error('Error during play:', error);
    }
  };
  const handlePlaySound = async () => {
    try {
      if (audioRefMusic?.current?.pause) {
        await audioRefMusic?.current?.play();
      } else {
        await audioRefMusic?.current?.pause();
      }
    } catch (error) {
      // Handle any errors during play
      console.error('Error during play:', error);
    }
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [bettype, setbettype] = useState(1);

  const handleChangebet = (newValue) => {
    setbettype(newValue);
  };
  const volume_handlerwingo = useSelector(
    (state) => state.aviator.volume_handlerwingo
  );
  return (
    <Box>
      {React.useMemo(() => {
        return (
          <>
            <audio ref={volume_handlerwingo ? audioRefMusic : null} hidden>
              <source src={`${countdownfirst}`} type="audio/mp3" />
            </audio>
            <audio ref={volume_handlerwingo ? audioRefMusiclast : null} hidden>
              <source src={`${countdownlast}`} type="audio/mp3" />
            </audio>
          </>
        );
      }, [audioRefMusic, audioRefMusiclast, volume_handlerwingo])}
      <Box sx={{ px: 1, mt: 3 }}>
        <Box
          sx={{
            backgroundImage: `url(${backbanner})`,
            backgroundSize: '100% 100%',
            padding: 1,
          }} >

          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                width: '100%',
              }}
              className="win-banner"
            >
              {React.useMemo(() => {
                return (
                  <>
                    <div className='!flex !justify-between px-2'>

                      <Box>
                        <Button
                          variant="text"
                          color="primary"
                          className="htpbutton"
                          onClick={handleClickOpen}
                        >
                          <Box component="img" src={htp} width={20} sx={{ mr: 1 }}></Box>{' '}
                          How To Play
                        </Button>
                        <Typography
                          variant="body1"
                          color="initial"
                          className="idnumber"
                        >
                          {next_step}{' '}
                        </Typography>
                      </Box>
                      <Box>

                      </Box>
                    </div>

                  </>
                );
              }, [next_step])}
            </Box>
            <Box>
              <Typography
                variant="body1"
                color="initial"
                className="timername"
              >
                Time remaining{' '}
              </Typography>
              {React.useMemo(() => {
                return (
                  <Stack direction="row" mt={1.5}>
                    <Box
                      className="timer"
                      sx={{

                        backgroundSize: '100%',
                        backgroundPosition: 'center',
                      }}
                    >
                      {show_this_three_min_time_min?.substring(0, 1)}
                    </Box>
                    <Box className="timer1 ">
                      {' '}
                      {show_this_three_min_time_min?.substring(1, 2)}
                    </Box>
                    <Box className={'timer1 '}>
                      :
                    </Box>
                    <Box className="timer1 ">
                      {show_this_three_min_time_sec?.substring(0, 1)}
                    </Box>
                    <Box
                      className="timer2 "
                      sx={{

                        backgroundSize: '100%',
                        backgroundPosition: 'center',
                      }}
                    >
                      {show_this_three_min_time_sec?.substring(1, 2)}
                    </Box>
                  </Stack>
                );
              }, [show_this_three_min_time_sec])}
            </Box>
          </Box>
          {React.useMemo(() => {
            return <ShowImages />;
          }, [])}
        </Box>
       
   <div>
          <Box className="!flex !justify-center gap-2 !mx-2 !-mb-2 !mt-5">
            <Button
              className={bettype === 1 ? ' k3active k3 !p-4' : ' !bg-[#001c54] !p-4 '}
              onClick={() => handleChangebet(1)}
            >
              Total{' '}
            </Button>

            <Button
              className={bettype === 2 ? ' k3active k3' : ' !bg-[#001c54]'}
              onClick={() => handleChangebet(2)}
            >
              2same
            </Button>

            <Button
              className={bettype === 3 ? ' k3active k3' : ' !bg-[#001c54]'}
              onClick={() => handleChangebet(3)}
            >
              3same 
            </Button>

            <Button
              className={bettype === 4 ? ' k3active k3' : ' !bg-[#001c54]'}
              onClick={() => handleChangebet(4)}
            >
              Differents
            </Button>
          </Box>
        </div>
        <div className="relative">
          {bettype === 1 && <BetNumber gid={'3'} />}
          {bettype === 2 && <Same2 gid={"3"} />}
          {bettype === 3 && <Same3 gid={"3"} />}
          {bettype === 4 && <Different gid={"3"} />}

          {fk.values.openTimerDialog && (
            <div className="ti !w-full !z-50 top-0 !absolute rounded p-5 flex justify-center items-center">
              <div
                className="flex gap-2 justify-cente !bg-opacity-5"
                sx={{ width: '100%' }}
              >
                <div
                  style={{
                    fontSize: 200,
                    borderRadius: 20,
                    // background: "rgb(73, 57, 193)",
                    fontWeight: 700,
                    width: 150,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // color: "white",
                  }}
                  className="!bg-[#00ECBE]  !text-white"
                >
                  {show_this_three_min_time_sec?.substring(0, 1)}
                </div>
                <div
                  style={{
                    fontSize: 200,
                    borderRadius: 20,
                    // background: "rgb(73, 57, 193)",
                    fontWeight: 700,
                    width: 150,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // color: "white",
                  }}
                  className="!bg-[#00ECBE]  !text-white"
                >
                  {show_this_three_min_time_sec?.substring(1, 2)}
                </div>
              </div>
            </div>
          )}
        </div>
        <Stack direction="row" justifyContent="space-between" mt={2}>
          <Button
            className={
              value === 1 ? ' gametableactive gametable' : ' gametable'
            }
            onClick={() => handleChange(1)}
          >
            Game history
          </Button>
          <Button
            className={
              value === 2 ? ' gametableactive gametable' : ' gametable'
            }
            onClick={() => handleChange(2)}
          >
            Chart
          </Button>
          <Button
            className={
              value === 3 ? ' gametableactive gametable' : ' gametable'
            }
            onClick={() => handleChange(3)}
          >
            My history
          </Button>
        </Stack>
        {value === 1 && <GameHistory gid="3" />}
        {value === 2 && <Chart gid="3" />}
        {value === 3 && <MyHistory gid="3" />}
      </Box>
      <Dialog
        sx={{
          maxWidth: '430px !important',
          minWidth: '430px !important',
          margin: 'auto',
          minHeight: '70%',
          maxHeight: '80%',
        }}
        open={open}
      >
        <Howtoplay />

        <DialogActions sx={{ margin: 'auto', width: '100%' }}>
          <Button
            disableElevation
            onClick={handleClose}
            autoFocus
            variant="contained"
            sx={{
              color: 'white',
              borderRadius: '20px',
              width: '60%',
              margin: 'auto',
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Wingo5Min;
