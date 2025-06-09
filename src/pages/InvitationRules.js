import React from 'react';
import Layout from '../component/layout/Layout';
import { Box, Container, Stack, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import backbtn from '../assets/images/backBtn.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Rules from '../assets/images/Jalwa_files/rules.png';
const InvitationRules = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const invitation = [
    {
      amount: '500',
      income: '55',
      people: '1',
    },
    {
      amount: '500',
      income: '155',
      people: '3',
    },
    {
      amount: '500',
      income: '555',
      people: '10',
    },
    {
      amount: '550',
      income: '1555',
      people: '30',
    },
    {
      amount: '550',
      income: '2555',
      people: '50',
    },
    {
      amount: '650',
      income: '3355',
      people: '70',
    },
    {
      amount: '650',
      income: '5555',
      people: '100',
    },
    {
      amount: '850',
      income: '10955',
      people: '200',
    },
    {
      amount: '850',
      income: '25555',
      people: '500',
    },
    {
      amount: '1000',
      income: '48555',
      people: '1000',
    },
    {
      amount: '1000',
      income: '355555',
      people: '5000',
    },
    {
      amount: '1000',
      income: '755555',
      people: '10000',
    },
    {
      amount: '1000',
      income: '1555555',
      people: '20000',
    },
    {
      amount: '1000',
      income: '3555555',
      people: '50000',
    },
    {
      amount: '1000',
      income: '7555555',
      people: '100000',
    },
  ];
  return (
    <Layout header={false} className="overflow-y-auto">
      <Container sx={{ background: '#05012B' }} className="h-full">
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
              <ArrowBackIosNewIcon className="!text-white !text-lg ml-1" />
            </NavLink>
            <Box sx={{ position: 'absolute', left: '30%', top: '10%' }}>
              <Typography
                variant="body1"
                sx={{ color: 'white', fontSize: '16px', fontWeight: '600' }}
              >
                Invitation Reward Rules
              </Typography>
            </Box>
          </Stack>
        </Box>
        <div className="w-full h-full flex flex-col mt-2 px-3 ">
          <div className="flex flex-col">
            <p className="text-sm font-normal">
              Invite friends and recharge to get additional platform <br />{' '}
              rewards!
            </p>
            <p className="text-sm">
              After being claimed,the rewards will be directly distributed to{' '}
              <br />
              the wallet balance within 10 minutes.
            </p>
          </div>
          <div className="flex flex-col  items-center p-1  mt-4 rounded-lg  shadow-md">
            <div className="flex items-center justify-around bg-[#2C5ECA] rounded-t-xl  w-[100%]  p-2">
              <p className="text-white">Invite account</p>
              <p className="text-white">Deposite amount</p>
              <p className="text-white">Bonus</p>
            </div>
            {invitation?.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className={`flex w-full justify-around p-2 ${
                      index % 2 === 0 ? 'bg-[#011341]' : 'bg-[#05012B]'
                    }`}
                  >
                    <p className="text-sm">{item?.people}people</p>
                    <p className="text-sm">
                      ₹{Number(item?.amount)?.toFixed(0, 2)}
                    </p>
                    <p className="text-sm">₹{item?.income}</p>
                  </div>
                </>
              );
            })}
          </div>
          <img src={Rules} />
        </div>
      </Container>
    </Layout>
  );
};

export default InvitationRules;
