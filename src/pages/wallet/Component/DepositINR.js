import { History } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import { API_URLS } from "../../../Adminpages/config/APIUrls";
import axiosInstance from "../../../Adminpages/config/axios";
import atm from "../../../assets/images/atm.png";
import wallet from "../../../assets/images/atmw.png";
import backbtn from "../../../assets/images/backBtn.png";
import audiovoice from "../../../assets/images/bankvoice.mp3";
import cip from "../../../assets/images/cip.png";
import user from "../../../assets/images/instruction.png";
import refresh from "../../../assets/images/refwhite.png";
import atmchip from "../../../assets/payNameIcon1.png";
import {
  apiConnectorGet,
  apiConnectorPost,
} from "../../../services/apiconnector";
import { endpoint } from "../../../services/urls";
import CustomCircularProgress from "../../../shared/loder/CustomCircularProgress";
import theme from "../../../utils/theme";

function DepositeINR() {
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
  };

  const formik = useFormik({
    initialValues: initialValuesss,
    onSubmit: () => {
      const reqbody = {
        req_amount: formik.values.amount,
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


  return (
    <Container sx={{ background: "#05012B" }}>
      {audio}
      <CustomCircularProgress isLoading={isLoading || loding} />
      <Box
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
      </Box>

      <Box sx={{ mt: 2, px: 2 }}>
        <Box
          sx={{
            backgroundImage: `url(${atm})`,
            backgroundSize: "100% 100%",
            padding: "20px 16px",
            filter: "hue-rotate(199deg)",
          }}
        >
          <Stack direction="row">
            <Box component="img" src={wallet} width={20} sx={{ mr: 2 }}></Box>
            <Typography
              variant="body1"
              sx={{ color: "white", fontSize: "14px", fontWeight: "500" }}
            >
              Available balance
            </Typography>
          </Stack>
          <Stack direction="row" alignItems={"center"} mt={1}>
            <Typography
              variant="body1"
              sx={{ color: "white", fontSize: "24px", fontWeight: "500" }}
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
            <Box component="img" src={cip} width={40} height={25}></Box>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ mt: 2, px: 2 }}>
        <Stack direction="row">
          <Stack
            sx={{
              background:
                "linear-gradient(175deg, rgba(1,19,65,1) 0%, rgba(35,196,185,1) 100%)",
              padding: 2,
              borderRadius: 2,
              mr: 2,
              width: "120px",
            }}
          >
            <Box
              component="img"
              src={atmchip}
              width={40}
              sx={{ margin: "0px auto" }}
            ></Box>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: "14px",
                fontWeight: "500",
                textAlign: "center",
                mt: 1,
              }}
            >
              USDT
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box
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
            background: "#F2F2F2",
            borderRadius: "20px",
            border: "none",
            boxShadow: "none",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <p sx={{ color: theme.palette.primary.main }} >₹ </p>
          </IconButton>
          <InputBase
            name="amount"
            id="amount"
            onChange={formik.handleChange}
            value={formik.values.amount}
            sx={{ px: 1, flex: 1, borderLeft: "1px solid #888" }}
            placeholder="Please enter the amount"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
        <Button
          sx={style.wdbtn}
          onClick={formik.handleSubmit}
          className={`${formik.values.amount ? "!bg-[#1DA6A4]" : "!bg-white-400"
            }`}
        >
          Deposit
        </Button>
      </Box>

      <Box
        sx={{
          width: "92%",
          margin: "auto",
          background: "#011341",
          mt: 2,
          borderRadius: "10px",
          padding: 1,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
          <Box component="img" src={user} width={30}></Box>
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
  );
}
export default DepositeINR;

const style = {
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
    boxShadow: "0 0.05333rem #b6bad0",
    borderRadius: "20px",
    border: "none",
    color: "#fff",
    letterSpacing: "0.13333rem",
    fontWeight: "700",
    fontSize: "15px",
    height: "0.93333rem",
    width: "100%",
    // background:
    //   "linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%), linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%)",
    backgroundSize: "100% 100%, 100% 100%",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat, no-repeat",
    textShadow: "0 0.02667rem 0.01333rem #afb0be",
    padding: "20px",
    mt: 3,
    background: '#1DA6A4',
  },
  paytmbtn: {
    mb: 2,
    color: theme.palette.primary.main,
    width: "31%",
    border: `1px solid  #eaeaea`,
    padding: "10px",
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": { color: "#939393 !important", fontSize: "13px" },
  },
};
