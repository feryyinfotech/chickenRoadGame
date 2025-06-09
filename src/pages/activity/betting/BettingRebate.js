import { ArrowLeft } from '@react-vant/icons';
import { Box, Container, Stack, Tab, Tabs, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../../component/layout/Layout';
import SvgIcons from '../../../component/SvgIcons';
import r6 from '../../../assets/r6.png';
import r7 from '../../../assets/r7.png';
import r0 from '../../../assets/reb0.png';
import r1 from '../../../assets/reb1.png';
import r2 from '../../../assets/reb2.png';
import r3 from '../../../assets/reb3.png';
import r4 from '../../../assets/reb4.png';
import r5 from '../../../assets/reb5.png';
import slotsg from '../../../assets/slotsg.png';
import slotsb from '../../../assets/slotsb.png';
import AllBettingRebate from './AllBettingRebate';
import WingoRebate from './WingoRebate';
import TrxRebate from './TrxRebate';
import K3Rebate from './K3Rebate';
import SlotsRebate from './SlotsRebate';

const BettingRebate = () => {
  const navigate = useNavigate();
  const tabRefs = useRef([]);
  const [val, setVal] = useState(1);
  const goBack = () => {
    navigate(-1);
  };
  const handleTabChange = (e, newVal) => {
    setVal(newVal);
    const selectedTab = tabRefs.current[newVal];
    if (selectedTab) {
      selectedTab.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };
  return (
    <Layout header={false}>
      <SvgIcons />
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box
            component={NavLink}
            onClick={() => goBack()}
            sx={{ width: '33%' }}
          >
            <ArrowLeft sx={{ fontSize: '22px !important' }} />
          </Box>
          <Typography
            sx={{ width: '33%', fontSize: '18px !important' }}
            className="fcc roboto"
            variant="body1"
            color="initial"
          >
            {' '}
            Rebate
          </Typography>
          <Typography sx={{ width: '33%' }} variant="body1" color="initial">
            {' '}
          </Typography>
        </Box>

        <div className="m-2">
          <Box sx={{ overflowX: 'auto', width: '100%' }}>
            <Tabs
              value={val}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons={false}
              aria-label="scrollable prevent tabs example"
              sx={{
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
              }}
            >
              <Tab
                ref={(el) => (tabRefs.current[1] = el)}
                icon={<img src={val === 1 ? r0 : r1} className="h-14" />}
                value={1}
                sx={{
                  padding: 0,
                  margin: 0,
                  boxShadow: 'none',
                  marginRight: 1,
                }}
              />
              <Tab
                ref={(el) => (tabRefs.current[2] = el)}
                icon={<img src={val === 2 ? r3 : r2} className="h-14" />}
                value={2}
                sx={{
                  padding: 0,
                  margin: 0,
                  boxShadow: 'none',
                  marginRight: 1,
                }}
              />
              <Tab
                ref={(el) => (tabRefs.current[3] = el)}
                icon={<img src={val === 3 ? r4 : r5} className="h-14" />}
                value={3}
                sx={{
                  padding: 0,
                  margin: 0,
                  boxShadow: 'none',
                  marginRight: 1,
                }}
              />
              <Tab
                ref={(el) => (tabRefs.current[4] = el)}
                icon={<img src={val === 4 ? r6 : r7} className="h-14" />}
                value={4}
                sx={{
                  padding: 0,
                  margin: 0,
                  boxShadow: 'none',
                  marginRight: 1,
                }}
              />
              <Tab
                ref={(el) => (tabRefs.current[5] = el)}
                icon={
                  <img src={val === 5 ? slotsg : slotsb} className="h-14" />
                }
                value={5}
                sx={{
                  padding: 0,
                  margin: 0,
                  boxShadow: 'none',
                  marginRight: 1,
                }}
              />
            </Tabs>
          </Box>

          {val === 1 && <AllBettingRebate />}
          {val === 2 && <WingoRebate />}
          {val === 3 && <TrxRebate />}
          {val === 4 && <K3Rebate />}
          {val === 5 && <SlotsRebate />}

          <div
            className="w-full  mt-4"
            onClick={() => navigate('/bettinghistory')}
          >
            <p className="text-xl font-semibold m-1 text-white">
              Rebate history
            </p>
            <button className="w-full mt-2  border border-[#40d8bd] text-[#40d8bd] py-2 rounded-full font-semibold ">
              All History
            </button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default BettingRebate;
export const style = {
  container: {
    background: '#05012B',
    width: '100%',
    height: '100vh',
    overflow: 'auto',
  },
  header: {
    padding: '10px 8px',
    background: 'zubgtext',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '17px',
      fontWeight: '400',
      textAlign: 'center',
      color: 'white',
    },
    '& > a > svg': {
      color: 'white',
      fontSize: '22px',
    },
  },
};
