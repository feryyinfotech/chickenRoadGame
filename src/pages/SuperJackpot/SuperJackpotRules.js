import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../component/layout/Layout';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import backbtn from '../../assets/images/backBtn.png';
import bgimg from '../../assets/images/superJackpotRulebg.png';
import { CiWarning } from 'react-icons/ci';
import bonus from '../../assets/images/f1.png';
import { CiPlay1 } from 'react-icons/ci';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import support from '../../assets/images/c1.png';
import SvgIcons from '../../component/SvgIcons';

const SuperJackpotRules = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const data = [
    {
      winningrate: '20X-29.99X',
      betammount: '₹30-₹99',
      bonus: '₹50.00',
    },
    {
      winningrate: '30X-39.99X',
      betammount: '₹30-₹99',
      bonus: '₹100.00',
    },
    {
      winningrate: '40X-59.99X',
      betammount: '₹30-₹99',
      bonus: '₹150.00',
    },
    {
      winningrate: '60X-99999X',
      betammount: '₹30-₹99',
      bonus: '₹250.00',
    },
    {
      winningrate: '10X-19.99X',
      betammount: '₹100-₹99999',
      bonus: '₹50.00',
    },
    {
      winningrate: '20X-29.99X',
      betammount: '₹100-₹99999',
      bonus: '₹100.00',
    },
    {
      winningrate: '30X-39.99X',
      betammount: '₹100-₹99999',
      bonus: '₹200.00',
    },
    {
      winningrate: '40X-59.99X',
      betammount: '₹100-₹99999',
      bonus: '₹300.00',
    },
    {
      winningrate: '10X-19.99X',
      betammount: '₹100-₹99999',
      bonus: '₹500.00',
    },
  ];
  return (
    <Layout header={false}>
      <SvgIcons />
      <Container sx={{ background: '#05012B' }} className="h-full ">
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
            <Box sx={{ position: 'absolute', left: '45%', top: '10%' }}>
              <Typography
                variant="body1"
                sx={{ color: 'white', fontSize: '16px', fontWeight: '400' }}
              >
                Rule
              </Typography>
            </Box>
          </Stack>
        </Box>
        <div className="w-full flex flex-col">
          <div className="relative w-full">
            <img
              src={bgimg}
              className="absolute z-10 w-full h-full object-cover"
              alt="Background"
            />
            <div className="absolute inset-0 bg-[#F54545] opacity-90"></div>
            <div className="relative z-10 p-3 flex flex-col ">
              <h1 className="text-sm font-bold ml-4  text-white">
                Super Jackpot
              </h1>
              <p className="text-xs mt-1 ml-4 text-white">
                When you win the Super Jackpot in <br />
                the game, you can get additional <br /> platform bonuses, and
                the bonuses <br /> will be distributed to you according <br />{' '}
                to the multiple of the winning prize
              </p>
              <div className=" bg-[#E26642] p-1 mx-6  items-center flex rounded-md justify-center bg-opacity-70  mt-4">
                <div className="flex items-star ">
                  <svg className="svg-icon mt-3" width="18" height="18">
                    <use xlinkHref="#icon-warningTriangle"></use>
                  </svg>
                  <p className="text-xs text-white p-1 my-2">
                    {' '}
                    Warning: Please claim all bonuses before the event <br />{' '}
                    ends. After the event ends, you will lose the chance to{' '}
                    <br /> get the bonus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[100%] h-full items-start mt-3 rounded-lg px-3 shadow-md">
            <div className="flex !place-items-center gap-2">
              <svg className="svg-icon mr-2 " width="25" height="25">
                <use xlinkHref="#icon-superJackpotRule"></use>
              </svg>
              <p className=" font-bold text-base text-white">Bonus</p>
            </div>
            <div className="flex justify-around rounded-t-lg !font-semibold mt-2 bg-[#2C5ECA] w-full p-3">
              <p className="text-white text-xs">Winning rate</p>
              <p className="text-white text-xs">Bet amount</p>
              <p className="text-white text-xs">Bonus</p>
            </div>
            {data.map((i, index) => (
              <div
                key={index}
                className={`flex w-full justify-around p-3 ${
                  index % 2 === 0 ? 'bg-[#011341]' : 'bg-[#05012B]'
                }`}
              >
                <p className="text-yellow-500 text-xs">{i.winningrate}</p>
                <p className="text-xs text-white">{i.betammount}</p>
                <p className="text-red-500 text-xs">{i.bonus}</p>
              </div>
            ))}
          </div>
          <div className="flex ml-3 bg-[#011341] justify-center p-1 m-3 items-center rounded-lg shadow-md">
            <div className="flex items-start gap-1">
              <svg className="svg-icon mt-2" width="15" height="15">
                <use xlinkHref="#icon-rightTriangle"></use>
              </svg>
              <p className="text-xs flex p-1 my-1 text-[#7FA8D9]">
                All event interpretation rights belong to the platform. If you
                have any questions, please contact customer service now.
              </p>
            </div>
          </div>
          <Button className="!bg-gradient-to-b from-[#54E5BF] to-[#16BCB8]  !m-3 !rounded-full  gap-2">
            <svg className="svg-icon " width="30" height="30">
              <use xlinkHref="#icon-customerPublic"></use>
            </svg>
            <span className="font-bold !text-[#050147]">
              {' '}
              Contact customer service
            </span>
          </Button>
        </div>
      </Container>
    </Layout>
  );
};

export default SuperJackpotRules;
