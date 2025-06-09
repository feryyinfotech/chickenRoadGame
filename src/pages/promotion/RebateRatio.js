import { Box, Container, Stack, Tab, Tabs, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Casino from '../../assets/images/casino.png';
import load from '../../assets/images/loader.png';
import point from '../../assets/images/point.png';
import sport from '../../assets/images/sport.png';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';
import r6 from '../../assets/r6.png';
import r7 from '../../assets/r7.png';
import r0 from '../../assets/reb0.png';
import r1 from '../../assets/reb1.png';
import r2 from '../../assets/reb2.png';
import r3 from '../../assets/reb3.png';
import r4 from '../../assets/reb4.png';
import r5 from '../../assets/reb5.png';
import sportsg from '../../assets/sportsg.png';
import sportsb from '../../assets/sportsb.png';
import slotsg from '../../assets/slotsg.png';
import slotsb from '../../assets/slotsb.png';

const RebateRatio = () => {
  const [value, setValue] = React.useState(0);
  const [values, setValues] = useState(1);
  const [val, setVal] = useState(1);

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
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const ChangeHandler = (newValue) => {
    setValues(newValue);
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Layout header={false}>
        <Container>
          <SvgIcons />
          <Box sx={style.header}>
            <Box
              component={NavLink}
              onClick={() => goBack()}
              sx={{ width: '10%' }}
            >
              <ArrowLeft sx={{ fontSize: '22px !important' }} />
            </Box>
            <Typography
              sx={{ width: '80%', fontSize: '18px !important' }}
              className="fcc roboto"
              variant="body1"
              color="initial"
            >
              {' '}
              Rebate ratio
            </Typography>
            <Typography
              sx={{ width: '10%' }}
              variant="body1"
              color="initial"
              component={NavLink}
              to="/promotion/Subordinate/new"
            ></Typography>
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
                  <img src={val === 3 ? sportsg : sportsb} className="h-14" />
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
          <Box sx={{ width: '100%' }}>
            <CustomTabPanel value={value} index={0}>
              <Box
                className="!my-1 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white ">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L0
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.6%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.18%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.054%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.0162%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.00486%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.001458%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L1
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.7%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.245%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.08575%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.030012%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.010504%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.003677%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L2
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.75%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.28125%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.105469%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.039551%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.014832%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.005562%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L3
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.8%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.32%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.128%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.0512%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.02048%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.008192%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L4
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.85%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.36125%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.153531%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.065251%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.027732%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.011786%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L5
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.9%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.405%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.18225%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.082013%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.036906%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.016608%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L6
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      1%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.5%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.25%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.125%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.0625%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.03125%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CustomTabPanel>
            {/* 2 */}
            <CustomTabPanel value={value} index={1}>
              <Box
                className="!my-1 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L0
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.3%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.09%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.027%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.0081%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.00243%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.000729%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L1
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.35%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.1225%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.042875%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.015006%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.005252%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.001838
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L2
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.375%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.140625%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.052734%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.019775%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.007416%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.002781%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L3
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.4%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.16%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.064%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.0256%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.01024%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.004096%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L4
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.425%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.180625%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.076766%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.032625%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.013866%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.005893%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L5
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.45%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.2025%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.091125%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.041006%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.018453%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.008304%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L6
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.5%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.25%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.125%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.0625%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.03125%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.015625%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CustomTabPanel>
            {/* 3*/}
            <CustomTabPanel value={value} index={2}>
              <Box
                className="!my-1 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L0
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.3%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.09%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.027%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.0081%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.00243%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.000729%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L1
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.35%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.1225%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.042875%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.015006%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.005252%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.001838
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L2
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.375%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.140625%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.052734%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.019775%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.007416%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.002781%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L3
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.4%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.16%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.064%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.0256%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.01024%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.004096%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L4
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.425%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.180625%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.076766%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.032625%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.013866%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.005893%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L5
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.45%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.2025%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.091125%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.041006%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.018453%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.008304%
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="!my-4 shadow-xl rounded-lg !py-3 "
                style={{ background: '#011341' }}
              >
                <Typography className="!m-2 !text-lg white">
                  Rebate Level
                  <span
                    className="!italic font-bold ml-1"
                    style={{ color: '#40d8bd' }}
                  >
                    L6
                  </span>
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        1 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.5%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        2 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.25%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        3 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.125%
                    </Typography>
                  </Box>
                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        4 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.0625%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        5 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.03125%
                    </Typography>
                  </Box>

                  <Box className="flex items-center justify-between px-4">
                    <Box className="flex items-center gap-2">
                      <img
                        src={point}
                        alt=""
                        className="h-3"
                        style={{ filter: 'hue-rotate(125deg)' }}
                      />
                      <Typography
                        sx={{ color: '#92A8E3' }}
                        className=" !text-sm"
                      >
                        6 level lower level commission rebate
                      </Typography>
                    </Box>
                    <Typography className="!text-sm white font-medium">
                      0.015625%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CustomTabPanel>
          </Box>
          {val === 1}
          {val === 2}
          {val === 3}
          {val === 4}
          {val === 5}
          {val === 6}
        </Container>
      </Layout>
    </>
  );
};
export default RebateRatio;
const style = {
  container: {
    background: '#05012B',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
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
