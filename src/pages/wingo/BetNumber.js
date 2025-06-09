import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Dialog,
  DialogActions,
  Drawer,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQueryClient } from 'react-query';
import { NavLink } from 'react-router-dom';
import zero from '../../assets/images/n0-30bd92d1.png';
import one from '../../assets/images/n1-dfccbff5.png';
import two from '../../assets/images/n2-c2913607.png';
import three from '../../assets/images/n3-f92c313f.png';
import four from '../../assets/images/n4-cb84933b.png';
import five from '../../assets/images/n5-49d0e9c5.png';
import six from '../../assets/images/n6-a56e0b9a.png';
import seven from '../../assets/images/n7-5961a17f.png';
import eight from '../../assets/images/n8-d4d951a4.png';
import nine from '../../assets/images/n9-a20f6f42 (1).png';
import { endpoint } from '../../services/urls';
import FalseCheck from '../../shared/check/FalseCheck';
import SuccessCheck from '../../shared/check/SuccessCheck';
import CustomCircularProgress from '../../shared/loder/CustomCircularProgress';
import theme from '../../utils/theme';
import Howtoplay from './component/Howtoplay';
import { apiConnectorPost } from '../../services/apiconnector';
import VantToast from '../../shared/toast/Toast';

const BetNumber = ({ timing, random, gid }) => {
  const [opend, setOpend] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectNumber, setSelectNumber] = useState('');
  const [randombit, setRandomNumber] = useState('');
  const [loding, setLoding] = useState(false);
  const client = useQueryClient();
  const [value, setValue] = useState(random || 1);
  const [active, setActive] = useState(1);
  const [isBlink, setIsBlink] = useState(false); 


  const handleClickValue = (value) => {
    if (value === 0) {
      return setValue(1);
    }
    setValue(value);
  };

  const clickRandomhandler = () => {
    const randomnumber = Math.floor(Math.random() * 10);
    setIsBlink(true);
    setRandomNumber(randomnumber);
    setSelectNumber(String(randomnumber));
  
    // Stop blinking & open modal after a short delay (1.5s)
    setTimeout(() => {
      setIsBlink(false);
      setOpen(true);
    }, 1500);
  };
  


  async function betFunctionStart() {
    setLoding(true);
    const reqBody = {
      amount: value | 0,
      number:
        (selectNumber === 'green' && 10) ||
        (selectNumber === 'voilet' && 20) ||
        (selectNumber === 'red' && 30) ||
        (selectNumber === 'Big' && 40) || // this is big
        (selectNumber === 'Small' && 50) || // this is small
        Number(selectNumber),
      gameid: Number(gid),
    };
    try {
      const response = await apiConnectorPost(
        `${endpoint.bet_placed}`,
        reqBody
      );
      if (response?.data?.error === '200') {
        if (response?.data?.msg === 'Bid placed Successfully1') {
          setValue('');
          const toastID = toast(
            <SuccessCheck
              message={<span className="!text-sm">{response?.data?.msg}</span>}
            />,
            setTimeout(() => {
              toast.dismiss(toastID);
            }, 1000)
          );
          localStorage.setItem('betApplied', `${gid}_true`);
        } else {
          const toastID = toast(
            <FalseCheck
              message={<span className="!text-sm">{response?.data?.msg}</span>}
            />,
            setTimeout(() => {
              toast.dismiss(toastID);
            }, 1000)
          );
        }

        setOpen(false);
      } else {
        toast(response?.data?.msg);
      }
    } catch (e) {
      VantToast(e?.message, 'f');
      console.log(e);
    }
    client.refetchQueries('wallet_amount');
    client.refetchQueries(`myAllhistory_${gid}`);
    setLoding(false);
  }
  useEffect(() => {
    if (gid === '1') {
      if (Number(timing) <= 10) {
        setOpen(false);
      }
    } else if (gid === '2') {
      if (Number(String(timing)?.split('_')?.[0]) === 0) {
        if (Number(String(timing)?.split('_')?.[1]) <= 10) {
          setOpen(false);
        }
      }
    } else if (gid === '4') {
      if (Number(String(timing)?.split('_')?.[0]) <= 5) {
        setOpen(false);
      }
    } else {
      if (Number(String(timing)?.split('_')?.[0]) === 0) {
        if (Number(String(timing)?.split('_')?.[1]) <= 10) {
          setOpen(false);
        }
      }
    }
  }, [timing]);

  const handleClickOpend = () => {
    setOpend(true);
  };

  const handleClosed = () => {
    setOpend(false);
  };

  if (loding) return <CustomCircularProgress isLoading={loding} />;
  return (
    <Box
      sx={{
        padding: 1,
        background: '#001C54',
        mt: 2,
        borderRadius: '10px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
      }}
    >
      <div>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Button
            onClick={() => {
              setOpen(true);
              setSelectNumber('green');
            }}
            className="greenbtn"
          >
            Green
          </Button>
          <Button
            onClick={() => {
              setOpen(true);
              setSelectNumber('voilet');
            }}
            className="violetbtn"
          >
            Violet
          </Button>
          <Button
            onClick={() => {
              setOpen(true);
              setSelectNumber('red');
            }}
            className="redbtn"
          >
            Red
          </Button>
        </Stack>
        <Box
          sx={{
            background: '#07032c',
            padding: '8px 8px 0px 8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            borderRadius: '10px',
            mt: 2,
            mb: 2,
          }}
        >
          <Box
            sx={{ width: '17%', mb: 1 }}
            component="img"
            src={zero}
            onClick={() => {
              setOpen(true);
              setSelectNumber('0');
            }}
            className={`!cursor-pointer ${isBlink ? 'blinking' : ''}`}
          ></Box>
          <Box
            sx={{ width: '17%', mb: 1 }}
            component="img"
            src={one}
            onClick={() => {
              setOpen(true);
              setSelectNumber('1');
            }}
            className={`!cursor-pointer ${
              isBlink ? 'blinking' : ''
            }`}
          ></Box>
          <Box
            sx={{ width: '17%', mb: 1 }}
            component="img"
            src={two}
            onClick={() => {
              setOpen(true);
              setSelectNumber('2');
            }}
            className={`!cursor-pointer ${isBlink ? 'blinking' : ''}`}
          ></Box>
          <Box
            sx={{ width: '17%', mb: 1 }}
            component="img"
            src={three}
            onClick={() => {
              setOpen(true);
              setSelectNumber('3');
            }}
            className={`!cursor-pointer ${isBlink ? 'blinking' : ''}`}
          ></Box>
          <Box
            sx={{ width: '17%', mb: 1 }}
            component="img"
            src={four}
            onClick={() => {
              setOpen(true);
              setSelectNumber('4');
            }}
            className={`!cursor-pointer ${isBlink ? 'blinking' : ''}`}
          ></Box>
          <Box
            sx={{ width: '17%', mb: 1 }}
            component="img"
            src={five}
            onClick={() => {
              setOpen(true);
              setSelectNumber('5');
            }}
            className={`!cursor-pointer ${isBlink ? 'blinking' : ''}`}
          ></Box>
          <Box
            sx={{ width: '17%', mb: 1 }}
            component="img"
            src={six}
            onClick={() => {
              setOpen(true);
              setSelectNumber('6');
            }}
            className={`!cursor-pointer ${isBlink ? 'blinking' : ''}`}
          ></Box>
          <Box
            sx={{ width: '17%', mb: 1 }}
            component="img"
            src={seven}
            onClick={() => {
              setOpen(true);
              setSelectNumber('7');
            }}
            className={`!cursor-pointer ${isBlink ? 'blinking' : ''}`}
          ></Box>
          <Box
            sx={{ width: '17%', mb: 1 }}
            component="img"
            src={eight}
            onClick={() => {
              setOpen(true);
              setSelectNumber('8');
            }}
            className={`!cursor-pointer ${isBlink ? 'blinking' : ''}`}
          ></Box>
          <Box
            sx={{ width: '17%', mb: 1 }}
            component="img"
            src={nine}
            onClick={() => {
              setOpen(true);
              setSelectNumber('9');
            }}
            className={`!cursor-pointer ${isBlink ? 'blinking' : ''}`}
          ></Box>
        </Box>

        <Stack
          direction="row"
          my={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Button variant="outlined" onClick={clickRandomhandler} className="!border !border-red-500 !text-red-500">
            Random
          </Button>
          {[1, 5, 10, 20, 50, 100]?.map((i) => {
            return (
              <Box
                onClick={() => {
                  handleClickValue(value * i);
                  setActive(i)
                }}
                sx={style.bacancebtn3}
                className={`${active === i ? "!bg-[#17B15E] !text-white" : "!bg-[#05012B] !text-gray-400"
                  }  cursor-pointer `}
              >
                X{i}
              </Box>
            );
          })}
        </Stack>

        <ButtonGroup
          disableElevation
          variant="contained"
          sx={{ width: '100%' }}
        >
          <Button
            sx={style.bigbtn}
            onClick={() => {
              setOpen(true);
              setSelectNumber('Big');
            }}
          >
            Big
          </Button>
          <Button
            sx={style.smlbtn}
            onClick={() => {
              setOpen(true);
              setSelectNumber('Small');
            }}
          >
            Small
          </Button>
        </ButtonGroup>
      </div>

      <Drawer
        // open={ Number(timing) > 10 && !(min>0 && sec > 10)}
        open={open}
        anchor={'bottom'}
        sx={{
          maxWidth: '430px !important',
          width: '100%',
          margin: 'auto',
          padding: '10px 0px 0px 0px',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
              width: '120%',
              height: '110px',
              top: '-16px',
              left: '-11%',
              zIndex: '-1',
            }}
            className={
              selectNumber === 'green' ||
                selectNumber === '1' ||
                selectNumber === '3' ||
                selectNumber === '7' ||
                selectNumber === '9'
                ? '!bg-[#40AD72]'
                : selectNumber === 'voilet'
                  ? '!bg-[#B659FE]'
                  : selectNumber === 'red' ||
                    selectNumber === '2' ||
                    selectNumber === '4' ||
                    selectNumber === '6' ||
                    selectNumber === '8'
                    ? '!bg-[#FD565C]'
                    : selectNumber === 'Big'
                      ? '!bg-[#00ECBE]'
                      : selectNumber === 'Small'
                        ? '!bg-[#6DA7F4]'
                        : selectNumber === '0'
                          ? '!bg-[#BF6DFE]'
                          : selectNumber === '5' && '!bg-[#BF6DFE]'
            }
          ></Box>

          <Box px={1}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ textAlign: 'center', color: 'white', fontWeight: '700 ' }}
            >
              {/* Win Go {gid} Min */}
              Win Go{' '}
              {gid === '1'
                ? '1 Min'
                : gid === '4'
                  ? '30 Sec'
                  : gid === '2'
                    ? '3 Min'
                    : gid === '3'
                      ? '5 Min'
                      : ''}
            </Typography>
          </Box>
          <div className="flex justify-center items-center">
            <Typography className="!bg-white text-center text-black w-36 !p-1 !mt-2 rounded">
              Select : {selectNumber === selectNumber ? selectNumber : String(randombit)}
            </Typography>
          </div>
          <Box mt={5} px={2}>
            <Grid container mt={10}>
              <Grid item xs={4}>
                <Typography variant="body1" color="initial">
                  Balance{' '}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Stack
                  direction="row"
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  {[1, 10, 100, 1000]?.map((i) => {
                    return (
                      <Box
                        onClick={() => {
                          handleClickValue(i);
                        }}
                        className={` !cursor-pointer !text-white bg-gray-200 px-2
                          ${((selectNumber === 'green' ||
                            selectNumber === '1' ||
                            selectNumber === '3' ||
                            selectNumber === '7' ||
                            selectNumber === '9') &&
                            '!bg-[#40AD72]') ||
                          (selectNumber === 'voilet' && '!bg-[#B659FE]') ||
                          ((selectNumber === 'red' ||
                            selectNumber === '2' ||
                            selectNumber === '4' ||
                            selectNumber === '6' ||
                            selectNumber === '8') &&
                            '!bg-[#FD565C]') ||
                          (selectNumber === 'Big' && '!bg-[#00ECBE]') ||
                          (selectNumber === 'Small' && '!bg-[#6DA7F4]') ||
                          (selectNumber === '0' && '!bg-[#BF6DFE]') ||
                          (selectNumber === '5' && '!bg-[#BF6DFE]')
                          }
                       `}
                      >
                        {i}
                      </Box>
                    );
                  })}
                </Stack>
              </Grid>
            </Grid>
            <Grid container mt={2}>
              <Grid item xs={4}>
                <Typography variant="body1" color="initial">
                  Quantity{' '}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Stack
                  direction="row"
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Box
                    className={` !cursor-pointer
                      ${selectNumber === 'green' ||
                        selectNumber === '1' ||
                        selectNumber === '3' ||
                        selectNumber === '7' ||
                        selectNumber === '9'
                        ? '!bg-[#40AD72]'
                        : selectNumber === 'voilet'
                          ? '!bg-[#B659FE]'
                          : selectNumber === 'red' ||
                            selectNumber === '2' ||
                            selectNumber === '4' ||
                            selectNumber === '6' ||
                            selectNumber === '8'
                            ? '!bg-[#FD565C]'
                            : selectNumber === 'Big'
                              ? '!bg-[#00ECBE]'
                              : selectNumber === 'Small'
                                ? '!bg-[#6DA7F4]'
                                : selectNumber === '0'
                                  ? '!bg-[#BF6DFE]'
                                  : selectNumber === '5' && '!bg-[#BF6DFE]'
                      }
                    `}
                    sx={style.addsumbtn}
                    onClick={() => handleClickValue(value - 1)}
                  >
                    -
                  </Box>
                  <TextField
                    value={value}
                    type="number"
                    onChange={(e) => handleClickValue(parseInt(e.target.value))}
                    className="inputamt"
                  />
                  <Box
                    className={` !cursor-pointer
                     ${selectNumber === 'green' ||
                        selectNumber === '1' ||
                        selectNumber === '3' ||
                        selectNumber === '7' ||
                        selectNumber === '9'
                        ? '!bg-[#40AD72]'
                        : selectNumber === 'voilet'
                          ? '!bg-[#B659FE]'
                          : selectNumber === 'red' ||
                            selectNumber === '2' ||
                            selectNumber === '4' ||
                            selectNumber === '6' ||
                            selectNumber === '8'
                            ? '!bg-[#FD565C]'
                            : selectNumber === 'Big'
                              ? '!bg-[#00ECBE]'
                              : selectNumber === 'Small'
                                ? '!bg-[#6DA7F4]'
                                : selectNumber === '0'
                                  ? '!bg-[#BF6DFE]'
                                  : selectNumber === '5' && '!bg-[#BF6DFE]'
                      }
                    `}
                    sx={style.addsumbtn}
                    onClick={() => handleClickValue(value + 1 || 1)}
                  >
                    +
                  </Box>
                </Stack>
              </Grid>
            </Grid>
            <Grid container mt={2}>
              <Grid item xs={1}></Grid>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  alignItems={'center'}
                  justifyContent={'end'}
                >
                  {[1, 5, 10, 20, 50, 100]?.map((i) => {
                    return (
                      <Box
                        onClick={() => {
                          handleClickValue(value * i);
                          // setcalculated_value(value)
                        }}
                        sx={style.bacancebtn2}
                        className={` !cursor-pointer bg-gray-400
                          ${((selectNumber === 'green' ||
                            selectNumber === '1' ||
                            selectNumber === '3' ||
                            selectNumber === '7' ||
                            selectNumber === '9') &&
                            '!bg-[#40AD72]') ||
                          (selectNumber === 'voilet' && '!bg-[#B659FE]') ||
                          ((selectNumber === 'red' ||
                            selectNumber === '2' ||
                            selectNumber === '4' ||
                            selectNumber === '6' ||
                            selectNumber === '8') &&
                            '!bg-[#FD565C]') ||
                          (selectNumber === 'Big' && '!bg-[#00ECBE]') ||
                          (selectNumber === 'Small' && '!bg-[#6DA7F4]') ||
                          (selectNumber === '0' && '!bg-[#BF6DFE]') ||
                          (selectNumber === '5' && '!bg-[#BF6DFE]')
                          }`}
                      >
                        X{i}
                      </Box>
                    );
                  })}
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Grid container mt={2}>
            <Grid item xs={12}>
              <Stack direction="row" alignItems="center">
                <Checkbox checked />{' '}
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: 'gray', fontSize: '14px' }}
                >
                  I agree
                </Typography>
                <NavLink onClick={handleClickOpend}>
                  <Typography
                    component="a"
                    sx={{
                      color: `${theme.palette.primary.main} !important`,
                      cursor: 'pointer',
                      fontSize: '14px',
                    }}
                  >
                    《Pre-sale rules》
                  </Typography>
                </NavLink>
              </Stack>
            </Grid>
          </Grid>
          <Grid container mt={2}>
            <Grid item xs={4}>
              <Button
                variant="contained"
                sx={style.cancelbtn}
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button
                className={`
                  ${selectNumber === 'green' ||
                    selectNumber === '1' ||
                    selectNumber === '3' ||
                    selectNumber === '7' ||
                    selectNumber === '9'
                    ? '!bg-[#40AD72]'
                    : selectNumber === 'voilet'
                      ? '!bg-[#B659FE]'
                      : selectNumber === 'red' ||
                        selectNumber === '2' ||
                        selectNumber === '4' ||
                        selectNumber === '6' ||
                        selectNumber === '8'
                        ? '!bg-[#FD565C]'
                        : selectNumber === 'Big'
                          ? '!bg-[#00ECBE]'
                          : selectNumber === 'Small'
                            ? '!bg-[#6DA7F4]'
                            : selectNumber === '0'
                              ? '!bg-[#BF6DFE]'
                              : selectNumber === '5' && '!bg-[#BF6DFE]'
                  } !cursor-pointer !font-extrabold`}
                variant="contained"
                sx={style.submitbtn}
                onClick={() => {
                  betFunctionStart();
                }}
              >
                Total amount ₹{value || '0'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
      <Dialog
        sx={{
          maxWidth: '430px !important',
          minWidth: '430px !important',
          margin: 'auto',
          minHeight: '70%',
          maxHeight: '80%',
        }}
        open={opend}
      >
        <Howtoplay />
        <DialogActions sx={{ margin: 'auto', width: '100%' }}>
          <Button
            disableElevation
            onClick={handleClosed}
            autoFocus
            variant="contained"
            sx={{
              color: 'white',
              borderRadius: '20px',
              width: '60%',
              margin: 'auto',
            }}
          >
            I Know
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BetNumber;

const style = {
  bacancebtn: {
    padding: '4px 13px',
    borderRadius: '20px',
    color: 'white',
    fontSize: '17px',
    fontWeight: '500',
    marginLeft: '5px',
  },
  bacancebtn2: {
    padding: '4px 13px',
    borderRadius: '1px',
    color: 'white',
    fontSize: '17px',
    fontWeight: '500',
    marginLeft: '5px',
  },
  bacancebtn3: {
    backgroundColor: '#40AD72',
    padding: '1px 5px',
    borderRadius: '6px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    marginLeft: '5px',
    display: 'flex',
    alignItems: 'center',
    height: '30px',
    ['@media (max-width:340px)']: { fontSize: '13px' },
  },
  bacancebtn3active: {
    backgroundColorolor: '#45a049' /* Darker green when clicked */,
  },

  addsumbtn: {
    padding: '4px 13px',
    color: 'white',
    fontSize: '17px',
    fontWeight: '500',
    margin: '0px 5px',
  },
  cancelbtn: {
    width: '100%',
    borderRadius: '0px',
    color: 'white',
    backgroundColor: '#25253C',
    padding: 1,
  },
  submitbtn: {
    width: '100%',
    borderRadius: '0px',
    color: 'white',
    padding: 1,
  },
  bigbtn: {
    width: '50%',
    borderRadius: '20px 0px 0px 20px',
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
  },
  smlbtn: {
    width: '50%',
    borderRadius: '0px 20px 20px 0px',
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
    background: '#6DA7F4',
  },
  linetable: {
    '&>p': {
      fontSize: '12px',
      color: 'gray',
      border: '1px solid gray',
      borderRadius: '50%',
      width: '15px',
      height: '15px',
      textAlign: 'center',
      padding: '2px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    alignItems: 'center',
    justifyContent: 'space-between',
    '&>p:nth-last-child(1)': {
      width: '20px !important',
      height: '20px !important',
    },
  },
};
