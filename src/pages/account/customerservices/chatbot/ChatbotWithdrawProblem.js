import React from 'react';

const ChatbotWithdrawProblem = () => {
  return (
    <>
      <div className="w-full max-h-[80vh]  bg-white rounded-t-3xl p-2">
        <h2 className="text-2xl font-semibold text-black text-center mb-4">
          FAQ
        </h2>
        <div className="border-b-2 border-gray-200 mb-2"></div>

        <h3 className="text-xl text-black font-medium ">Withdrawal problem</h3>
        <p className="text-base text-black mt-2 font-normal leading-tight">
          Due to complex banking procedures in India, there may be a little
          delay in the arrival of funds. At occasions, members may experience
          problems where the withdrawal order status shows “Completed” but the
          funds have not yet reached their bank account. Please do not worry if
          this happens. After submitting a withdrawal, please allow 1-3 business
          days to receive the funds. If the funds have not been received after 3
          business days, simply select “Withdrawal Problem” and follow the
          step-by-step below to resolve the issue :
        </p>
        <ul className="list-decimal ml-5 leading-tight pt-2">
          <li className="text-black font-normal">Choose "Withdraw Problem"</li>
          <li className="text-black font-normal">
            Press "Submit PDF Statement"{' '}
          </li>
          <li className="text-black font-normal">Fill PDF Password if have</li>
          <li className="text-black font-normal">
            Upload PDF Bank Stament File
          </li>
        </ul>
        <p className="text-base text-black font-normal mt-3 leading-tight">
          After you have completely submitted all the requirements in your
          withdrawal problem, please don't be in a rush and allow a little time
          for our experts to check and resolve the problem you are experiencing
          as soon as possible. You can also check the status of your issue
          through the “Progress Query” button to see the status of all order
          records that you have submitted to our Self Service Center.
        </p>
      </div>
    </>
  );
};

export default ChatbotWithdrawProblem;
