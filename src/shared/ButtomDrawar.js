import DialogContent from '@mui/material/DialogContent';
import Drawer from '@mui/material/Drawer';
import Slide from '@mui/material/Slide';
import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} timeout={500} {...props} />;
});

const ButtomDrawer = ({
  openCustomDialogBox,
  setOpenCustomDialogBox,
  component,
  title,
}) => {
  const handleClose = () => {
    setOpenCustomDialogBox(false);
  };

  return (
    <Drawer
      anchor="bottom"
      open={openCustomDialogBox}
      onClose={handleClose}
      transitionDuration={500}
      PaperProps={{
        sx: {
          width: '100%',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        },
      }}
    >
      <Slide in={openCustomDialogBox} direction="up" timeout={500}>
        <div>
          <DialogContent className="!text-white">{component}</DialogContent>
        </div>
      </Slide>
    </Drawer>
  );
};

export default ButtomDrawer;
