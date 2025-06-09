import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import backbtn from '../assets/images/backBtn.png';
import cancel from '../assets/images/cross.svg';
import bgimg from '../assets/images/invitation_bg.png';
import Layout from '../component/layout/Layout';
import { ProfileDataFunction } from '../services/apiCallings';
import { apiConnectorGet } from '../services/apiconnector';
import { endpoint } from '../services/urls';

const DailyMission = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const mission = [
    {
      amount: '3000',
      income: '18',
    },
    {
      amount: '5000',
      income: '28',
    },
    {
      amount: '10000',
      income: '50',
    },
    {
      amount: '50000',
      income: '280',
    },
    {
      amount: '100000',
      income: '500',
    },
    {
      amount: '500000',
      income: '900',
    },
  ];
  const { isLoading, data } = useQuery(
    ['daily_salary_income'],
    () => apiConnectorGet(endpoint?.daily_salary_income),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const res = data?.data?.data;

  const { data: user } = useQuery(['profile'], () => ProfileDataFunction(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
  });
  const profile = user?.data?.data || [];

  console.log(profile?.today_betting_by_user);

  return (
    <Layout header={false}>
      <Container sx={{ background: '#05012B' }} className="h-full">
        <Box className=" !bg-[#00ECBE] p-1">
          <Stack
            direction="row"
            sx={{
              alignItems: 'end',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <NavLink onClick={goBack}>
              <Box component="img" src={backbtn} width={25}></Box>
            </NavLink>
            <Box sx={{ position: 'absolute', left: '30%', top: '10%' }}>
              <Typography
                variant="body1"
                sx={{ color: 'white', fontSize: '16px', fontWeight: '600' }}
              >
                Daily Mission
              </Typography>
            </Box>
          </Stack>
        </Box>

        <div className="relative w-[100%] h-[200px] ">
          <img
            src={bgimg}
            className="absolute w-full z-20 h-full object-cover"
          />
          <div className="absolute inset-0 "></div>
          <div className="absolute  flex flex-col text-white px-3 gap-1 mt-4">
            <h1 className="text-lg font-bold">Invite friends and deposit</h1>
            <p className="text-sm ">Both parties can receive rewards</p>
            <p className="text-sm ">
              Invite friends to register and <br /> recharge to receive rewards
            </p>
            <p className="text-sm">activity date</p>
            <p className="text-sm font-bold">2025-02-03-2099-02-03</p>
          </div>
        </div>

        <div className="overflow-y-scroll h-full">
          {mission?.map((item, index) => {
            return (
              <>
                <div className="w-[90%] flex flex-col ml-5 mt-3 bg-gradient-to-l from-[#011341] to-[#23c4b9] shadow-lg rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <div className="w-[45%] bg-[#011341] flex items-center mt-0 p-2 rounded-md shadow-sm">
                      <p className="text-xs font-semibold text-white-800">
                        Daily Mission
                      </p>
                      <p className="w-4 h-4 flex items-center justify-center rounded-full bg-white text-black font-bold ml-5 shadow-md ">
                        {index + 1}
                      </p>
                      <img
                        src={cancel}
                        className="w-4 h-4 ml-auto cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-white-700">₹</p>
                      <p className="text-lg font-bold text-white-800 ml-1">
                        {item?.income}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col border-t border-white-400 mt-3 pt-2">
                    <div className="flex justify-between mt-1">
                      <p className="text-black-600">Daily Betting Bonus</p>
                      <div className="flex items-center">
                        <p className="text-red-500 font-semibold ml-1"></p>
                        {Number(profile?.today_betting_by_user) >
                        Number(item?.amount)
                          ? Number(item?.amount)
                          : Number(profile?.today_betting_by_user)?.toFixed(
                              0,
                              2
                            )}
                        /{item?.amount}
                      </div>
                    </div>
                  </div>

                  <button className="w-full text-lg mt-3 py-2 bg-gradient-to-r from-[#011341] to-[#011341] text-white font-semibold rounded-md shadow-lg">
                    {Number(profile?.today_betting_by_user) >
                    Number(item?.amount)
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

export default DailyMission;
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
