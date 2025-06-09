import { Box, Button, Container, Stack, Typography } from '@mui/material';
import moment from 'moment';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import theme from '../../utils/theme';
import CustomCircularProgress from '../../shared/loder/CustomCircularProgress';
import { apiConnectorGet } from '../../services/apiconnector';
import { endpoint } from '../../services/urls';

const DepositeHistory = () => {
  const [isAllValue, setIsAllValue] = useState(false);
  const { isLoading, data } = useQuery(
    ['deposit_history_usdt'],
    () => apiConnectorGet(endpoint?.deposit_history_usdt),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const res = data?.data?.data || [];

  return (
    <Container sx={{ background: '#05012B' }} className="!h-screen">
      <CustomCircularProgress isLoading={isLoading} />
      {res?.map((i, index) => {
        return (
          <Box
            key={index}
            sx={{
              padding: '5px',
              borderRadius: '10px',
              background: '#011341',
              width: '92%',
              margin: '16px auto !important',
            }}
          >
            <Stack
              direction="row"
              sx={{
                paddingBottom: '10px',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #efefef',
              }}
            >
              <Box>
                <Typography className="bgblue !text-white rounded px-2 py-1 !flex justify-center">
                  Deposit
                </Typography>
              </Box>
              <Box
                sx={{
                  color: '#888',
                  textTransform: 'capitalize',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                {i?.tr15_status}
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                '&>p:nth-child(1)': {
                  color: '#888',
                  fontSize: '13px',
                  fontWeight: '600',
                  py: 1,
                },
                '&>p:nth-child(2)': {
                  color: theme.palette.primary.main,
                  fontSize: '13px',
                  fontWeight: '600',
                  py: 1,
                },
              }}
            >
              <Typography variant="body1" color="initial">
                Balance
              </Typography>
              <Typography variant="body1"> {i?.tr15_amt}</Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                '&>p': {
                  color: '#888',
                  fontSize: '13px',
                  fontWeight: '600',
                  py: 1,
                },
              }}
            >
              <Typography variant="body1" color="initial">
                Type
              </Typography>
              <Typography variant="body1" color="initial">
                {i?.Deposit_type}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                '&>p': {
                  color: '#888',
                  fontSize: '13px',
                  fontWeight: '600',
                  py: 1,
                },
              }}
            >
              <Typography variant="body1" color="initial">
                Time
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                className="!text-green-500"
              >
                {moment.utc(i?.tr15_date)?.format('DD-MM-YYYY HH:mm:ss')}
              </Typography>
            </Stack>
          </Box>
        );
      })}

      <Button
        sx={style.paytmbtntwo}
        variant="outlined"
        onClick={() => setIsAllValue(!isAllValue)}
      >
        {isAllValue ? 'Show Less' : ' All history'}
      </Button>
    </Container>
  );
};

export default DepositeHistory;
const style = {
  paytmbtntwo: {
    borderRadius: '20px',
    textTransform: 'capitalize',
    mb: 2,
    width: '92%',
    mt: 2,
    mx: 2,
    padding: '10px',
    '&:hover': { border: '1px solid transparent' },
  },
  wdbtn: {
    width: '95% !important',
    boxShadow: '0 0.05333rem #b6bad0',
    borderRadius: '20px',
    border: 'none',
    color: '#fff',
    letterSpacing: '0.13333rem',
    fontWeight: '700',
    fontSize: '15px',
    height: '0.93333rem',
    width: '100%',
    background:
      'linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%), linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%)',
    backgroundSize: '100% 100%, 100% 100%',
    backgroundPosition: 'center, center',
    backgroundRepeat: 'no-repeat, no-repeat',
    textShadow: '0 0.02667rem 0.01333rem #afb0be',
    padding: '20px',
    mt: 3,
  },
};
