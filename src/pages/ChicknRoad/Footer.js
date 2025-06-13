import React, { useRef, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Modal } from '@mui/material';
import musicFile from '../../assets/images/chickenRoad/Step1.mp3';
import musicFile2 from '../../assets/images/chickenRoad/coin.mp3';
import { useSelector } from 'react-redux';
import { IoMdCheckmark } from 'react-icons/io';
import CustomCircularProgress from '../../shared/loder/CustomCircularProgress';
import { apiConnectorPost } from '../../services/apiconnector';
import { endpoint } from '../../services/urls';
import { enCryptData } from '../../shared/secret';
import toast from 'react-hot-toast';
import { chicken_coin_amount } from '../../shared/JsonData';
import { useQueryClient } from 'react-query';

const Footer = ({
  setIsOpen,
  handleResetGame,
  isOpen,
  gameStarted,
  selected,
  chickenIndex,
  setChickenIndex,
  fireIndex,
  setFireIndex,
  setSelected,
  setGameStarted,
  isBurned,
  setIsBurned,
  visitedIndexes,
  setVisitedIndexes,
  setIsReturning,
  scrollRef,
}) => {
  const [amount, setamount] = useState(0.06);
  const [loading, setLoading] = useState(false);
  const difficulties = ['Easy', 'Medium', 'Hard', 'Hardcore'];
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const audioRef = useRef(null);
  const audioRefcoinmusic = useRef(null);
  const queryClient = useQueryClient();
  const isEnableSoundChickenG = useSelector(
    (state) => state.aviator.isEnableSoundChickenG
  );

  const handleOpen = async () => {
    try {
      if (audioRefcoinmusic.current && isEnableSoundChickenG) {
        await audioRefcoinmusic.current.play();
      }
    } catch (err) {
      console.error('Failed to play audio:', err);
    }
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
      setIsReturning(true);
      setChickenIndex(-1);
      setTimeout(() => {
        handleResetGame();
      }, 500);
    }, 500);
  };
  const handleAmpount = (value) => {
    setamount(value);
  };
  const handleGo = async () => {
    try {
      if (audioRef.current && isEnableSoundChickenG) {
        await audioRef.current.play();
        // console.log('Audio started playing');
      }
    } catch (err) {
      console.error('Failed to play audio:', err);
    }
    setChickenIndex((prevIndex) => {
      const newIndex = prevIndex !== null ? prevIndex + 1 : -1;
      setTimeout(() => {
        const coinElements = scrollRef.current?.children;
        if (!coinElements) return;
        const isBurned = fireIndex === newIndex;
        if (isBurned) {
          setIsBurned(true);
          setTimeout(() => {
            setIsReturning(true);
            setChickenIndex(-1);
            setTimeout(() => {
              setIsReturning(false);
              setGameStarted(false);
              setVisitedIndexes([]);
            }, 500);
          }, 500);
          return;
        }
        if (coinElements[newIndex]) {
          coinElements[newIndex].scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest',
          });
        }
        setVisitedIndexes((prev) =>
          prev.includes(newIndex) ? prev : [...prev, newIndex]
        );
      }, 100);
      return newIndex;
    });
  };

  const handlePlay = async () => {
    try {
      if (audioRef.current && isEnableSoundChickenG) {
        await audioRef.current.play();
      }
    } catch (err) {
      console.error('Failed to play audio:', err);
    }
    setIsBurned(false);
    setGameStarted(true);
    setChickenIndex(0);
    setVisitedIndexes([0]);
  };

  const placeBet_funct = async () => {
    setLoading(true);
    const reqbody = {
      bt_amount: amount,
      d_diff_level: selected === 'Easy' ? 1 : selected === 'Medium' ? 2 : 3,
      bet_type: 1,
      bet_multiplier: 0,
    };
    const play_data = enCryptData(reqbody);
    try {
      const response = await apiConnectorPost(
        endpoint?.chickenroad_api?.place_bet,
        {
          payload: play_data,
        }
      );
      toast(response?.data?.msg);
      queryClient.refetchQueries('wallet_amount_amount');
    } catch (e) {
      console.log(e?.message || 'An error occurred');
    }
    setLoading(false);
  };
  const cashout_fun = async () => {
    setLoading(true);
    const reqbody = {
      bt_amount: 0,
      d_diff_level: selected === 'Easy' ? 1 : selected === 'Medium' ? 2 : 3,
      bet_type: 2,
      bet_multiplier: chicken_coin_amount.find((i) => i.index === chickenIndex)
        ?.coinAmount,
    };
    const play_data = enCryptData(reqbody);
    try {
      const response = await apiConnectorPost(
        endpoint?.chickenroad_api?.place_bet,
        {
          payload: play_data,
        }
      );
      toast(response?.data?.msg);
      queryClient.refetchQueries('wallet_amount_amount');
    } catch (e) {
      console.log(e?.message || 'An error occurred');
    }
    setLoading(false);
  };

  // const chicken_coinamnt = chicken_coin_amount.find(
  //   (i) => i.index === chickenIndex
  // ).coinAmount;
  // console.log(chicken_coinamnt);
  // let chicken_coinamnt = 0;
  // if (chickenIndex !== null) {
  //   const coinData = chicken_coin_amount.find(
  //     (i) => i.index === chickenIndex
  //   )?.coinAmount;
  //   chicken_coinamnt = coinData?.coinAmount;
  // }
  // console.log(chicken_coinamnt, chickenIndex);
  return (
    <div>
      <CustomCircularProgress />
      <div className="p-3 m-4 bg-[#3A3C51] rounded-2xl">
        <div className="flex justify-between p-2 bg-[#4E4F61] rounded-md items-center mb-2">
          <span
            className="bg-[#606173] px-3 py-1 rounded  !text-white font-semibold"
            onClick={() => handleAmpount(0.01)}
          >
            MIN
          </span>
          <input
            className="text-white bg-[#4E4F61] text-center w-[150px]"
            type="text"
            value={amount}
            onChange={(e) => {
              const newValue = e.target.value;
              // parseFloat(e.target.value);
              // if (!isNaN(newValue)) {
              setamount(newValue <= 0 ? '' : newValue);
              // }
            }}
          />
          <span
            className="bg-[#606173] px-2 py-1 rounded !text-white font-semibold"
            onClick={() => handleAmpount(150)}
          >
            MAX
          </span>
        </div>
        <div className="grid grid-cols-4 gap-3  text-sm font-medium mb-4">
          <div
            className="bg-[#4E5164] !text-white flex items-center justify-center py-2 rounded-md"
            onClick={() => handleAmpount(0.05)}
          >
            0.05
            <span className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-white text-black text-xs font-semibold">
              $
            </span>
          </div>
          <div
            className="bg-[#4E5164] !text-white flex items-center justify-center py-2 rounded-md"
            onClick={() => handleAmpount(1)}
          >
            1
            <span className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-white text-black text-xs font-semibold">
              $
            </span>
          </div>
          <div
            className="bg-[#4E5164] !text-white flex items-center justify-center py-2 rounded-md"
            onClick={() => handleAmpount(2)}
          >
            2
            <span className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-white text-black text-xs font-semibold">
              $
            </span>
          </div>
          <div
            className="bg-[#4E5164] !text-white flex items-center justify-center py-2 rounded-md"
            onClick={() => handleAmpount(7)}
          >
            7
            <span className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-white text-black text-xs font-semibold">
              $
            </span>
          </div>
        </div>
        <div className="w-full">
          {!gameStarted && (
            <div className="relative w-full">
              {isOpen && (
                <div className="absolute bottom-full mb-2 w-full !text-white bg-[rgb(78,81,100)] rounded-md shadow-lg z-20">
                  {difficulties.map((level) => (
                    <button
                      key={level}
                      onClick={() => {
                        setSelected(level);
                        setIsOpen(false);
                      }}
                      className={`w-full px-4 py-2 !text-white flex justify-between items-center  ${
                        level === selected
                          ? 'font-semibold !text-yellow-600'
                          : ''
                      }`}
                    >
                      <span className="text-white hover:text-yellow-600">
                        {level}
                      </span>
                      {level === selected && (
                        <IoMdCheckmark className="text-yellow-600 text-lg" />
                      )}
                    </button>
                  ))}
                </div>
              )}
              <button
                className="bg-[#4E5164] flex justify-between items-center w-full p-2 rounded-md text-white mb-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selected}
                <KeyboardArrowDownIcon />
              </button>
            </div>
          )}

          <audio ref={audioRef} src={musicFile} />
          {!gameStarted ? (
            <div>
              <button
                className="w-full bg-green-500 text-white font-bold py-3 rounded-xl text-lg"
                onClick={() => {
                  handlePlay();
                  placeBet_funct();
                }}
              >
                Play
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <audio ref={audioRefcoinmusic} src={musicFile2} />
              <button
                className="flex-1 bg-yellow-500 text-black font-semibold py-5 px-4 rounded-xl text-sm"
                onClick={() => (handleOpen(), cashout_fun())}
              >
                Cash out <br />
                {(
                  chicken_coin_amount.find((i) => i.index === chickenIndex)
                    ?.coinAmount * amount
                ).toFixed(3)}{' '}
                USD
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="flex flex-col items-center justify-center px-6 py-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-md">
                    <p className="text-white text-lg font-semibold">WIN!</p>
                    <p className="text-3xl text-yellow-400 font-bold mt-1">
                      {chicken_coin_amount
                        .find((i) => i.index === chickenIndex)
                        ?.coinAmount.toFixed(2)}
                    </p>
                    <div className="flex items-center mt-1">
                      <p className="text-green-400 text-lg font-semibold">
                        +{' '}
                        {(
                          chicken_coin_amount.find(
                            (i) => i.index === chickenIndex
                          )?.coinAmount * amount
                        ).toFixed(3)}
                      </p>
                      <span className="text-green-400 text-lg ml-1">$</span>
                    </div>
                  </div>
                </Box>
              </Modal>

              <audio ref={audioRef} src={musicFile} />
              <button
                className="flex-1 bg-green-500 text-white font-bold py-5 rounded-xl text-sm"
                onClick={handleGo}
              >
                Go
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 220,
  bgcolor: 'transparent',
  boxShadow: 24,
  outline: 'none',
  p: 0,
};
