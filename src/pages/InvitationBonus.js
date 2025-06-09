import React from 'react';
import Layout from '../component/layout/Layout';
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import backbtn from '../assets/images/backBtn.png';
import bgimg from '../assets/images/invitation_bg.png';
import invitation1 from '../assets/images/Invitation-reward.svg';
import invitation2 from '../assets/images/Invitation -bonus.svg';
import cancel from '../assets/images/cross.svg';
import { Close } from '@mui/icons-material';
import { useQuery } from 'react-query';
import { endpoint } from '../services/urls';
import { apiConnectorGet } from '../services/apiconnector';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const InvitationBonus = () => {
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
  const { isLoading, data } = useQuery(
    ['get_invitation'],
    () => apiConnectorGet(endpoint?.invitation_bonus_data),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const res = data?.data;
  // console.log(res);
  console.log(res?.achieved);

  return (
    <Layout header={false}>
      <Container sx={{ background: '#05012B' }} className="h-full">
        <Box className=" !bg-[#05012B] p-3">
          <Stack
            direction="row"
            sx={{
              alignItems: 'end',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <NavLink onClick={goBack}>
              <ArrowBackIosNewIcon className="!text-white !text-base" />
            </NavLink>
            <Box
              className="!flex !justify-center !items-center"
              sx={{ position: 'absolute', left: '35%', top: '7%' }}
            >
              <Typography
                variant="body1"
                sx={{ color: 'white', fontSize: '17px', fontWeight: '500' }}
              >
                Invitation Bonus
              </Typography>
            </Box>
          </Stack>
        </Box>

        <div className="relative w-full h-[200px] ">
          <img
            src={bgimg}
            className="absolute w-full z-0 h-full object-cover bg-gradient-to-r from-[#F99334] via-[#FF6D24] to-[#FFC08B]"
          />
          <div className="absolute inset-0 "></div>
          <div className="absolute  flex flex-col !text-white px-3 gap-1 mt-4">
            <h1 className="text-lg !text-white font-bold">
              Invite friends and deposit
            </h1>
            <p className="text-sm !text-white ">
              Both parties can receive rewards
            </p>
            <p className="text-sm  !text-white">
              Invite friends to register and <br /> recharge to receive rewards
            </p>
            <p className="text-sm !text-white">activity date</p>
            <p className="text-lg font-normal !text-white pt-1">
              2025-04-12-2041-12-04
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 pt-2 pb-2  w-[85%] place-content-between relative -mt-4 bg-[#001C54] shadow-lg rounded-lg">
            <div
              className="flex flex-col items-center"
              onClick={() => navigate('/invitationBonus/rules')}
            >
              <img src={invitation1} className=" p-2 h-16" />
              <p className="text-sm xs:text-xs">Invitation reward rules</p>
            </div>
            <div
              className="flex flex-col items-center"
              onClick={() => navigate('/account/income-main/cashback-bonus')}
            >
              <img src={invitation2} className=" p-2 h-16 " />
              <p className="text-sm xs:text-xs">Invitation record</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col p-4 gap-2 justify-center">
          {invitation?.map((item, index) => {
            return (
              <>
                <div className="abcd flex flex-col bg-gradient-to-l from-[#011341] to-[#011341] shadow-lg rounded-lg p-2">
                  <div className="flex justify-between items-center border-b-2 border-[#022964]">
                    <div className=" bg-[#17B15E] flex items-center justify-between p-2 gap-[2rem] rounded-tl-md rounded-br-2xl shadow-sm">
                      <div className="flex gap-1">
                        <p className="text-sm font-medium text-[#E2E8F0]">
                          Bonus
                        </p>
                        <p className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-[#7E80AD] text-xs font-bold shadow-md">
                          {index + 1}
                        </p>
                      </div>
                      <img
                        src={cancel}
                        className="!w-[26px] !h-[26px] place-content-end cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center  ">
                      <p className="text-sm font-semibold text-[#DD9138]">₹</p>
                      <p className="text-sm font-bold text-[#DD9138] ml-1">
                        {Number(item?.income).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col  pt-2">
                    <div className="flex items-center gap-[8rem] bg-[#001C54] bg-opacity-90 border-4 border-[#001C54]  p-1 ">
                      <p className="text-white text-xs">Number of invitees</p>
                      <p className="font-normal text-xs text-white ">1</p>
                    </div>
                    <div className="flex items-center mt-2 gap-[6rem]  bg-[#001C54] bg-opacity-90 border-4 border-[#001C54] p-1">
                      <p className="text-white !text-xs ">
                        Recharge per people
                      </p>
                      <div className="flex items-center ">
                        <p className="text-red-600 !text-xs">₹</p>
                        <p className="!text-red-600 font-semibold !text-xs ">
                          {Number(item?.amount).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr className="w-full border-[#001C54] border-b-[3px] rounded-r-full rounded-l-full p-3 border-dashed" />
                  <div className="flex justify-between items-center gap-2 p-1 mt-3 px-4">
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <p
                        className="text-sm font-bold text-[#DD9138]"
                        // style={{ letterSpacing: '0.4em' }}
                      >
                        {Number(res?.data?.[0]?.invitees) > Number(item?.people)
                          ? item?.people
                          : res?.data?.[0]?.invitees}
                        /{item?.people}
                      </p>
                      <p className="text-xs text-[#7d98b9]">
                        Number of invitees
                      </p>
                    </div>
                    <div className="w-px h-8 bg-[#7d98b9] mx-2" />
                    <div className="flex flex-col gap-2 items-center flex-1">
                      <p
                        className="text-sm font-bold  text-red-500"
                        // style={{ letterSpacing: '0.4em' }}
                      >
                        {Number(res?.data?.[0]?.[`greater_${item?.amount}`]) >
                        Number(item?.people)
                          ? item?.people
                          : res?.data?.[0]?.[`greater_${item?.amount}`]}
                        /{item?.people}
                      </p>
                      <p className="text-xs text-[#7d98b9]">Deposit number</p>
                    </div>
                  </div>

                  <button className=" text-base mt-3 py-[6px] bg-[#3D4863] text-white font-semibold rounded-full shadow-lg">
                    {res?.achieved?.find(
                      (i) => Number(i?.l01_amount) === Number(item?.income)
                    )
                      ? 'Finished'
                      : 'Unfinished'}
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
};

export default InvitationBonus;
const styles = {
  container: {
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    pb: 2,
    mb: 2,
  },
  flexBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '10px',
    position: 'relative',
  },
  bonusBox: {
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#17B15E',
    padding: '10px',
    borderRadius: '10px 0px 20px 0px',
  },
  bonusNumber: {
    marginLeft: '16px',
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '50%',
    padding: '0px 8px',
    fontWeight: 600,
    fontSize: '14px',
    width: '23px',
    height: '23px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIconBox: {
    marginLeft: 4,
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
  },
  bonusAmount: {
    position: 'absolute',
    right: '0px',
    color: '#dd9138',
    width: '60%',
    padding: '10px 10px 6px 10px',
    textAlign: 'end',
    borderBottom: '1px dashed white',
    fontSize: '13px',
    fontWeight: '600',
  },
  detailsBox: {
    marginTop: '16px',
    padding: '2px 16px',
    backgroundColor: '#555',
    borderRadius: '2px',
  },
  labelText: {
    color: '#ddd',
  },
  valueText: {
    color: '#fff',
    width: '50%',
    textAlign: 'center',
  },
  rechargeText: {
    color: 'red',
    width: '50%',
    textAlign: 'center',
  },
  separator: {
    width: '90%',
    ml: '5%',
    position: 'relative',
    '&:before': {
      content: '""',
      width: '23px',
      height: '23px',
      backgroundColor: '#262424',
      position: 'absolute',
      top: '-11px',
      left: '-29px',
      borderRadius: '50%',
    },
    '&:after': {
      content: '""',
      width: '23px',
      height: '23px',
      backgroundColor: '#262424',
      position: 'absolute',
      top: '-11px',
      right: '-29px',
      borderRadius: '50%',
    },
  },
  numberDetails: {
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  numberDetailBox: {
    borderRight: '1px dashed white',
    width: '50%',
  },
  numberDetailText: {
    color: '#ffcc00',
  },
  depositDetailText: {
    color: 'red',
  },
};
