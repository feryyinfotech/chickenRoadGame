import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Stack,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import countdownfirst from "../../../assets/images/countdownfirst.mp3";
import countdownlast from "../../../assets/images/countdownlast.mp3";
import timerbg1 from "../../../assets/images/timerbg.png";
import timerbg2 from "../../../assets/images/timerbg2.png";
import { useSocket } from "../../../shared/socket/SocketContext";
import BetNumber from "../BetNumber";
import Chart from "../history/Chart";
import GameHistory from "../history/GameHistory";
import MyHistory from "../history/MyHistory";
import ShowImages from "./ShowImages";
import Same2 from "./Same2";
import Same3 from "./Same3";
import Different from "./Different";
import Howtoplay from "./Howtoplay";
import {
  k3_HistoryFn,
} from "../../../services/apiCallings";
import {
  dummycounterFun,
  gameHistory_trx_one_minFn,
  myHistory_trx_one_minFn,
  trx_game_image_index_function,
  updateNextCounter,
} from "../../../redux/slices/counterSlice";
import CustomCircularProgress from "../../../shared/loder/CustomCircularProgress";
import { endpoint } from "../../../services/urls";
import axios from "axios";
import toast from "react-hot-toast";
import VantToast from "../../../shared/toast/Toast";

function K3sec30() {
  const [open, setOpen] = useState(false);
  const socket = useSocket();
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const [one_min_time, setOne_min_time] = useState(0);
  const show_this_one_min_time = String(one_min_time).padStart(2, "0");
  const audioRefMusic = React.useRef(null);
  const audioRefMusiclast = React.useRef(null);
  const client = useQueryClient();
  const next_step = useSelector((state) => state.aviator.next_step);
  const [bettype, setbettype] = useState(1);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChangebet = (newValue) => {
    setbettype(newValue);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const initialValue = {
    openTimerDialog: false,
  };
  const fk = useFormik({
    initialValues: initialValue,
    onSubmit: () => { },
  });

  React.useEffect(() => {
    const handleOneMin = (onemin) => {
      const t = Number(String(onemin)?.split('_')?.[1]);
      const one_min = t > 0 ? 60 - t : t;
      const time_to_be_intro = one_min > 30 ? one_min - 30 : one_min
      setOne_min_time(time_to_be_intro);
      fk.setFieldValue("show_this_one_min_time", time_to_be_intro);
      if (time_to_be_intro === 5 || time_to_be_intro === 4 || time_to_be_intro === 3 || time_to_be_intro === 2) {
      }
      if (time_to_be_intro <= 10) {
        fk.setFieldValue("openTimerDialog", true);
        Number(time_to_be_intro) <= 5 && Number(time_to_be_intro) > 0 && handlePlaySound();
        Number(time_to_be_intro) === 0 && handlePlaySoundLast();
      } else {
        fk.setFieldValue("openTimerDialog", false);
      }
      if (time_to_be_intro === 0) {
        client.refetchQueries("k3_myhistory");
        client.refetchQueries("wallet_amount");
        client.refetchQueries("k3_gamehistory");
        setTimeout(() => {
          dispatch(dummycounterFun());
        }, 2000);
      }
    };
    socket.on("onemin", handleOneMin);
    return () => {
      socket.off("onemin", handleOneMin);
    };
  }, []);

  const { isLoading, data: game_history } = useQuery(
    ["k3_gamehistory_1"],
    () => GameHistoryFn("1"),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const GameHistoryFn = async (gid) => {
    try {
      const reqBody = {
        gameid: gid,
        limit: 100,
      };
      const response = await axios.post(
        `${endpoint.k3_game_history}`,
        reqBody
      );
      return response;
    } catch (e) {
      VantToast(e?.message, 'f');
      console.log(e);
    }
  };


  React.useEffect(() => {
    dispatch(
      updateNextCounter(
        game_history?.data?.data
          ? Number(game_history?.data?.data?.[0]?.k3_gamesno) + 1
          : 1
      )
    );
    const tr_digit =
      game_history?.data?.data && game_history?.data?.data?.[0]?.tr_digits;
    let array = [];
    for (let i = 0; i < tr_digit?.length; i++) {
      if (/[a-zA-Z]/.test(tr_digit[i])) {
        array.push(tr_digit[i].toUpperCase());
      } else {
        array.push(tr_digit[i]);
      }
    }
    dispatch(trx_game_image_index_function(array));
    dispatch(gameHistory_trx_one_minFn(game_history?.data?.data));
  }, [game_history?.data?.data]);




  const handlePlaySoundLast = async () => {
    try {
      if (audioRefMusiclast?.current?.pause) {
        await audioRefMusiclast?.current?.play();
      } else {
        await audioRefMusiclast?.current?.pause();
      }
    } catch (error) {
      // Handle any errors during play
      console.error("Error during play:", error);
    }
  };

  const { isLoading: myhistory_loding_all, data: my_history_all } = useQuery(
    ["k3_myhistory_1"],
    () => k3_HistoryFn("1"),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      // retry: false,
      // retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );


  React.useEffect(() => {
    const allEarnings = my_history_all?.data?.data;


    console.log("my_history_all:", allEarnings);


    if (Array.isArray(allEarnings) && allEarnings.length > 0) {
      if (Array.isArray(allEarnings)) {
        dispatch(myHistory_trx_one_minFn([...allEarnings]));
      } else {
        dispatch(myHistory_trx_one_minFn(allEarnings));
      }
    } else if (Array.isArray()) {
      dispatch(myHistory_trx_one_minFn());
    }

    if (allEarnings?.[0]?.status !== "Pending") {
      dispatch(dummycounterFun());
    }
  }, []);

  const handlePlaySound = async () => {
    try {
      if (audioRefMusic?.current?.pause) {
        await audioRefMusic?.current?.play();
      } else {
        await audioRefMusic?.current?.pause();
      }
    } catch (error) {
      // Handle any errors during play
      console.error("Error during play:", error);
    }
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };


  return (
    <Box
    >
      {React.useMemo(() => {
        return (
          <>
            <audio ref={audioRefMusic} hidden>
              <source src={`${countdownfirst}`} type="audio/mp3" />
            </audio>
            <audio ref={audioRefMusiclast} hidden>
              <source src={`${countdownlast}`} type="audio/mp3" />
            </audio>
          </>
        );
      }, [audioRefMusic, audioRefMusiclast])}
      <Box sx={{ px: 1, mt: 3 }}
      >
        <Box
          className="countdownbgtrx !shadow-2xl !bg-white"

        >
          <CustomCircularProgress
            isLoading={myhistory_loding_all}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "60%",
              }}
              className="win-banner"
            >
              {React.useMemo(() => {
                return (
                  <>
                    <Stack direction="row" alignItems="center" >
                      <Typography className="text-gray-500" > Period </Typography>
                      <Typography
                        onClick={handleClickOpen}
                        variant="text"
                        className="!border !cursor-pointer !px-5 !ml-5 !text-sm text-[#00ECBE] !border-[#00ECBE] !rounded-xl"
                      >
                        {" "}
                        How To Play
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      sx={{ mt: 1.5, justifyContent: "space-between" }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "black",
                          fontSize: "25px",
                          fontWeight: "500",
                        }}
                      >
                        {next_step}{" "}
                      </Typography>

                    </Stack>
                  </>
                );
              }, [next_step])}
            </Box>
            <Box className="!text-[#00b977]  ">
              <Typography className="text-gray-500" > Time remaining </Typography>
              {React.useMemo(() => {
                return (
                  <Stack direction="row" mt={1.5}>
                    <Box
                      className="timer !text-[#00b977] !bg-gray-200 "
                      sx={{

                        backgroundSize: "100%",
                        backgroundPosition: "center",
                      }}
                    >
                      0
                    </Box>
                    <Box className="timer1 !text-[#00b977] !bg-gray-200 ">0</Box>
                    <Box className={"timer1 !text-[#00b977] !bg-gray-200"} >:</Box>
                    <Box className="timer1 !text-[#00b977] !bg-gray-200">
                      {show_this_one_min_time?.substring(0, 1)}
                    </Box>
                    <Box
                      className="timer2 !text-[#00b977] !bg-gray-200"
                      sx={{

                        backgroundSize: "100%",
                        backgroundPosition: "center",
                      }}
                    >
                      {show_this_one_min_time?.substring(1, 2)}
                    </Box>
                  </Stack>
                );
              }, [show_this_one_min_time])}
            </Box>
          </Box>
          {React.useMemo(() => {
            return <ShowImages />;
          }, [])}
        </Box>
        <div>

          <Box className="!flex !justify-center !mx-2 !-mb-2 !mt-5" >
            <Button
              className={bettype === 1 ? " k3active k3" : " k3 "}
              onClick={() => handleChangebet(1)}
            >Total </Button>

            <Button
              className={bettype === 2 ? " k3active k3" : " k3"}
              onClick={() => handleChangebet(2)}
            >2same </Button>

            <Button
              className={bettype === 3 ? " k3active k3" : " k3"}
              onClick={() => handleChangebet(3)}
            >  3same </Button>

            <Button
              className={bettype === 4 ? " k3active k3" : " k3"}
              onClick={() => handleChangebet(4)}
            >Differents</Button>
          </Box>

        </div>
        <div className="relative mx-2 ">
          {bettype === 1 && <BetNumber timing={show_this_one_min_time} gid={"1"} />}
          {bettype === 2 && <Same2 timing={show_this_one_min_time} gid={"1"} />}
          {bettype === 3 && <Same3 timing={show_this_one_min_time} gid={"1"} />}
          {bettype === 4 && <Different timing={show_this_one_min_time} gid={"1"} />}
          {fk.values.openTimerDialog && (
            <div className="ti !w-full !z-50 top-0 !absolute rounded p-5 flex justify-center items-center">
              <div
                className="flex gap-2 justify-cente !bg-opacity-5 !py-5 "
                sx={{ width: "100%" }}
              >
                <div
                  style={{
                    fontSize: 200,
                    borderRadius: 20,
                    // background: "rgb(73, 57, 193)",
                    fontWeight: 700,
                    width: 150,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
        <Stack direction="row" justifyContent="space-between" >
          <Button
            className={
              value === 1 ? " gametableactive gametable" : " gametable !bg-gray-200 !rounded"
            }
            onClick={() => handleChange(1)}
          >
            Game history
          </Button>
          <Button
            className={
              value === 2 ? " gametableactive gametable" : " gametable !bg-gray-200 !rounded"
            }
            onClick={() => handleChange(2)}
          >
            Chart
          </Button>
          <Button
            className={
              value === 3 ? " gametableactive gametable" : " gametable !bg-gray-200 !rounded"
            }
            onClick={() => handleChange(3)}
          >
            My history
          </Button>
        </Stack>
        {value === 1 && <GameHistory gid="1" />}
        {value === 2 && <Chart gid="1" />}
        {value === 3 && <MyHistory gid="1" />}
      </Box>
      <Dialog
        sx={{
          maxWidth: "430px !important",
          minWidth: "430px !important",
          margin: "auto",
          minHeight: "70%",
          maxHeight: "80%",
        }}
        open={open}
      >
        <Howtoplay />
        <DialogActions sx={{ margin: "auto", width: "100%" }}>
          <Button
            disableElevation
            onClick={handleClose}
            autoFocus
            variant="contained"
            sx={{
              color: "white",
              borderRadius: "20px",
              width: "60%",
              margin: "auto",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default K3sec30;

const style = {
  pilwal: {
    color: "#686868",
    fontSize: "13px",
    fontWeight: 600,
    fontFamily: "sans-serif !important",
  },
};
