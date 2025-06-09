import React from 'react';
import Layout from '../../component/layout/Layout';
import { Box, Container, Stack, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import backbtn from '../../assets/images/backBtn.png';
import profile1 from '../../assets/images/profile1.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const WinningStar = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Layout header={false}>
      <Container sx={{ background: '#05012B' }} className="h-screen ">
        <Box className=" !bg-[#05012B] p-1">
          <Stack
            direction="row"
            sx={{
              alignItems: 'end',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <NavLink onClick={goBack}>
              <ArrowBackIosIcon className="!ml-2 !text-white !h-5" />
            </NavLink>
            <Box sx={{ position: 'absolute', left: '40%', top: '10%' }}>
              <Typography
                variant="body1"
                sx={{ color: 'white', fontSize: '16px', fontWeight: '400' }}
              >
                Winning Star
              </Typography>
            </Box>
          </Stack>
        </Box>
        <div className=" m-3 p-2 shadow-md rounded-md bg-[#011341] flex flex-col">
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 pt-2">
              <img src={profile1} className="w-[10%] h-[10%] rounded-full" />
              <p className="text-white">919***907</p>
            </div>
            <div className="grid grid-cols-2 p-1 bg-[#001C54] ">
              <p className=" text-xs">Game name</p>
              <p className="text-white text-xs ">Aviator</p>
            </div>
            <div className="grid grid-cols-2 p-1 bg-[#001C54] ">
              <p className=" text-xs">Number of wins</p>
              <p className="text-[#DD9138] text-xs ">20X</p>
            </div>
            <div className="grid grid-cols-2 p-1 bg-[#001C54] ">
              <p className=" text-xs">Bonus</p>
              <p className="text-red-500  text-xs">₹100.00</p>
            </div>
            <div className="grid grid-cols-2 p-1 bg-[#001C54] ">
              <p className="text-xs">Winning time</p>
              <p className=" text-xs  ">2025-02-24 14:24:01</p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default WinningStar;
