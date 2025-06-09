import React from 'react';
import WalletIcon from '@mui/icons-material/Wallet';
import real from '../../../assets/real.png';
import wal from '../../../assets/wal.png';

const WingoRebate = () => {
  return (
    <>
      <div className=" bg-[#011341] p-4 my-3 rounded-lg shadow-md">
        <p className="text-lg font-semibold text-white">
          Lottery-Total betting rebate
        </p>
        <img src={real} alt="" />
        <div className="flex gap-2 items-center mt-2">
          <img src={wal} />
          <p className="text-2xl text-white font-semibold"> 0.00 </p>
        </div>
        <p className="w-full p-2 mt-3 bg-[#001c54] rounded-md text-sm outline-none placeholder-gray">
          {' '}
          Upgrade VIP level to increase rebate rate{' '}
        </p>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <p className="w-full p-2 bg-[#001c54] rounded-md text-sm outline-none text-left placeholder-gray">
            {' '}
            Rebate rate <br /> <span className="text-red-600"> 0 %</span>{' '}
          </p>
          <p className="w-full p-2 bg-[#001c54] rounded-md text-sm outline-none text-left placeholder-gray">
            {' '}
            Total rebate <br /> <span className="text-yellow-600"> 0</span>{' '}
          </p>
        </div>

        <p className="text-sm text-gray-400 mt-3">
          Automatic code washing at 01:00:00 every morning
        </p>

        <button className="w-full  mt-3 bg-gray-500 text-white py-2 rounded-full shadow-md font-semibold hover:opacity-90 transition">
          One-Click Rebate
        </button>
      </div>
    </>
  );
};

export default WingoRebate;
