import React from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Gamerule = ({ gameRuleOpen, setRuleOpen }) => {
  return (
    <div>
      <Dialog
        open={gameRuleOpen}
        onClose={() => setRuleOpen(false)}
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
          Game rules
          <IconButton
            onClick={() => setRuleOpen(false)}
            sx={{ color: 'white' }}
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Typography fontSize={14} mb={2} className="!text-slate-400">
            Bet limits are presented below
          </Typography>

          {[
            { label: 'Min bet', value: '0.01 USD' },
            { label: 'Max bet', value: '150 USD' },
            { label: 'Max win', value: '10 000 USD' },
          ].map((item, idx) => (
            <Box
              key={idx}
              sx={{
                backgroundColor: '#383a50',
                px: 1.5,
                py: 1.2,
                borderRadius: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1.5,
              }}
            >
              <Typography fontSize={14} className="!text-white">
                {item.label}:
              </Typography>
              <Typography fontSize={14} className="!text-white">
                {item.value}
              </Typography>
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gamerule;
