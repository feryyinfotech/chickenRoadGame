import { ArrowLeft } from '@react-vant/icons';
import { Box, Container, Typography } from '@mui/material';
import copy from 'clipboard-copy';
import { useQuery } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import invite from '../../assets/in.png';
import Layout from '../../component/layout/Layout';
import { apiConnectorGet } from '../../services/apiconnector';
import { endpoint, front_end_domain } from '../../services/urls';
import VantToast from '../../shared/toast/Toast';
import SvgIcons from '../../component/SvgIcons';


function Invite() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  // console.log(result);
  const { isLoading, data } = useQuery(
    ['yesterday_income'],
    () => apiConnectorGet(endpoint?.yesterday_income),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: true,
    }
  );
  const result = data?.data?.data || [];
  const functionTOCopy = (value) => {
    copy(value);
    VantToast('Copied to clipboard!', 's');
  };

  return (
    <Layout header={false} footer={false}>
      <SvgIcons />
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
            <ArrowLeft sx={{ fontSize: '22px !important', }} />
          </Box>
          <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Invite</Typography>
          <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
        </Box>
        <div className='flex flex-col justify-center items-center gap-5 p-5'>
          <p>Please swipe left - right to choose your favorite poster</p>
          <Swiper
            spaceBetween={20}
            slidesPerView={1.3}
            loop={true}
            className='w-full h-[450px] px-5'
          >
            <SwiperSlide>
              <img src={invite} alt='invite poster 1' className='h-[450px] ' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={invite} alt='invite poster 2' className='h-[450px] ' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={invite} alt='invite poster 3' className='h-[450px] ' />
            </SwiperSlide>
          </Swiper>

        </div>
        <div className='flex justify-between p-3 px-6 '>
          <p className='!text-white font-bold'>Invite friends</p>
          <p className='!text-white font-bold'>Income <span className='text-rose-800'>
            10 billion</span> Commission</p>
        </div>
        <Box sx={style.invitebtn}>
          <NavLink >
            <Typography
              sx={{}}
              onClick={() => {
                functionTOCopy(
                  `${front_end_domain}/register/?ref=${result?.username}`
                );
              }}
            >
              INVITATION LINK
            </Typography>
          </NavLink>
        </Box>
        <Box sx={style.invitebtn1} >
          <NavLink >
            <Typography
              sx={{}}
              onClick={() => {
                functionTOCopy(
                  `${front_end_domain}/register/?ref=${result?.username}`
                );
              }}
            >
              COPY INVITATION LINK
            </Typography>
          </NavLink>
        </Box>
      </Container>
    </Layout>
  );
}

export default Invite;

const style = {
  container: { background: '#05012B', width: '100%', height: '100vh', overflow: 'auto', },

  header: {
    padding: '10px 8px',
    background: "zubgtext",
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
      fontSize: '22px'
    }
  },
  invitebutton: {
    width: '100%',
    background: '#05012B',
  },
  invitebtn: {
    mt: '20px',
    pb: 2,
    '&>a>p': {
      width: '80%',
      marginLeft: '10%',
      borderRadius: '20px',
      textAlign: 'center',
      padding: '10px',
      background: '#33cfbb',
      color: '#05012B',
      fontSize: '17px',
      fontWeight: 600,
    },
  },
  invitebtn1: {
    mt: '5px',
    pb: 2,
    '&>a>p': {
      width: '80%',
      marginLeft: '10%',
      borderRadius: '30px',
      textAlign: 'center',
      padding: '10px',
      background: '#05012b',
      color: '#33cfbb',
      fontSize: '17px',
      fontWeight: 600,
      border: "2px solid #33cfbb"
    },
  },
};
