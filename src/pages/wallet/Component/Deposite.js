import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  MenuItem,
  Stack,
  TextField,
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
import { API_URLS } from "../../../Adminpages/config/APIUrls";
import axiosInstance from "../../../Adminpages/config/axios";
import atm from "../../../assets/images/atm.png";
import wallet from "../../../assets/images/atmw.png";
import audiovoice from "../../../assets/images/bankvoice.mp3";
import cip from "../../../assets/images/cip.png";
import user from "../../../assets/images/instruction.png";
import UPT from "../../../assets/images/payNameIcon_20250317165432r3g1.png";
import refresh from "../../../assets/images/refwhite.png";
import usdtimg from "../../../assets/images/usdt-40311708.png";
import atmchip from "../../../assets/payNameIcon1.png";
import Layout from "../../../component/layout/Layout";
import SvgIcons from "../../../component/SvgIcons";
import { apiConnectorGet, apiConnectorPost, } from "../../../services/apiconnector";
import { endpoint } from "../../../services/urls";
import CustomCircularProgress from "../../../shared/loder/CustomCircularProgress";
import theme from "../../../utils/theme";

function Deposite() {
  const [selected, setSelected] = useState("USDT");
  const audioRefMusic = React.useRef(null);
  const [loding, setloding] = useState(false);
  const [base64QR, setBase64QR] = useState(null);
  const [file, setFile] = useState(null);
  const [selectedUsdtData, setSelectedUsdtData] = useState(null);
  const client = useQueryClient()
  const handleDepositTypeChange = (event) => {
    const selectedType = event.target.value;
    formik.setFieldValue("deposit_type", selectedType);
    const selectedData = type.find((item) => item.id === selectedType);
    setSelectedUsdtData(selectedData);
  };

  const { isLoading, data: wallet_amount } = useQuery(
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

  const { data } = useQuery(["Usdt"], () => axiosInstance.get(API_URLS.admin_addess), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  const type = data?.data?.data;


  const initialValuesss = {
    amount: 0,
    deposit_type: "SelectUSDTYPe",
    receipt_image: ""
  };

  const formik = useFormik({
    initialValues: initialValuesss,
    onSubmit: () => {
      const reqbody = {
        req_amount: formik.values.amount,
        deposit_type: formik.values.deposit_type,
        receipt_image: base64QR,
      };
      payment(reqbody);
    },
  });

  async function payment(reqbody) {
    setloding(true);

    const res = await apiConnectorPost(endpoint.deposite_request, reqbody);
    toast(res?.data?.msg)
    if (res?.data?.msg === "Request Successfully Accepted.") {
      formik.handleReset()
      client.refetchQueries("wallet_amount")
      client.refetchQueries("deposit_history_usdt")
    }
    setloding(false);
  }
  const navigate = useNavigate();

  React.useEffect(() => {
    handlePlaySound();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      convertToBase64(selectedFile);
    }
  };

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBase64QR(reader.result); // Set the base64 string
    };
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
      console.error("Error during play:", error);
    }
  };

  const audio = React.useMemo(() => {
    return (
      <audio ref={audioRefMusic} hidden>
        <source src={`${audiovoice}`} type="audio/mp3" />
      </audio>
    );
  }, []);


  const goBack = () => {
    navigate(-1);
  };
  return (
    <Layout header={false}>
      <CustomCircularProgress isLoading={isLoading || loding} />
      {audio}
      <SvgIcons />
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()} sx={{ width: '30%' }}>
            <ArrowLeft style={{ fontSize: '22px !important', color: 'white' }} />
          </Box>
          <Typography sx={{ width: '40%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial"> Deposit</Typography>
          <NavLink to="/depositehistory" style={{ width: '30%', fontSize: '13px !important', color: 'white !important' }}>   <Typography sx={{ fontSize: '13px !important', color: 'white !important', float: 'right' }} variant="body1" color="white">  Deposit history   </Typography></NavLink>
        </Box>

        {/* <Box
        sx={{
          background:
            "linear-gradient(175deg, rgba(1,19,65,1) 0%, rgba(35,196,185,1) 100%)",
          padding: 1,
        }}
      >
        <Stack
          direction="row"
          sx={{
            alignItems: "end",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={backbtn}
            width={25}
            onClick={() => navigate("/account")}
          ></Box>

          <Box sx={{ position: "absolute", left: "40%", top: "10%" }}>
            <Typography
              variant="body1"
              sx={{ color: "white", fontSize: "16px", fontWeight: "600" }}
            >
              Deposit
            </Typography>
          </Box>
          <NavLink to="/depositehistory">
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "11px", color: "white" }}
            >
              <History />
            </Typography>
          </NavLink>
        </Stack>
      </Box> */}

        <Box sx={{ mt: 2, px: 2 }}>
          <Box
            sx={{
              backgroundImage: `url(${atm})`,
              backgroundSize: "100% 100%",
              padding: "20px 16px",
            }}
          >
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

            {/* UPI Option */}
            <Stack
              onClick={() => setSelected("UPI")}
              sx={{
                background: selected === "UPI" ? "linear-gradient(90deg, #7afec3, #02afb6)" : "#011341",
                color: selected === "UPI" ? "black" : "#92a8e3",
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
                src={UPT}
                width={40}
                sx={{ margin: "0px auto" }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: selected === "UPI" ? "black" : "#92a8e3",
                  fontSize: "13px",
                  fontWeight: "500",
                  textAlign: "center",
                  mt: 1,
                }}
              >
                UPI
              </Typography>
            </Stack>
          </Stack>
        </Box>
        {selected === 'USDT' && <Box
          sx={{
            width: "92%",
            margin: "auto",
            background: "#011341",
            mt: 2,
            borderRadius: "10px",
            padding: 1,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
          className="!cursor-pointer"
        >
          <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "20px ",
                color: "white",
                ml: "10px",
                fontWeight: "600",
                display: 'flex',
                '&>svg': { ml: '-10px', mr: 1 }
              }}
            >
              <svg className="svg-icon" width="25" height="25">
                <use xlinkHref="#icon-saveWallet"></use>
              </svg>
              Select amount of USDT
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              mt: "10px",
            }}
          >
            <Button
              sx={style.paytmbtn}
              onClick={() => formik.setFieldValue("amount", 5)}
            >
              <Box component={'img'} src={usdtimg} width={17} height={17} mr={1}></Box> 5
            </Button>
            <Button
              sx={style.paytmbtn}
              onClick={() => {
                formik.setFieldValue("amount", 10);
              }}
            >
              <Box component={'img'} src={usdtimg} width={17} height={17} mr={1}></Box> 10
            </Button>
            <Button
              sx={style.paytmbtn}
              onClick={() => formik.setFieldValue("amount", 50)}
            >
              <Box component={'img'} src={usdtimg} width={17} height={17} mr={1}></Box> 50
            </Button>
            <Button
              sx={style.paytmbtn}
              onClick={() => formik.setFieldValue("amount", 100)}
            >
              <Box component={'img'} src={usdtimg} width={17} height={17} mr={1}></Box> 100
            </Button>
            <Button
              sx={style.paytmbtn}
              onClick={() => formik.setFieldValue("amount", 500)}
            >
              <Box component={'img'} src={usdtimg} width={17} height={17} mr={1}></Box> 500
            </Button>
            <Button
              sx={style.paytmbtn}
              onClick={() => formik.setFieldValue("amount", 1000)}
            >
              <Box component={'img'} src={usdtimg} width={17} height={17} mr={1}></Box> 1000
            </Button>
            <Button
              sx={style.paytmbtn}
              onClick={() => formik.setFieldValue("amount", 2500)}
            >
              <Box component={'img'} src={usdtimg} width={17} height={17} mr={1}></Box> 2500
            </Button>
            <Button
              sx={style.paytmbtn}
              onClick={() => formik.setFieldValue("amount", 5000)}
            >
              <Box component={'img'} src={usdtimg} width={17} height={17} mr={1}></Box> 5000
            </Button>
            <Button
              sx={style.paytmbtn}
              onClick={() => formik.setFieldValue("amount", 50000)}
            >
              <Box component={'img'} src={usdtimg} width={17} height={17} mr={1}
              ></Box> 50000
            </Button>
          </Stack>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', my: 2, background: "#05012B !important", }}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <Box component={'img'} src={usdtimg} width={25} height={25} ></Box>
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5, background: '#6f80a4', }} orientation="vertical" />
            <InputBase
              sx={{
                ml: 1, flex: 1, color: "#92a8e3 !important", fontSize: '14px',
                "&::placeholder": { color: "#92a8e3 !important", },
                "& .MuiInputBase-input::placeholder": { color: "#92a8e3 !important", opacity: 1, },
              }}
              placeholder="Please enter USDT amount"
              onChange={formik.handleChange}
              value={formik.values.amount}
            />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
              <HighlightOffIcon />
            </IconButton>
          </Paper>

          <Typography className="!mt-5 " fontSize={14} fontWeight={500} color={'#fff'}>Select USDT Type</Typography>
          <TextField
            fullWidth
            select
            id="deposit_type"
            name="deposit_type"
            value={formik.values.deposit_type}
            onChange={handleDepositTypeChange}
            sx={{
              px: "22px",
              py: "10px",
              background: "#05012b",
              borderRadius: "5px",
              mt: "10px",
              fontSize: "13px",
              color: "white",
              '& .MuiInputBase-root': {
                color: "white",
                border: "none",
                boxShadow: "none",
                '& fieldset': {
                  border: "none",
                },
                '&:hover fieldset': {
                  border: "none",
                },
                '&.Mui-focused fieldset': {
                  border: "none",
                },
              },
              '& .MuiSelect-select': {
                fontSize: '14px',
                padding: '2px',
              },
            }}
          >

            <MenuItem value={"SelectUSDTYPe"} sx={{ background: '#2ac9bb !important', color: 'black !important' }}>Select USDT Type</MenuItem>
            {type?.map((item) => (
              <MenuItem key={item.id} value={item.id} sx={{ color: 'black !important' }}>
                {item?.usdt_type}
              </MenuItem>
            ))}
          </TextField>
          {selectedUsdtData && (
            <>
              <Typography className="!mt-2 " style={{ color: 'white' }}>
                <span className="!font-bold !text-white-700"> Market Rate :  </span>  {selectedUsdtData?.market_rate}
              </Typography>

              <Typography className="!mt-1 " style={{ color: 'white' }}>
                <span className="!font-bold  !text-white-700"> USDT Address</span> <span className="!text-sm" style={{ color: 'white' }}>{selectedUsdtData?.usdt_address}</span>
              </Typography>

              <Typography className="!mt-1  !flex flex-col justify-center" style={{ color: 'white' }}>
                <span className="!font-bold !text-white-700"> QR Code</span>
                <img className="m-5" src={selectedUsdtData?.qr_code} alt="QR Code" />
              </Typography>
              {/* {selectedUsdtData.usdt_address && (
              <img src={`data:image/png;base64,${base64QR}`} alt="QR Code" />
            )} */}
            </>
          )}

          <Typography className="!mt-5 !font-bold !text-white-700">Receipt</Typography>
          <Box
            component="label"
            sx={{
              background: "#05012b",
              borderRadius: "8px",
              px: 2,
              py: 1.5,
              width: "100%",
              border: "1px solid #1a1a40",
              cursor: "pointer",
              color: "#aab8ff",
              fontSize: "14px",
              textAlign: "left",
              display: 'inline-block',
              my: 2
            }}
          >
            Upload Receipt
            <input type="file" accept="image/*" hidden />
          </Box>

          <Button
            disableElevation
            sx={{
              ...style.wdbtn, background: formik.values.amount
                ? "linear-gradient(90deg, #7afec3, #02afb6)"
                : "#3D4863",
              color: formik.values.amount
                ? "black"
                : "#fff",
            }}
            onClick={formik.handleSubmit}
          >
            Deposit
          </Button>
        </Box>
        }
        {selected === 'UPI' && <Box
          sx={{
            width: "92%",
            margin: "auto",
            background: "#011341",
            mt: 2,
            borderRadius: "10px",
            padding: 1,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
          className="!cursor-pointer"
        >
          <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
            <svg className="svg-icon" width="25" height="25">
              <use xlinkHref="#icon-saveWallet"></use>
            </svg>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "20px ",
                color: "white",
                ml: "10px",
                fontWeight: "600",
              }}
            >
              Deposit amount
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              mt: "10px",
            }}
          >
            <Button
              sx={style.paytmbtn}
              onClick={() => formik.setFieldValue("amount", 101)}
            >
              ₹ 101
            </Button>
            <Button
              sx={style.paytmbtn}
              onClick={() => {
                formik.setFieldValue("amount", 201);
              }}
            >
              ₹ 200
            </Button>
            <Button
              sx={style.paytmbtn}
              onClick={() => formik.setFieldValue("amount", 500)}
            >
              ₹ 500
            </Button>
            <Button
              sx={style.paytmbtn}
              onClick={() => formik.setFieldValue("amount", 1000)}
            >
              ₹ 1000
            </Button>
            <Button
              sx={style.paytmbtn}
              onClick={() => formik.setFieldValue("amount", 5000)}
            >
              ₹ 5000
            </Button>
            <Button
              sx={style.paytmbtn}
              onClick={() => formik.setFieldValue("amount", 10000)}
            >
              ₹ 10000
            </Button>
          </Stack>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              borderRadius: "5px",
              border: "none",
              boxShadow: "none",
              background: "#05012b",
              mb: 2,
            }}
          >
            <IconButton sx={{ p: "0px 10px" }} aria-label="menu">
              <p sx={{ color: '#0AB4B7', }} >₹ </p>
            </IconButton>
            <InputBase
              name="amount"
              id="amount"
              onChange={formik.handleChange}
              value={formik.values.amount}
              sx={{ px: 1, flex: 1, borderLeft: "1px solid #888", color: 'white' }}
              placeholder="Please enter the amount"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
          <Button
            sx={{ ...style.wdbtn, color: 'black !important' }}
            onClick={formik.handleSubmit}
            className={`${formik.values.amount ? "!bg-[#1DA6A4]" : "!bg-white-400"
              }`}
          >
            Deposit
          </Button>
        </Box>
        }
        <Box
          sx={{
            width: "92%",
            margin: "auto",
            background: "#011341",
            mt: 2,
            mb: 5,
            borderRadius: "10px",
            padding: 1,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
            <Box component="img" src={user} width={30} sx={{ filter: 'hue-rotate(123deg)', }}></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "15px ", color: "white", ml: "10px" }}
            >
              Recharge instructions
            </Typography>
          </Stack>
          <Box
            sx={{ border: "1px solid #d2d2d2", padding: 2, borderRadius: "10px" }}
          >
            <Stack direction="row" sx={style.rechargeinstext}>
              <Box sx={{ width: "5%" }}>
                <Box
                  sx={{
                    width: "5px",
                    height: "5px",
                    background: theme.palette.primary.main,
                    transform: "rotate(45deg)",
                    mr: 1,
                  }}
                ></Box>
              </Box>
              <Typography variant="body1" color="initial">
                If the transfer time is up, please fill out the deposit form
                again.
              </Typography>
            </Stack>
            <Stack direction="row" sx={style.rechargeinstext}>
              <Box sx={{ width: "5%" }}>
                <Box
                  sx={{
                    width: "5px",
                    height: "5px",
                    background: theme.palette.primary.main,
                    transform: "rotate(45deg)",
                    mr: 1,
                  }}
                ></Box>
              </Box>
              <Typography variant="body1" color="initial">
                The transfer amount must match the order you created, otherwise
                the money cannot be credited successfully.
              </Typography>
            </Stack>
            <Stack direction="row" sx={style.rechargeinstext}>
              <Box sx={{ width: "5%" }}>
                <Box
                  sx={{
                    width: "5px",
                    height: "5px",
                    background: theme.palette.primary.main,
                    transform: "rotate(45deg)",
                    mr: 1,
                  }}
                ></Box>
              </Box>
              <Typography variant="body1" color="initial">
                If you transfer the wrong amount, our company will not be
                responsible for the lost amount!
              </Typography>
            </Stack>
            <Stack direction="row" sx={style.rechargeinstext}>
              <Box sx={{ width: "5%" }}>
                <Box
                  sx={{
                    width: "5px",
                    height: "5px",
                    background: theme.palette.primary.main,
                    transform: "rotate(45deg)",
                    mr: 1,
                  }}
                ></Box>
              </Box>
              <Typography variant="body1" color="initial">
                Note: do not cancel the deposit order after the money has been
                transferred.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Layout >
  );
}
export default Deposite;

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
    color: "#92a8e3",
    letterSpacing: "0.13333rem",
    fontWeight: "500",
    fontSize: "13px",
    height: "0.93333rem",
    width: "100%",
    backgroundSize: "100% 100%, 100% 100%",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat, no-repeat",
    padding: "16px",
    background: '#1DA6A4',
  },
  paytmbtn: {
    mb: 2,
    color: theme.palette.primary.main,
    width: "31%",
    border: `1px solid  #022c68`,
    padding: "5px 10px",
    fontSize: "17px",
    fontWeight: '400',
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": { color: "#939393 !important", fontSize: "13px" },
  },
};