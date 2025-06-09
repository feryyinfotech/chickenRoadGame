import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import agn from '../../assets/images/agent.png';
import backbtn from '../../assets/images/backBtn.png';
import serv from '../../assets/services.png';
import Layout from '../../component/layout/Layout';
import theme from '../../utils/theme';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Server = () => {
  return (
    <>
      <Layout header={false}>
        <Container
          sx={{
            width: '100%',
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Box sx={style.header} className="!p-0 mt-2">
            <NavLink to="/promotion">
              <ArrowBackIosNewIcon className="!text-white !text-xl !mx-5 " />
            </NavLink>
            <Typography
              variant="body1"
              color="initial"
              className="!text-white !-mt-6 pb-5"
            >
              Agent Line Customer Server
            </Typography>
            <Box></Box>
          </Box>
          <Box>
            <img
              src={serv}
              alt=""
              className="rounded-br-2xl !bg-[#00ECBE]"
              // style={{ filter: 'grayscale(1)' }}
            />
          </Box>
          <Box>
            {' '}
            <NavLink to="/services">
              <img
                src={agn}
                className="relative left-22 top-17 "
                alt=""
                style={{
                  width: '60px',
                  filter: 'hue-rotate(123deg)',
                  position: 'absolute',
                  top: '76%',
                  right: '29%',
                }}
              />
            </NavLink>
          </Box>
        </Container>
      </Layout>
    </>
  );
};
export default Server;
const style = {
  header: {
    padding: 1,
    background: '#05012B',

    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '20px',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
    },
  },
};
