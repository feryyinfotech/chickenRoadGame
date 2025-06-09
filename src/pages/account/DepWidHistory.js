import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../component/layout/Layout';
import { Box, Container, Stack, Typography } from '@mui/material';
import backbtn from '../../assets/images/backBtn.png';
import deposit from '../../assets/images/deposite.png';
import withdrawl from '../../assets/wdhistory.png';
import DepositeHistory from '../DepoWithdHistory/DepositeHistory';
import WithdrawlHistory from '../DepoWithdHistory/WithdrawlHistory';
import AllHistory from '../DepoWithdHistory/AllHistory';
import SvgIcons from '../../component/SvgIcons';
import { AppsO, ArrowLeft } from '@react-vant/icons';


export const DepWidHistory = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(3);
  const goBack = () => {
    navigate(-1);
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Layout header={false}>
      <Container sx={style.container}>
        <SvgIcons />
        <Box sx={style.header}>
          <Box component={NavLink} onClick={goBack} sx={{ width: '20%' }}>
            <ArrowLeft style={{ fontSize: '22px', color: 'white' }} />
          </Box>
          <Typography sx={{ width: '40%', fontSize: '16px' }} className="fcc roboto">
            Transaction history
          </Typography>
          <Typography sx={{ width: '20%' }}></Typography>
        </Box>
        <div className="flex flex-col  mt-4  w-full">
          <div className="flex items-center p-3 gap-3">
            <div
              className="w-[33%] h-full flex flex-col items-center p-3 bg-gradient-to-t from-[#011341] to-[#011341] rounded-lg shadow-md cursor-pointer"
              onClick={() => handleChange(3)}
            >
              <img src={deposit} className="w-[45%] " alt="error" style={{ filter: 'hue-rotate(106deg)' }} />
              <span className="text-white text-sm mt-2"> All Report</span>
            </div>
            <div
              className="w-[33%] h-full flex flex-col items-center p-3 bg-gradient-to-t from-[#011341] to-[#011341] rounded-lg shadow-md cursor-pointer"
              onClick={() => handleChange(1)}
            >
              <img src={deposit} className="w-[45%] " alt="error" style={{ filter: 'hue-rotate(106deg)' }} />
              <span className="text-white text-sm mt-2"> Deposit</span>
            </div>
            <div
              className="w-[33%] h-full flex flex-col items-center p-3 bg-gradient-to-t from-[#011341] to-[#011341] rounded-lg shadow-md cursor-pointer"
              onClick={() => handleChange(2)}
            >
              <img src={withdrawl} className="w-[45%] " alt="error" style={{ filter: 'hue-rotate(106deg)' }} />
              <span className="text-white text-sm mt-2"> Withdrawl</span>
            </div>
          </div>
          {value === 1 && <DepositeHistory />}
          {value === 2 && <WithdrawlHistory />}
          {value === 3 && <AllHistory />}
        </div>
      </Container>
    </Layout>
  );
};

const style = {
  container: {
    background: '#05012B',
    width: '100%',
    height: '100vh',
    overflow: 'auto',
  },
  header: {
    padding: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '16px',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
    },
  },
}
