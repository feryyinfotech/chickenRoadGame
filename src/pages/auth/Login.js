import { KeyboardArrowDown } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  FilledInput,
  FormControl,
  FormGroup,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import { ArrowLeft, ClosedEye, EyeO } from '@react-vant/icons';
import axios from 'axios';
import { ClientJS } from 'clientjs';
import CryptoJS from 'crypto-js';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Checkbox } from 'react-vant';
import FLAG from '../../assets/images/FLAG.png';
import logo from '../../assets/images/logo.png';
import SvgIcons from '../../component/SvgIcons';
import { storeCookies } from '../../services/apiCallings';
import { endpoint } from '../../services/urls';
import VantToast from '../../shared/toast/Toast';

function Login() {
  const client = new ClientJS();

  const [visitorId, setVisitorId] = useState(null);
  const [value, setValue] = useState('one');
  const navigate = useNavigate();
  const [country, setCountry] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileError, setMobileError] = useState('');
  const [countryCode, setCountryCode] = useState('+91');

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleChange = (event, newValue) => setValue(newValue);
  const handleChangesetCountry = (event) => setCountry(event.target.value);

  const handleMobileChange = (event) => {
    const inputMobile = event.target.value;
    setMobileError(
      inputMobile?.length > 10
        ? 'Invalid mobile number. It must be a 10-digit number'
        : ''
    );
  };

  const initialValue = {
    email: '',
    password: '',
    mobile: '',
  };

  const fk = useFormik({
    initialValues: initialValue,
    onSubmit: () => {
      const reqBody = {
        username: value === 'one' ? String(fk.values.mobile) : fk.values.email,
        password: fk.values.password,
        ipAddress: '',
        u_finger_id: visitorId,
        domain_type: 2,
      };
      if (!reqBody.password || !reqBody.username)
        return VantToast('Please enter all fields', 'f');
      loginFunction(reqBody);
    },
  });

  const loginFunction = async (reqBody) => {
    setLoading(true);
    try {
      const response = await axios.post(endpoint?.login, reqBody, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      if (response?.data?.msg === 'Login Successfully') {
        VantToast(response?.data?.msg, 's');
        const value = response?.data?.token;
        localStorage.setItem(
          'user_id',
          CryptoJS.AES.encrypt(
            JSON.stringify({
              UserID: response?.data?.UserID,
              user_type: response?.data?.user_type,
            }),
            'anand'
          )?.toString()
        );
        localStorage.setItem('token', value);
        sessionStorage.setItem('isAvailableUser', true);
        sessionStorage.setItem('isAvailableCricketUser', true);
        setLoading(false);
        storeCookies();

        ['User', 'Dummy User', 'Support Agent'].includes(
          response?.data?.user_type
        )
          ? navigate('/before-login')
          : ['Admin', 'Super Admin'].includes(response?.data?.user_type) &&
            navigate('/master');

        window.location.reload();
      } else {
        VantToast(response?.data?.msg, 'f');
      }
    } catch (e) {
      VantToast(e?.message, 'e');
    }
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll('input:-webkit-autofill').forEach((el) => {
        el.style.background = '#011341';
        el.style.color = '#92A8E3';
      });
    }, 100);
  }, []);

  const countryCodes = [
    { code: '+91', name: 'India' },
    { code: '+1', name: 'USA' },
    { code: '+44', name: 'UK' },
    { code: '+61', name: 'Australia' },
  ];

  useEffect(() => {
    const handleEnterKeyPress = (event) => {
      if (event.key === 'Enter') {
        fk.handleSubmit();
      }
    };
    window.addEventListener('keydown', handleEnterKeyPress);
    return () => {
      window.removeEventListener('keydown', handleEnterKeyPress);
    };
  }, [fk]);

  useEffect(() => {
    const fetchVisitorId = async () => {
      const fingerprint = client.getFingerprint();
      setVisitorId(fingerprint);
    };

    fetchVisitorId().catch(console.error);
  }, []);

  return (
    <Container>
      <SvgIcons />
      <Box className="fcsb header-one">
        <Box sx={{ width: '25%' }} className="fcs">
          <ArrowLeft style={{ color: 'white' }} />
        </Box>
        <Box sx={{ width: '50%' }} className="fcc">
          <Box component={'img'} src={logo} className="logo"></Box>
        </Box>
        <Box className="fcend" sx={{ width: '25%' }}>
          <Box component={'img'} src={FLAG} className="flag"></Box>
          <Typography color={'#00ECBE'} className="en">
            EN
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background: '#011341',
          padding: '12px 16px 40px 16px',
          '&>p': { color: 'white' },
        }}
      >
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontWeight: '700', mb: 1, fontSize: '17px' }}
        >
          Log in
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontWeight: '400', fontSize: '12px', lineHeight: '7px' }}
        >
          Please log in with your phone number or email
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontWeight: '400', fontSize: '12px' }}
        >
          If you forget your password, please contact customer service
        </Typography>
      </Box>
      <Box sx={{ width: '92%', margin: 'auto' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            sx={{ width: '50%' }}
            value="one"
            label={
              <span
                className="fccsb"
                style={{ color: value === 'one' ? '#00ECBE' : '#92a8e3' }}
              >
                <svg
                  className="svg-icon"
                  width="30"
                  height="30"
                  fill={value === 'one' ? '#00ECBE' : '#92a8e3'}
                >
                  <use xlinkHref="#icon-phone"></use>
                </svg>
                <Typography
                  style={{ color: value === 'one' ? '#00ECBE' : '#92a8e3' }}
                >
                  Phone Number
                </Typography>
              </span>
            }
          />
          <Tab
            sx={{ width: '50%' }}
            value="two"
            label={
              <span
                className="fccsb"
                style={{ color: value === 'two' ? '#00ECBE' : '#92a8e3' }}
              >
                <svg
                  className="svg-icon"
                  width="30"
                  height="30"
                  fill={value === 'two' ? '#00ECBE' : '#92a8e3'}
                >
                  <use xlinkHref="#icon-email"></use>
                </svg>
                <Typography
                  style={{ color: value === 'two' ? '#00ECBE' : '#92a8e3' }}
                >
                  Email Login
                </Typography>
              </span>
            }
          />
        </Tabs>
      </Box>
      <Box sx={{ width: '92%', margin: 'auto', mt: 3 }}>
        {value === 'one' && (
          <Box component="form" onSubmit={fk.handleSubmit}>
            <Stack direction="row" alignItems="center">
              <svg
                style={{ marginRight: '10px' }}
                className="svg-icon"
                width="25"
                height="25"
                fill={'#00ECBE'}
              >
                <use xlinkHref="#icon-phone"></use>
              </svg>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: '16px', fontWeight: '400', color: '#e3efff' }}
              >
                Phone number
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box sx={{ width: '25%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100% !important',
                    mt: 2,
                  }}
                >
                  <Select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    IconComponent={KeyboardArrowDown}
                    sx={{
                      backgroundColor: '#011341',
                      color: '#92A8E3 !important',
                      fontSize: '16px',
                      fontWeight: 500,
                      borderRadius: '8px',
                      padding: '6px 12px',
                      minWidth: 80,
                      width: '100%',
                      '& fieldset': { border: 'none' },
                      '& .MuiSelect-select': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px 10px',
                      },
                      '& .MuiSvgIcon-root': { color: '#AAB4E5' },
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          backgroundColor: '#0B0E2F',
                          color: '#92A8E3 !important',
                          borderRadius: '10px',
                          boxShadow: 'none',
                          border: 'none',
                          maxWidth: '395px',
                          width: '90%',
                          left: '50% !important',
                          transform: 'translateX(-50%) !important',
                          marginTop: '8px',
                          padding: '0px',
                          '&>div': { color: '#92A8E3 !important' },
                        },
                      },
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                      },
                      transformOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                      },
                    }}
                    renderValue={(selected) => selected}
                  >
                    {countryCodes.map((country) => (
                      <MenuItem
                        key={country.code}
                        value={country.code}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '12px 24px',
                          backgroundColor:
                            countryCode === country.code
                              ? '#00ECBE !important'
                              : '',
                          color:
                            countryCode === country.code
                              ? '#0B0E2F !important'
                              : '#FFD89D !important',
                          fontWeight: countryCode === country.code ? 600 : 400,
                          borderRadius: '8px',
                          '&:hover': { backgroundColor: '', color: '#0B0E2F' },
                          width: '100%',
                          margin: '4px auto',
                          maxWidth: '397px',
                        }}
                      >
                        <Box
                          sx={{
                            fontWeight: 500,
                            color:
                              countryCode === country.code
                                ? '#0B0E2F !important'
                                : '#fff !important',
                          }}
                        >
                          {country.code}
                        </Box>
                        <Box
                          sx={{
                            color:
                              countryCode === country.code
                                ? '#0B0E2F !important'
                                : '#fff !important',
                          }}
                        >
                          {country.name}
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
              <Box sx={{ width: '70%' }}>
                <FormControl fullWidth sx={{ ...style.inputfield }}>
                  <TextField
                    id="mobile"
                    name="mobile"
                    onChange={(e) => {
                      fk.handleChange(e);
                      handleMobileChange(e);
                    }}
                    value={fk.values.mobile}
                    label=""
                    placeholder="Please enter the phone number"
                    fullWidth
                    type="number"
                    sx={{
                      '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button':
                        {
                          WebkitAppearance: 'none',
                          margin: 0,
                        },
                      '& input[type=number]': { MozAppearance: 'textfield' },
                    }}
                  />
                </FormControl>
                {mobileError && (
                  <Typography
                    sx={{
                      color: 'red',
                      marginBottom: '-40px',
                      fontSize: '13px',
                    }}
                    color="warning"
                  >
                    {mobileError}
                  </Typography>
                )}
              </Box>
            </Stack>

            <Box mt={2}>
              <Stack direction="row" alignItems="center">
                <svg
                  style={{ marginRight: '10px' }}
                  className="svg-icon"
                  width="25"
                  height="25"
                  fill={'#00ECBE'}
                >
                  <use xlinkHref="#icon-editPswIcon"></use>
                </svg>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: '16px', fontWeight: '400', color: '#e3efff' }}
                >
                  Password
                </Typography>
              </Stack>
              <FormControl fullWidth sx={{ ...style.passwordfield }}>
                <FilledInput
                  placeholder="Enter password"
                  id="password"
                  name="password"
                  onChange={fk.handleChange}
                  value={fk.values.password}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <ClosedEye className="white" />
                        ) : (
                          <EyeO style className="white" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Box>
        )}
        {value === 'two' && (
          <Box component="form" onSubmit={fk.handleSubmit}>
            <Box>
              <Stack direction="row" alignItems="center">
                <svg
                  style={{ marginRight: '10px' }}
                  className="svg-icon"
                  width="25"
                  height="25"
                  fill={'#00ECBE'}
                >
                  <use xlinkHref="#icon-email"></use>
                </svg>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: '16px', fontWeight: '400', color: '#e3efff' }}
                >
                  Mail
                </Typography>
              </Stack>
              <FormControl fullWidth sx={{ ...style.inputfield }}>
                <TextField
                  class="sub"
                  id="email"
                  name="email"
                  onChange={fk.handleChange}
                  value={fk.values.email}
                  label=""
                  placeholder="please input your email"
                  fullWidth
                  type="email"
                />
              </FormControl>
            </Box>
            <Box mt={2}>
              <Stack direction="row" alignItems="center">
                <svg
                  style={{ marginRight: '10px' }}
                  className="svg-icon"
                  width="25"
                  height="25"
                  fill={'#00ECBE'}
                >
                  <use xlinkHref="#icon-editPswIcon"></use>
                </svg>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ fontSize: '16px', fontWeight: '400', color: '#e3efff' }}
                >
                  Password
                </Typography>
              </Stack>
              <FormControl fullWidth sx={{ ...style.passwordfield }}>
                <FilledInput
                  placeholder="please input your password"
                  id="password"
                  name="password"
                  onChange={fk.handleChange}
                  value={fk.values.password}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <ClosedEye className="white" />
                        ) : (
                          <EyeO className=" white" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Box>
        )}
        <Box mt={3}>
          <FormGroup mt={3}>
            <Checkbox
              style={{
                '&>span': { fontSize: '12px', color: 'white' },
                color: 'white',
              }}
              defaultChecked
              checkedColor="#028E83"
            >
              Remember password
            </Checkbox>
          </FormGroup>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', mt: 3 }}>
          <Button
            onClick={() => fk.handleSubmit()}
            // onClick={() => navigate('/chickenroad')}
            sx={{
              padding: '6px',
              width: '100%',
              background: 'linear-gradient(180deg, #7afec3, #02afb6)',
              color: '#05012B',
              borderRadius: '20px',
              mb: 2,
              fontSize: '19px',
              fontWeight: '700',
              '&:hover': {
                background: 'linear-gradient(90deg, #7afec3, #02afb6)',
              },
            }}
          >
            Log in
          </Button>
          <NavLink to="/register">
            <Button
              sx={{
                padding: '3px 15px !important',
                width: '100%',
                borderRadius: '20px',
                fontSize: '21px',
                fontWeight: '700',
              }}
              variant="outlined"
            >
              Register
            </Button>
          </NavLink>
        </Box>
        <Stack direction="row" justifyContent="space-around" mt={3}>
          <Box className="fccc" onClick={() => navigate('/forgot')}>
            <svg
              style={{ marginRight: '10px' }}
              className="svg-icon"
              width="40"
              height="40"
              fill={'#05012B'}
            >
              <use xlinkHref="#icon-clock_b"></use>
            </svg>
            <Typography sx={{ fontSize: '13px', color: 'white' }}>
              Forgot Password
            </Typography>
          </Box>
          <Box className="fccc" onClick={() => navigate('/services')}>
            <svg
              style={{ marginRight: '10px' }}
              className="svg-icon"
              width="40"
              height="40"
            >
              <use xlinkHref="#icon-serverTicket1"></use>
            </svg>
            <Typography sx={{ fontSize: '13px', color: 'white' }}>
              Customer Service
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default Login;

const style = {
  inputfield: {
    width: '100%',
    mt: 2,
    color: '#92A8E3',
    '&>div>div>input': {
      background: '#011341',
      padding: 3,
      borderRadius: '10px',
      color: '#92A8E3',
    },
    '&>div>div>fieldset': { border: 'none !important', color: '#92A8E3' },
    '&>div>div>input:focus': { color: '#92A8E3' },
  },
  passwordfield: {
    '&>div>input': { padding: 3, color: '#92A8E3' },
    '&>div': {
      mt: 2,
      background: '#011341',
      borderRadius: '10px',
      color: '#92A8E3',
    },
    '&>div::before': { border: 'none !important', color: '#92A8E3' },
    '&>div::after:focus': { color: '#92A8E3', border: 'none !important' },
  },
  selectfield: {
    '&>div>div': {
      background: '#011341',
      borderRadius: '10px',
      padding: '11px 3px',
      color: '#92A8E3',
    },
    '&>div>fieldset': {
      border: '1px solid #011341',
      color: '#92A8E3',
      borderRadius: '10px',
    },
    '&>div': { mt: 2, color: '#92A8E3' },
  },
};
