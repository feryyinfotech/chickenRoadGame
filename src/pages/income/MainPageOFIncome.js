import { Diversity2 } from '@mui/icons-material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import StoreIcon from '@mui/icons-material/Store';
import PixIcon from '@mui/icons-material/Pix';
import PaidIcon from '@mui/icons-material/Paid';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import * as React from 'react';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import Layout from '../../component/layout/Layout';
import { ProfileDataFunction } from '../../services/apiCallings';

function MainPageOFIncome() {
  const { data } = useQuery(['profile'], () => ProfileDataFunction(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
  });
  const profile = data?.data?.data || [];

  const data_array = [
    {
      to: '/account/income-main/royality-bonus',
      id: 1,
      name: 'Deposit Base Salary',
      logo: (
        <StoreIcon
          className="!w-[40px] !h-[40px] !text-[#00ECBE]"
          color="#8f5206"
        />
      ),
    },
   
    {
      to: '/account/income-main/registration-bonus',
      id: 2,
      name: ' 50% Refund Bonus',
      logo: (
        <CurrencyExchangeIcon
          className="!w-[40px] !h-[40px] !text-[#00ECBE]"
          color="#8f5206"
        />
      ),
    },
    {
      to: "/daily_salary",
      name: "Agent Referral Bonus",
      logo: (
        <CardGiftcardIcon
          className="!w-[40px] !h-[40px] !text-[#00ECBE]"
          color="#8f5206"
        />
      ),
    },
    // {
    //   to: "/account/income-main/team-salary-bonus",
    //   name: "Scratched Coupon Bonus",
    //   logo: (
    //     <AccountBalanceIcon
    //       className="!w-[40px] !h-[40px] !text-[#00ECBE]"
    //       color="#8f5206"
    //     />
    //   ),
    // },
    {
      to: '/account/income-main/team-betting-bonus',
      id: 3,
      name: ' Referral Bonus',
      logo: (
        <LocalConvenienceStoreIcon
          className="!w-[40px] !h-[40px] !text-[#00ECBE]"
          color="#8f5206"
        />
      ),
    },
    {
      to: '/account/income-main/cashback-bonus',
      id: 4,
      name: 'Daily Active Base Sallery ',
      logo: (
        <AssuredWorkloadIcon
          className="!w-[40px] !h-[40px] !text-[#00ECBE]"
          color="#8f5206"
        />
      ),
    },
    {
      to: '/account/income-main/company_promoter',
      id: 5,
      name: 'Recharge Bonus For New Player',
      logo: (
        <Diversity2
          className="!w-[40px] !h-[40px] !text-[#00ECBE]"
          color="#8f5206"
        />
      ),
    },
    {
      to: '/account/income-main/welcomebonus',
      id: 6,
      name: 'Advertise Bonus',
      logo: (
        <PixIcon
          className="!w-[40px] !h-[40px] !text-[#00ECBE]"
          color="#8f5206"
        />
      ),
    },
    {
      to: '/account/income-main/cashback-bonus-cashback',
      id: 7,
      name: 'Trade Income',
      logo: (
        <PaidIcon
          className="!w-[40px] !h-[40px] !text-[#00ECBE]"
          color="#8f5206"
        />
      ),
    },
    {
      to: "/account/income-main/betting-bonus",
      name: "Daily Return Compounding Income",
      logo: (
        <AccountBalanceIcon
          className="!w-[40px] !h-[40px] !text-[#00ECBE]"
          color="#8f5206"
        />
      ),
    },
    {
      to: "/account/income-main/ico-level-bonus",
      name: "Gift Code Bonus",
      logo: (
        <CardGiftcardIcon
          className="!w-[40px] !h-[40px] !text-[#00ECBE]"
          color="#8f5206"
        />
      ),
    },
    {
      to: "/account/income-main/level-bonus",
      name: "VIP Bonus",
      logo: (
        <CardGiftcardIcon
          className="!w-[40px] !h-[40px] !text-[#00ECBE]"
          color="#8f5206"
        />
      ),
    },
    {
      to: "/account/income-main/self-bonus",
      name: "Self Recharge Bonus",
      logo: (
        <CardGiftcardIcon
          className="!w-[40px] !h-[40px] !text-[#00ECBE]"
          color="#8f5206"
        />
      ),
    },
  ];

  // if (profile?.success_date) {
  //   data_array?.push({
  //     to: '/account/income-main/loss_recovery',
  //     name: 'Staking Bonus',
  //     logo: (
  //       <Diversity2
  //         className="!w-[40px] !h-[40px] !text-[#00ECBE]"
  //         color="#8f5206"
  //       />
  //     ),
  //   });
  // }

  return (
    <Layout>
      <Container
        sx={{
          width: '100%',
          height: '100vh',
          overflow: 'auto',
          mb: 5,
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            // marginLeft: '2.5%',
            // marginRight: '2.5%',
            borderRadius: '10px',
            // padding: '10px',
            mt: '0px',
            '&>:nth-child(1)': {
              color: 'white',
              fontSize: '15px',
              fontWeight: '600',
              mb: '25px',
            },
          }}
        >
          <div className="w-full !h-screen  flex flex-col items-center ">
            {/* Title */}
            <h1 className="bg-[#00ECBE] border border-black  text-white w-full text-center text-xl font-bold">
              Income
            </h1>

            {/* Table Container */}
            <Box
              sx={{ width: '95%', maxWidth: '500px' }}
              className="overflow-x-auto mt-4 "
            >
              <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                <Table
                  sx={{
                    width: '100%',
                    border: '1px solid black',
                    borderRadius: '10px',
                  }}
                >
                  {/* Table Head */}
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#00ECBE' }}>
                      <TableCell
                        sx={{
                          color: '#fff',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          border: '1px solid black',
                        }}
                      >
                        S.No
                      </TableCell>
                      <TableCell
                        sx={{
                          color: '#fff',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}
                      >
                        Title
                      </TableCell>
                      <TableCell
                        sx={{
                          color: '#fff',
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }}
                      >
                        Icon
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  {/* Table Body */}
                  <TableBody>
                    {data_array.map((i, index) => (
                      <TableRow
                        key={i.id}
                        component={NavLink}
                        to={i.to}
                        sx={{
                          textDecoration: 'none',
                          cursor: 'pointer',
                          '&:hover': { backgroundColor: '#f7d7a8' },
                        }}
                        className="hover:bg-orange-200"
                      >
                        <TableCell
                          sx={{
                            textAlign: 'center',
                            border: '1px solid black',
                          }}
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell
                          sx={{
                            textAlign: 'center',
                            border: '1px solid black',
                          }}
                        >
                          {i.name}
                        </TableCell>
                        <TableCell
                          sx={{
                            textAlign: 'center',
                            border: '1px solid black',
                          }}
                        >
                          {i.logo}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </div>
        </Box>
      </Container>
    </Layout>
  );
}

export default MainPageOFIncome;
