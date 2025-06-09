import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../../../component/layout/Layout';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import WalletProblem from './WalletProblem';
import ButtomDrawar from '../../../../shared/ButtomDrawar';
import ChatbotDeposit from './ChatbotDeposit';
import ChotbotWithdrawl from './ChotbotWithdrawl';
import ChatbotWithdrawProblem from './ChatbotWithdrawProblem';

const Chatbot = () => {
  const [openCustomDialogBox, setOpenCustomDialogBox] = useState(false);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center py-1">
      <div className="bg-[#F7F8FF] w-full md:w-[80%] lg:w-[60%] xl:w-[40%] py-2">
        <Box className="!bg-[#F7F8FF] p-3">
          <Stack
            direction="row"
            sx={{
              alignItems: 'end',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <NavLink onClick={goBack}>
              <ArrowBackIosIcon className="!ml-2 !text-black !h-5" />
            </NavLink>
            <Box sx={{ position: 'absolute', left: '40%', top: '10%' }}>
              <Typography
                variant="body1"
                className="!text-black text-center !text-2xl"
              >
                Chatbot
              </Typography>
            </Box>
          </Stack>
        </Box>

        <div className="flex flex-col m-3 p-2 h-[520px] md:h-[520px] xl:h-[600px] rounded-md bg-white">
          <h1 className="text-xl xs:text-sm text-black font-semibold mb-4">
            DEPOSIT AND WITHDRAW PROBLEM
          </h1>

          <div className="flex flex-col bg-[#F6F6F6] m-2 rounded-xl ">
            <div
              className="flex gap-4 p-4 cursor-pointer"
              onClick={() => {
                setOpenCustomDialogBox('Deposit Not Receive');
              }}
            >
              <span className="text-base font-medium text-black">1</span>
              <p className="text-base font-medium text-[#666666]">
                Deposit Not Receive
              </p>
            </div>
            <div className="border-gray-200 border-b-2 mx-4"></div>

            <div
              className="flex gap-4 p-4 cursor-pointer"
              onClick={() => {
                setOpenCustomDialogBox('AR Wallet Recharge Problem');
              }}
            >
              <span className="text-base font-medium text-black">2</span>
              <p className="text-base font-medium text-[#666666]">
                AR Wallet Recharge Problem
              </p>
            </div>
            <div className="border-gray-200 border-b-2 mx-4"></div>

            <div
              className="flex gap-4 p-4 cursor-pointer"
              onClick={() => {
                setOpenCustomDialogBox('AR Wallet Withdrawal Issue');
              }}
            >
              <span className="text-base font-medium text-black">3</span>
              <p className="text-base font-medium text-[#666666]">
                AR Wallet Withdrawal Issue
              </p>
            </div>
            <div className="border-gray-200 border-b-2 mx-4"></div>

            <div
              className="flex gap-4 p-4 cursor-pointer"
              onClick={() => {
                setOpenCustomDialogBox('Withdrawal problem');
              }}
            >
              <span className="text-base font-medium text-black">4</span>
              <p className="text-base font-medium text-[#666666]">
                Withdrawal problem
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end m-3 ">
          <Button
            className="w-full !bg-[#011341] !text-xl !text-white !rounded-full !p-3 font-normal"
            onClick={() => navigate('/customer/gameproblem')}
          >
            Game Problems
          </Button>
        </div>

        {openCustomDialogBox && (
          <ButtomDrawar
            openCustomDialogBox={openCustomDialogBox}
            setOpenCustomDialogBox={setOpenCustomDialogBox}
            title={openCustomDialogBox}
            component={
              (openCustomDialogBox === 'Deposit Not Receive' && (
                <ChatbotDeposit />
              )) ||
              (openCustomDialogBox === 'AR Wallet Recharge Problem' && (
                <WalletProblem />
              )) ||
              (openCustomDialogBox === 'AR Wallet Withdrawal Issue' && (
                <ChotbotWithdrawl />
              )) ||
              (openCustomDialogBox === 'Withdrawal problem' && (
                <ChatbotWithdrawProblem />
              ))
            }
          />
        )}
      </div>
    </div>
  );
};

export default Chatbot;
