import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import customer from '../../../assets/cus.png';
import f1 from '../../../assets/fq1.png';
import f from '../../../assets/fq2.png';
import f3 from '../../../assets/fq3.png';
import f4 from '../../../assets/fq4.png';
import f5 from '../../../assets/fq5.png';
import f6 from '../../../assets/fq6.png';
import f7 from '../../../assets/fq7.png';
import f8 from '../../../assets/fq8.png';
import f9 from '../../../assets/fq9.png';
import imgEN from '../../../assets/images/en-4c6eba8e.png';
import home from '../../../assets/images/home.png';

const CustomerServices = () => {
  const navigate = useNavigate();
  const [open, setOpenaccount] = React.useState(false);
  const [openlogin, setOpenlogin] = React.useState(false);
  const [openUSDT, setOpenUSDT] = React.useState(false);
  const serviceOptions = [
    {
      img: <img src={f1} alt="FAQ" />,
      text: 'FAQ',
      onClick: () => {
        navigate('/chatbot');
      },
    },
    {
      img: <img src={f} alt="Deposit Not Receive" />,
      text: 'Deposit Not Receive',
      onClick: () => {
        navigate('/customer/recharge');
      },
    },
    {
      img: <img src={f3} alt="IFSC Modification" />,
      text: 'IFSC Modification',
      onClick: () => {
        navigate('/customer/ifsc');
      },
    },
    {
      img: <img src={f4} alt="Delete Withdraw Bank Account and Rebind" />,
      text: 'Delete Withdraw Bank Account and Rebind',
      onClick: () => {
        setOpenaccount(true);
      },
    },
    {
      img: <img src={f5} alt="Withdrawal Problem" />,
      text: 'Withdrawal Problem',
      onClick: () => {
        navigate('/customer/withproblem');
      },
    },
    {
      img: <img src={f6} alt="Change ID Login Password" />,
      text: 'Change ID Login Password',
      onClick: () => {
        setOpenlogin(true);
      },
    },
    {
      img: <img src={f7} alt="Change Bank Name" />,
      text: 'Change Bank Name',
      onClick: () => {
        navigate('/customer/changebankingname');
      },
    },
    {
      img: <img src={f8} alt="Delete Old USDT Address and rebind" />,
      text: 'Delete Old USDT Address and rebind',
      onClick: () => {
        setOpenUSDT(true);
      },
    },
    {
      img: <img src={f9} alt="Game Problems" />,
      text: 'Game Problems',
      onClick: () => {
        navigate('/customer/gameproblem');
      },
    },
  ];

  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center items-center py-1">
        <div className="bg-white w-full md:w-[80%] lg:w-[60%] xl:w-[40%] py-2">
          <div className="flex justify-between items-center mb-4 px-2">
            <img
              src={home}
              alt="Home"
              className="h-5 cursor-pointer"
              onClick={() => navigate('/dashboard')}
            />
            <p className="text-black text-xl md:text-2xl font-semibold">
              Self Service Center
            </p>
            <div className="flex items-center gap-1 cursor-pointer">
              <img src={imgEN} alt={''} className="h-6 " />
              <p className="text-black text-lg">English</p>
            </div>
          </div>
          <img
            src={customer}
            alt="Customer Service"
            className="w-full rounded-md mb-4"
          />
          <p className="py-2 !px-4 text-lg md:text-xl text-gray-700 font-semibold">
            Self Services
          </p>

          <div className="">
            {serviceOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50"
                onClick={option.onClick}
              >
                <div className="flex items-center gap-3">
                  {option.img}
                  <p className="text-[#05012b]  text-xl">{option.text}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ))}
          </div>
          <p className="pt-5 text-black font-bold text-2xl p-2">Kind tips</p>
          <p className="text-gray-500 p-2">
            1.Please select the relevant query and submit it for review. After
            successful submission, the customer service specialist will handle
            it for you immediately.
          </p>

          <p className="text-gray-500 px-2">
            2.After submitting for review, you can use [Question in progress] to
            view the review results of the work order you submitted.
          </p>
          <button className="!w-full !text-xl p-2 !rounded-full !text-white !bg-[#011340] !my-5">
            Progress Query
          </button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-lg pt-5 px-8 py-2">
            <p className="text-lg text-black text-center font-semibold mt-4 mb-8">
              Cannot received verification code?
            </p>
            <div className="flex justify-between items-center pb-1 pt-5">
              <p
                className=" text-blue-600 text-xl font-semibold pt-2 px-4 rounded"
                onClick={() => navigate('/customer/selfdeleteaccount')}
              >
                Can Receive
              </p>
              <p
                className=" text-blue-600 text-xl font-semibold pt-2 px-4 rounded"
                onClick={() => navigate('/customer/upload')}
              >
                Cannot Receive
              </p>
            </div>
          </div>
        </div>
      )}
      {openlogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-lg pt-5 px-8 py-2">
            <p className="text-lg text-black text-center font-semibold mt-4 mb-8">
              Cannot received verification code?
            </p>
            <div className="flex justify-between items-center pb-1 pt-5">
              <p
                className=" text-blue-600 text-xl font-semibold pt-2 px-4 rounded"
                onClick={() => navigate('/customer/changelogin')}
              >
                Can Receive
              </p>
              <p
                className=" text-blue-600 text-xl font-semibold pt-2 px-4 rounded"
                onClick={() => navigate('/customer/changeupload')}
              >
                Cannot Receive
              </p>
            </div>
          </div>
        </div>
      )}
      {openUSDT && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-lg pt-5 px-8 py-2">
            <p className="text-lg text-black text-center font-semibold mt-4 mb-8">
              Cannot received verification code?
            </p>
            <div className="flex justify-between items-center pb-1 pt-5">
              <p
                className=" text-blue-600 text-xl font-semibold pt-2 px-4 rounded"
                onClick={() => navigate('/customer/deleteusdt')}
              >
                Can Receive
              </p>
              <p
                className=" text-blue-600 text-xl font-semibold pt-2 px-4 rounded"
                onClick={() => navigate('/customer/documentusdt')}
              >
                Cannot Receive
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerServices;
