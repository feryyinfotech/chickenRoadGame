import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import addbank from '../../../assets/images/addbank.png';
import backbtn from '../../../assets/images/backBtn.png';
import SvgIcons from '../../../component/SvgIcons';
import { ArrowLeft } from '@react-vant/icons';
import Layout from '../../../component/layout/Layout';
import { Checkbox } from 'react-vant'


function Bankaccount() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout header={false} footer={false} >
      <Container sx={style.container}>
        <SvgIcons />
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()} sx={{ width: '30%' }}>
            <ArrowLeft style={{ fontSize: '22px !important', color: 'white' }} />
          </Box>
          <Typography sx={{ width: '40%', fontSize: '18px !important', }} className="fcc ffr fw600 fs16" variant="body1" color="initial"> Bank account</Typography>
          <NavLink to="/withdrawlhistory" style={{ width: '30%', fontSize: '13px !important', color: 'white !important' }}>  </NavLink>
        </Box>
        <Box sx={{ width: '92%', margin: "auto", mb: 2, background: '#011341', }}>
          <Box sx={{ width: '100%', background: 'linear-gradient(90deg, #7afec3, #02afb6)', padding: '18px', borderRadius: '5px 5px 0px 0px', mt: 1 }}></Box>
          <Box sx={{ background: '#fffff', padding: '5px 16px', boxShadow: ' rgba(149, 157, 165, 0.2) 0px 8px 24px;' }}>
            <Stack direction='row' sx={{
              alignItems: 'center', justifyContent: 'space-between', background: "#001C54", padding: '5px', borderRadius: '2px', mb: '5px',
              '&>div>p': { fontSize: '13px', fontWeight: '600', }
            }}>
              <Box sx={{ width: '50%' }}>
                <Typography variant="body1" className="ffr" color="#92a8e3">Bank name</Typography>
              </Box>
              <Box sx={{ width: '50%' }}>
                <Typography variant="body1" className="ffr" color="#92a8e3">BANK OF BARODA</Typography>
              </Box>
            </Stack>
            <Stack direction='row' sx={{
              alignItems: 'center', justifyContent: 'space-between', background: "#001C54", padding: '5px', borderRadius: '2px', mb: '5px',
              '&>div>p': { fontSize: '13px', fontWeight: '600', }
            }}>
              <Box sx={{ width: '50%' }}>
                <Typography variant="body1" className="ffr" color="#92a8e3">Bank account number</Typography>
              </Box>
              <Box sx={{ width: '50%' }}>
                <Typography variant="body1" className="ffr" color="#92a8e3">433801****728</Typography>
              </Box>
            </Stack>
            <Stack direction='row' sx={{
              alignItems: 'center', justifyContent: 'space-between', background: "#001C54", padding: '5px', borderRadius: '2px', mb: '5px',
              '&>div>p': { fontSize: '13px', fontWeight: '600', }
            }}>
              <Box sx={{ width: '50%' }}>
                <Typography variant="body1" className="ffr" color="#92a8e3">Phone number</Typography>
              </Box>
              <Box sx={{ width: '50%' }}>
                <Typography variant="body1" className="ffr" color="#92a8e3">91738****</Typography>
              </Box>
            </Stack>
            <Stack direction='row' alignItems='center' mt={2} >
              <Checkbox checked={true} >
              </Checkbox>
              <Typography variant="body1" className="ffr" color="#92a8e3" sx={{ ml: 1, fontSize: '13px', fontWeight: '600', color: '#92a8e3' }}>Select</Typography>
            </Stack>
          </Box>
        </Box>
        <Box component={NavLink} to='/addbank' sx={{ mt: 2, width: '92%', margin: "auto", padding: 2, background: '#011341', borderRadius: '7px', display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '5px 5px 0px 0px', }}>
          <Box component='img' src={addbank} width={50}></Box>
          <Typography variant="body1" className="ffr" color="#92a8e3" sx={{ mt: 2, fontSize: '14px', fontWeight: '600', color: '#92a8e3' }}>Add a bank account number</Typography>
        </Box>
      </Container>
    </Layout>
  );
}
export default Bankaccount;


const style = {
  container: {
    background: '#05012B',
    width: '100%',
    height: '100vh',
    overflow: 'auto',
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
  paytmbtntwo: {
    borderRadius: "20px", textTransform: "capitalize", mb: 2,
    width: "92%", mt: 2, mx: 2, padding: "10px",
    "&:hover": { border: "1px solid transparent" },
  },
};
