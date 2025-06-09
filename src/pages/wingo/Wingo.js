import VolumeUpIcon from '@mui/icons-material/VolumeUpOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { VolumeO } from '@react-vant/icons';
import { Swiper as VantSwiper } from 'react-vant';

import {
  Box,
  Button,
  Container,
  Dialog,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import asistant from '../../assets/images/asistant.png';
import backbtn from '../../assets/images/backBtn.png';
import music from '../../assets/images/music.png';
import musicoff from '../../assets/images/musicoff.png';
import refresh from '../../assets/images/refresh.png';
import time from '../../assets/images/time.png';
import walletbg from '../../assets/images/walletbg-dcbd4124.png';
import logo from '../../assets/images/logo.png';
import balancee from '../../assets/images/walwin.png';
import {
  volume_handlerwingoFn,
  wallet_real_balanceFn,
} from '../../redux/slices/counterSlice';
import { apiConnectorGet } from '../../services/apiconnector';
import { endpoint } from '../../services/urls';
import CustomCircularProgress from '../../shared/loder/CustomCircularProgress';
import theme from '../../utils/theme';
import WinLossPopup from './WinLossPopup';
import Wingo1Min from './component/Wingo1Min';
import Wingo30Sec from './component/Wingo30sec';
import Wingo3Min from './component/Wingo3Min';
import Wingo5Min from './component/Wingo5Min';
import { NoticeBar } from 'react-vant';

function Wingo() {
  const [musicicon, setmusicicon] = useState(true);
  const [value, setValue] = useState(4);
  const [opendialogbox, setOpenDialogBox] = useState(false);
  const isAppliedbet = localStorage.getItem('betApplied');
  const dummycounter = useSelector((state) => state.aviator.dummycounter);
  const client = useQueryClient();
  const navigate = useNavigate();
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  React.useEffect(() => {
    setTimeout(() => {
      if (isAppliedbet?.split('_')?.[1] === String(true)) {
        setOpenDialogBox(true);
        setTimeout(() => {
          setOpenDialogBox(false);
          localStorage.setItem('betApplied', false);
        }, 5000);
      }
    }, 1000);
  }, [dummycounter]);

  const { isLoading, data: wallet_amount } = useQuery(
    ['wallet_amount'],
    () => apiConnectorGet(endpoint.get_balance),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const balance = wallet_amount?.data?.data;
  React.useEffect(() => {
    dispatch(wallet_real_balanceFn(wallet_amount?.data?.data || 0));
  }, [Number(balance?.winning), Number(balance?.wallet)]);

  function refreshFunctionForRotation() {
    client.refetchQueries('wallet_amount');
    const item = document.getElementsByClassName('rotate_refresh_image')?.[0];

    const element = document.getElementById('refresh_button');
    if (!item) {
      element.classList.add('rotate_refresh_image');
    }
    setTimeout(() => {
      element.classList.remove('rotate_refresh_image');
    }, 2000);
  }
  useEffect(() => {
    const element = document.getElementById('refresh_button');
    const item = document.getElementsByClassName('rotate_refresh_image')?.[0];
    if (item) {
      element.classList.remove('rotate_refresh_image');
    }
  }, []);
  return (
    <Container>
      <Box sx={{ padding: 1, background: '#05012B', px: 2, }}>
        <CustomCircularProgress isLoading={isLoading} />
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <NavLink to="/dashboard"><Box component="img" src={backbtn} width={25}></Box></NavLink>
          <Box component="img" src={logo} sx={{ width: '130px !important' }}></Box>
          <Stack direction="row">
            <NavLink to={'/services'}>
              <Box
                component="img"
                src={asistant}
                width={25}
                sx={{ mr: 2 }}
              ></Box>
            </NavLink>
            <div
              onClick={() => {
                setmusicicon(!musicicon);
                dispatch(volume_handlerwingoFn(!musicicon));
              }}
            >
              {musicicon === true ? (
                <Box component="img" src={music} width={25}></Box>
              ) : (
                <Box component="img" src={musicoff} width={25}></Box>
              )}
            </div>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          padding: 1,
          px: 2,
          background: '#001c5452',
        }}
      >

        <Box
          sx={{
            background: '#001C54',
            backgroundImage: `url(${walletbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            padding: 2,
            borderRadius: '20px',
            textAlign: 'center',
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Typography
              variant="body1"
              color="white"
              fontSize="15px"
              fontWeight={600}
            >
              ₹
              {(
                Number(
                  Number(balance?.winning || 0) + Number(balance?.wallet || 0)
                ) || 0
              )?.toFixed(2)}{' '}
            </Typography>
            <div className="mx-1 rotate_refresh_image" id="refresh_button">
              <img
                src={refresh}
                width={25}
                ml={2}
                onClick={() => {
                  refreshFunctionForRotation();
                }}
              />
            </div>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Box component="img" src={balancee} width={25} mr={2}></Box>
            <Typography
              variant="body1"
              color="white"
              fontSize="13px"
              fontWeight={400}
            >
              Wallet balance{' '}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
            <Button
              onClick={() => navigate('/withdraw')}
              sx={style.withdrawalbtn}
            >
              Withdraw
            </Button>
            <Button onClick={() => navigate('/deposit')} sx={style.depositebtn}>
              Deposit
            </Button>
          </Stack>
        </Box>
        <div className='demo-notice-bar' style={{ marginTop: '16px', }}>
          <NoticeBar leftIcon={<VolumeO />} rightIcon={<Button type="primary" className='rv-button-p' size="small" style={{ color: 'black' }} onClick={()=>navigate("/notification")}>Details</Button>}>
            < VantSwiper
              autoplay={3000}
              indicator={false}
              vertical
              className='notice-swipe'
            >
              < VantSwiper.Item > Welcome to join the Tahalkagame platform. </ VantSwiper.Item >
              < VantSwiper.Item > We provide a brand new gaming ex </ VantSwiper.Item >
              < VantSwiper.Item > Welcome to join the Tahalkagame platform. </ VantSwiper.Item >
            </ VantSwiper >
          </NoticeBar>
        </div>
      </Box>
      <Box
        sx={{
          width: '95%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 'auto',
          background: '#001C54',
          borderRadius: '10PX',
          mt: 2,
        }}
      >
        <Box sx={{ width: '30%' }}>
          <NavLink
            className={value === 4 ? ' wingonavactive wingonav' : ' wingonav'}
            onClick={() => handleChange(4)}
          >
            <Box component="img" src={time} width={40}></Box>
            <Typography variant="body1" color="initial">
              Win Go
            </Typography>
            <Typography variant="body1" color="initial">
              30 Sec
            </Typography>
          </NavLink>
        </Box>
        <Box sx={{ width: '30%' }}>
          <NavLink
            className={value === 1 ? ' wingonavactive wingonav' : ' wingonav'}
            onClick={() => handleChange(1)}
          >
            <Box component="img" src={time} width={40}></Box>
            <Typography variant="body1" color="initial">
              Win Go
            </Typography>
            <Typography variant="body1" color="initial">
              1 Min
            </Typography>
          </NavLink>
        </Box>
        <Box sx={{ width: '30%' }}>
          <NavLink
            className={value === 2 ? ' wingonavactive wingonav' : ' wingonav'}
            onClick={() => handleChange(2)}
          >
            <Box component="img" src={time} width={40}></Box>
            <Typography variant="body1" color="initial">
              Win Go
            </Typography>
            <Typography variant="body1" color="initial">
              3 Min
            </Typography>
          </NavLink>
        </Box>
        <Box sx={{ width: '30%' }}>
          <NavLink
            className={value === 3 ? ' wingonavactive wingonav' : ' wingonav'}
            onClick={() => handleChange(3)}
          >
            <Box component="img" src={time} width={40}></Box>
            <Typography variant="body1" color="initial">
              Win Go
            </Typography>
            <Typography variant="body1" color="initial">
              5 Min
            </Typography>
          </NavLink>
        </Box>
      </Box>
      {value === 4 && <Wingo30Sec />}
      {value === 1 && <Wingo1Min />}
      {value === 2 && <Wingo3Min />}
      {value === 3 && <Wingo5Min />}
      {/* {value === 4 && <Wingo10Min />} */}
      {/* opendialogbox */}
      {opendialogbox && (
        <Dialog
          open={opendialogbox}
          PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }}
        >
          <WinLossPopup gid={isAppliedbet?.split('_')?.[0]} />
        </Dialog>
      )}
    </Container>
  );
}

export default Wingo;

const style = {
  withdrawalbtn: {
    background: '#D23838',
    borderRadius: '20px',
    textTransform: 'capitalize',
    fontSize: '15px',
    fontWeight: '700',
    padding: '5px 25px',
    color: 'white',
  },
  depositebtn: {
    background: '#17B15E',
    borderRadius: '20px',
    textTransform: 'capitalize',
    fontSize: '15px',
    fontWeight: '700',
    padding: '5px 25px',
    color: 'white',
  },
};
