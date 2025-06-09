import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Instruction = ({ setInstructionOpen, instructionOpen }) => {
  return (
    <Dialog
      open={instructionOpen}
      onClose={() => setInstructionOpen(false)}
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
        How to play?
        <IconButton
          onClick={() => setInstructionOpen(false)}
          sx={{ color: 'white' }}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 2, color: 'white' }}>
        <ol className="list-decimal pl-5 space-y-3 text-sm !text-white">
          <li className="!text-white">Specify the amount of your bet.</li>
          <li className="!text-white">
            Choose a difficulty level in a game. The number of lines covered and
            the chance to be fried hard varies depending on the level of
            difficulty.
            <div className="pl-4 mt-2">
              <ul className="list-disc text-sm space-y-1">
                <li className="!text-white">
                  <b className="!text-white">Easy</b> – there are 24 lines at
                  this level.
                </li>
                <li className="!text-white">
                  <b className="!text-white">Medium</b> – there are 22 lines at
                  this level.
                </li>
                <li className="!text-white">
                  <b className="!text-white">Hard</b> – there are 20 lines at
                  this level.
                </li>
                <li className="!text-white">
                  <b className="!text-white">Hardcore</b> – at the level of 15
                  lines.
                </li>
              </ul>
            </div>
          </li>
          <li className="!text-white">Press “Play” button.</li>
          <li className="!text-white">
            Your goal is to get through as many lines covered as possible
            without getting fried. You can withdraw your winnings at any stage
            of the game.
          </li>
          <li className="!text-white">
            In the menu, there is an option to enable "Space" to spin & go, it
            will allow you to move forward, use the "Space" key.
          </li>
        </ol>
      </DialogContent>
    </Dialog>
  );
};

export default Instruction;
