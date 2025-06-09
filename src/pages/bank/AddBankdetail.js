import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import {
  Box,
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { ArrowLeft } from '@react-vant/icons';
import CryptoJS from "crypto-js";
import { useFormik } from "formik";
import * as React from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../component/layout/Layout";
import SvgIcons from "../../component/SvgIcons";
import { apiConnectorPost } from "../../services/apiconnector";
import { endpoint } from "../../services/urls";
import { withdrawAmountSchemaValidaton } from "../../services/validation";
import VantToast from "../../shared/toast/Toast";


function AddBankDetails() {
  const login_data =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;
  const user_id = login_data && JSON.parse(login_data)?.UserID;
  const client = useQueryClient();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const initialValues = {
    email: "",
    mobile: "",
    bank_name: "",
    name: "",
    ifsc_code: "",
    account_number: "",
  };

  const fk = useFormik({
    initialValues: initialValues,
    validationSchema: withdrawAmountSchemaValidaton,
    onSubmit: () => {
      console.log(fk.values);
      const capitalizedIFSC = fk.values.ifsc_code.toUpperCase();
      const reqbody = {
        email: fk.values.email,
        bank_name: fk.values.bank_name,
        name: fk.values.name,
        mobile: fk.values.mobile,
        ifsc_code: capitalizedIFSC,
        account_number: fk.values.account_number,
      }
      addbankDetailsFunction(reqbody);
    },
  });

  const addbankDetailsFunction = async (reqbody) => {
    try {

      const response = await apiConnectorPost(`${endpoint?.user_bank_add}`, reqbody)
      toast(response?.data?.msg);
      client.refetchQueries("bank_list_details");
      if (response?.data?.msg) {
        navigate("/banks-details");
      }
    } catch (e) {
      VantToast(e?.message, 'f');
      console.log(e);
    }
  };

  return (
    <Layout header={false}>
      <SvgIcons />
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()} sx={{ width: '10%' }}>
            <ArrowLeft style={{ fontSize: '22px !important', color: 'white' }} />
          </Box>
          <Typography sx={{ width: '80%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial"> Add a bank account number</Typography>
          <NavLink to="/withdrawlhistory" style={{ width: '10%', fontSize: '13px !important', color: 'white !important' }}></NavLink>
        </Box>
        <Box>
          <Box sx={{
            backgroundColor: "#011341", color: "#ff4d4d", borderRadius: "30px", px: 2, mx: 2, mt: 2, py: 1, mb: 0, display: "flex",
            alignItems: "center", fontSize: "13px"
          }}
          >
            <WarningAmberRoundedIcon sx={{ fontSize: 18, mr: 1 }} />
            To ensure the safety of your funds, please link your wallet
          </Box>
          <Box sx={{ padding: "10px", width: "95%", margin: "auto", mt: "20px", borderRadius: "10px", mb: 5, }}>
            <Box mt={2} component="form" onSubmit={fk.handleSubmit}>
              <FormControl fullWidth sx={{ mt: "1px" }}>
                <Stack direction="row" >
                  <Typography sx={{ color: 'white' }} className="flex items-center">
                    <svg className="svg-icon" width="25" height="25" fill="#00ECBE" style={{ marginRight: '10px' }}>
                      <use xlinkHref="#icon-name"></use>
                    </svg> Account holder name <span className="!text-white ">*</span>
                  </Typography>
                </Stack>
                <TextField
                  sx={style.textfield}
                  id="name"
                  name="name"
                  type="text"
                  value={fk.values.name}
                  onChange={fk.handleChange}
                  placeholder="Enter account holder name *"
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                {fk.touched.name && fk.errors.name && (
                  <div className="error">{fk.errors.name}</div>
                )}
              </FormControl>
              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" >
                  <Typography sx={{ color: 'white' }} className="flex items-center">
                    <svg className="svg-icon" width="25" height="25" fill="#00ECBE" style={{ marginRight: '10px' }}>
                      <use xlinkHref="#icon-email"></use>
                    </svg>  Enter Email <span className="!text-white">*</span>
                  </Typography>
                </Stack>
                <TextField
                  sx={style.textfield}
                  id="email"
                  name="email"
                  type="email"
                  value={fk.values.email}
                  onChange={fk.handleChange}
                  placeholder="Enter email *"
                  className=""
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                />
                {fk.touched.email && fk.errors.email && (
                  <div className="error">{fk.errors.email}</div>
                )}
              </FormControl>
              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" >
                  <Typography sx={{ color: 'white' }} className="flex items-center">
                    <svg className="svg-icon" width="25" height="25" fill="#00ECBE" style={{ marginRight: '10px' }}>
                      <use xlinkHref="#icon-phone"></use>
                    </svg>     Enter Mobile <span className="!text-white">*</span>
                  </Typography>
                </Stack>
                <TextField
                  sx={style.textfield}
                  id="mobile"
                  name="mobile"
                  type="number"
                  value={fk.values.mobile}
                  onChange={fk.handleChange}
                  placeholder="Enter mobile *"
                  className=""
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                />
                {fk.touched.mobile && fk.errors.mobile && (
                  <div className="error">{fk.errors.mobile}</div>
                )}
              </FormControl>

              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" >
                  <Typography sx={{ color: 'white' }} className="flex items-center">
                    <svg className="svg-icon" width="25" height="25" fill="#00ECBE" style={{ marginRight: '10px' }}>
                      <use xlinkHref="#icon-bank"></use>
                    </svg>   Bank name <span className="!text-white">*</span>
                  </Typography>
                </Stack>
                <TextField
                  sx={style.textfield}
                  id="bank_name"
                  name="bank_name"
                  type="text"
                  value={fk.values.bank_name}
                  onChange={fk.handleChange}
                  placeholder="Enter bank name *"
                  className=""
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                />
                {fk.touched.bank_name && fk.errors.bank_name && (
                  <div className="error">{fk.errors.bank_name}</div>
                )}
              </FormControl>

              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" >
                  <Typography sx={{ color: 'white' }} className="flex items-center">
                    <svg className="svg-icon" width="25" height="25" fill="#00ECBE" style={{ marginRight: '10px' }}>
                      <use xlinkHref="#icon-ifscCode"></use>
                    </svg>     IFSC code <span className="!text-white">*</span>
                  </Typography>
                </Stack>
                <TextField
                  sx={style.textfield}
                  id="ifsc_code"
                  name="ifsc_code"
                  type="text"
                  value={fk.values.ifsc_code}
                  onChange={fk.handleChange}
                  placeholder="Enter IFSC code *"
                  className=""
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                />
                {fk.touched.ifsc_code && fk.errors.ifsc_code && (
                  <div className="error">{fk.errors.ifsc_code}</div>
                )}
              </FormControl>
              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" >
                  <Typography sx={{ color: 'white' }} className="flex items-center">
                    <svg className="svg-icon" width="25" height="25" fill="#00ECBE" style={{ marginRight: '10px' }}>
                      <use xlinkHref="#icon-bankCard"></use>
                    </svg>       Account number <span className="!text-white">*</span>
                  </Typography>
                </Stack>
                <TextField
                  sx={style.textfield}
                  id="account_number"
                  name="account_number"
                  type="text"
                  value={fk.values.account_number}
                  onChange={fk.handleChange}
                  placeholder="Enter account number *"
                  className=""
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                />
                {fk.touched.account_number && fk.errors.account_number && (
                  <div className="error">{fk.errors.account_number}</div>
                )}
              </FormControl>

              <Button
                sx={style.wdbtn}
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  fk.handleSubmit();
                }}
              >
                Submit{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout >
  );
}

export default AddBankDetails;

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
  wdbtn: {
    width: "95% !important",
    borderRadius: "20px",
    border: "none",
    color: "#000",
    letterSpacing: "0.13333rem",
    fontWeight: "600",
    fontSize: "15px",
    height: "0.93333rem",
    width: "100%",
    background:
      "#00ECBE",
    backgroundSize: "100% 100%, 100% 100%",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat, no-repeat",
    textShadow: "0 0.02667rem 0.01333rem #afb0be",
    padding: "20px",
    mt: 3,
    mb: 2,
  },
  textfield: {
    my: 2,
    background: '#011341',
    borderRadius: '5px',
    color: 'white',

    '& .MuiInputBase-root': {
      padding: '5px',
      color: 'white',
      outline: 'none',
      boxShadow: 'none',
    },
    '& .MuiInputBase-input': {
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      color: 'white',
      background: 'transparent',
    },
    '& .MuiInputBase-input:focus': {
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      color: 'white',
    },
    '&:focus-within': {
      outline: 'none',
      border: 'none',
      boxShadow: 'none',
    },
  }

};
