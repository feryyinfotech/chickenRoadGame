import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { ArrowLeft } from '@react-vant/icons';
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import atm from "../../../assets/images/atm.png";
import wallet from "../../../assets/images/atmw.png";
import cip from "../../../assets/images/cip.png";
import bankcard from "../../../assets/images/bankcard.png";
import UPT from "../../../assets/images/payNameIcon_20250317165432r3g1.png";
import refresh from "../../../assets/images/refwhite.png";
import withdrawol_voice from "../../../assets/images/withdrawol_voice.mp3";
import atmchip from "../../../assets/payNameIcon1.png";
import Layout from "../../../component/layout/Layout";
import SvgIcons from "../../../component/SvgIcons";
import { apiConnectorGet, apiConnectorPost } from "../../../services/apiconnector";
import { endpoint } from "../../../services/urls";
import CustomCircularProgress from "../../../shared/loder/CustomCircularProgress";
import theme from "../../../utils/theme";
import add from "../../../assets/images/add-1ad7f3f5.png";
import { Arrow } from '@react-vant/icons';

function Withdraval() {
  const [selected, setSelected] = useState("USDT");
  const client = useQueryClient();
  const audioRefMusic = React.useRef(null);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [loding, setloding] = useState(false);

  const { data: wallet_amount } = useQuery(
    ["wallet_amount"],
    () => apiConnectorGet(endpoint?.get_balance),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const wallet_amount_data = wallet_amount?.data?.data || 0;


  const { data: record } = useQuery(["qr_address"], () => apiConnectorGet(endpoint.view_usdt_address_recoprd), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  const resrecord = record?.data || 0;


  const whiteValue = {
    amount: "",
  };

  const fk = useFormik({
    initialValues: whiteValue,
    enableReinitialize: true,
    onSubmit: () => {
      const reqBody = {
        m_w_amount: fk.values?.amount,
      }
      withdraolFunction(reqBody);
    },
  });

  async function withdraolFunction(reqBody) {
    setloding(true);
    try {
      const res = await apiConnectorPost(endpoint?.wallet_withdrawl_request, reqBody);
      toast(res?.data?.msg);
      if (res?.data?.msg === "Request Accepted successfully, Your account will be credited within 24 Hrs.") {
        client.refetchQueries("wallet_amount");
        client.refetchQueries("withdrawl_history");
        client.refetchQueries("profile");
        fk.handleReset()
      }

      console.log(res);
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  }


  React.useEffect(() => {
    handlePlaySound();
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

  const audio = React.useMemo(() => {
    return (
      <audio ref={audioRefMusic} hidden>
        <source src={`${withdrawol_voice}`} type="audio/mp3" />
      </audio>
    );
  }, []);

  const items = [
    {
      text: (
        <>
          Need to bet <span style={{ color: "#ff5e5e" }}>₹165.00</span> to be able to withdraw
        </>
      ),
    },
    {
      text: (
        <>
          Withdraw time <span style={{ color: "#ff5e5e" }}>00:00-23:59</span>
        </>
      ),
    },
    {
      text: "Inday Remaining Withdrawal Times3",
    },
    {
      text: (
        <>
          Withdrawal amount range{" "}
          <span style={{ color: "#ff5e5e" }}>₹1,000.00~₹1,000,000.00</span>
        </>
      ),
    },
    {
      text:
        "After withdraw, you need to confirm the blockchain main network 3 times before it arrives at your account.",
    },
    {
      text:
        "Please confirm that the operating environment is safe to avoid information being tampered with or leaked.",
    },
    {
      text:
        "Please confirm your beneficial account information before withdrawing. If your information is incorrect, our company will not be liable for the amount of loss.",
    },
    {
      text:
        "If your beneficial information is incorrect, please contact customer service.",
    },
  ];

  return (
    <Layout header={false}>
      <Container sx={style.container}>
        <SvgIcons />
        {audio}
        <CustomCircularProgress isLoading={loding} />
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()} sx={{ width: '30%' }}>
            <ArrowLeft style={{ fontSize: '22px !important', color: 'white' }} />
          </Box>
          <Typography sx={{ width: '40%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial"> Withdraw</Typography>
          <NavLink to="/withdrawlhistory" style={{ width: '30%', fontSize: '13px !important', color: 'white !important' }}>   <Typography sx={{ fontSize: '13px !important', color: 'white !important', float: 'right' }} variant="body1" color="white">  Withdrawal history   </Typography></NavLink>
        </Box>
        <Box sx={{ mt: 2, px: 2 }}>
          <Box sx={{ backgroundImage: `url(${atm})`, backgroundSize: "100% 100%", padding: "20px 16px", }}>
            <Stack direction="row">
              <Box component="img" src={wallet} width={20} sx={{ mr: 2 }}></Box>
              <Typography
                variant="body1"
                sx={{ color: "black", fontSize: "14px", fontWeight: "500" }}
              >
                Available balance
              </Typography>
            </Stack>
            <Stack direction="row" alignItems={"center"} mt={1}>
              <Typography
                variant="body1"
                sx={{ color: "black", fontSize: "24px", fontWeight: "500" }}
              >
                ₹
                {(
                  Number(
                    Number(wallet_amount_data?.winning || 0) +
                    Number(wallet_amount_data?.wallet || 0)
                  ) || 0
                )?.toFixed(2)}{" "}
              </Typography>
              <Box
                component="img"
                src={refresh}
                width={20}
                height={16}
                sx={{ ml: 2 }}
              ></Box>
            </Stack>
            <Stack direction="row" alignItems={"center"} mt={3}>
              <Box component="img" src={cip} width={40} height={25} sx={{ opacity: 0 }}></Box>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ mt: 2, px: 2 }}>
          <Stack direction="row">
            {/* USDT Option */}
            <Stack
              onClick={() => setSelected("USDT")}
              sx={{
                background: selected === "USDT" ? "linear-gradient(90deg, #7afec3, #02afb6)" : "#011341",
                color: selected === "USDT" ? "black" : "#92a8e3",
                padding: 2,
                borderRadius: 2,
                mr: 2,
                width: "120px",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              <Box
                component="img"
                src={atmchip}
                width={40}
                sx={{ margin: "0px auto" }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: selected === "USDT" ? "black" : "#92a8e3",
                  fontSize: "13px",
                  fontWeight: "500",
                  textAlign: "center",
                  mt: 1,
                }}
              >
                USDT
              </Typography>
            </Stack>
            <Stack
              onClick={() => setSelected("BANKCARD")}
              sx={{
                background: selected === "BANKCARD" ? "linear-gradient(90deg, #7afec3, #02afb6)" : "#011341",
                color: selected === "BANKCARD" ? "black" : "#92a8e3",
                padding: 2,
                borderRadius: 2,
                mr: 2,
                width: "120px",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              <Box
                component="img"
                src={bankcard}
                width={40}
                sx={{ margin: "0px auto" }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: selected === "BANKCARD" ? "black" : "#92a8e3",
                  fontSize: "13px",
                  fontWeight: "500",
                  textAlign: "center",
                  mt: 1,
                }}
              >
                BANK CARD
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {selected === 'USDT' &&
          <>
            <Box sx={{ width: "92%", margin: 'auto', background: "#011341", my: 2, py: 2, borderRadius: '10px', }} component={NavLink} to="/usdt-address" className='fccc'>
              <Box component="img" src={add} width={50} height={50}></Box>
              <Typography variant="body1" color="#6f80a4" sx={{ fontSize: "13px", fontWeight: "500", mt: 1 }}>
                Add USDT Address
              </Typography>
            </Box>
            <Box
              sx={{
                width: "92%",
                margin: "auto",

                mb: 4,
                background: "#011341",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Typography mb={2} mt={1} color={'#fff'} fontWeight={500} className="none fcs"> <Box component="img" src={atmchip} width={25} height={25} mr={1}></Box> Select amount of USDT</Typography>
              <Paper
                component="form"
                sx={{
                  p: "12px 4px",
                  display: "flex",
                  alignItems: "center",
                  background: "#05012B",
                  borderRadius: "5px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <IconButton sx={{ p: "0px 10px", color: '#1DA6A4' }} aria-label="menu">
                  <Box component="img" src={atmchip} width={25} height={25} mr={1}></Box>
                </IconButton>
                <InputBase
                  id="amount"
                  name="amount"
                  onChange={fk.handleChange}
                  value={fk.values?.amount}
                  sx={{ px: 1, flex: 1, color: 'white' }}
                  placeholder="Please enter the amount"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </Paper>
              <Paper
                component="form"
                sx={{
                  p: "6px 4px",
                  display: "flex",
                  alignItems: "center",
                  background: "#05012B",
                  borderRadius: "5px",
                  border: "none",
                  boxShadow: "none",
                  mt: 2,
                }}
              >
                <IconButton sx={{ p: "0px 19px", color: '#1DA6A4' }} aria-label="menu">
                  ₹
                </IconButton>
                <InputBase
                  id="amount"
                  name="amount"
                  value={fk.values?.amount * Number(resrecord?.markertPrice?.[0]?.market_rate || 0)}
                  sx={{ px: 1, flex: 1, color: 'white' }}
                  placeholder="Please enter the amount"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </Paper>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={2}
              >
                <Stack direction="row">
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    Withdrawable balance{" "}
                  </Typography>
                  <Typography variant="body1" color="white" sx={{ fontSize: "12px", color: '#ffa500', ml: 1, }}>
                    ₹
                    {(
                      Number(
                        Number(wallet_amount_data?.winning || 0) +
                        Number(wallet_amount_data?.wallet || 0)
                      ) || 0
                    )?.toFixed(2)}
                  </Typography>
                </Stack>

                <Button
                  variant="Outlined"
                  color="primary"
                  sx={{
                    border: `1px solid ${theme.palette.primary.main}`, padding: 0, fontSize: "11px", color: theme.palette.primary.main,
                    borderRadius: "8px",
                  }}
                >
                  All
                </Button>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={1}
              >
                <Stack direction="row">
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    Withdrawal amount received{" "}
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: theme.palette.primary.main,
                  }}
                >
                  ₹ 0.00
                </Typography>
              </Stack>

              <Button className="none"
                sx={{ ...style.wdbtn, background: "linear-gradient(90deg, #7afec3, #02afb6)", }}
                onClick={fk.handleSubmit}
              >
                Withdrawal
              </Button>
              <Box
                sx={{
                  background: "#011341",
                  borderRadius: "12px",
                  border: '1px solid #022c68',
                  p: 2,
                  color: "#ffffff",
                  maxWidth: 500,
                  my: 2,
                }}
              >
                <Stack spacing={1.8}>
                  {items.map((item, index) => (
                    <Stack direction="row" spacing={1.5} key={index} >
                      <Box sx={{ color: "#00ffa2", fontSize: 12, mt: "4px" }}>
                        <Box
                          sx={{
                            width: "5px",
                            height: "5px",
                            background: theme.palette.primary.main,
                            transform: "rotate(45deg)",
                            mr: 1,
                            mt: '10px !important',
                          }}
                        ></Box>
                      </Box>
                      <Typography
                        variant="body2" className="none "
                        sx={{ fontSize: "14px", lineHeight: "1.6", color: "#d8e4ff", lineHeight: "17px" }}
                      >
                        {item.text}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
              {/* <Box mt={3}>
                <Stack direction="row" alignItems="center" mt={1}>
                  <Box
                    sx={{
                      width: "5px",
                      height: "5px",
                      background: theme.palette.primary.main,
                      transform: "rotate(45deg)",
                      mr: 1,
                    }}
                  ></Box>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    Need to bet{" "}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{
                      fontSize: "12px",
                      color: theme.palette.primary.main,
                      mx: 0.5,
                    }}
                  >
                    {" "}
                    ₹ {total_bet?.total_amt || 0}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    {" "}
                    to be able to withdraw{" "}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" mt={1}>
                  <Box
                    sx={{
                      width: "5px",
                      height: "5px",
                      background: theme.palette.primary.main,
                      transform: "rotate(45deg)",
                      mr: 1,
                    }}
                  ></Box>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    Withdraw time{" "}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{
                      fontSize: "12px",
                      color: theme.palette.primary.main,
                      mx: 0.5,
                    }}
                  >
                    00:00-23:50{" "}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" mt={1}>
                  <Box
                    sx={{
                      width: "5px",
                      height: "5px",
                      background: theme.palette.primary.main,
                      transform: "rotate(45deg)",
                      mr: 1,
                    }}
                  ></Box>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    Please confirm your beneficial account information before
                    withdrawing. If your information is incorrect, our company will
                    not be liable for the amount of loss{" "}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" mt={1}>
                  <Box
                    sx={{
                      width: "5px",
                      height: "5px",
                      background: theme.palette.primary.main,
                      transform: "rotate(45deg)",
                      mr: 1,
                    }}
                  ></Box>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    If your beneficial information is incorrect, please contact
                    customer service
                  </Typography>
                </Stack>
              </Box> */}
            </Box>
          </>
        }
        {selected === 'BANKCARD' &&
          <>
            <Box sx={{ width: "92%", margin: 'auto', background: "#011341", my: 2, py: 2, borderRadius: '10px', }} component={NavLink} to="/addbank" className='fccc'>
              <Box component="img" src={add} width={50} height={50}></Box>
              <Typography variant="body1" color="#6f80a4" sx={{ fontSize: "13px", fontWeight: "500", mt: 1 }}>
                Add a bank account number
              </Typography>
            </Box>
            <NavLink to="/bankcard" style={{ width: '100%' }}>
              <Box sx={{ padding: 1.5, background: "#011341", borderRadius: '5px', mx: 2, mb: 2, }} >
                <Stack direction="row" alignItems={"center"} >
                  <Box sx={{ width: '30%' }} className="fccc">
                    <svg className="svg-icon" width="40" height="40" >
                      <use xlinkHref="#icon-1"></use>
                    </svg>
                    <Typography className="none fs15 fw400" mt={0.5}>kotak mahin..</Typography>
                  </Box>
                  <Box sx={{ width: '70%', borderLeft: '1px solid white', }} className="fcsb">
                    <Typography className="fcsb none fs15 " pl={2} variant="body1" color="#6f80a4" sx={{ width: '100%', fontSize: "13px", fontWeight: "500", }}>
                      274813****601 <Arrow style={{ fontSize: '22px !important', color: 'white' }} />
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </NavLink>
            <Box
              sx={{
                width: "92%",
                margin: "auto",

                mb: 4,
                background: "#011341",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Paper
                component="form"
                sx={{
                  p: "6px 4px",
                  display: "flex",
                  alignItems: "center",
                  background: "#05012B",
                  borderRadius: "5px",
                  border: "none",
                  boxShadow: "none",
                  mt: 2,
                }}
              >
                <IconButton sx={{ p: "0px 19px", color: '#1DA6A4' }} aria-label="menu">
                  ₹
                </IconButton>
                <InputBase
                  id="amount"
                  name="amount"
                  value={fk.values?.amount * Number(resrecord?.markertPrice?.[0]?.market_rate || 0)}
                  sx={{ px: 1, flex: 1, color: 'white' }}
                  placeholder="Please enter the amount"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </Paper>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={2}
              >
                <Stack direction="row">
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    Withdrawable balance{" "}
                  </Typography>
                  <Typography variant="body1" color="white" sx={{ fontSize: "12px", color: '#ffa500', ml: 1, }}>
                    ₹
                    {(
                      Number(
                        Number(wallet_amount_data?.winning || 0) +
                        Number(wallet_amount_data?.wallet || 0)
                      ) || 0
                    )?.toFixed(2)}
                  </Typography>
                </Stack>

                <Button
                  variant="Outlined"
                  color="primary"
                  sx={{
                    border: `1px solid ${theme.palette.primary.main}`, padding: 0, fontSize: "11px", color: theme.palette.primary.main,
                    borderRadius: "8px",
                  }}
                >
                  All
                </Button>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={1}
              >
                <Stack direction="row">
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    Withdrawal amount received{" "}
                  </Typography>
                </Stack>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: theme.palette.primary.main,
                  }}
                >
                  ₹ 0.00
                </Typography>
              </Stack>

              <Button className="none"
                sx={{ ...style.wdbtn, background: "linear-gradient(90deg, #7afec3, #02afb6)", }}
                onClick={fk.handleSubmit}
              >
                Withdrawal
              </Button>
              <Box
                sx={{
                  background: "#011341",
                  borderRadius: "12px",
                  border: '1px solid #022c68',
                  p: 2,
                  color: "#ffffff",
                  maxWidth: 500,
                  my: 2,
                }}
              >
                <Stack spacing={1.8}>
                  {items.map((item, index) => (
                    <Stack direction="row" spacing={1.5} key={index} >
                      <Box sx={{ color: "#00ffa2", fontSize: 12, mt: "4px" }}>
                        <Box
                          sx={{
                            width: "5px",
                            height: "5px",
                            background: theme.palette.primary.main,
                            transform: "rotate(45deg)",
                            mr: 1,
                            mt: '10px !important',
                          }}
                        ></Box>
                      </Box>
                      <Typography
                        variant="body2" className="none "
                        sx={{ fontSize: "14px", lineHeight: "1.6", color: "#d8e4ff", lineHeight: "17px" }}
                      >
                        {item.text}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
              {/* <Box mt={3}>
                <Stack direction="row" alignItems="center" mt={1}>
                  <Box
                    sx={{
                      width: "5px",
                      height: "5px",
                      background: theme.palette.primary.main,
                      transform: "rotate(45deg)",
                      mr: 1,
                    }}
                  ></Box>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    Need to bet{" "}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{
                      fontSize: "12px",
                      color: theme.palette.primary.main,
                      mx: 0.5,
                    }}
                  >
                    {" "}
                    ₹ {total_bet?.total_amt || 0}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    {" "}
                    to be able to withdraw{" "}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" mt={1}>
                  <Box
                    sx={{
                      width: "5px",
                      height: "5px",
                      background: theme.palette.primary.main,
                      transform: "rotate(45deg)",
                      mr: 1,
                    }}
                  ></Box>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    Withdraw time{" "}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{
                      fontSize: "12px",
                      color: theme.palette.primary.main,
                      mx: 0.5,
                    }}
                  >
                    00:00-23:50{" "}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" mt={1}>
                  <Box
                    sx={{
                      width: "5px",
                      height: "5px",
                      background: theme.palette.primary.main,
                      transform: "rotate(45deg)",
                      mr: 1,
                    }}
                  ></Box>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    Please confirm your beneficial account information before
                    withdrawing. If your information is incorrect, our company will
                    not be liable for the amount of loss{" "}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" mt={1}>
                  <Box
                    sx={{
                      width: "5px",
                      height: "5px",
                      background: theme.palette.primary.main,
                      transform: "rotate(45deg)",
                      mr: 1,
                    }}
                  ></Box>
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{ fontSize: "12px" }}
                  >
                    If your beneficial information is incorrect, please contact
                    customer service
                  </Typography>
                </Stack>
              </Box> */}
            </Box>
          </>
        }
        {/* <Box
          sx={{
            width: "92%",
            margin: "auto",
            my: 2,
            background: "#011341",
            padding: "10px 0px 10px 10px",
          }}
        > */}
        {/* {resrecord?.data?.length === 0 ? */}
        {/* <Box sx={{ width: "35%" }} component={NavLink} to="/usdt-address">
            <Typography
              variant="body1"
              color="white"
              className="!border-gray-500 !border-dashed !border !p-2"
              sx={{ fontSize: "15px", fontWeight: "500", mt: 1 }}
            >
              +  Add USDT Address
            </Typography>
          </Box> */}
        {/* : */}
        {/* <Box >
            <Typography
              variant="body1"
              color="white"
              sx={{ fontSize: "15px", fontWeight: "500", mt: 1 }}
            >
              {resrecord?.data?.[0]?.usdt_type}
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{ fontSize: "13px", fontWeight: "600", mt: 1 }}
            >
              {resrecord?.data?.[0]?.usdt_address}
            </Typography>
          </Box> */}
        {/* } */}
        {/* </Box> */}
      </Container>
    </Layout >
  );
}
export default Withdraval;

const style = {
  container: {
    background: '#05012B',
    width: '100%',
    height: '100vh',
    overflow: 'auto',
  },
  header: {
    padding: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '16px',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
    },
  },
  withdrawalbtn: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "20px",
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: "600",
    padding: "5px 25px",
  },
  depositebtn: {
    background: theme.palette.primary.main,
    borderRadius: "20px",
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: "600",
    padding: "5px 25px",
    color: "white",
  },
  paytmbtntwo: {
    borderRadius: "20px",
    textTransform: "capitalize",
    mb: 2,
    width: "92%",
    mt: 2,
    mx: 2,
    padding: "10px",
    "&:hover": { border: "1px solid transparent" },
  },
  wdbtn: {
    width: "95% !important",
    borderRadius: "20px",
    border: "none",
    color: "#000",
    letterSpacing: "0.13333rem",
    fontWeight: "700",
    fontSize: "14px",
    height: "0.93333rem",
    width: "100%",
    backgroundSize: "100% 100%, 100% 100%",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat, no-repeat",
    padding: "20px",
    mt: 3,
    background: '#1DA6A4',
  },
};
