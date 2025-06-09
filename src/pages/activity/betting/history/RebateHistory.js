import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../../../component/layout/Layout';
import { Box, Container, Stack, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import SvgIcons from '../../../../component/SvgIcons';
import not from "../../../../assets/not.png"
import r6 from '../../../../assets/r6.png';
import r7 from '../../../../assets/r7.png';
import r0 from '../../../../assets/reb0.png';
import r1 from '../../../../assets/reb1.png';
import r2 from '../../../../assets/reb2.png';
import r3 from '../../../../assets/reb3.png';
import r4 from '../../../../assets/reb4.png';
import r5 from '../../../../assets/reb5.png';
const RebateHistory = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
    const [value, setValue] = useState(1);
    const ChangeHandler = (newValue) => {
      setValue(newValue);
    };
  return (
    <Layout header={false}>
      <SvgIcons />
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
            <ArrowLeft sx={{ fontSize: '22px !important', }} />
          </Box>
          <Typography sx={{ width: '43%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Rebate History</Typography>
          <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
        </Box>
         <Stack direction="row" justifyContent="center" alignItems="center"  spacing={1} className="shadow-md " >
                  <img
                    src={value === 1 ? r0 : r1}
                    alt="All Betting"
                    className="h-14 cursor-pointer"
                    onClick={() => ChangeHandler(1)}
                  />
                  <img
                    src={value === 2 ? r3 : r2}
                    alt="Wingo"
                    className="h-14 cursor-pointer"
                    onClick={() => ChangeHandler(2)}
                  />
                  <img
                    src={value === 3 ? r4 : r5}
                    alt="TRX"
                    className="h-14 cursor-pointer"
                    onClick={() => ChangeHandler(3)}
                  />
                  <img
                    src={value === 4 ? r6 : r7}
                    alt="K3"
                    className="h-14 cursor-pointer"
                    onClick={() => ChangeHandler(4)}
                  />
                </Stack>
        <div className='flex justify-center items-center mt-5'>
          <img src={not} alt=''/>
        </div>
      </Container>
    </Layout>
  );
};

export default RebateHistory;
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