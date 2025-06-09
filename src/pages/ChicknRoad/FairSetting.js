import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { FaRegCopy } from 'react-icons/fa6';

const FairSetting = ({ dialogOpen, setDialogOpen }) => {
  const clientSeed = 'a67ba8453939bd16';
  const serverSeed = 'de5fc339bbcb01b53d694d718cbcb01b53d694';
  return (
    <div>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
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
        >
          Provably fair settings
          <IconButton
            onClick={() => setDialogOpen(false)}
            sx={{ color: 'white' }}
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Typography fontSize={14} mb={3} className="!text-slate-400">
            This game uses Provably Fair technology to determine game result
          </Typography>

          <Typography
            fontWeight="bold"
            fontSize={14}
            mb={0.5}
            className="!text-white"
          >
            Next client (Your) seed:
          </Typography>
          <Typography fontSize={12} mb={1} className="!text-slate-400">
            Round result is determined from combination of server seed and first
            3 bets of the round.
          </Typography>

          <Box
            sx={{
              backgroundColor: '#383a50',
              px: 1.5,
              py: 1,
              borderRadius: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography
              fontSize={14}
              sx={{ wordBreak: 'break-all' }}
              className="!text-slate-400"
            >
              Current :<span className="!text-white"> {clientSeed}</span>
            </Typography>
            <IconButton
              size="small"
              sx={{ color: 'white' }}
              onClick={() => navigator.clipboard.writeText(clientSeed)}
            >
              <FaRegCopy />
            </IconButton>
          </Box>

          <Typography
            fontWeight="bold"
            fontSize={14}
            mb={1}
            className="!text-white"
          >
            Next server seed SHA256:
          </Typography>
          <Box
            sx={{
              backgroundColor: '#383a50',
              px: 1.5,
              py: 1,
              borderRadius: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography
              fontSize={14}
              sx={{ wordBreak: 'break-all' }}
              className="!text-white"
            >
              {serverSeed}
            </Typography>
            <IconButton
              size="small"
              sx={{ color: 'white' }}
              onClick={() => navigator.clipboard.writeText(serverSeed)}
            >
              <FaRegCopy />
            </IconButton>
          </Box>

          <Typography fontSize={14} className="!text-slate-400 !text-center ">
            You can check fairness of each bet from bets history
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FairSetting;
