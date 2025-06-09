import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { ArrowLeft } from '@react-vant/icons';
import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import depositeimg from "../../assets/images/deposite.png";
import dhistory from "../../assets/images/dhistory.png";
import whistory from "../../assets/images/whistory.png";
import withdraw from "../../assets/images/withdraw.png";
import Layout from "../../component/layout/Layout";
import SvgIcons from "../../component/SvgIcons";
import {
  ProfileDataFunction,
  checkTokenValidity,
} from "../../services/apiCallings";
import { apiConnectorGet, apiConnectorPost } from "../../services/apiconnector";
import { endpoint } from "../../services/urls";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";
import MyModal from "../../shared/MyModal";
import { Circle, Flex, Space } from 'react-vant';

function Wallet() {
  const or_m_user_type = localStorage.getItem("or_m_user_type");

  const { isLoading, data: wallet_amount } = useQuery(
    ["wallet_amount_amount"],
    () => apiConnectorGet(endpoint.get_balance),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const navigate = useNavigate();
  const wallet_amount_data = wallet_amount?.data?.data || 0;

  const { isLoading: jilliLoding, data: jilli_amount } = useQuery(
    ["jilli_wallet_amount"],
    () => apiConnectorGet(endpoint?.jili_api?.jilli_user_info),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  // console.log("jilli_amount", jilli_amount?.data?.data);

  const { data: user } = useQuery(["profile"], () => ProfileDataFunction(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
  });
  const profile = user?.data?.data || [];

  useEffect(() => {
    if (!checkTokenValidity()) {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/"; // Redirect to login page
    }
  }, []);

  const [options] = React.useState({
    colors: ["#00ECBE", "red", "green"],
    chart: {
      height: 150,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "11px",
          },
          value: {
            fontSize: "16px",
          },
        },
        stroke: {
          colors: ["#00ECBE"],
        },
      },
      radialBar: {
        dataLabels: {
          show: false,
        },
      },
    },
    labels: ["0.40%", "B", "C", "D"],
  });

  async function mainWalletTransfer() {
    try {
      const res = await apiConnectorPost(
        endpoint.jili_api.main_wallet_to_jilli_wallet
      );
      console.log(res.data);
    } catch (err) {
      toast.error(err?.response?.data?.message || err?.message);
    }
  }

  const goBack = () => {
    navigate(-1);
  };

  const items = [
    {
      name: "Lottery",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-Lottery"></use>
        </svg>
      ),
    },
    {
      name: "EVO_Video",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-EVO_Video"></use>
        </svg>
      ),
    },
    {
      name: "JILI",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-JILI"></use>
        </svg>
      ),
    },
    {
      name: "ar_Video",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-SPRIBE"></use>
        </svg>
      ),
    },
    {
      name: "PG",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-Lottery"></use>
        </svg>
      ),
    },
    {
      name: "MG",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-EVO_Video"></use>
        </svg>
      ),
    },
    {
      name: "TB_Chess",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-JILI"></use>
        </svg>
      ),
    },
    {
      name: "CQ9",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-SPRIBE"></use>
        </svg>
      ),
    },
    {
      name: "SaBa",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-Lottery"></use>
        </svg>
      ),
    },
    {
      name: "JDB",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-EVO_Video"></use>
        </svg>
      ),
    },
    {
      name: "AG_Video",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-JILI"></use>
        </svg>
      ),
    },
    {
      name: "9G",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-SPRIBE"></use>
        </svg>
      ),
    },
    {
      name: "Card365",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-SPRIBE"></use>
        </svg>
      ),
    },
    {
      name: "V8Card",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-JILI"></use>
        </svg>
      ),
    },
    {
      name: "WM_Video",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-Lottery"></use>
        </svg>
      ),
    },
    {
      name: "PP",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-EVO_Video"></use>
        </svg>
      ),
    },
    {
      name: "IM",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-JILI"></use>
        </svg>
      ),
    },
    {
      name: "Wickets9",
      svg: (
        <svg className="svg-icon" width="130px" height="130px">
          <use xlinkHref="#icon-JILI"></use>
        </svg>
      ),
    },
  ];


  return (
    <Layout header={false}>
      <SvgIcons />
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()} sx={{ width: '20%' }}>
            <ArrowLeft sx={{ fontSize: '22px !important', }} />
          </Box>
          <Typography sx={{ width: '60%', fontSize: '19px !important', }} className="fcc roboto fw400" variant="body1" color="initial"> Wallet</Typography>
          <Typography sx={{ width: '20%' }} variant="body1" color="initial"> </Typography>
        </Box>
        <Paper
          elevation={3}
          className=""
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: "#011646",
            color: "white",
            textAlign: "center",
            padding: '8px 16px 20px 16px',
            borderRadius: 2,
            maxWidth: 500,
            mx: "auto",
          }}
        >
          <svg className="svg-icon" width="50" height="50" fill="#00ECBE">
            <use xlinkHref="#icon-wallet1"></use>
          </svg>
          <Typography variant="h4" className="roboto" sx={{ fontWeight: "500", color: 'white', fontSize: '23px', mt: 1, }}>
            ₹{" "}
            {(
              Number(
                Number(wallet_amount_data?.winning || 0) +
                Number(wallet_amount_data?.wallet || 0)
              ) || 0
            )?.toFixed(2)}{" "}
          </Typography>

          <Typography sx={{ fontSize: "13px", mb: 0, color: 'white', }} className="none">Total balance</Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <Typography variant="h6" sx={{ color: 'white', }}>0</Typography>
              <Typography className="fs13 fw400" sx={{ fontSize: '13px !important', color: 'white', }}>Total amount</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={{ color: 'white', }}>0</Typography>
              <Typography className="fs13 fw400" sx={{ fontSize: '13px !important', color: 'white', }}>Total deposit amount</Typography>
            </Grid>
          </Grid>
        </Paper>
        <MyModal />
        <CustomCircularProgress isLoading={isLoading || jilliLoding} />
        <Box
          sx={{
            width: "92%",
            margin: "20px auto 16px auto",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              background: "#011341",
              padding: 1,
              borderRadius: "10px",
              mt: -1,
            }}
          >
            <Stack
              direction="row"
              sx={{
                mt: 5,
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "50%", position: "relative" }} className="fccc">
                {/* <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    position: "absolute",
                    left: "39%",
                    top: "32%",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "white",
                    textAlign: "center !important",
                    ml: "5%",
                  }}
                >
                  {(Number(wallet_amount_data?.wallet || 0) / 100)?.toFixed(1)}{" "}
                  %
                </Typography> */}
                <Circle color=" #00ECBE " layerColor=" #001C54 " strokeWidth={100} rate={70} size={100} text="70%" />
                {/* <ReactApexChart
                  options={options}
                  series={[100]} // Make sure it's an array
                  type="radialBar"
                  height={150}
                /> */}
                <Box
                  sx={{
                    mt: 1,
                    textAlign: "center",
                    "&>p": {
                      color: "white",
                      fontSize: "13px",
                      fontWeight: 500,
                    },
                  }}
                >
                  <Typography variant="body1" color="initial" className="none fs14">
                    ₹ {Number(wallet_amount_data?.wallet || 0)?.toFixed(2)}{" "}
                  </Typography>
                  <Typography variant="body1" color="initial" className="none fs13">
                    Main wallet
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ width: "50%", position: "relative" }} className="fccc">
                {/* <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    position: "absolute",
                    left: "39%",
                    top: "32%",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "white",
                    textAlign: "center !important",
                    ml: "5%",
                  }}
                >
                  {(
                    Number(jilli_amount?.data?.data?.[0]?.njl_winning || 0) /
                    100
                  )?.toFixed(1)}{" "}
                  %
                </Typography> */}
                <Circle color=" #00ECBE " layerColor=" #001C54 " strokeWidth={100} rate={50} size={100} text="50%" />

                {/* <ReactApexChart
                  options={options}
                  series={[100]} // Make sure it's an array
                  type="radialBar"
                  height={150}
                /> */}
                <Box
                  sx={{
                    textAlign: "center",
                    mt: 1,
                    "&>p": {
                      color: "white",
                      fontSize: "13px",
                      fontWeight: 500,
                    },
                  }}
                >
                  <Typography variant="body1" color="initial" className="none fs14">
                    ₹{" "}
                    {Number(
                      jilli_amount?.data?.data?.[0]?.njl_winning || 0
                    )?.toFixed(2)}{" "}
                  </Typography>
                  <Typography variant="body1" color="initial" className="none fs13">
                    3rd Party Wallet
                  </Typography>
                </Box>
              </Box>
            </Stack>
            <Button sx={style.mainwallettrbutton} className="roboto" onClick={mainWalletTransfer}>
              Main wallet transfer
            </Button>
            {/* <Button sx={style.mainwallettrbutton}>Third wallet transfer</Button> */}

            <Stack direction="row" sx={style.stack}>
              <Box
                sx={style.box}
                onClick={() => {
                  if (or_m_user_type === "Dummy User") {
                    toast("Dummy User");
                  } else {
                    navigate("/deposit");
                  }
                }}
              >
                <Box sx={style.innerBox}>
                  <Box
                    component="img"
                    src={depositeimg}
                    sx={style.innerBoximg}
                  ></Box>
                </Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={style.typography}
                >
                  Deposit
                </Typography>
              </Box>

              <Box
                sx={style.box}
                onClick={() => {
                  if (or_m_user_type === "Dummy User") {
                    toast("Dummy User");
                  } else {
                    navigate("/withdraw");
                  }
                }}
              >
                <Box sx={style.innerBox}>
                  <Box
                    component="img"
                    src={withdraw}
                    sx={style.innerBoximg}
                  ></Box>
                </Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={style.typography}
                >
                  Withdraw
                </Typography>
              </Box>
              <Box
                sx={style.box}
                onClick={() => {
                  if (or_m_user_type === "Dummy User") {
                    toast("Dummy User");
                  } else {
                    navigate("/depositehistory");
                  }
                }}
              >
                <Box sx={style.innerBox}>
                  <Box
                    component="img"
                    src={dhistory}
                    sx={style.innerBoximg}
                  ></Box>
                </Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={style.typography}
                >
                  Deposit history
                </Typography>
              </Box>
              <Box
                sx={style.box}
                onClick={() => {
                  if (or_m_user_type === "Dummy User") {
                    toast("Dummy User");
                  } else {
                    navigate("/withdrawlhistory");
                  }
                }}
              >
                <Box sx={style.innerBox}>
                  <Box
                    component="img"
                    src={whistory}
                    sx={style.innerBoximg}
                  ></Box>
                </Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={style.typography}
                >
                  Withdrawal history
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          {items.map((item, index) => (
            <Grid item xs={4} key={index}>
              <Paper
                sx={{
                  backgroundColor: "#011646",
                  height: 100,
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                {/* Background SVG */}
                {typeof item.svg === "string" ? (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(/images/${item.svg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "60%",
                      opacity: 0.08,
                      zIndex: 0,
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      opacity: 0.08,
                      zIndex: 0,
                    }}
                  >
                    {item.svg}
                  </Box>
                )}

                {/* Foreground Text */}
                <Typography sx={{ fontSize: 12, zIndex: 1 }}>0.00</Typography>
                <Typography sx={{ fontSize: 12, zIndex: 1 }}>{item.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}

export default Wallet;

const style = {
  container: { background: '#05012B', width: '100%', height: '100vh', overflow: 'auto', },
  header: {
    padding: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: "white",
    },
  },
  stack: {
    width: "100%",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: 3,
  },
  box: {
    width: "23%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  innerBox: {

    borderRadius: "15px",
  },
  innerBoximg: {
    width: 50,
  },
  typography: {
    fontFamily: '"PT Serif", serif !important',
    fontSize: "12px",
    color: "white",
    marginTop: 1,
    textAlign: "center",
  },
  mainButton: {
    width: "100%",
    height: "0.93333rem",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "700",
    letterSpacing: "0.01333rem",
    border: "none",
    borderRadius: "20px",
    background: "#eb8a1f",
    boxShadow: "0 3px #e74141",
    padding: "20px 10px",
    marginTop: 2,
    "&:hover": {
      color: "white",
      background: "#eb8a1f",
    },
  },
  mainwallettrbutton: {
    width: "100%",
    height: "0.93333rem",
    color: "black",
    fontSize: "17px",
    fontWeight: "700",
    letterSpacing: "0.01333rem",
    border: "none",
    borderRadius: "20px",
    background: "linear-gradient(90deg, #7afec3, #02afb6) !important",
    padding: "20px 10px",
    mt: 2,
    "&:hover": {
      color: "white",
      background: "#eb8a1f",
    },
  },
  fx: {
    width: "31%",
    height: "100px",
    background: "linear-gradient(90deg, #7afec3, #02afb6)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    mb: 1.5,
  },
  fxone: {
    width: "31%",
    height: "100px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    mb: 1.5,
  },
};
