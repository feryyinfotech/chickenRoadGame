import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import avaitorcategory3 from '../../../assets/images/avv.png';
import lotteryimg from '../../../assets/images/lottery.svg';
import satta from '../../../assets/images/satta.png';
import lotterycategory1 from '../../../assets/images/lotterycategory1.png';
import lotterycategory2 from '../../../assets/images/lotterycategory2.png';
import lotterycategory3 from '../../../assets/images/lotterycategory3.png';
import lotterycategory4 from '../../../assets/images/lotterycategory4.png';
import win from '../../../assets/images/win.png';
import win2 from '../../../assets/images/win2.png';
import win3 from '../../../assets/images/win3.png';
import win4 from '../../../assets/images/win4.png';
import { apiConnectorGet } from '../../../services/apiconnector';
import { endpoint } from '../../../services/urls';
import lotterycategory5 from '../../.../../../assets/images/chickenRoad/chikengame.png';

function Lottery() {
  const navigate = useNavigate();
  const { data } = useQuery(
    ['status'],
    () => apiConnectorGet(endpoint.status),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );
  const status = data?.data?.data;

  return (
    <Box sx={{ padding: '15px' }}>
      <Stack direction="row" sx={{ alignItems: 'center', mb: 2 }}>
        <Box component="img" src={lotteryimg} width={25}></Box>
        <Typography
          variant="body1"
          color="initial"
          sx={{ ml: 1, fontSize: '15px', fontWeight: 600, color: 'white' }}
        >
          Lottery
        </Typography>
      </Stack>
      <Box className="dwcsb" sx={{ width: '100%' }}>
        <Box
          sx={{ width: '48%', mb: 2 }}
          onClick={() => {
            if (
              status?.find((i) => i?.title === 'wingo_status')?.longtext !== '0'
            ) {
              navigate('/wingo');
            } else {
              navigate('/comingsoon');
            }
          }}
        >
          <Box component="img" src={lotterycategory1}></Box>
        </Box>
        <Box
          sx={{ width: '48%', mb: 2 }}
          onClick={() => {
            if (status?.find((i) => i?.title === 'k3')?.longtext !== 0) {
              navigate('/k3');
            } else {
              navigate('/comingsoon');
            }
          }}
        >
          <Box component="img" src={lotterycategory2}></Box>
        </Box>
        <Box
          sx={{ width: '48%', mb: 2 }}
          onClick={() => navigate('/comingsoon')}
        >
          <Box component="img" src={lotterycategory3}></Box>
        </Box>
        <Box
          sx={{ width: '48%', mb: 2 }}
          onClick={() => {
            if (
              status?.find((i) => i?.title === 'trx_status')?.longtext !== 0
            ) {
              navigate('/trx');
            } else {
              navigate('/comingsoon');
            }
          }}
        >
          <Box component="img" src={lotterycategory4}></Box>
        </Box>

        <Box
          sx={{ width: '48%', mb: 2 }}
          onClick={() => {
            // if (status?.find((i) => i?.title === "trx_status")?.longtext !== 0) {
            //   navigate('/trx')
            // }
            // else {
            //   navigate('/comingsoon')
            // }
            navigate('/chickenroad');
          }}
        >
          <Box
            component="img"
            src={lotterycategory5}
            className="!w-48 !h-28 !rounded-md"
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Lottery;

const style = {
  positiongame: {
    position: 'absolute',
    top: '10px',
    left: '20px',
    '&>div>p': { fontSize: '12px', fontWeight: 400, color: 'white' },
  },
  gameheading: { fontSize: '20px', fontWeight: 700, color: 'white' },
};
