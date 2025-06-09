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
import chicken from '../../assets/images/chickenRoad/chicken2.png';
import chickencoin from '../../assets/images/chickenRoad/chickencoin2.png';
import gbflag from '../../assets/images/ukflag.png';
import { imagelist, avatars, greenimagelist } from './chicken road images';
import inoutlogo from '../../assets/images/chickenRoad/inoutlogo.svg';
import burnedChicken from '../../assets/images/burnedChicken.png';
import PersonIcon from '@mui/icons-material/Person';
import fireGif from '../../assets/images/chickenRoad/Animation.gif';
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
import redcoin from '../../assets/images/chickenRoad/redcoin.png';
import src from '../../assets/images/chickenRoad/src.png';
import musicFile3 from '../../assets/images/chickenRoad/bgmusic.mp3';
import musicFile4 from '../../assets/images/chickenRoad/henaudio.mp3';
import { useDispatch, useSelector } from 'react-redux';
import {
  isEnableMusicFunction,
  isEnableSoundFunction,
} from '../../redux/slices/counterSlice';

const Chickenroad = () => {
  const [selected, setSelected] = useState('Easy');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [gameRuleOpen, setRuleOpen] = useState(false);
  const [betHistoryOpen, setBetHistoryOpen] = useState(false);
  const [instructionOpen, setInstructionOpen] = useState(false);
  const [avatarDialogOpen, setAvatarDialogOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState();
  const [fireIndex, setFireIndex] = useState(null);
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

      const startIdx = Math.floor(scrollLeft / itemWidth);
      const visibleIndices = Array.from(
        { length: visibleCount },
        (_, i) => startIdx + i
      ).filter((i) => i < imagelist.length);

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
  }, [visibleCount, imagelist.length]);

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
    }, 100);
  };

  useEffect(() => {
    if (chickenIndex !== null && chickenIndex === fireIndex) {
      setIsBurned(true);
      setTimeout(() => {
        setIsReturning(true);
        setChickenIndex(-1);
        setTimeout(() => {
          handleResetGame();
        }, 500);
      }, 500);
    }
  }, [chickenIndex, fireIndex]);

  useEffect(() => {
    const isSafeWin =
      chickenIndex === imagelist.length - 1 && chickenIndex !== fireIndex;
    if (isSafeWin) {
      setTimeout(() => {
        handleResetGame();
      }, 1500);
    }
  }, [chickenIndex, fireIndex]);

  const handlePlay = () => {
    setChickenIndex(0);
    setGameStarted(true);
  };

  useEffect(() => {
    handleOpenFun();
  }, [isEnableMusicChickenG]);

  const handleOpenFun = async () => {
    try {
      if (audioRefBg.current && isEnableMusicChickenG) {
        await audioRefBg.current.play();
      }
    } catch (err) {
      console.error('Failed to play audio:', err);
    }
  };

  useEffect(() => {
    if (isBurned) {
      audioRefHen.current?.play().catch((e) => {
        console.log('Autoplay blocked or failed:', e);
      });
    }
  }, [isBurned]);

  return (
    <Container className="h-full overflow-auto bg-[#05012B]">
      <audio ref={audioRefBg} src={musicFile3} />
      <audio ref={audioRefHen} src={musicFile4} />
      <div className="bg-[#4E5164] p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={yellowimg} alt="egg" className="h-9 w-9" />
          <p className="text-white font-bold text-sm leading-tight">
            CHICKEN <br /> ROAD
          </p>
        </div>
        <div className="flex items-center bg-[#4E5164] rounded-md px-4 py-1">
          <p className="text-white text-sm font-medium mr-2">7.28</p>
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
                          width: '64px',
                          height: '64px',
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
              onClick={() => setBetHistoryOpen(true)}
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
            <img src={inoutlogo} alt="logo" className="w-10 h-10" />
          </Box>
        </Menu>
      </div>
      <div
        className="grid grid-cols-[40%_60%] overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex flex-col items-center gap-3 text-white bg-[#2E324D]">
          <div className="flex items-center bg-[#2E324D]">
            <p className="text-[#8CA6FF] text-center font-semibold px-1">
              Live wins
            </p>
            <div className="w-2 h-2 bg-green-500 text-center rounded-full px-1"></div>
            <p className="text-[#8CA6FF] font-semibold text-sm pl-1">
              Online: 11242
            </p>
          </div>
          <div className="flex items-center top-4 left-4 z-50 animate-slideIn justify-evenly w-full p-1 gap-2 bg-[#4B5382] rounded">
            <div className="relative w-7 h-7">
              <div className="absolute inset-0 rounded-full bg-red-400 opacity-80"></div>
              <PersonIcon
                className="text-red-700 relative z-10"
                fontSize="large"
              />
              <img
                src={gbflag}
                alt="flag"
                className="w-5 h-3 absolute -bottom-1 -right-2 rounded-sm z-20"
              />
            </div>
            <p className="text-white text-sm">228690</p>
            <p className="text-green-400 text-sm font-medium">+£301.20</p>
          </div>

          <div className="flex items-center justify-end mt-[4rem]">
            <div className="relative w-28 h-60">
              <div className="absolute inset-0 -mx-1 -mt-1 rounded-t-full bg-[#333652] border-[4px] border-[#202538]"></div>
              <div className="absolute top-1 left-1 right-1 bottom-1 rounded-t-full bg-[#15182C] border-[2px] border-[#1E223F] z-10"></div>
              {!gameStarted && (
                <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center ">
                  <img
                    src={chicken}
                    alt="chicken"
                    className="h-[10rem] w-[9.5rem] object-cover transition-all duration-700"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div ref={scrollRef} className="flex  scroll-smooth">
          {imagelist.map((src, index) => {
            const isLast = index === imagelist.length - 1;
            const isVisited = visitedIndexes.includes(index);
            const isPrevVisited = visitedIndexes.includes(index + 1);
            const isBurningIndex = isBurned && chickenIndex === index;
            const coinImage = isBurningIndex
              ? redcoin
              : isPrevVisited
              ? chickencoin
              : isVisited
              ? greenimagelist[index]
              : imagelist[index];
            if (isLast) {
              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col px-[3rem] pt-[5rem] items-center relative bg-[#3E4464] ">
                    <div className="flex flex-col gap-4 mt-2">
                      <div className="w-[3rem] h-[2rem] rounded-lg bg-[#363B57] overflow-hidden ml-4 "></div>
                    </div>
                    <div className="mt-auto relative w-[112px] h-[225px] flex items-center justify-center">
                      <div
                        className={`absolute inset-0 -mt-1 rounded-t-full border-[4px] border-[#4C5580] bg-[#2D324D]  z-10 flex items-center justify-center`}
                      >
                        <img
                          key={index}
                          src={coinImage}
                          alt={`img-${index}`}
                          className="object-center -mt-12 rounded-full w-[70px] h-[80px] animate-bounce"
                          style={{ animationDuration: '10.0s' }}
                        />
                      </div>
                      <div className="absolute bottom-0 left-3 right-3 h-[6px] bg-[#71759C] rounded-b-full z-30"></div>
                      {chickenIndex === index - 1 ? (
                        <div className="absolute -bottom-1 z-20 flex flex-col items-center">
                          <div className="w-[80px] h-[6px] bg-[#E0DDC6] rounded-t-md " />
                          <div
                            className="w-[80px] h-[50px] bg-[#C7C4B2] -mt-1"
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
                      ) : (
                        <div className="absolute -bottom-1 z-20 flex flex-col items-center">
                          <img
                            src={chicken}
                            alt="chicken"
                            className="h-[6rem] w-[9.0rem] animate-bounce object-cover transition-all duration-700"
                          />
                        </div>
                      )}
                    </div>
                    {fireIndex === index && (
                      <img
                        src={fireGif}
                        alt="fire"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[70px] z-50"
                      />
                    )}
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
                    alt={`img-${index}`}
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
                                className={`absolute -top-[6.2rem] left-1/2 -translate-x-1/2 w-[75px] h-[70px] z-50 min-w-[235px] min-h-[138px]  ${
                                  isBurned
                                    ? 'min-w-[120px] min-h-[130px] -top-[5.2rem]'
                                    : ''
                                }`}
                              />
                              <div className="absolute top-[0.2rem] -translate-x-1/2 w-[120px] h-[40px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,191,0,0.4),transparent)] blur-[1px] z-0"></div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-[#71759C] rounded-b-full z-30"></div>
                  </div>
                  {fireIndex === index && (
                    <img
                      src={fireGif}
                      alt="fire"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[70px] z-50"
                    />
                  )}
                  <div className="absolute top-0 bottom-0 right-0 w-[4px] bg-[radial-gradient(circle,_white_4px,_transparent_4px)] bg-repeat-y bg-[length:100%_20px] opacity-70"></div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <img src={src} alt="" className="w-[100%] h-7 pt-1" />
      <Footer
        gameStarted={gameStarted}
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
