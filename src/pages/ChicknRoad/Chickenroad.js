import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import yellowimg from '../../assets/images/chickenRoad/yellowimg2.png';
import chicken from '../../assets/images/chickenRoad/chickengif.gif';
import chickencoin from '../../assets/images/chickenRoad/chickencoin2.png';
import gbflag from '../../assets/images/ukflag.png';
import {
  imagelist,
  avatars,
  greenimagelist,
  mdimagelist,
  hardimageList,
  hDimageList,
  mdgreenimagelist,
  hardgreenimagelist,
  hdgreenimagelist,
} from './chicken road images';
import burnedChicken from '../../assets/images/burnedChicken.png';
import PersonIcon from '@mui/icons-material/Person';
import fireGif from '../../assets/images/chickenRoad/fireGif.gif';
import smallfire from '../../assets/images/chickenRoad/smallfire.gif';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { PiClockClockwise } from 'react-icons/pi';
import avtaar1 from '../../assets/images/chickenRoad/avtaar1.png';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import FairSetting from './FairSetting';
import Gamerule from './Gamerule';
import MyBetHistory from './MyBetHistory';
import Instruction from './Instruction';
import Footer from './Footer';
import redcoin from '../../assets/images/chickenRoad/coinred.png';
import wall from '../../assets/images/chickenRoad/wall.png';
import src from '../../assets/images/chickenRoad/src.png';
import musicFile3 from '../../assets/images/chickenRoad/bgmusic.mp3';
import musicFile4 from '../../assets/images/chickenRoad/henaudio.mp3';
import { useDispatch, useSelector } from 'react-redux';
import {
  isEnableMusicFunction,
  isEnableSoundFunction,
} from '../../redux/slices/counterSlice';
import { useQuery, useQueryClient } from 'react-query';
import logo from '../../assets/images/logo.png';
import { apiConnectorGet } from '../../services/apiconnector';
import { endpoint } from '../../services/urls';
import CustomCircularProgress from '../../shared/loder/CustomCircularProgress';

const Chickenroad = () => {
  const queryClient = useQueryClient();
  const [selected, setSelected] = useState('Easy');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [gameRuleOpen, setRuleOpen] = useState(false);
  const [betHistoryOpen, setBetHistoryOpen] = useState(false);
  const [instructionOpen, setInstructionOpen] = useState(false);
  const [avatarDialogOpen, setAvatarDialogOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState();
  const [fireIndex, setFireIndex] = useState(null);
  const [smallFireIndex, setSmallFireIndex] = useState(null);
  const [isBurned, setIsBurned] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [chickenIndex, setChickenIndex] = useState(null);
  const [isReturning, setIsReturning] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [anchorEl, setAnchorEl] = useState(null);
  const [visitedIndexes, setVisitedIndexes] = useState([]);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const audioRefBg = useRef(null);
  const audioRefHen = useRef(null);

  const currentList =
    selected === 'Easy'
      ? imagelist
      : selected === 'Medium'
      ? mdimagelist
      : selected === 'Hard'
      ? hardimageList
      : hDimageList;

  const currentGreenList =
    selected === 'Easy'
      ? greenimagelist
      : selected === 'Medium'
      ? mdgreenimagelist
      : selected === 'Hard'
      ? hardgreenimagelist
      : hdgreenimagelist;

  const isEnableSoundChickenG = useSelector(
    (state) => state.aviator.isEnableSoundChickenG
  );
  const isEnableMusicChickenG = useSelector(
    (state) => state.aviator.isEnableMusicChickenG
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollRef = useRef(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 2 : 5);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    const updateFireIndex = () => {
      if (!scrollRef.current) return;
      const scrollLeft = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.offsetWidth;
      const itemWidth = scrollRef.current.children[0]?.offsetWidth || 0;
      const startIdx = Math.ceil(scrollLeft / itemWidth);
      const visibleIndices = Array.from(
        { length: visibleCount },
        (_, i) => startIdx + i
      ).filter((i) => i < currentList.length);

      if (visibleIndices.length > 0) {
        const randomVisibleIndex =
          visibleIndices[Math.ceil(Math.random() * visibleIndices.length)];
        setFireIndex(randomVisibleIndex);
      }
    };

    const interval = setInterval(updateFireIndex, 1000);
    scrollRef.current?.addEventListener('scroll', updateFireIndex);

    return () => {
      clearInterval(interval);
      scrollRef.current?.removeEventListener('scroll', updateFireIndex);
    };
  }, [visibleCount, currentList.length]);

  useEffect(() => {
    const updateFireSmallIndex = () => {
      if (!scrollRef.current) return;
      const scrollLeft = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.offsetWidth;
      const itemWidth = scrollRef.current.children[0]?.offsetWidth || 0;
      const startIdx = Math.ceil(scrollLeft / itemWidth);
      const visibleIndices = Array.from(
        { length: visibleCount },
        (_, i) => startIdx + i
      ).filter((i) => i < currentList.length);

      if (visibleIndices.length > 0) {
        const randomVisibleIndex =
          visibleIndices[Math.ceil(Math.random() * visibleIndices.length)];
        setSmallFireIndex(randomVisibleIndex);
      }
    };

    const interval = setInterval(updateFireSmallIndex, 1000);
    scrollRef.current?.addEventListener('scroll', updateFireSmallIndex);

    return () => {
      clearInterval(interval);
      scrollRef.current?.removeEventListener('scroll', updateFireSmallIndex);
    };
  }, [visibleCount, currentList.length]);

  const handleResetGame = () => {
    setIsBurned(false);
    setIsReturning(false);
    setChickenIndex(-1);
    setGameStarted(false);
    setVisitedIndexes([]);
    setTimeout(() => {
      const coinElements = scrollRef.current?.children;
      if (coinElements && coinElements[0]) {
        coinElements[0].scrollIntoView({
          behavior: 'smooth',
          left: 0,
          inline: 'start',
          block: 'nearest',
        });
      }
    }, 500);
  };

  useEffect(() => {
    if (chickenIndex !== null && chickenIndex === fireIndex) {
      setIsBurned(true);
      setTimeout(() => {
        setIsReturning(true);
        setChickenIndex(-1);
        setTimeout(() => {
          handleResetGame();
        }, 1000);
      }, 1000);
    }
  }, [chickenIndex, fireIndex]);

  useEffect(() => {
    const isSafeWin =
      chickenIndex === currentList.length - 1 && chickenIndex !== fireIndex;
    if (isSafeWin) {
      setTimeout(() => {
        handleResetGame();
      }, 1500);
    }
  }, [chickenIndex, fireIndex]);

  useEffect(() => {
    handleOpenFun();
  }, [isEnableMusicChickenG]);

  const handleOpenFun = async () => {
    try {
      if (audioRefBg.current && isEnableMusicChickenG) {
        await audioRefBg.current.play();
      } else {
        audioRefBg.current.pause();
      }
    } catch (err) {
      console.error('Failed to play audio:', err);
    }
  };

  useEffect(() => {
    if (isBurned) {
      if (isEnableSoundChickenG) {
        audioRefHen.current.play().catch((e) => {
          console.log('Autoplay blocked or failed:', e);
        });
      } else {
        audioRefHen.current.pause();
        audioRefHen.current.currentTime = 0;
      }
      dispatch(isEnableMusicFunction());
    }
  }, [isBurned, isEnableSoundChickenG, dispatch]);

  const { isLoading, data: wallet_amount } = useQuery(
    ['wallet_amount_amount'],
    () => apiConnectorGet(endpoint.get_balance),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const wallet_amount_data = wallet_amount?.data?.data || 0;

  return (
    <Container className="h-full  bg-[#05012B]">
      <CustomCircularProgress isLoading={isLoading} />
      <audio ref={audioRefBg} src={musicFile3} />
      <audio ref={audioRefHen} src={musicFile4} />

      <div className="bg-[#4E5164] p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={yellowimg} alt="egg" className="h-9 w-9" />
          <p className="text-white font-bold text-sm leading-tight">
            CHICKEN <br /> ROAD
          </p>
        </div>
        <div className="flex items-center bg-gray-500 rounded-md px-12 py-2">
          <p className="text-white text-base font-medium mr-2">
            {Number(wallet_amount_data?.wallet || 0) +
              Number(wallet_amount_data?.winning || 0)}
          </p>
          <div className="bg-white h-6 w-6 rounded-full flex items-center justify-center text-black text-sm font-bold">
            $
          </div>
        </div>
        <IconButton onClick={handleClick}>
          <MenuIcon className="text-white" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          PaperProps={{
            sx: {
              backgroundColor: '#3A3D51',
              color: 'white',
              borderRadius: 2,
              padding: 1,
              minWidth: 300,
            },
          }}
        >
          <MenuItem disableRipple className="!flex">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Box display="flex" alignItems="center" gap={1}>
                <img
                  src={selectedAvatar || avtaar1}
                  alt="avatar"
                  width={32}
                  height={32}
                  style={{ borderRadius: '50%' }}
                />
                <Typography fontWeight="bold" className="!text-white">
                  Divya...
                </Typography>
              </Box>

              <Typography
                variant="caption"
                className="!text-gray-400 !font-bold hover:!text-lime-600"
                sx={{ textAlign: 'end' }}
                onClick={() => setAvatarDialogOpen(true)}
              >
                Change avatar
              </Typography>
            </Box>
          </MenuItem>
          <Dialog
            open={avatarDialogOpen}
            onClose={() => setAvatarDialogOpen(false)}
            maxWidth={false}
            PaperProps={{
              sx: {
                width: '90vw',
                maxWidth: 400,
                borderRadius: 3,
                backgroundColor: '#2a2c3d',
                color: 'white',
                zIndex: 10,
              },
            }}
            BackdropProps={{
              sx: {
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(0, 0, 0, 0)',
              },
            }}
          >
            <DialogTitle
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pb: 1,
                color: 'white',
              }}
            >
              Change avatar
              <Button
                onClick={() => setAvatarDialogOpen(false)}
                sx={{ color: 'white', minWidth: 'auto' }}
              >
                X
              </Button>
            </DialogTitle>

            <DialogContent sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                {avatars.map((avt, index) => (
                  <Grid item xs={4} key={index}>
                    <Box
                      onClick={() => setSelectedAvatar(avt)}
                      sx={{
                        position: 'relative',
                        borderRadius: '100%',
                        cursor: 'pointer',
                        border:
                          selectedAvatar === avt
                            ? '4px solid #FEB62A'
                            : '2px solid transparent',
                        width: '62%',
                        display: 'flex',
                      }}
                    >
                      <img
                        src={avt}
                        alt="avatar"
                        style={{
                          borderRadius: '50%',
                          width: '70px',
                          // height: '64px',
                        }}
                      />
                      {selectedAvatar === avt && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            backgroundColor: '#FEB62A',
                            borderRadius: '50%',
                            width: 18,
                            height: 18,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 10,
                            color: 'black',
                            fontWeight: 'bold',
                          }}
                        >
                          ✓
                        </Box>
                      )}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </DialogContent>

            <DialogActions sx={{ mt: 2 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#22c55e',
                  '&:hover': { backgroundColor: '#16a34a' },
                  fontWeight: 'bold',
                  borderRadius: 2,
                  py: 1,
                }}
                onClick={() => setAvatarDialogOpen(false)}
                className=" !text-white"
              >
                SAVE AND CLOSE
              </Button>
            </DialogActions>
          </Dialog>

          <Divider sx={{ my: 1, borderColor: '#555' }} />

          <MenuItem disableRipple>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Box display="flex" alignItems="center" gap={1}>
                <VolumeUpIcon fontSize="small" className="!text-white" />
                <span className="!text-white">Sound</span>
              </Box>
              <Switch
                checked={isEnableSoundChickenG}
                className="!text-white"
                onClick={() => dispatch(isEnableSoundFunction())}
              />
            </Box>
          </MenuItem>

          <MenuItem disableRipple>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              className="!text-white"
            >
              <Box display="flex" alignItems="center" gap={1}>
                <AudiotrackIcon fontSize="small" className="!text-white" />
                <span className="!text-white"> Music</span>
              </Box>

              <Switch
                checked={isEnableMusicChickenG}
                onClick={() => dispatch(isEnableMusicFunction())}
              />
            </Box>
          </MenuItem>

          <Divider sx={{ my: 1, borderColor: '#555' }} />

          <MenuItem
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              color: 'white',
              '&:hover': {
                color: '#15803d',
              },
            }}
          >
            <BeenhereIcon fontSize="small" />
            <sapn
              className="!text-white hover:!text-[#15803d]"
              onClick={() => setDialogOpen(true)}
            >
              {' '}
              Provably fair settings
            </sapn>
          </MenuItem>
          <FairSetting dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />

          <MenuItem
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              color: 'white',
              '&:hover': {
                color: '#15803d',
              },
            }}
          >
            <SaveAsIcon fontSize="small" />

            <sapn
              className="!text-white hover:!text-[#15803d]"
              onClick={() => setRuleOpen(true)}
            >
              Game rules
            </sapn>
          </MenuItem>
          <Gamerule setRuleOpen={setRuleOpen} gameRuleOpen={gameRuleOpen} />
          <MenuItem
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              color: 'white',
              '&:hover': {
                color: '#15803d',
              },
            }}
          >
            <PiClockClockwise fontSize="small" />
            <sapn
              className="!text-white hover:!text-[#15803d]"
              onClick={() => {
                queryClient.refetchQueries('bet_History');
                setBetHistoryOpen(true);
              }}
            >
              My bet history
            </sapn>
          </MenuItem>
          <MyBetHistory
            betHistoryOpen={betHistoryOpen}
            setBetHistoryOpen={setBetHistoryOpen}
          />
          <MenuItem
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              color: 'white',
              '&:hover': {
                color: '#15803d',
              },
            }}
          >
            <IoIosInformationCircleOutline fontSize="small" />
            <sapn
              className="!text-white hover:!text-[#15803d]"
              onClick={() => setInstructionOpen(true)}
            >
              How to play
            </sapn>
          </MenuItem>
          <Instruction
            instructionOpen={instructionOpen}
            setInstructionOpen={setInstructionOpen}
          />
          <Divider sx={{ my: 1, borderColor: '#555' }} />
          <Box px={2} py={1} className="flex items-center text-white gap-2">
            <Typography variant="caption" color="#aaa">
              Powered by
            </Typography>
            <img src={logo} alt="logo" className="w-24" />
          </Box>
        </Menu>
      </div>
      <div>
        <div
          className="grid grid-cols-[45%_55%] overflow-x-scroll !overflow-y-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex flex-col items-center gap-3 text-white bg-[#2E324D]">
            <div className="flex items-center bg-[#2E324D] whitespace-nowrap gap-1 p-2">
              <p className="text-[#8CA6FF] font-semibold text-xs text-center ">
                Live wins
              </p>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-[#8CA6FF] font-semibold text-xs">
                Online: 11242
              </p>
            </div>
            <div className="flex items-center top-4 left-4 z-50 animate-slideFade justify-evenly w-full p-1 gap-1 bg-[#4B5382] rounded animate-slideFade overflow-hidden whitespace-nowrap flex-nowrap">
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 rounded-full flex items-center justify-center z-10 bg-red-400 opacity-80">
                  <PersonIcon
                    className="text-red-700 relative z-10"
                    fontSize="medium"
                  />
                </div>
                <img
                  src={gbflag}
                  alt="flag"
                  className="w-4 h-3 absolute -bottom-1 -right-2 rounded-sm z-20"
                />
              </div>
              <p className="text-white text-sm">228690</p>
              <p className="text-green-400 text-sm font-semibold">+£301.2000</p>
            </div>

            <div className="flex items-center justify-end mt-[6rem]">
              <div className="relative w-28 h-60">
                <div className="absolute inset-0 -mx-1 -mt-1 rounded-t-full bg-[#333652] border-[4px] border-[#202538]"></div>
                <div className="absolute top-1 left-1 right-1 bottom-1 rounded-t-full bg-[#15182C] border-[2px] border-[#1E223F] z-10"></div>
                {!gameStarted && (
                  <div className="absolute -bottom-5 left-0 right-0 z-20 flex justify-center ">
                    <img
                      src={chicken}
                      alt="chicken"
                      className="h-[210px] w-[9.5rem]  object-cover transition-all duration-1000"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div ref={scrollRef} className="flex  ">
            {currentList?.map((src, index) => {
              const isLast = index === currentList.length - 1;
              const isVisited = visitedIndexes.includes(index);
              const isPrevVisited = visitedIndexes.includes(index + 1);
              const isBurningIndex = isBurned && chickenIndex === index;
              const coinImage = isBurningIndex
                ? redcoin
                : isPrevVisited
                ? chickencoin
                : isVisited
                ? currentGreenList[index]
                : currentList[index];
              if (isLast) {
                return (
                  <React.Fragment key={index}>
                    <div className="flex !bg-[#3E4464] ">
                      <div className="flex flex-col px-[3rem] pt-[5rem] items-center relative bg-[#3E4464] ">
                        <div className="flex flex-col gap-4 mt-2">
                          <div className="w-[3rem] h-[2rem] rounded-lg bg-[#363B57] overflow-hidden ml-4 "></div>
                        </div>
                        <div className="mt-auto relative w-[112px] h-[280px] flex items-center justify-center">
                          <div
                            className={`absolute inset-0 -mt-1 rounded-t-full border-[4px] border-[#4C5580] bg-[#2D324D]  z-10 flex items-center justify-center`}
                          >
                            <img
                              key={index}
                              src={coinImage}
                              alt=""
                              className="object-center -mt-12 rounded-full w-[70px] h-[80px] animate-bounce"
                              style={{ animationDuration: '10.0s' }}
                            />
                          </div>
                          <div
                            className="absolute -bottom-[0rem] z-10 w-[140px] h-[200px] rounded-t-full"
                            style={{
                              background:
                                'linear-gradient(0deg, rgba(255, 236, 100, 0.4) 0%, rgba(255, 236, 100, 0.05) 80%, transparent 100%)',
                              clipPath:
                                'polygon(0% 0%, 100% 0%, 70% 100%, 30% 100%)',
                              filter: 'blur(4px)',
                            }}
                          ></div>
                          <div className="absolute bottom-0 left-3 right-3 h-[6px] bg-[#71759C] rounded-b-full z-30"></div>

                          <div className="absolute -bottom-1 z-20 flex flex-col items-center">
                            <div className="w-[80px] h-[6px] bg-[#E0DDC6] rounded-t-md z-20" />
                            <div
                              className="w-[80px] h-[50px] bg-[#C7C4B2] -mt-1 z-20"
                              style={{
                                clipPath: `polygon(
                                      10% 0%, 90% 0%,  
                                        80% 20%,         
                                        65% 80%,          
                                         35% 80%,
                                          20% 20%,
                                            10% 0%
                                            )`,
                              }}
                            />
                          </div>
                        </div>

                        {smallFireIndex === index && (
                          <img
                            src={smallfire}
                            alt="smallfire"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80px] h-[70px] z-50"
                          />
                        )}
                        {fireIndex === index && (
                          <img
                            src={fireGif}
                            alt="fire"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[70px] z-50"
                          />
                        )}
                      </div>
                      <img
                        src={wall}
                        alt="wall"
                        className="!h-[26.7rem] w-50 bottom-0 "
                      />
                    </div>
                  </React.Fragment>
                );
              }
              return (
                <React.Fragment key={index}>
                  <div
                    key={index}
                    className="flex flex-col  px-[1.1rem] pt-[3rem] items-center relative bg-[#3E4464]"
                  >
                    <div className="flex flex-col gap-4 mt-2">
                      <div className="w-[3rem] h-[2rem] rounded-lg bg-[#363B57] overflow-hidden ml-4"></div>
                      <div className="w-[3rem] h-[2rem] rounded-lg bg-[#363B57] overflow-hidden mr-6"></div>
                    </div>
                    <img
                      src={coinImage}
                      alt=""
                      className="object-cover mt-4 max-w-[100px]"
                    />
                    <div className="w-[3rem] h-[2rem] mt-4 mb-4 mr-6 rounded-lg bg-[#363B57] overflow-hidden"></div>
                    <div className="mt-auto relative w-[74px] h-[62px]">
                      <div className="absolute inset-0 -mx-1 -mt-1 rounded-t-full bg-[#333652] border-[4px] border-[#202538]"></div>
                      <div className="absolute top-2 left-1 right-1 bottom-1 rounded-t-full bg-[#363B57] z-4"></div>
                      <div className="absolute  z-20 left-1 right-1 flex justify-between items-end px-2 h-full">
                        {[...Array(7)].map((_, i) => (
                          <div
                            key={i}
                            className="w-[6px] bg-[#1C1F3A] rounded-full relative "
                            style={{ height: `${36 + (i % 3) * 10}px` }}
                          >
                            {chickenIndex === index && i === 3 && (
                              <>
                                <img
                                  src={isBurned ? burnedChicken : chicken}
                                  alt="chicken"
                                  className={`absolute left-1/2 -translate-x-1/2 z-20 transition-all duration-300 ease-in-out 
                            ${
                              isBurned
                                ? 'min-w-[75px] min-h-[180px] -top-[7.5rem]'
                                : 'min-w-[155px] min-h-[220px] -top-[10rem]'
                            }`}
                                />

                                <div
                                  className="absolute bottom-[0.2rem]  left-1/2 -translate-x-1/2  z-0 w-[140px] h-[200px] rounded-t-full animate-glow-move pointer-events-none"
                                  style={{
                                    background:
                                      'radial-gradient(circle at 80% 90%, rgba(255, 236, 100, 0.6) 0%, rgba(255, 236, 100, 0.1) 70%, transparent 100%)',
                                    filter: 'blur(8px)',
                                  }}
                                ></div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#71759C] rounded-b-full z-30"></div>
                    </div>
                    {smallFireIndex === index && (
                      <img
                        src={smallfire}
                        alt="smallfire"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80px] h-[70px] z-50"
                      />
                    )}
                    {fireIndex === index && (
                      <img
                        src={fireGif}
                        alt="fire"
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 !w-[120px] !h-[380px] z-50"
                      />
                    )}
                    <div className="absolute top-0 bottom-0 right-0 w-[4px] bg-[radial-gradient(circle,_white_4px,_transparent_4px)] bg-repeat-y bg-[length:100%_20px] opacity-70"></div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <img src={src} alt="" className="w-[100%] h-7" />
      <Footer
        gameStarted={gameStarted}
        handleResetGame={handleResetGame}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setSelected={setSelected}
        selected={selected}
        setChickenIndex={setChickenIndex}
        chickenIndex={chickenIndex}
        setFireIndex={setFireIndex}
        fireIndex={fireIndex}
        setGameStarted={setGameStarted}
        isBurned={isBurned}
        setIsBurned={setIsBurned}
        scrollRef={scrollRef}
        setVisitedIndexes={setVisitedIndexes}
        visitedIndexes={visitedIndexes}
        setIsReturning={setIsReturning}
      />
    </Container>
  );
};

export default Chickenroad;
