import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Dialog,
  Drawer,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQueryClient } from 'react-query';
import ten from '../../assets/images/a10.png';
import eleven from '../../assets/images/a11.png';
import twelve from '../../assets/images/a12.png';
import thirteen from '../../assets/images/a13.png';
import fourteen from '../../assets/images/a14.png';
import fifteen from '../../assets/images/a15.png';
import sixteen from '../../assets/images/a16.png';
import seventeen from '../../assets/images/a17.png';
import eighteen from '../../assets/images/a18.png';
import three from '../../assets/images/a3.png';
import four from '../../assets/images/a4.png';
import five from '../../assets/images/a5.png';
import six from '../../assets/images/a6.png';
import seven from '../../assets/images/a7.png';
import eight from '../../assets/images/a8.png';
import nine from '../../assets/images/a9.png';
import { apiConnectorPost } from '../../services/apiconnector';
import { endpoint } from '../../services/urls';
import FalseCheck from '../../shared/check/FalseCheck';
import SuccessCheck from '../../shared/check/SuccessCheck';
import CustomCircularProgress from '../../shared/loder/CustomCircularProgress';
import theme from '../../utils/theme';

const BetNumber = ({ random, gid }) => {
  const [open, setOpen] = useState(false);
  const [selectNumber, setSelectNumber] = useState('');
  const [loding, setLoding] = useState(false);
  const [opend, setOpend] = useState(false);
  const client = useQueryClient();
  const [value, setValue] = useState(random || 1);

  const handleClickValue = (value) => {
    if (value === 0) {
      return setValue(1);
    }
    setValue(value);
  };

  async function betFunctionStart() {
    setLoding(true);
    const reqBody = {
      amount: value | 0,
      number:
        (selectNumber === 'Even' && 400) ||
        (selectNumber === 'Odd' && 300) ||
        (selectNumber === 'Big' && 100) || // this is big
        (selectNumber === 'Small' && 200) || // this is small
        Number(selectNumber),
      game_id: Number(gid),
    };

    try {
      const response = await apiConnectorPost(
        `${endpoint.k3_bet_placed_node}`,
        reqBody
      );
      if (response?.data?.msg === 'Bid placed Successfully1') {
        const toastID = toast(
          <SuccessCheck
            message={<span className="!text-sm">{response?.data?.msg}</span>}
          />,
          setTimeout(() => {
            toast.dismiss(toastID);
          }, 1000)
        );
        localStorage.setItem('betApplied', `${gid}_true`);
        setOpen(false);
      } else {
        setOpen(false);
        setLoding(false);
        const toastID = toast(
          <FalseCheck
            message={<span className="!text-sm">{response?.data?.msg}</span>}
          />,
          setTimeout(() => {
            toast.dismiss(toastID);
          }, 1000)
        );
      }
      setLoding(false);
      // }
    } catch (e) {
      setOpen(false);
      setLoding(false);
      <FalseCheck message={<span className="!text-sm">{e?.message}</span>} />;
    }
    client.refetchQueries('wallet_amount');
    client.refetchQueries(`my_all_history_${gid}`);
    setLoding(false);
  }
  if (loding) return <CustomCircularProgress isLoading={loding} />;

  const handleClickOpend = () => {
    setOpend(true);
  };

  const handleClosed = () => {
    setOpend(false);
  };

  return (
    <Box
      sx={{
        padding: 1,
        background: '#011341',
        mt: 2,
        borderRadius: '10px',
      }}
    >
      <div>
        <Box
          sx={{
            background: '#',
            padding: '0px 0px 0px 0px',
            alignItems: 'center',
            borderRadius: '10px',
            mt: 1,
          }}
          className="grid grid-cols-4 gap-4 justify-center !ml-4 !cursor-pointer"
        >
          <div className="flex flex-col justify-center  ">
            <Box
              component="img"
              src={three}
              onClick={() => {
                setOpen(true);
                setSelectNumber('3');
              }}
              className="!items-center !w-14 "
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={four}
              onClick={() => {
                setOpen(true);
                setSelectNumber('4');
              }}
              className="!items-center !w-12"
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={five}
              onClick={() => {
                setOpen(true);
                setSelectNumber('5');
              }}
              className="!items-center !w-14"
            ></Box>
          </div>
          <div className="flex flex-col justify-center">
            <Box
              component="img"
              src={six}
              onClick={() => {
                setOpen(true);
                setSelectNumber('6');
              }}
              className="!items-center !w-14"
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={seven}
              onClick={() => {
                setOpen(true);
                setSelectNumber('7');
              }}
              className="!items-center !w-12 ml-1"
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={eight}
              onClick={() => {
                setOpen(true);
                setSelectNumber('8');
              }}
              className="!items-center !w-16"
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={nine}
              onClick={() => {
                setOpen(true);
                setSelectNumber('9');
              }}
              className="!items-center !w-14"
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={ten}
              onClick={() => {
                setOpen(true);
                setSelectNumber('10');
              }}
              className="!items-center !w-16"
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={eleven}
              onClick={() => {
                setOpen(true);
                setSelectNumber('11');
              }}
              className="!items-center !w-16"
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={twelve}
              onClick={() => {
                setOpen(true);
                setSelectNumber('12');
              }}
              className="!items-center !w-14"
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={thirteen}
              onClick={() => {
                setOpen(true);
                setSelectNumber('13');
              }}
              className="!items-center !w-14"
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={fourteen}
              onClick={() => {
                setOpen(true);
                setSelectNumber('14');
              }}
              className="!items-center !w-14"
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={fifteen}
              onClick={() => {
                setOpen(true);
                setSelectNumber('15');
              }}
              className="!items-center !w-16"
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={sixteen}
              onClick={() => {
                setOpen(true);
                setSelectNumber('16');
              }}
              className="!items-center !w-14"
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={seventeen}
              onClick={() => {
                setOpen(true);
                setSelectNumber('17');
              }}
              className="!items-center !w-14"
            ></Box>
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={eighteen}
              onClick={() => {
                setOpen(true);
                setSelectNumber('18');
              }}
              className="!items-center !w-14"
            ></Box>
          </div>
        </Box>
        <ButtonGroup
          disableElevation
          variant="contained"
          sx={{ width: '100%' }}
          className=" !my-4"
        >
          <Button
            className="!bg-[#00ECBE] !text-white !rounded !h-10  !text-sm !mx-1"
            onClick={() => {
              setOpen(true);
              setSelectNumber('Big');
            }}
          >
            Big 1.92x
          </Button>
          <Button
            className="!bg-[#6da7f4] !text-white !rounded !h-10 !text-sm !mx-1"
            onClick={() => {
              setOpen(true);
              setSelectNumber('Small');
            }}
          >
            Small 1.92X
          </Button>
          <Button
            className="!bg-[#fa574a] !text-white !rounded !h-10 !text-sm !mx-1"
            onClick={() => {
              setOpen(true);
              setSelectNumber('Odd');
            }}
          >
            Odd 1.92X
          </Button>
          <Button
            className="!bg-[#40ad72] !text-white !rounded !text-sm !h-10 !mx-1"
            onClick={() => {
              setOpen(true);
              setSelectNumber('Even');
            }}
          >
            Even 1.92X
          </Button>
        </ButtonGroup>
      </div>

      <Drawer
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
            className={` !cursor-pointer
              ${
                selectNumber === 'green' ||
                selectNumber === '4' ||
                selectNumber === '8' ||
                selectNumber === '12' ||
                selectNumber === '6' ||
                selectNumber === '10' ||
                selectNumber === '14' ||
                selectNumber === '18' ||
                selectNumber === '16'
                  ? '!bg-[#40AD72]'
                  : selectNumber === 'voilet'
                  ? '!bg-[#B659FE]'
                  : selectNumber === 'red' ||
                    selectNumber === '3' ||
                    selectNumber === '7' ||
                    selectNumber === '11' ||
                    selectNumber === '15' ||
                    selectNumber === '5' ||
                    selectNumber === '9' ||
                    selectNumber === '13' ||
                    selectNumber === '17' ||
                    selectNumber === '8'
                  ? '!bg-[#FD565C]'
                  : selectNumber === 'Big'
                  ? '!bg-[#00ECBE]'
                  : selectNumber === 'Small'
                  ? '!bg-[#6DA7F4]'
                  : selectNumber === 'Odd'
                  ? '!bg-[#fa574a]'
                  : selectNumber === 'Even'
                  ? '!bg-[#40ad72]'
                  : selectNumber === '0'
                  ? '!bg-[#BF6DFE]'
                  : selectNumber === '55' && '!bg-[#BF6DFE]'
              }
             `}
          >
            {' '}
          </Box>
          <Box px={1}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ textAlign: 'center', color: 'white', fontWeight: '700 ' }}
            >
              K3 {gid == 3 ? 5 : gid == 2 ? 3 : gid == 4 ? 10 : gid} Min
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                textAlign: 'center',
                color: 'black',
                fontWeight: '400 ',
                background: '#fff',
                mt: 1,
                borderRadius: '5px',
              }}
            >
              Select{' '}
              {isNaN(Number(selectNumber))
                ? selectNumber?.toString()?.toLocaleUpperCase()
                : Number(selectNumber) <= 10
                ? `: ${selectNumber} Small`
                : ` : ${selectNumber} Big`}
            </Typography>
          </Box>
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
                        sx={style.bacancebtn}
                        className={` !cursor-pointer !text-black bg-gray-200 
                          ${
                            selectNumber === 'green' ||
                            selectNumber === '4' ||
                            selectNumber === '8' ||
                            selectNumber === '12' ||
                            selectNumber === '6' ||
                            selectNumber === '10' ||
                            selectNumber === '14' ||
                            selectNumber === '18' ||
                            selectNumber === '16'
                              ? '!bg-[#40AD72]'
                              : selectNumber === 'voilet'
                              ? '!bg-[#B659FE]'
                              : selectNumber === 'red' ||
                                selectNumber === '3' ||
                                selectNumber === '7' ||
                                selectNumber === '11' ||
                                selectNumber === '15' ||
                                selectNumber === '5' ||
                                selectNumber === '9' ||
                                selectNumber === '13' ||
                                selectNumber === '17' ||
                                selectNumber === '8'
                              ? '!bg-[#FD565C]'
                              : selectNumber === 'Small'
                              ? '!bg-[#6DA7F4]'
                              : selectNumber === 'Big'
                              ? '!bg-[#00ECBE]'
                              : selectNumber === '0'
                              ? '!bg-[#BF6DFE]'
                              : selectNumber === 'Odd'
                              ? '!bg-[#fa574a]'
                              : selectNumber === 'Even'
                              ? '!bg-[#40ad72]'
                              : selectNumber === '5' && '!bg-[#BF6DFE]'
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
                      ${
                        selectNumber === 'green' ||
                        selectNumber === '4' ||
                        selectNumber === '8' ||
                        selectNumber === '12' ||
                        selectNumber === '6' ||
                        selectNumber === '10' ||
                        selectNumber === '14' ||
                        selectNumber === '18' ||
                        selectNumber === '16'
                          ? '!bg-[#40AD72]'
                          : selectNumber === 'voilet'
                          ? '!bg-[#B659FE]'
                          : selectNumber === 'red' ||
                            selectNumber === '3' ||
                            selectNumber === '7' ||
                            selectNumber === '11' ||
                            selectNumber === '15' ||
                            selectNumber === '5' ||
                            selectNumber === '9' ||
                            selectNumber === '13' ||
                            selectNumber === '17' ||
                            selectNumber === '8'
                          ? '!bg-[#FD565C]'
                          : selectNumber === 'Big'
                          ? '!bg-[#00ECBE]'
                          : selectNumber === 'Small'
                          ? '!bg-[#6DA7F4]'
                          : selectNumber === 'Odd'
                          ? '!bg-[#fa574a]'
                          : selectNumber === 'Even'
                          ? '!bg-[#40ad72]'
                          : selectNumber === '0'
                          ? '!bg-[#BF6DFE]'
                          : selectNumber === '55' && '!bg-[#BF6DFE]'
                      }
                     `}
                    sx={style.addsumbtn}
                    onClick={() => handleClickValue(value - 1)}
                  >
                    -
                  </Box>
                  <TextField
                    value={value}
                    onChange={(e) => handleClickValue(parseInt(e.target.value))}
                    type="number"
                    className="inputamt"
                  />
                  <Box
                    className={` !cursor-pointer
                     ${
                       selectNumber === 'green' ||
                       selectNumber === '4' ||
                       selectNumber === '8' ||
                       selectNumber === '12' ||
                       selectNumber === '6' ||
                       selectNumber === '10' ||
                       selectNumber === '14' ||
                       selectNumber === '18' ||
                       selectNumber === '16'
                         ? '!bg-[#40AD72]'
                         : selectNumber === 'voilet'
                         ? '!bg-[#B659FE]'
                         : selectNumber === 'red' ||
                           selectNumber === '3' ||
                           selectNumber === '7' ||
                           selectNumber === '11' ||
                           selectNumber === '15' ||
                           selectNumber === '5' ||
                           selectNumber === '9' ||
                           selectNumber === '13' ||
                           selectNumber === '17' ||
                           selectNumber === '8'
                         ? '!bg-[#FD565C]'
                         : selectNumber === 'Big'
                         ? '!bg-[#00ECBE]'
                         : selectNumber === 'Small'
                         ? '!bg-[#6DA7F4]'
                         : selectNumber === 'Odd'
                         ? '!bg-[#fa574a]'
                         : selectNumber === 'Even'
                         ? '!bg-[#40ad72]'
                         : selectNumber === '0'
                         ? '!bg-[#BF6DFE]'
                         : selectNumber === '55' && '!bg-[#BF6DFE]'
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
                        }}
                        sx={style.bacancebtn2}
                        className={` !cursor-pointer bg-gray-500
                          ${
                            selectNumber === 'green' ||
                            selectNumber === '4' ||
                            selectNumber === '8' ||
                            selectNumber === '12' ||
                            selectNumber === '6' ||
                            selectNumber === '10' ||
                            selectNumber === '14' ||
                            selectNumber === '18' ||
                            selectNumber === '16'
                              ? '!bg-[#40AD72]'
                              : selectNumber === '0'
                              ? '!bg-[#BF6DFE]'
                              : selectNumber === 'red' ||
                                selectNumber === '3' ||
                                selectNumber === '7' ||
                                selectNumber === '11' ||
                                selectNumber === '15' ||
                                selectNumber === '5' ||
                                selectNumber === '9' ||
                                selectNumber === '13' ||
                                selectNumber === '17' ||
                                selectNumber === '8'
                              ? '!bg-[#FD565C]'
                              : selectNumber === 'Big'
                              ? '!bg-[#00ECBE]'
                              : selectNumber === 'Small'
                              ? '!bg-[#6DA7F4]'
                              : selectNumber === 'Odd'
                              ? '!bg-[#fa574a]'
                              : selectNumber === 'Even'
                              ? '!bg-[#40ad72]'
                              : selectNumber === '55' && '!bg-[#BF6DFE]'
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
                <Typography
                  onClick={handleClickOpend}
                  component="a"
                  sx={{
                    color: `${theme.palette.primary.main} !important`,
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  《Pre-sale rules》
                </Typography>
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
                className={` !cursor-pointer
                  ${
                    selectNumber === 'green' ||
                    selectNumber === '4' ||
                    selectNumber === '8' ||
                    selectNumber === '12' ||
                    selectNumber === '6' ||
                    selectNumber === '10' ||
                    selectNumber === '14' ||
                    selectNumber === '18' ||
                    selectNumber === '16'
                      ? '!bg-[#40AD72]'
                      : selectNumber === 'voilet'
                      ? '!bg-[#B659FE]'
                      : selectNumber === 'red' ||
                        selectNumber === '3' ||
                        selectNumber === '7' ||
                        selectNumber === '11' ||
                        selectNumber === '15' ||
                        selectNumber === '5' ||
                        selectNumber === '9' ||
                        selectNumber === '13' ||
                        selectNumber === '17' ||
                        selectNumber === '8'
                      ? '!bg-[#FD565C]'
                      : selectNumber === 'Big'
                      ? '!bg-[#00ECBE]'
                      : selectNumber === 'Small'
                      ? '!bg-[#6DA7F4]'
                      : selectNumber === 'Odd'
                      ? '!bg-[#fa574a]'
                      : selectNumber === 'Even'
                      ? '!bg-[#40ad72]'
                      : selectNumber === '0'
                      ? '!bg-[#BF6DFE]'
                      : selectNumber === '55' && '!bg-[#BF6DFE]'
                  }
                 `}
                variant="contained"
                sx={style.submitbtn}
                onClick={() => {
                  betFunctionStart();
                }}
              >
                Total amount ₹ {value || '0'}
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
        {/* <Howtoplay />
        <DialogActions sx={{ margin: "auto", width: "100%" }}>
          <Button
            disableElevation
            onClick={handleClosed}
            autoFocus
            variant="contained"
            sx={{
              color: "white",
              borderRadius: "20px",
              width: "60%",
              margin: "auto",
            }}
          >
            I Know
          </Button>
        </DialogActions> */}
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
    cursor: 'pointer',
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
    background: '#6da7f4',
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
