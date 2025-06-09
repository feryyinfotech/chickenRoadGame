import {
  Box,
  Button,
  Container,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React, { useRef, useState } from 'react';
import CustomCircularProgress from '../../../shared/loder/CustomCircularProgress';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../../component/layout/Layout';
import SvgIcons from '../../../component/SvgIcons';
import r6 from '../../../assets/r6.png';
import r7 from '../../../assets/r7.png';
import r2 from '../../../assets/reb2.png';
import r3 from '../../../assets/reb3.png';
import r4 from '../../../assets/reb4.png';
import r5 from '../../../assets/reb5.png';
import fishing_8 from '../../../assets/fishing_8.png';
import fishing_9 from '../../../assets/fishing_9.png';
import org_b from '../../../assets/org_b.png';
import orgg from '../../../assets/orgg.png';
import slotsb from '../../../assets/slotsb.png';
import slotsg from '../../../assets/slotsg.png';
import { AppsO, ArrowLeft } from '@react-vant/icons';
import { LotteryHistory } from './LotteryHistory';
import { CasinobetHistory } from './CasinobetHistory';
import { Fishingbet } from './Fishingbet';
import { RummyBet } from './RummyBet';
import { Originalbet } from './Originalbet';
import { SlotBet } from './SlotBet';

const GameHistory = () => {
  const [val, setVal] = useState(1);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const tabRefs = useRef([]);
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
      <Container sx={style.container}>
        <SvgIcons />
        <Box sx={style.header}>
          <Box component={NavLink} onClick={goBack} sx={{ width: '20%' }}>
            <ArrowLeft style={{ fontSize: '22px', color: 'white' }} />
          </Box>
          <Typography
            sx={{ width: '40%', fontSize: '16px' }}
            className="fcc roboto"
          >
            Bet history
          </Typography>
          <Typography sx={{ width: '20%' }}></Typography>
        </Box>
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
              icon={<img src={val === 1 ? r3 : r2} className="h-14" />}
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
              icon={<img src={val === 2 ? r4 : r5} className="h-14" />}
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
              icon={
                <img src={val === 3 ? fishing_8 : fishing_9} className="h-14" />
              }
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
              icon={<img src={val === 5 ? orgg : org_b} className="h-14" />}
              value={5}
              sx={{
                padding: 0,
                margin: 0,
                boxShadow: 'none',
                marginRight: 1,
              }}
            />
            <Tab
              ref={(el) => (tabRefs.current[6] = el)}
              icon={<img src={val === 6 ? slotsg : slotsb} className="h-14" />}
              value={6}
              sx={{
                padding: 0,
                margin: 0,
                boxShadow: 'none',
                marginRight: 1,
              }}
            />
          </Tabs>
        </Box>
        {val === 1 && <LotteryHistory />}
        {val === 2 && <CasinobetHistory />}
        {val === 3 && <Fishingbet />}
        {val === 4 && <RummyBet />}
        {val === 5 && <Originalbet />}
        {val === 6 && <SlotBet />}
      </Container>
    </Layout>
  );
};

export default GameHistory;

const style = {
  container: {
    background: '#05012B',
    width: '100%',
    height: '100vh',
    overflowX: 'hidden',
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
};
