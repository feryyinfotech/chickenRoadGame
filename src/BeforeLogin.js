import { Box, Container } from '@mui/material';
import React, { startTransition, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import splash_screen from './assets/images/splesh.jpg';
const BeforeLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      startTransition(() => navigate('/dashboard'));
    }, 1000);
  }, []);

  return (
    <Container
      sx={{
        height: '100vh',
      }}
    >
      <Box>
        <img src={splash_screen} className="!h-[100vh]" />
      </Box>
    </Container>
  );
};

export default BeforeLogin;
