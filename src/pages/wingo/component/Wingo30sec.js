import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import countdownfirst from '../../../assets/images/countdownfirst.mp3';
import countdownlast from '../../../assets/images/countdownlast.mp3';
import htp from '../../../assets/images/htp.png';
import zero from '../../../assets/images/n0-30bd92d1.png';
import one from '../../../assets/images/n1-dfccbff5.png';
import two from '../../../assets/images/n2-c2913607.png';
import three from '../../../assets/images/n3-f92c313f.png';
import four from '../../../assets/images/n4-cb84933b.png';
import five from '../../../assets/images/n5-49d0e9c5.png';
import six from '../../../assets/images/n6-a56e0b9a.png';
import seven from '../../../assets/images/n7-5961a17f.png';
import eight from '../../../assets/images/n8-d4d951a4.png';
import nine from '../../../assets/images/n9-a20f6f42 (1).png';
import timerbg1 from '../../../assets/images/timerbg.png';
import timerbg2 from '../../../assets/images/timerbg2.png';
import backbanner from '../../../assets/images/winbackbanner.png';
import {
  dummycounterFun,
  gameHistory_trx_one_minFn,
  myHistory_trx_one_minFn,
  updateNextCounter,
} from '../../../redux/slices/counterSlice';
import { apiConnectorGet } from '../../../services/apiconnector';
import { endpoint } from '../../../services/urls';
import { changeImages } from '../../../shared/nodeSchedular';
import { useSocket } from '../../../shared/socket/SocketContext';
import BetNumber from '../BetNumber';
import Chart from '../history/Chart';
import GameHistory from '../history/GameHistory';
import MyHistory from '../history/MyHistory';
import Howtoplay from './Howtoplay';

function Wingo30Sec() {
  const socket = useSocket();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [one_min_time, setOne_min_time] = useState(0);
  const show_this_one_min_time = String(one_min_time).padStart(2, '0');
  const audioRefMusic = React.useRef(null);
  const audioRefMusiclast = React.useRef(null);
  const client = useQueryClient();
  const [isImageChange, setIsImageChange] = useState('1_2_3_4_5');
  const img1 = Number(isImageChange?.split('_')[0]);
  const img2 = Number(isImageChange?.split('_')[1]);
  const img3 = Number(isImageChange?.split('_')[2]);
  const img4 = Number(isImageChange?.split('_')[3]);
  const img5 = Number(isImageChange?.split('_')[4]);
  const image_array = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
  ];
  const next_step = useSelector((state) => state.aviator.next_step);
  const volume_handlerwingo = useSelector(
    (state) => state.aviator.volume_handlerwingo
  );
  React.useEffect(() => {
    setIsImageChange(changeImages());
  }, []);

  const initialValue = {
    openTimerDialog: false,
  };
  const fk = useFormik({
    initialValues: initialValue,
    onSubmit: () => {},
  });

  React.useEffect(() => {
    const handleOneMin = (onemin) => {
      const t = Number(String(onemin)?.split('_')?.[1]);
      const one_min = t > 0 ? 60 - t : t;
      const time_to_be_intro = one_min > 30 ? one_min - 30 : one_min;
      setOne_min_time(time_to_be_intro);
      fk.setFieldValue('show_this_one_min_time', time_to_be_intro);
      if (
        time_to_be_intro === 5 ||
        time_to_be_intro === 4 ||
        time_to_be_intro === 3 ||
        time_to_be_intro === 2
      ) {
      }
      if (time_to_be_intro <= 5) {
        fk.setFieldValue('openTimerDialog', true);
        Number(time_to_be_intro) <= 5 &&
          Number(time_to_be_intro) > 0 &&
          handlePlaySound();
        Number(time_to_be_intro) === 0 && handlePlaySoundLast();
      } else {
        fk.setFieldValue('openTimerDialog', false);
      }
      if (time_to_be_intro === 29) {
        client.refetchQueries('myAllhistory_4');
        client.refetchQueries('wallet_amount');
        client.refetchQueries('gamehistory_4');
        setTimeout(() => {
          dispatch(dummycounterFun());
        }, 2000);
      }
    };
    socket.on('onemin', handleOneMin);
    return () => {
      socket.off('onemin', handleOneMin);
    };
  }, []);

  const { data: my_history } = useQuery(
    ['myAllhistory_4'],
    async () =>
      apiConnectorGet(`${endpoint.my_history}?limit=0&offset=0&gameid=4`),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  const { data: game_history } = useQuery(
    ['gamehistory_4'],
    async () =>
      await apiConnectorGet(
        `${endpoint.game_history}?limit=500&offset=0&gameid=4`
      ),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
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
    if (volume_handlerwingo) {
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
    }
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
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
                className="psize"
                mt={1}
              >
                Win Go 1Min
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: '100%', padding: '8px 0px' }}
              >
                <Box
                  component="img"
                  src={image_array[Number(img1)]}
                  width={25}
                ></Box>
                <Box
                  component="img"
                  src={image_array[Number(img2)]}
                  width={25}
                ></Box>
                <Box
                  component="img"
                  src={image_array[Number(img3)]}
                  width={25}
                ></Box>
                <Box
                  component="img"
                  src={image_array[Number(img4)]}
                  width={25}
                ></Box>
                <Box
                  component="img"
                  src={image_array[Number(img5)]}
                  width={25}
                ></Box>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'end',
                }}
              >
                <Typography
                  variant="body1"
                  color="initial"
                  className="timername"
                >
                  Time remaining{' '}
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <Box
                    className="timer "
                    sx={{
                      backgroundSize: '100%',
                      backgroundPosition: 'center',
                    }}
                  >
                    0
                  </Box>
                  <Box className="timer1 ">0</Box>
                  <Box className="timer1 ">:</Box>
                  <Box className="timer1 ">
                    {show_this_one_min_time?.substring(0, 1)}
                  </Box>
                  <Box
                    className="timer2 "
                    sx={{
                      backgroundSize: '100%',
                      backgroundPosition: 'center',
                    }}
                  >
                    {show_this_one_min_time?.substring(1, 2)}
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  color="initial"
                  className="idnumber"
                >
                  {next_step}{' '}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <div className="relative">
          <BetNumber timing={show_this_one_min_time} gid={'4'} />
          {/* fk.values.openTimerDialog */}
          {fk.values.openTimerDialog && (
            <div className="ti !w-full !z-50 top-0 !absolute rounded p-5 flex justify-center items-center">
              <div
                className="flex gap-2 justify-cente !bg-opacity-5 !py-5"
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
                  className="!bg-[#00ECBE]  !text-white !h-56 !pb-5"
                >
                  {show_this_one_min_time?.substring(0, 1)}
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
                  className="!bg-[#00ECBE]  !text-white !h-56 !pb-5"
                >
                  {show_this_one_min_time?.substring(1, 2)}
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
        {value === 1 && <GameHistory gid="4" />}
        {value === 2 && <Chart gid="4" />}
        {value === 3 && <MyHistory gid="4" />}
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

export default Wingo30Sec;
