import React from 'react';

const ChatbotDeposit = () => {
  return (
    <>
      <div className="w-full max-h-[80vh]  bg-white rounded-t-3xl p-2">
        <h2 className="text-2xl font-semibold text-black text-center mb-4">
          FAQ
        </h2>
        <div className="border-b-2 border-gray-200 mb-2"></div>

        <h3 className="text-xl text-black font-medium ">Deposit Not Receive</h3>
        <p className="text-base text-black mt-2 font-normal">
          If you still encounter the problem of your deposit order still not
          arrived into your ID account after you resubmit a new deposit order
          and fill all the correct information from your previous payment, we
          highly recommend you for submit a deposit problem query to our
          self-service team by simply select “Deposit Not Receive” and follow
          the step-by-step below to resolve the issue :
        </p>
        <ul className="list-decimal ml-5 leading-tight">
          <li className="text-black font-normal">
            Choose "Deposit Not Received"
          </li>
          <li className="text-black font-normal">Press "Submit UTR"</li>
          <li className="text-black font-normal">Fill "Deposit UTR Number"</li>
          <li className="text-black font-normal">Fill "Receiver UPI ID"</li>
          <li className="text-black font-normal">Upload Receipt Photo</li>
          <li className="text-black font-normal">Press "Confirm"</li>
        </ul>
        <p className="text-base text-black font-normal mt-2 leading-tight">
          If the recharge is delayed, don't worry, our professional team will
          conduct a manual checking, and will confirm and update your payment
          status to the bank side every 30 minutes to ensure that it will be
          helpful for speed up the arrival of your deposit payment into your ID
          account.
        </p>
      </div>
    </>
  );
};

export default ChatbotDeposit;
