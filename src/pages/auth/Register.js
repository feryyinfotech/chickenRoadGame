import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { ArrowLeft } from '@react-vant/icons';
import axios from "axios";
import { ClientJS } from 'clientjs';
import CryptoJS from "crypto-js";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import FLAG from '../../assets/images/FLAG.png';
import logo from '../../assets/images/logo.png';
import SvgIcons from "../../component/SvgIcons";
import { storeCookies } from "../../services/apiCallings";
import { endpoint } from "../../services/urls";
import { signupSchemaValidataon } from "../../services/validation";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";
import theme from "../../utils/theme";


function Login() {
  const client = new ClientJS();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const refParam = params.get("ref");
  const [visitorId, setVisitorId] = useState(null);
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loding, setloding] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const initialValue = {
    email: "",
    mobile: "",
    name: "",
    pass: "",
    confirmpass: "",
    refid: refParam,
  };

  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    validationSchema: signupSchemaValidataon,
    onSubmit: () => {
      if (fk.values.pass !== fk.values.confirmpass)
        return toast("Password and confirm password should be same.");

      const reqbody = {
        email: fk.values.email,
        mobile: String(fk.values.mobile) || "",
        pass: fk.values.pass,
        confirmpass: fk.values.confirmpass,
        refid: username?.id,
        name: fk.values.name,
        u_finger_id: visitorId,
        through: 2,
        domain_type: 2,
      };
      signupFunction(reqbody);
    },
  });
  const signupFunction = async (reqbody) => {
    try {
      const response = await axios.post(endpoint.signup, reqbody, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      if (response?.data?.msg === "Registration Successful.") {
        const value = CryptoJS.AES.encrypt(
          JSON.stringify(response?.data),
          "anand"
        )?.toString();
        localStorage.setItem("logindataen", value);
        sessionStorage.setItem("isAvailableUser", true);
        sessionStorage.setItem("isAvailableCricketUser", true);
        navigate("/");
        storeCookies();
        document.location.reload();
      }

      toast.success(response?.data?.msg);
      // if (response?.data?.status === "200") {
      //   navigate("/dashboard");
      // }
    } catch (e) {
      toast.error(e?.message);
      console.error(e);
    }
    setloding(false);
  };

  async function getIntroFn() {
    const reqBody = {
      userid: fk.values.refid,
    };
    try {
      const res = await axios.get(endpoint?.get_user_intro_name, {
        params: reqBody
      });
      setusername(res?.data?.data);
    } catch (e) {
      console.log(e);
    }
    // client.refetchQueries("bank_details");
  }

  useEffect(() => {
    getIntroFn();
  }, [fk.values.refid]);


  useEffect(() => {
    // Initialize FingerprintJS and fetch the visitor ID
    const fetchVisitorId = async () => {
      const fingerprint = client.getFingerprint();
      // const result = await fp.get();
      setVisitorId(fingerprint);
      // console.log(fingerprint);
    };

    fetchVisitorId().catch(console.error);
  }, []);

  return (
    <Container>
      <SvgIcons />
      <Box className="fcsb header-one" >
        <Box sx={{ width: '25%' }} className="fcs">
          <ArrowLeft style={{ color: 'white' }} />
        </Box>
        <Box sx={{ width: '50%' }} className="fcc">
          <Box component={'img'} src={logo} className='logo' ></Box>
        </Box>
        <Box className="fce" sx={{ width: '25%' }}>
          <Box component={'img'} src={FLAG} className='flag' ></Box>
          <Typography color={'#00ECBE'} className='en'>EN</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          padding: 1, background: '#011341', padding: "16px 16px 40px 16px",
          "&>p": { color: "white" },
        }}
      >
        <Typography variant="body1" color="initial" sx={{ fontWeight: "400", mt: 1, fontSize: "16px", lineHeight: '17px', }}>
          Register
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontWeight: "400", fontSize: "12px" }}
        >
          Please register by phone number or emails
        </Typography>
      </Box>
      <Box sx={{ width: "92%", margin: "auto", mt: 3 }}>
        <Box component="form" onSubmit={fk.handleSubmit}>
          <CustomCircularProgress isLoading={loding} />
          <Stack direction="row" alignItems="center">
            <svg style={{ marginRight: '10px' }} className="svg-icon" width="25" height="25" fill={'#00ECBE'}><use xlinkHref="#icon-phone"></use></svg>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "15px", fontWeight: "500", color: "white" }}
            >
              Phone number
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box sx={{ width: "100%" }}>
              <FormControl fullWidth sx={{ ...style.inputfield }}>
                <TextField
                  id="mobile"
                  name="mobile"
                  onChange={fk.handleChange}
                  value={fk.values.mobile}
                  label=""
                  placeholder=" Enter number"
                  fullWidth
                  type="number"
                />
                {fk.touched.mobile && fk.errors.mobile && (
                  <div className="error">{fk.errors.mobile}</div>
                )}
              </FormControl>
            </Box>
          </Stack>
          <Box mt={2}>
            <Stack direction="row" alignItems="center">
              <svg style={{ marginRight: '10px' }} className="svg-icon" width="25" height="25" fill={'#00ECBE'}><use xlinkHref="#icon-user"></use></svg>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "15px", fontWeight: "500", color: "white" }}
              >
                Name
              </Typography>
            </Stack>
            <FormControl fullWidth sx={{ ...style.passwordfield }}>
              <FilledInput
                placeholder="Name"
                id="name"
                name="name"
                onChange={fk.handleChange}
                value={fk.values.name}
                type={"text"}
              />
              {fk.touched.name && fk.errors.name && (
                <div className="error">{fk.errors.name}</div>
              )}
            </FormControl>
          </Box>
          <Box mt={2}>
            <Stack direction="row" alignItems="center">
              <svg style={{ marginRight: '10px' }} className="svg-icon" width="25" height="25" fill={'#00ECBE'}><use xlinkHref="#icon-email"></use></svg>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "15px", fontWeight: "500", color: "white" }}
              >
                Email
              </Typography>
            </Stack>
            <FormControl fullWidth sx={{ ...style.passwordfield }}>
              <FilledInput
                placeholder="email"
                id="email"
                name="email"
                onChange={fk.handleChange}
                value={fk.values.email}
                type="email"
              />
              {fk.touched.email && fk.errors.email && (
                <div className="error">{fk.errors.email}</div>
              )}
            </FormControl>
          </Box>
          <Box mt={2}>
            <Stack direction="row" alignItems="center">
              <svg style={{ marginRight: '10px' }} className="svg-icon" width="25" height="25" fill={'#00ECBE'}><use xlinkHref="#icon-editPswIcon"></use></svg>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "15px", fontWeight: "500", color: "white" }}
              >
                Set password
              </Typography>
            </Stack>
            <FormControl fullWidth sx={{ ...style.passwordfield }}>
              <FilledInput
                placeholder="Set password"
                id="pass"
                name="pass"
                onChange={fk.handleChange}
                value={fk.values.pass}
                type={showPassword ? "text" : "pass"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {fk.touched.pass && fk.errors.pass && (
                <div className="error">{fk.errors.pass}</div>
              )}
            </FormControl>
          </Box>
          <Box mt={2}>
            <Stack direction="row" alignItems="center">
              <svg style={{ marginRight: '10px' }} className="svg-icon" width="25" height="25" fill={'#00ECBE'}><use xlinkHref="#icon-editPswIcon"></use></svg>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "15px", fontWeight: "500", color: "white" }}
              >
                Confirm password
              </Typography>
            </Stack>
            <FormControl fullWidth sx={{ ...style.passwordfield }}>
              <FilledInput
                placeholder="Confirm password"
                id="confirmpass"
                name="confirmpass"
                onChange={fk.handleChange}
                value={fk.values.confirmpass}
                type={showPassword ? "text" : "pass"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {fk.touched.confirmpass && fk.errors.confirmpass && (
                <div className="error">{fk.errors.confirmpass}</div>
              )}
            </FormControl>
          </Box>
          <Box mt={2}>
            <Stack direction="row" alignItems="center">
              <svg style={{ marginRight: '10px' }} className="svg-icon" width="25" height="25" fill={'#00ECBE'}><use xlinkHref="#icon-invitation"></use></svg>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "15px", fontWeight: "500", color: "white" }}
              >
                Invite code
              </Typography>
            </Stack>
            <FormControl fullWidth sx={{ ...style.inputfield }}>
              <TextField
                id="refid"
                name="refid"
                onChange={fk.handleChange}
                value={fk.values.refid}
                label=""
                placeholder="please input Invite code"
                fullWidth
                type="text"
              />
              {username !== "false" ? (
                <div className="no-error">{username?.full_name}</div>
              ) : (
                fk.errors.refid && (
                  <div className="error">{fk.errors.refid}</div>
                )
              )}

            </FormControl>
          </Box>
        </Box>

        <Box sx={{ width: "80%", margin: "auto", mt: 3 }}>
          <Button
            onClick={() => fk.handleSubmit()}
            sx={{
              padding: "6px",
              width: "100%",
              background: "linear-gradient(180deg, #7afec3, #02afb6)",
              color: "#05012B",
              borderRadius: "20px",
              mb: 2,
              fontWeight: "700",
              fontSize: '18px'
            }}
          >
            Register
          </Button>
          <NavLink to="/">
            <Button
              sx={{
                width: "100%",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: "500",
                color: "#9195A3",
                "&>span": {
                  color: theme.palette.primary.main,
                  ml: 1,
                  fontSize: "16px",
                  fontWeight: "700",
                },
              }}
              variant="outlined"
            >
              I have an account <span> Login</span>
            </Button>
          </NavLink>
        </Box>

      </Box>
    </Container>
  );
}

export default Login;
const style = {
  inputfield: {
    mt: 2,
    "&>div>div>input": {
      background: "#011341",
      padding: '22px',
      borderRadius: "10px",
      color: '#92A8E3',
    },
    "&>div>div>fieldset ": { border: "none !important" },
    "&>div>div>input:focus": { color: '#92A8E3', },
  },
  passwordfield: {
    color: '#92A8E3',
    "&>div>input": { padding: '22px', color: '#92A8E3', },
    "&>div": {
      color: '#92A8E3',
      mt: 2,
      background: "#011341",
      borderRadius: "10px",
      "&:hover": {
        background: "#011341",
        color: '#92A8E3',
      }
    },
    "&>div::before": { border: "none !important" },
    "&>div::after:focus": {
      border: "none !important",
      color: '#92A8E3',
    },
  },
  selectfield: {
    "&>div>div": {
      background: "#011341",
      borderRadius: "10px",
      padding: "11px 3px",
      color: '#92A8E3',
      borderRadius: "10px",
    },
    "&>div>fieldset": {
      color: '#92A8E3',
      borderRadius: "10px",
      color: '#92A8E3',
    },
    "&>div": { mt: 2 },
  },
};
