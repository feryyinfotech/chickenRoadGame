import { CopyAll, History } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import copy from "clipboard-copy";
import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import atm from "../../../assets/images/atm.png";
import atmchip from "../../../assets/images/atmchip.png";
import wallet from "../../../assets/images/atmw.png";
import backbtn from "../../../assets/images/backBtn.png";
import audiovoice from "../../../assets/images/bankvoice.mp3";
import cip from "../../../assets/images/cip.png";
import payment from "../../../assets/images/payment.png";
import refresh from "../../../assets/images/refwhite.png";
import zp from "../../../assets/images/zptoken.png";
import { apiConnectorGet } from "../../../services/apiconnector";
import { endpoint, front_end_domain } from "../../../services/urls";
import CustomCircularProgress from "../../../shared/loder/CustomCircularProgress";
import theme from "../../../utils/theme";
import VantToast from "../../../shared/toast/Toast";

function ZpWithdrawal() {
  const Tokenadd = localStorage.getItem("token");
  const audioRefMusic = React.useRef(null);
  const navigate = useNavigate();

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

  const functionTOCopy = (value) => {
    copy(value);
    VantToast('Copied to clipboard!', 's');
  };

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
    <Container className="h-screen" sx={{ background: "#05012B" }}>
      {audio}
      <CustomCircularProgress isLoading={isLoading} />
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
              Withdrawal
            </Typography>
          </Box>
          <NavLink to="/zpwithdraw">
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
              ₹{" "}
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
            onClick={() => navigate("/withdraw")}
            sx={{
              width: "120px",
              background: "#011341",
              padding: 2,
              borderRadius: 2,
              mr: 2,
              boxShadow:
                " rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
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
                color: "gray",
                fontSize: "14px",
                fontWeight: "500",
                textAlign: "center",
                mt: 1,
              }}
            >
              BANK CARD
            </Typography>
          </Stack>
          <Stack
            className={"!cursor-pointer"}
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
              src={zp}
              width={40}
              sx={{ margin: "0px auto" }}
            ></Box>
            <Typography
              variant="body1"
              sx={{
                color: "gray",
                fontSize: "14px",
                fontWeight: "500",
                textAlign: "center",
                mt: 1,
              }}
            >
              ZP
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
          <Box component="img" src={payment} width={30}></Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontSize: "15px ",
              color: "black",
              ml: "10px",
              fontWeight: "600",
            }}
          >
            Withdrawal amount
          </Typography>
        </Stack>
        <Typography
          sx={{}}
          onClick={() => {
            functionTOCopy(
              `${front_end_domain}/zptokenpayout/?token=${Tokenadd}`
            );
          }}
        >
          Copy Your Payment Link
          <p className="!text-[10px] flex items-center  pt-2 ">
            {`${front_end_domain}/zptokenpayout/?token=${Tokenadd?.substring(0, 10) + "......."
              }`}{" "}
            <CopyAll />
          </p>
        </Typography>

        {/* <Button
          sx={style.wdbtn}
          onClick={requestAccount}
          className="!bg-[#00ECBE]"
        >
          Connect Your Wallet
        </Button>
        <div className="my-3">
          <div className="flex flex-wrap justify-start">
            <span className="">Address : </span>{" "}
            <span>{address}</span>
          </div>
        </div>
        <div className='!my-4'>
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
              <p className='text-[#00ECBE] !text-sm !font-bold'> INR </p>
            </IconButton>
            <InputBase
              name="inr_value"
              id="inr_value"
              value={fk.values.inr_value}
              onChange={fk.handleChange}
              sx={{ px: 1, flex: 1, borderLeft: "1px solid #888" }}
              placeholder="Please enter the amount"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>

        </div>
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
            <p className='text-[#00ECBE] !text-sm !font-bold'> ZP </p>
          </IconButton>
          <InputBase
            value={Number(Number(fk.values.inr_value || 0) / ownaddress?.token_amnt)?.toFixed(4)}
            sx={{ px: 1, flex: 1, borderLeft: "1px solid #888" }}
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
        <Button
          sx={style.wdbtn1}
          onClick={PayinZp}
          className="!bg-[#00ECBE]"
        >
          Confirm
        </Button>
        <div className="m-3">
        <div className=" flex flex-wrap justify-start">
            <p>Transaction Hash : </p>{" "}
            <p className="!text-[9px] whitespace-break-spaces">
              {transactionhash}
            </p>
          </div>
          <div className="flex justify-start !font-bold !gap-4">
            <p>Transaction Status</p> <p>{status}</p>
          </div>
        </div> */}
      </Box>
    </Container>
  );
}
export default ZpWithdrawal;

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
  wdbtn1: {
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
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat, no-repeat",
    textShadow: "0 0.02667rem 0.01333rem #afb0be",
    padding: "20px",
    mt: 3,
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
