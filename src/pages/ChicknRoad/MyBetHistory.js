import React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import CustomCircularProgress from '../../shared/loder/CustomCircularProgress';
import { apiConnectorGet } from '../../services/apiconnector';
import { endpoint } from '../../services/urls';
import { useQuery } from 'react-query';
import moment from 'moment';

const MyBetHistory = ({ betHistoryOpen, setBetHistoryOpen }) => {
  const { isbetLoading, data: betHistory } = useQuery(
    ['bet_History'],
    () => apiConnectorGet(endpoint?.chickenroad_api?.bet_history),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const bethistory = betHistory?.data?.data;
  console.log(bethistory);
  return (
    <>
      <CustomCircularProgress isLoading={isbetLoading} />
      <Dialog
        open={betHistoryOpen}
        onClose={() => setBetHistoryOpen(false)}
        maxWidth={false}
        PaperProps={{
          sx: {
            width: '90vw',
            maxWidth: 400,
            borderRadius: 3,
            backgroundColor: '#2a2c3d',
            color: 'white',
            zIndex: 10,
            py: 1,
          },
        }}
        BackdropProps={{
          sx: {
            backdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pb: 1,
            color: 'white',
            fontSize: '1.2rem',
          }}
          onClick={() => {
            setBetHistoryOpen(false);
          }}
        >
          My bet history
          <IconButton sx={{ color: 'white' }} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ px: 2 }}>
          <div className="grid grid-cols-5 text-sm text-gray-400 pb-2 border-b border-gray-600">
            <p>Time</p>
            <p>Bet</p>
            <p>Mult.</p>
            <p>Win</p>
            <p></p>
          </div>
          <div
            className=" overflow-y-auto mt-2"
            style={{ maxHeight: '9.5rem' }}
            custom-scrollbar
          >
            {bethistory?.map((bet, index) => (
              <div
                key={index}
                className="grid grid-cols-5 items-center text-sm py-2 border-b border-gray-700"
              >
                <p>{moment(bet.datetime).format('HH:mm')}</p>
                <div className="flex items-center gap-1">
                  <span className="bg-white text-black text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    $
                  </span>
                  <span>{Number(bet.amount).toFixed(2)}</span>
                </div>
                <span className="bg-[#333446] px-2 py-1 rounded text-white text-xs">
                  x{Number(bet.multiplier).toFixed(2)}
                </span>
                <div className="flex items-center gap-1">
                  <span className="bg-white text-black text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    $
                  </span>
                  <span>{Number(bet.win).toFixed(2)}</span>
                </div>
                <BeenhereIcon
                  sx={{
                    fontSize: 18,
                    color: 'green',
                    '&:hover': {
                      color: '#eab308',
                    },
                  }}
                />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#2ecc71',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: 2,
                px: 4,
                '&:hover': { backgroundColor: '#27ae60' },
              }}
              className="!w-full"
            >
              LOAD MORE
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MyBetHistory;
