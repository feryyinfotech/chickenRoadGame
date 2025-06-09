import React from 'react';
import Layout from '../../component/layout/Layout';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import bgimg from '../../assets/images/superJackpot.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { MdWindow } from 'react-icons/md';
import SvgIcons from '../../component/SvgIcons';

const SuperJackpot = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Layout header={false}>
      <SvgIcons />
      <Container sx={{ background: '#05012B' }} className="h-screen ">
        <Box className=" !bg-[#05012B] p-2">
          <Stack
            direction="row"
            sx={{
              alignItems: 'end',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <NavLink onClick={goBack}>
              {/* <Box component="img" src={backbtn} width={25}></Box> */}
              <ArrowBackIosIcon className="!ml-2 !text-white !h-5" />
            </NavLink>
            <Box sx={{ position: 'absolute', left: '35%', top: '10%' }}>
              <Typography
                variant="body1"
                sx={{ color: 'white', fontSize: '18px', fontWeight: '400' }}
              >
                Super Jackpot
              </Typography>
            </Box>
          </Stack>
        </Box>
        <div className="w-full flex flex-col">
          <div className="relative w-full h-[200px]">
            <img
              src={bgimg}
              className="absolute z-10 w-full h-full object-cover"
              alt="Background"
            />
            <div className="absolute inset-0  opacity-90"></div>
            <div className="relative z-10 p-3 flex flex-col gap-[1rem] text-white">
              <h1 className="font-bold text-xl mt-1 !text-white">
                Super Jackpot
              </h1>
              <p className="text-xs mt-3 !text-white">
                When you get the Super Jackpot in 【Slots】 <br />
                Can get 1 additional bonus
              </p>
              <p className="text-xs mt-2 !text-white">
                The reward is valid for 30 day, and you ,<br /> will not be able
                to claim it after it expires!
              </p>
            </div>
          </div>

          <Button className="!bg-slate-700 gap-1  !text-slate-500 !px-2 !m-2 !rounded-full !!text-xs font-medium">
            <MdWindow className="w-6 h-6 border border-gray-600 rounded-full bg-slate-500 p-1  inline-block text-gray-700" />
            Receive in batches
          </Button>
          <div className="flex items-center justify-center gap-3 mt-1">
            <Button
              className="!bg-[#011341] w-[45%] p-3 !text-white  !rounded-lg text-sm font-medium flex items-center justify-center"
              onClick={() => navigate('/superjackpotrules')}
            >
              <svg className="svg-icon mr-2 " width="25" height="25">
                <use xlinkHref="#icon-rule"></use>
              </svg>
              Rule
            </Button>

            <Button
              className="!bg-[#011341] w-[45%] p-3 !text-white  !rounded-lg text-sm font-medium flex items-center justify-center"
              onClick={() => navigate('/winningstar')}
            >
              <svg className="svg-icon mr-2 " width="25" height="25">
                <use xlinkHref="#icon-winningStar"></use>
              </svg>
              Winning Star
            </Button>
          </div>

          <div className="flex flex-col justify-center items-center bg-[#011341]  mx-4 my-2">
            <svg className="svg-icon  w-[12rem] h-[12rem]">
              <use xlinkHref="#icon-empty"></use>
            </svg>
            <p className="text-sm text-[#92A8E3] mb-2 ">
              You don't have a big jackpot yet, let's bet
            </p>
          </div>
          <Button className="!bg-[#4CE0BE] !text-[#011341] !py-2 !mx-5 !px-2 !rounded-full !text-sm font-medium">
            Go Bet
          </Button>
        </div>
      </Container>
    </Layout>
  );
};

export default SuperJackpot;
