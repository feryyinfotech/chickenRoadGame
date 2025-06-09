import { Box, Container, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';



const notifications = [
  { time: '2025-04-07 15:42:25', text: 'Your account is logged in 2025-04-07 15:42:25', action: 'delete' },
  { time: '2025-04-07 14:32:22', text: 'Your account is logged in 2025-04-07 14:32:22', action: 'delete' },
  { time: '2025-04-07 14:06:59', text: 'Your account is logged in 2025-04-07 14:06:59', action: 'delete' },
  { time: '2025-04-07 13:25:12', text: 'Your account is logged in 2025-04-07 13:25:12', action: 'delete' },
  { time: '2025-04-07 12:39:18', text: 'Your account is logged in 2025-04-07 12:39:18', action: 'multiple' },
  { time: '2025-04-07 10:48:37', text: 'Your account is logged in 2025-04-07 10:48:37', action: 'multiple' },
  { time: '2025-04-05 12:59:39', text: 'Your account is logged in 2025-04-05 12:59:39', action: 'delete' },
];

function GameNotification() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout header={false}>
      <SvgIcons />
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
            <ArrowLeft sx={{ fontSize: '22px !important', }} />
          </Box>
          <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Notification</Typography>
          <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
        </Box>
        <Box
          sx={{
            width: '95%',
            margin: 'auto',
          }}
        >
          {notifications.map((notification, index) => (
            <Box sx={{
              background: '#011341',
              p: '10px',
              borderRadius: '5px',
              my: '12px',
              mt: '15px',
            }}>
              <Box className="fcsb" sx={{ width: '100%', }}>
                <Typography className="fcs">
                  <svg className="svg-icon" width="25" height="25">
                    <use xlinkHref="#icon-notification"></use>
                  </svg>
                  <Typography className="roboto" sx={{ color: 'white', fontSize: '16px', fontWeight: '700px', ml: 1 }}>LOGIN NOTIFICATION</Typography>
                </Typography>
                <svg className="svg-icon" width="16" height="16">
                  <use xlinkHref="#icon-messageGarbage"></use>
                </svg>
              </Box>
              <Typography variant="body2" sx={{ fontSize: "12px", color: "#6f80a4" }}> {notification.time}</Typography>
              <Typography variant="body1" sx={{ fontSize: "14px", color: '#92a8e3', mt: 1 }}> {notification.text}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Layout>
  );
}

export default GameNotification;



export const style = {
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
};

