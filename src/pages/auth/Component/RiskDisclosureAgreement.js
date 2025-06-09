import { Box, Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import backbtn from '../../../assets/images/backBtn.png';
import certificate from '../../../assets/images/certificate.png';


function RiskDisclosureAgreement() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };


  return (
    <Container sx={{ background: '#05012B' }}>
      <Box sx={{ background: 'linear-gradient(175deg, rgba(1,19,65,1) 0%, rgba(35,196,185,1) 100%)', padding: 1 }}>
        <Stack direction='row' sx={{ alignItems: 'end', justifyContent: 'space-between', position: 'relative' }}>
          <NavLink onClick={goBack}>
            <Box component='img' src={backbtn} width={25}>
            </Box>
          </NavLink>
          <Box sx={{ position: 'absolute', left: '23%', top: '10%' }}>
            <Typography variant="body1" sx={{ color: 'white', fontSize: '18px', fontWeight: '500' }}>Risk Disclosure Agreement</Typography>
          </Box>
          <NavLink >
          </NavLink>
        </Stack>

      </Box>
      <Box sx={{ padding: 2, height: '88vh' }}>
        <Box component='img' src={certificate} sx={{ width: '100%', mt: 3 }}></Box>
      </Box>
    </Container >);
}
export default RiskDisclosureAgreement;
