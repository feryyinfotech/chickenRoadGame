import { Box, Button, Container, FormControl, Stack, TextField, Typography, } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { endpoint } from "../../services/urls";
import SvgIcons from "../../component/SvgIcons";
import { BsArrowLeft } from "react-icons/bs";
import FLAG from '../../assets/images/FLAG.png';
import logo from '../../assets/images/logo.png';



function ForgetPassword() {

  const navigate = useNavigate();
  const initialValue = {
    email: ""
  }
  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    onSubmit: () => {
      if (!fk.values.email) {
        return toast("Please Enter Field")
      }
      const reqbody = {
        email: fk.values.email
      }
      EmailFn(reqbody)
    }
  })
  const EmailFn = async (reqbody) => {
    try {
      const response = await axios.post(endpoint?.user_email, reqbody)
      toast(response?.data?.msg)
      if (response?.data?.msg === "Email Send Successfully") {
        navigate('/')
      }
      console.log(response)
    }
    catch (e) {
      console.log("something went wrong")
    }
  }


  return (
    <>

      <Container sx={{ minHeight: "100vh" }}>
        <SvgIcons />
        <Box className="fcsb header-one" >
          <Box sx={{ width: '25%' }} className="fcs">
            <BsArrowLeft style={{ color: 'white' }} />
          </Box>
          <Box sx={{ width: '50%' }} className="fcc">
            <Box component={'img'} src={logo} className='logo' ></Box>
          </Box>
          <Box className="fcend" sx={{ width: '25%' }}>
            <Box component={'img'} src={FLAG} className='flag' ></Box>
            <Typography color={'#00ECBE'} className='en'>EN</Typography>
          </Box>
        </Box>
        <Box sx={{ background: '#011341', padding: "12px 16px 40px 16px", '&>p': { color: 'white' }, }}>
          <Typography variant="body1" color="initial" sx={{ fontWeight: '700', mb: 1, fontSize: '17px' }}>  Forget Password</Typography>
          <Typography variant="body1" color="initial" sx={{ fontWeight: '400', fontSize: '12px', lineHeight: '7px' }}>
            After sent Email , Please do not refresh your page.
          </Typography>
          <Typography variant="body1" color="initial" sx={{ fontWeight: '400', fontSize: '12px', }}>
            If you forget your password, please contact customer service
          </Typography>
        </Box>
        <Box sx={{ width: "95%", marginLeft: "2.5%", borderRadius: "10px", }}>
          <Box component="form" sx={{ width: "100%", transition: "0.3s", }} onSubmit={fk.handleSubmit}>

            <Stack direction="row" alignItems="center" mt={2}>
              <svg style={{ marginRight: '10px' }} className="svg-icon" width="25" height="25" fill={'#00ECBE'}><use xlinkHref="#icon-email"></use></svg>
              <Typography variant="body1" color="initial" sx={{ fontSize: '16px', fontWeight: '400', color: '#e3efff' }}>
                Mail
              </Typography>
            </Stack>
            <FormControl fullWidth sx={{ ...style.inputfield }}>
              <TextField class="sub"
                id="email"
                type="email"
                name="email"
                placeholder="Enter email "
                className="loginfieldsff !mt-5"
                value={fk.values.email}
                onChange={fk.handleChange}
                onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
              />
            </FormControl>

            <div className="flex flex-col justify-center !mt-5">
              <Button
                type="submit"
                value="Submit"
                component={NavLink}
                className="!bg-white"
                onClick={fk.handleSubmit}
                sx={{
                  textTransform: 'capitalize',
                  padding: '6px', width: '100%', background: 'linear-gradient(180deg, #7afec3, #02afb6)',
                  color: '#05012B', borderRadius: '20px', mb: 2, fontSize: '17px', fontWeight: '700', '&:hover': { background: 'linear-gradient(90deg, #7afec3, #02afb6)' },
                }}
              >
                Submit
              </Button>
              <NavLink to="/">
                <Button sx={{ padding: '3px 15px !important', width: '100%', borderRadius: '20px', fontSize: '17px', fontWeight: '700', }}
                  variant="outlined">  Return to Login</Button>
              </NavLink>
            </div>
            <Stack direction="row" className="loginbtnbox" mt={2}></Stack>
            {/* <CustomCircularProgress isLoading={loding} /> */}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default ForgetPassword;
const style = {
  inputfield: { width: '100%', mt: 2, color: '#92A8E3', '&>div>div>input': { width: '100%', background: '#011341', padding: 3, borderRadius: '10px', color: '#92A8E3' }, '&>div>div>fieldset': { border: 'none !important', color: '#92A8E3' }, '&>div>div>input:focus': { color: '#92A8E3' }, '&>div>div': { width: '100%' } },
}