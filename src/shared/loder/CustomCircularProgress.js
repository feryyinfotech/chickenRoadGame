import { CircularProgress, Dialog, Slide } from '@mui/material';
import logo from '../../assets/images/logo.png';

import React from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CustomCircularProgress = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="loader-backdrop">
          <div className="jalwa-logo-container">
            <div className="jalwa-border-spinner"></div>
            <img src={logo} alt="Jalwa Logo" className="jalwa-logo" />
          </div>
        </div>
      )}
    </>
  )
}

export default CustomCircularProgress
