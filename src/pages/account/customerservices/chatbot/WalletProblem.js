import React from 'react';

const WalletProblem = () => {
  return (
    <>
      <div className="">
        <div className="w-full max-h-[80vh] overflow-y-auto bg-white border-b-2  rounded-t-3xl p-6">
          <h2 className="text-2xl font-semibold text-[#333333] text-center mb-4">
            FAQ
          </h2>
          <div className="border-b-2 border-gray-200 mb-2"></div>

          <h3 className="text-xl text-[#333333] font-medium ">
            AR Wallet Recharge Problem
          </h3>
          <p className="text-base text-black font-normal pt-2">
            Please make sure to pay the order authentically and do not upload
            false data. Malicious orders and uploading false data will
            permanently freeze the right to use AR wallet
          </p>
          <ol className="list-decimal ml-5 pt-2 leading-tight">
            <li className="text-black">Choose the amount to buy</li>
            <li className="text-black">Enter your purchase amount</li>
            <li className="text-black">Choose "Buy"</li>
            <li className="text-black">
              See the "Demo Video" (If you don't know how to do it)
            </li>
            <li className="text-black">Choose "Close"</li>
            <li className="text-black">
              Save the QR Code or Scan the code for transfer
            </li>
            <li className="text-black">
              Enter the UTR number after the transfer
            </li>
            <li className="text-black">Choose "Next"</li>
            <li className="text-black">
              Upload the transaction receipt after the transfer
            </li>
            <li className="text-black">Choose "Payment Completed"</li>
          </ol>
          <div className="flex flex-col mt-2  ">
            <p className="text-base text-black leading-tight font-normal">
              Reminder:
            </p>
            <p className="text-base text-black  leading-tight font-normal">
              Please make sure to pay the order authentically and do not upload
              false data. Malicious orders and uploading false data will
              permanently freeze the right to use AR wallet
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletProblem;
