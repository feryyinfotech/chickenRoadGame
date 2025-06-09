import { CopyAll } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Fade, List, ListItem, ListItemIcon, ListItemText, Modal, Stack, Typography } from '@mui/material';
import { Arrow } from '@react-vant/icons';
import copy from 'clipboard-copy';
import CryptoJS from 'crypto-js';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import a1 from '../../assets/images/a1.png';
import c1 from '../../assets/images/c1.png';
import dep from '../../assets/images/dep.png';
import depo from '../../assets/images/depo.png';
import f1 from '../../assets/images/f1.png';
import game from '../../assets/images/game.png';
import l1 from '../../assets/images/l1.png';
import n1 from '../../assets/images/n1.png';
import refreshimg from '../../assets/images/refresh.png';
import s1 from '../../assets/images/s1.png';
import trans from '../../assets/images/trans.png';
import vip from '../../assets/images/vip.png';
import wal from '../../assets/images/wal.png';
import wih from '../../assets/images/with.png';
import wit from '../../assets/images/witt.png';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';
import {
  ProfileDataFunction,
  logOutFunction,
} from '../../services/apiCallings';
import { apiConnectorGet, apiConnectorPost } from '../../services/apiconnector';
import { endpoint, front_end_domain } from '../../services/urls';
import CustomCircularProgress from '../../shared/loder/CustomCircularProgress';
import MyModal from '../../shared/MyModal';
import { deCryptData } from '../../shared/secret';
import { Popup } from 'react-vant';
import tip from '../../assets/images/tip-6654448d.png';
import VantToast from '../../shared/toast/Toast';



function Account() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userData = deCryptData(localStorage.getItem('user_id'));
  const isAuthenticated = userData ? true : false;
  const or_m_user_type = deCryptData(localStorage.getItem('or_m_user_type'));
  const navigate = useNavigate();
  const [opend, setOpend] = useState(false);
  const [selectedImages, setselectedImages] = useState('');
  const [rotating, setRotating] = useState(false);
  const login_data =
    (localStorage.getItem('user_id') &&
      CryptoJS.AES.decrypt(localStorage.getItem('user_id'), 'anand')?.toString(
        CryptoJS.enc.Utf8
      )) ||
    null;
  const userID = login_data && JSON.parse(login_data)?.UserID;

  const images = [
    'https://mui.com/static/images/avatar/2.jpg',
    'https://mui.com/static/images/avatar/3.jpg',
    'https://mui.com/static/images/avatar/4.jpg',
    'https://mui.com/static/images/avatar/1.jpg',
    'https://mui.com/static/images/avatar/5.jpg',
  ];

  const { isLoading, data } = useQuery(
    ['profile'],
    () => ProfileDataFunction(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const profile = data?.data?.data || [];

  const { data: wallet_amount, refetch } = useQuery(
    ['wallet_amount_amount'],
    () => apiConnectorGet(endpoint.get_balance),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const wallet_amount_data = wallet_amount?.data?.data || 0;

  const handleRefresh = async () => {
    setRotating(true);

    await refetch();

    setTimeout(() => setRotating(false), 500);
  };

  const jiliWalletFn = async () => {
    const reqbody = {
      transfer_amount: 10,
    };
    try {
      const response = await apiConnectorPost(
        endpoint?.jili_api?.jili_wallet_api,
        reqbody
      );
      toast(response?.data?.msg);
    } catch (e) {
      toast.error('Something went Wrong');
    }
  };
  const functionTOCopy = (value) => {
    copy(value);
    VantToast('Copied to clipboard!', 's');
  };

  const Navigate = useNavigate()
  return (
    <Layout header={false}>
      <Container>
        <MyModal />
        <SvgIcons />

        <CustomCircularProgress isLoading={isLoading} />
        <Box
          sx={{
            background: '#011341',
            display: 'flex',
            alignItems: 'center',
            color: '#FFFFFF',
            padding: '30px 16px 0 16px',
            borderRadius: '6px',
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <Avatar
            alt="Profile Picture"
            src="https://mui.com/static/images/avatar/2.jpg"
            sx={{
              width: 70,
              height: 70,
              marginRight: '12px',
              borderRadius: '50%',
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', }}>
              <Typography variant="h6" sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: '#FFFFFF', }}>
                {wallet_amount_data?.full_name}
              </Typography>
              <img src={vip} alt="" style={{ width: '50px' }} />
            </Box>
            <Box sx={{
              background: '#DD9138', padding: '2px 7px', gap: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 'fit-content', borderRadius: '19px', marginTop: '10px', marginBottom: '5px',
            }}
            >
              <Typography className="text-white !text-xs">UID </Typography>
              <Typography className="text-white !text-xs">| </Typography>
              <Typography className="text-white !text-xs fcc" >
                {profile?.username}{' '}
                <CopyAll
                  className="cursor-pointer"
                  onClick={() => {
                    functionTOCopy(
                      `${front_end_domain}/register/?ref=${profile?.username}`
                    );
                  }}
                  fontSize="small"
                />{' '}
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ color: '#B0BEC5', fontSize: '10px', lineHeight: '14px', marginTop: '2px', }}>
              Last login: 2025-04-07 10:48:37
            </Typography>
          </Box>
        </Box>
        <Box sx={{ padding: 1, px: 2, background: '#011341', borderRadius: '0px 0px  50% 50%', }}>
          {/* <Box className="flex justify-start items-center gap-1 ">
            <Typography className=" !mt-10 !mr-1">
              <img src={'https://mui.com/static/images/avatar/2.jpg'} alt="" className="!rounded-full  w-[72px] h-[72px]" />
            </Typography>
            <ImageSelectorModal
              setOpend={setOpend}
              setselectedImages={setselectedImages}
              open={opend}
              onClose={() => setOpend(false)}
              images={images}
            />
            <Box className="flex flex-col gap-1">
              <Box className="flex justify-start items-center">
                <Typography className="!mt-5 !font-bold text-white">
                  {profile?.full_name}
                </Typography>
                <Typography>
                  <img src={vip} alt="" className=" w-10 mt-6" />
                </Typography>
              </Box>
              <Box className="bg-gray-600 !w-fit h-6 rounded-full p-1   realtive !left-40 flex gap-3 justify-center">
                <Typography className="text-white !text-xs">UID </Typography>
                <Typography className="text-white !text-xs">| </Typography>
                <Typography className="text-white !text-xs">
                  {profile?.username}{' '}
                  <CopyAll
                    className="cursor-pointer"
                    onClick={() => {
                      functionTOCopy(
                        `${front_end_domain}/register/?ref=${profile?.username}`
                      );
                    }}
                    fontSize="small"
                  />{' '}
                </Typography>
              </Box>
              <Typography className="text-white !text-xs">
                {profile?.is_company_promotor === 1 ? (
                  <p>Company Promoter</p>
                ) : (
                  ''
                )}{' '}
              </Typography>
            </Box>
          </Box> */}
          <Box sx={{ background: '#001C54', }} className=" shadow-xl rounded-lg py-5 relative top-8">
            <Typography className="!text-white px-3">
              Total Balance
            </Typography>
            <Typography className="!font-bold !text-white  flex " sx={{
              borderBottom: '1px solid #737d9630',
              paddingBottom: '10px',
              width: '95%',
              margin: 'auto',
            }}>
              {' '}
              ₹
              {(
                Number(
                  Number(wallet_amount_data?.winning || 0) +
                  Number(wallet_amount_data?.wallet || 0)
                ) || 0
              )?.toFixed(2)}{' '}
              <img
                src={refreshimg}
                alt="Refresh"
                className={`w-[5%] h-[5%] !text-white ml-2 mt-0.5 transition-transform duration-500 ${rotating ? 'animate-spin' : ''
                  }`}
                onClick={handleRefresh}
              />
            </Typography>
            <Box className="flex justify-evenly gap-8 pt-5">
              <NavLink to="/wallet">
                <Box className="flex flex-col justify-center items-center">
                  <Typography>
                    <img src={wal} alt="" className="w-8" />
                  </Typography>
                  <Typography className="!text-white">Wallet</Typography>
                </Box>
              </NavLink>

              <Box
                className="flex cursor-pointer flex-col justify-center items-center"
                onClick={() => {
                  if (or_m_user_type === 'Dummy User') {
                    toast('Dummy User');
                  } else {
                    navigate('/deposit');
                  }
                }}
              >
                <Typography>
                  {' '}
                  <img src={dep} alt="" className="w-8" />{' '}
                </Typography>
                <Typography className="!text-white"> Deposit</Typography>
              </Box>
              <Box
                className="flex cursor-pointer flex-col justify-center items-center"
                onClick={() => {
                  if (or_m_user_type === 'Dummy User') {
                    toast('Dummy User');
                  } else {
                    navigate('/withdraw');
                  }
                }}
              >
                <Typography>
                  <img src={wih} alt="" className="w-8" />
                </Typography>
                <Typography className="!text-white">Withdraw</Typography>
              </Box>
              <Box
                className="flex cursor-pointer flex-col justify-center items-center"
                onClick={() => navigate('/vip')}
              >
                <Typography>
                  <svg className="svg-icon" width="30" height="30" fill="#00ECBE">
                    <use xlinkHref="#icon-VipIcon"></use>
                  </svg>
                </Typography>
                <Typography className="!text-white">VIP</Typography>
              </Box>
              {/* <Box className="flex flex-col justify-center cursor-pointer items-center"
                onClick={() => {
                  if (or_m_user_type === "Dummy User") {
                    toast("Dummy User");
                  } else {
                    navigate('/deposit');
                  }
                }}>
                <Typography><img src={zp} alt="" className="w-8" /></Typography>
                <Typography className="">ZP</Typography>
              </Box> */}
            </Box>
          </Box>
        </Box>

        {/* history */}
        <Box className="grid grid-cols-2 gap-3 m-4  !mt-8">
          <Box sx={{ background: '#001C54' }}
            className="flex gap-1 p-1 py-4 cursor-pointer justify-center items-center shadow-xl  rounded-lg"
            onClick={() => navigate('/gamehistory')}
          >
            <Typography>
              <img src={game} alt="" className="w-10" />
            </Typography>
            <Typography className="!text-white">
              Game History <br />
              <span className="!text-xs !text-gray-500"> My Game history</span>
            </Typography>
          </Box>
          <Box sx={{ background: '#001C54' }}
            className="flex gap-1 p-1 py-4 justify-center items-center cursor-pointer shadow-xl  rounded-lg"
            onClick={() => navigate('/account/Transaction')}
          >
            <Typography>
              <img src={trans} alt="" className="w-10" />
            </Typography>
            <Typography className="!text-white">
              Transaction <br />
              <span className="!text-xs !text-gray-500">
                {' '}
                My Transaction history
              </span>
            </Typography>
          </Box>
        </Box>
        <Box className="grid grid-cols-2 gap-3 m-4 ">
          <Box sx={{ background: '#001C54' }}
            className="flex gap-1 p-1 py-4 cursor-pointer justify-center items-center shadow-xl  rounded-lg"
            onClick={() => {
              if (or_m_user_type === 'Dummy User') {
                toast('Dummy User');
              } else {
                navigate('/depositehistory');
              }
            }}
          >
            <Typography>
              <img src={depo} alt="" className="w-10" />
            </Typography>
            <Typography className="!text-white">
              Deposit <br />
              <span className="!text-xs !text-gray-500">
                {' '}
                My Deposit history
              </span>
            </Typography>
          </Box>
          <Box sx={{ background: '#001C54' }}
            className="flex gap-1 p-1 py-4 justify-center items-center cursor-pointer shadow-xl  rounded-lg"
            onClick={() => {
              if (or_m_user_type === 'Dummy User') {
                toast('Dummy User');
              } else {
                navigate('/withdrawlhistory');
              }
            }}
          >
            <Typography>
              <img src={wit} alt="" className="w-10" />
            </Typography>
            <Typography className="!text-white">
              Withdraw <br />
              <span className="!text-xs !text-gray-500">
                {' '}
                My Withdraw history
              </span>
            </Typography>
          </Box>

          {userID === 354 ? (
            <Box sx={{ background: '#001C54' }}
              className="flex gap-1 p-1 py-4 justify-center items-center cursor-pointer shadow-xl  rounded-lg"
              onClick={jiliWalletFn}
            >
              <Typography>
                <img src={wit} alt="" className="w-10" />
              </Typography>
              <Typography className="!text-white">
                Credit <br />
                <span className="!text-xs !text-gray-500"> Wallet</span>
              </Typography>
            </Box>
          ) : (
            ''
          )}
        </Box>
        {/* <p style={{ background: '#001C54', borderRadius: '10px', }}
          className="flex justify-center gap-2 border-b-2 p-2 m-3 py-5"
          onClick={() => navigate('/account/Teamincome')}
        >
          <Typography>
            {' '}
          </Typography>
          <Typography className="!mt-1 !text-lg text-white cursor-pointer">
            {' '}
            Team/Income
          </Typography>
        </p> */}
        <Box
          sx={{
            backgroundColor: '#001C54',
            borderRadius: '8px',
            mx: 2,
            color: '#FFFFFF',
          }}
        >
          <List>

            <NavLink to="/notification" style={{ textDecoration: 'none' }}>
              <ListItem
                sx={{
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: '#2C3E50',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: '40px',
                    color: '#26A69A',
                  }}
                >
                  <svg className="svg-icon" width="30" height="30">
                    <use xlinkHref="#icon-notification"></use>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Notification"
                  primaryTypographyProps={{
                    variant: 'body2',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
                  }}
                />
              </ListItem>
            </NavLink>

            <NavLink to="/gifts" style={{ textDecoration: 'none' }}>
              <ListItem
                sx={{
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: '#2C3E50',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: '40px',
                    color: '#26A69A',
                  }}
                >
                  <svg className="svg-icon" width="30" height="30" fill="#00ECBE">
                    <use xlinkHref="#icon-gifts"></use>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Gifts"
                  primaryTypographyProps={{
                    variant: 'body2',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
                  }}
                />
                <Arrow />
              </ListItem>
            </NavLink>

            <NavLink to="/game-statistics" style={{ textDecoration: 'none' }}>
              <ListItem
                sx={{
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: '#2C3E50',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: '40px',
                    color: '#26A69A',
                  }}
                >
                  <svg className="svg-icon" width="30" height="30" fill="#00ECBE">
                    <use xlinkHref="#icon-statsIcon"></use>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Game statistics"
                  primaryTypographyProps={{
                    variant: 'body2',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
                  }}
                />
                <Arrow />
              </ListItem>
            </NavLink>

            <NavLink to="/language" style={{ textDecoration: 'none' }}>
              <ListItem
                sx={{
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: '#2C3E50',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: '40px',
                    color: '#26A69A',
                  }}
                >
                  <svg className="svg-icon" width="30" height="30" fill="#00ECBE">
                    <use xlinkHref="#icon-language"></use>
                  </svg>
                </ListItemIcon>
                <ListItemText
                  primary="Language"
                  primaryTypographyProps={{
                    variant: 'body2',
                    fontSize: '14px',
                    color: '#FFFFFF',
                    fontFamily: '"Roboto","Helvetica","Arial",sans-serif !important',
                  }}
                />
                <Typography className="white roboto">English</Typography>
                <Arrow />
              </ListItem>
            </NavLink>

          </List>
        </Box>
        <Box sx={{ background: '#001C54' }} className=" shadow-xl rounded-lg !m-3 py-5">
          <Typography className=" px-3 text-white">Service Center</Typography>
          <Box className="grid grid-cols-3 m-5 justify-center gap-5">
            <NavLink to='/setting/center'>
              <Box className="flex flex-col justify-center items-center m-2">
                <Typography>
                  <img src={s1} alt="" className="w-8 " style={{ filter: "hue-rotate(130deg)" }} />
                </Typography>
                <Typography className="!text-sm text-white">Settings</Typography>
              </Box>
            </NavLink>
            <NavLink to='/main/Feedback'>
              <Box className="flex flex-col justify-center items-center">
                <Typography>
                  <img src={f1} alt="" className="w-8 " style={{ filter: "hue-rotate(130deg)" }} />
                </Typography>
                <Typography className="!text-sm text-white">Feedback</Typography>
              </Box>
            </NavLink>
            <NavLink to='/main/Notification'>
              <Box className="flex flex-col justify-center items-center">
                <Typography>
                  <img src={n1} alt="" className="w-8 " style={{ filter: "hue-rotate(130deg)" }} />
                </Typography>
                <Typography className="!text-sm text-white">Notification</Typography>
              </Box>
            </NavLink>
            <Box
              className="flex flex-col justify-center cursor-pointer items-center"
              onClick={() => navigate('/services')}
            >
              <Typography>
                <img src={c1} alt="" className="w-8 " style={{ filter: "hue-rotate(130deg)" }} />
              </Typography>
              <Typography className="!text-white !text-sm ml-2"> Service</Typography>
            </Box>
            <NavLink to='/main/beginnner'>
              <Box className="flex flex-col justify-center items-center">
                <Typography>
                  <svg className="svg-icon" width="30" height="30" fill="#00ECBE">
                    <use xlinkHref="#icon-guide"></use>
                  </svg>
                </Typography>
                <Typography className="!text-sm text-white">Beginner's Guide</Typography>
              </Box>
            </NavLink>
            <NavLink to='/main/About'>
              <Box className="flex flex-col justify-center items-center">
                <Typography>
                  <img src={a1} alt="" className="w-8 " style={{ filter: "hue-rotate(130deg)" }} />
                </Typography>
                <Typography className="!text-sm text-white">About us</Typography>
              </Box>
            </NavLink>
            {/* <Box className="flex flex-col justify-center items-center">
              <Typography className="!w-8 text-[linear-gradient(175deg, rgba(1,19,65,1) 0%, rgba(35,196,185,1) 100%) !important]">
                <Link to="/account/income-main">
                  <CurrencyRupeeIcon className="!text-[#1DA6A4]" />
                </Link>
              </Typography>
              <Typography className="!text-sm text-white">Income</Typography>
            </Box> */}
          </Box>
        </Box>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleOpen}
          sx={{
            borderRadius: '30px',
            width: '92%',
            ml: '4%',
            mt: 2,
            mb: 4,
            color: '#00ecbe',
            border: '1px solid #00ecbe',
            fontWeight: 500,
            fontSize: '16px',
            textTransform: 'none',
            backgroundColor: 'transparent',
            padding: '5px',
            '&:hover': {
              backgroundColor: 'rgba(0,255,255,0.05)',
              border: '1px solid #00ecbe',
            }
          }}
        >
          <img style={{ filter: 'invert(1)' }} src={l1} alt="" className="w-5  !mr-2 !mt-1" />  Logout
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style} className='fccc'>
              <img src={tip} alt="" style={{ width: '80px' }} />
              <Typography sx={{ color: 'white', mt: 2, mb: 5, fontSize: '19px', fontWeight: 500, }}>Do you want to log out?</Typography>
              <Stack spacing={2} sx={{ width: '100%', backgroundColor: '#041840' }}>

                <Button
                  onClick={() => logOutFunction()}
                  fullWidth
                  sx={{
                    borderRadius: '30px',
                    width: '250px',
                    background: 'linear-gradient(90deg, #7afec3, #02afb6)',
                    color: '#000',
                    fontWeight: 500,
                    fontSize: '16px',
                    textTransform: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #7afec3, #02afb6)',
                      boxShadow: 'none'
                    }
                  }}
                >
                  Confirm
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={handleClose}
                  sx={{
                    borderRadius: '30px',
                    width: '250px',
                    color: '#02afb6',
                    border: '1px solid #02afb6',
                    fontWeight: 500,
                    fontSize: '16px',
                    textTransform: 'none',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(0,255,255,0.05)',
                      border: '1px solid #02afb6',
                    }
                  }}
                >
                  Cancel
                </Button>
              </Stack>
            </Box>
          </Fade>
        </Modal>
      </Container>
    </Layout >
  );
}

export default Account;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  padding: '8px 16px 16px 16px', borderRadius: '10px',
  backgroundColor: '#041840'
};