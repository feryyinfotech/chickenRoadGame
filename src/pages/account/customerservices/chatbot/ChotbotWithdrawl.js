import React from 'react';

const ChotbotWithdrawl = () => {
  return (
    <>
      <div className="w-full max-h-[80vh]  bg-white rounded-t-3xl p-2">
        <h2 className="text-2xl font-semibold text-black text-center mb-4">
          FAQ
        </h2>
        <div className="border-b-2 border-gray-200 mb-2"></div>

        <h3 className="text-2xl text-black font-normal ">
          AR Wallet Withdrawal Issue
        </h3>
        <p className="text-base text-black mt-2 leading-tight font-normal">
          Click ARPAY on the withdrawal button
        </p>
        <p className="text-base text-black leading-tight font-normal">
          Enter the withdrawal amount and platform password! The platform will
          quickly transfer ARB to your AR wallet account.
        </p>
        <p className="text-base text-black font-normal mt-3 leading-tight">
          After the ARB payment is completed on the platform, you can check your
          ARB amount on your AR Wallet by press the check on AR wallet
        </p>
        <p className="text-base text-black font-normal  leading-tight">
          When you need to convert ARB to INR, just click to enter the wallet
          and proceed to the next step.
        </p>
      </div>
    </>
  );
};

export default ChotbotWithdrawl;
