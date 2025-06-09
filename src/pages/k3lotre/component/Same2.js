
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  Grid,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { NavLink } from "react-router-dom";
import { endpoint } from "../../../services/urls";
import SuccessCheck from "../../../shared/check/SuccessCheck";
import CustomCircularProgress from "../../../shared/loder/CustomCircularProgress";
import theme from "../../../utils/theme";
import Howtoplay from "./Howtoplay";
import VantToast from "../../../shared/toast/Toast";
const Same2 = ({ timing, gid }) => {
  const [open, setOpen] = useState(false);
  const [loding, setLoding] = useState(false);
  const [opend, setOpend] = useState(false);
  const client = useQueryClient();
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [selectNumber, setSelectNumber] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [Checked, setChecked] = useState(false);

  const handleNumberClick = (number) => {
    setSelectedNumbers((prevSelectedNumbers) => {
      if (prevSelectedNumbers.includes(number)) {
        return prevSelectedNumbers.filter((n) => n !== number);
      } else {
        return [...prevSelectedNumbers, number];
      }
    });

    setIsChecked((prevSelectedNumbers) => ({
      ...prevSelectedNumbers,
      [number]: !prevSelectedNumbers[number]
    }));
    handleClickOpen();
  };
  const handleNumberClick1 = (number) => {
    setSelectNumber((prevSelectedNumbers) => {
      const isAlreadySelected = prevSelectedNumbers.includes(number);
      if (isAlreadySelected) {
        return prevSelectedNumbers.filter((n) => n !== number);
      } else {
        return [...prevSelectedNumbers, number];
      }
    });

    setChecked((prevChecked) => ({
      ...prevChecked,
      [number]: !prevChecked[number],
    }));

    // Open the drawer after the second number is selected
    if (selectNumber.length === 1 && !selectNumber.includes(number)) {
      handleClickOpen();
    }
    // The drawer will now stay open until explicitly closed by the user
  };


  const generate = (selectNumber) => {
    const pairs = {};
    const parentChildPairs = [
      ['11', ['2', '3', '4', '5','6']],
      ['22', ['1', '3', '4', '5' ,'6']],
      ['33', ['1', '2', '4', '5' ,'6']],
      ['44', ['1', '3', '2', '5' ,'6']],
      ['55', ['1', '3', '2', '4','6']],
      ['66', ['1', '3', '2', '4' ,'5']],
    ];

    parentChildPairs.forEach(([parent, children]) => {
      if (selectNumber.includes(parent)) {
        const childPairs = children.filter(num => selectNumber.includes(num));
        if (childPairs.length > 0) {
          pairs[parent] = childPairs;
        }
      }
    });

    return pairs;
  };
  const pairs = generate(selectNumber);

  useEffect(() => {
    if (selectedNumbers.length === 0) {
      setOpen(false);
    }
  }, [selectedNumbers]);

  useEffect(() => {
    if (selectNumber.length === 0) {
      setOpen(false);
    }
  }, [selectNumber]);

  // useEffect(() => {
  //   if (gid === "1") {
  //     if (Number(timing) <= 5) {
  //       setOpen(false)
  //       fk.handleReset()
  //     };
  //   } else if (gid === "2") {
  //     if (Number(String(timing)?.split("_")?.[0]) === 0) {
  //       if (Number(String(timing)?.split("_")?.[1]) <= 5) {
  //         setOpen(false)
  //         fk.handleReset()
  //       };
  //     }
  //   } else {
  //     if (Number(String(timing)?.split("_")?.[0]) === 0) {
  //       if (Number(String(timing)?.split("_")?.[1]) <= 5) {
  //         setOpen(false)
  //         fk.handleReset()
  //       };
  //     }
  //   }
  // }, [timing]);
  const initialValue = {
    balance: "1",
    qnt: "1",
  }


  const fk = useFormik({
    initialValues: initialValue,
    isSuccessPlaceBet: true,
    onSubmit: () => {
    
      betFunctionStart();
    },
  });
  async function betFunctionStart() {
    setLoding(true);
    const selectedBetNumbers = [];

    if (selectedNumbers.length > 0) {
      selectedBetNumbers.push({ type: 'matching', numbers: [...selectedNumbers] });
    }

    if (selectNumber.length > 0) {
      // Assuming each unique pair is sent as a separate object
      const firstSet = ['11', '22', '33', '44', '55', '66'];
      const uniquePairs = [];
      for (let i = 0; i < selectNumber.length; i++) {
        for (let j = i + 1; j < selectNumber.length; j++) {
          const num1 = selectNumber[i];
          const num2 = selectNumber[j];
          if (
            (firstSet.includes(num1) && !firstSet.includes(num2)) ||
            (!firstSet.includes(num1) && firstSet.includes(num2))
          ) {
            uniquePairs.push([num1, num2]);
          }
        }
      }
      if (uniquePairs.length > 0) {
        selectedBetNumbers.push({ type: 'unique', pairs: uniquePairs });
      } else if (selectNumber.length > 0) {
        // If some unique numbers are selected but don't form a valid pair
        VantToast("Please select one number from each unique set to form a pair.", 'f');
        setLoding(false);
        return;
      }
    } else if (selectedNumbers.length === 0) {
      VantToast("Please select numbers to place a bet.", 'f');
      setLoding(false);
      return;
    }

    if (selectedBetNumbers.length === 0) {
      VantToast("Please select numbers to place a bet.", 'f');
      setLoding(false);
      return;
    }

    const reqBody = {
      amount: (
        Number(fk.values.balance || 1) * Number(fk.values.qnt || 1) || 0
      )?.toString(),
      number: selectedBetNumbers, // Send the array of bet objects
      gameid: `${Number(gid)}`,
    };

    try {
      const response = await axios.post(`${endpoint.trx_bet_placed}`, reqBody);
      if (response?.data?.error === "200") {
        toast(
          <SuccessCheck
            message={
              <span className="!text-sm">Bid Placed Successfully !</span>
            }
          />
        );
        fk.setFieldValue("isSuccessPlaceBet", true);
        setOpen(false);
        localStorage.setItem("betApplied", `${gid}_true`);
        console.log(response, "This is response");
      } else {
        toast(response?.data?.msg);
      }
    } catch (e) {
      VantToast(e?.message, 'f');
      console.log(e);
    }
    client.refetchQueries("wallet_amount");
    client.refetchQueries(`my_all_history_${gid}`);
    setLoding(false);
  }
  // async function betFunctionStart() {
  //   setLoding(true);
  //   let betNumber = '';

  //   if (selectedNumbers.length > 0) {
  //     betNumber = selectedNumbers.join(','); // Join selected matching numbers with a comma
  //   } else if (selectNumber.length > 0) {
  //     // Handle unique pairs - assuming you want to send them comma-separated as well
  //     betNumber = selectNumber.join(',');
  //   } else {
  //     VantToast("Please select numbers to place a bet.", 'f');
  //     setLoding(false);
  //     return;
  //   }

  //   const reqBody = {
  //     amount: (
  //       Number(fk.values.balance || 1) * Number(fk.values.qnt || 1) || 0
  //     )?.toString(),
  //     number: betNumber,
  //     gameid: `${Number(gid)}`,
  //   };

  //   try {
  //     const response = await axios.post(`${endpoint.trx_bet_placed}`, reqBody);
  //     if (response?.data?.error === "200") {
  //       toast(
  //         <SuccessCheck
  //           message={
  //             <span className="!text-sm">Bid Placed Successfully !</span>
  //           }
  //         />
  //       );
  //       fk.setFieldValue("isSuccessPlaceBet", true);
  //       setOpen(false);
  //       localStorage.setItem("betApplied", `${gid}_true`);
  //       console.log(response, "This is response");
  //     } else {
  //       toast(response?.data?.msg);
  //     }
  //   } catch (e) {
  //     VantToast(e?.message, 'f');
  //     console.log(e);
  //   }
  //   client.refetchQueries("wallet_amount");
  //   client.refetchQueries(`my_all_history_${gid}`);
  //   setLoding(false);
  // }
  // async function betFunctionStart() {
  //   setLoding(true);
  //   const reqBody = {
  //     amount: (
  //       Number(fk.values.balance || 1) * Number(fk.values.qnt || 1) || 0
  //     )?.toString(),
  //     number: `${(selectNumber === "green" && 11) ||
  //       (selectNumber === "voilet" && 12) ||
  //       (selectNumber === "red" && 13) ||
  //       (selectNumber === "two" && 15) || // this is big
  //       (selectNumber === "one" && 14) || // this is small
  //       (selectNumber === "even" && 16) || // this is small
  //       (selectNumber === "odd" && 17) || // this is small
  //       Number(selectNumber)
  //       }`,
  //     gameid: `${Number(gid)}`,
  //   };

  //   try {
  //     const response = await axios.post(`${endpoint.trx_bet_placed}`, reqBody);
  //     if (response?.data?.error === "200") {
  //       toast(
  //         <SuccessCheck
  //           message={
  //             <span className="!text-sm">Bid Placed Successfully !</span>
  //           }
  //         />
  //       );
  //       fk.setFieldValue("isSuccessPlaceBet", true);
  //       setOpen(false);
  //       localStorage.setItem("betApplied", `${gid}_true`);
  //       console.log(response, "This is response");
  //     } else {
  //       toast(response?.data?.msg);
  //     }
  //   } catch (e) {
  //     VantToast(e?.message, 'f');
  //     console.log(e);
  //   }
  //   client.refetchQueries("wallet_amount");
  //   client.refetchQueries(`my_all_history_${gid}`);
  //   setLoding(false);
  // }
  if (loding) return <CustomCircularProgress isLoading={loding} />;


  const handleClickOpend = () => {
    setOpend(true);
  };

  const handleClosed = () => {
    setOpend(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setSelectedNumbers([])
    setSelectNumber([])
    setChecked([])
    setIsChecked([])
    setOpen(false);
  };


  return (
    <Box
      sx={{
        padding: 1,
        background: "#011341",
        mt: 2,
        borderRadius: "10px",

      }}
    >
      <div>
        <p className="text-white">2 matching Number: odds (13.83)</p>
        <div className="flex gap-1 justify-between my-4 m-2 cursor-pointer">
          {[11, 22, 33, 44, 55, 66].map(number => (
            <p
              key={number}
              className="!bg-[#4e2d8e] px-5 py-2 text-white rounded-md relative"
              onClick={() => handleNumberClick(String(number))}
            >
              {number}
              {isChecked[number] && (
                <span className="absolute text-[10px] w-4 h-4 border  font-bold right-0 bottom-0 bg-white rounded-full text-center text-purple-600">✔</span>
              )}
            </p>
          ))}
        </div>
        <p className="text-white">pair of Unique  numbers: odds (16.83)</p>
        <div className="flex justify-between px-2  my-4 w-full cursor-pointer">
          {[11, 22, 33, 44, 55,66].map(number => (
            <p
              key={number}
              className={`!bg-[#6a253c] px-5 py-2 text-white rounded-md relative `}
              onClick={() => handleNumberClick1(String(number))}
            >
              {number}
              {Checked[number] && (
                <span className="absolute text-[10px] w-4 h-4 border font-bold right-0 bottom-0 bg-white rounded-full text-center text-[#6a253c]">✔</span>
              )}
            </p>
          ))}

        </div>
        <div className="flex justify-between px-2  my-4 w-full cursor-pointer">
          {[1, 2, 3, 4, 5,6].map(number => (
            <p
              key={number}
              className={`!bg-[#0c624f] px-6 py-2 text-white rounded-md relative `}
              onClick={() => handleNumberClick1(String(number))}
            >
              {number}
              {Checked[number] && (
                <span className="absolute text-[10px] w-4 h-4 border font-bold right-0 bottom-0 bg-white rounded-full text-center text-[#0c624f]">✔</span>
              )}
            </p>
          ))}

        </div>

      </div>
      {open && (
       <div className={`drawer ${open ? 'open' : ''}`}>
         <div className="content">
          <Box>
            {isChecked &&
              <div>
                <Typography className="text-white text-left !px-2">2 matching Same numbers</Typography>
                <Box px={1}
                  className="!flex  justify-start gap-1">

                  {selectedNumbers.map((number) => (
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={{
                        textAlign: "center",
                        fontWeight: "400 ",
                        background: "#011341",
                        mt: 1,

                      }}
                      className={` !cursor-pointer !px-2 !w-fit !rounded
                        ${number === "green" ||
                          number === "16"
                          ? "!bg-[#0c624f]"
                          : number === "voilet"
                            ? "!bg-[#4e2d8e]"
                            : number === "voilet" ||
                              number === "22" ||
                              number === "55" ||
                              number === "11" ||
                              number === "66" ||
                              number === "44" ||
                              number === "33"
                              ? "!bg-[#4e2d8e]"
                              : number === "Small"
                                ? "!bg-[#6a253c]"
                                : number === "Even"
                                  ? "!bg-[#0c624f]"
                                  : number === "5" && "!bg-[#BF6DFE]"
                        }
    `}
                    >
                      {isNaN(Number(number)) ? number?.toString()?.toLocaleUpperCase() : number}
                    </Typography>
                  ))}
                </Box>
              </div>
            }


            {Checked && Object.keys(pairs).length > 0 && (
              <div>
                <Typography className="text-white text-left pt-1 !px-2">2 Same of number and 1 diferent number</Typography>
                <Box px={1} className="!m-1 !flex justify-start gap-1 flex-wrap">
                  {Object.entries(pairs).map(([parent, children]) => (
                    <div className="!flex justify-start">
                      <Typography
                        key={parent}
                        variant="body1"
                        color="initial"
                        sx={{
                          textAlign: "center",
                          color: "black",
                          fontWeight: "400",
                          background: "#011341",
                          display: "inline-block",
                        }}
                        className="!bg-[#6a253c] !px-2 !text-sm !cursor-pointer !w-fit  rounded-tl rounded-bl"
                      >
                        {`${parent} `}
                      </Typography>
                      <div className="border-r border-black !h-fit" />
                      <Typography
                        key={parent}
                        variant="body1"
                        color="initial"
                        sx={{
                          textAlign: "center",
                          color: "black",
                          fontWeight: "400",
                          background: "#011341",
                          display: "inline-block",
                        }}
                        className="!bg-[#0c624f] !px-2 !text-sm !cursor-pointer !w-fit  rounded-tr rounded-br"
                      >
                        {` ${children.join(', ')}`}
                      </Typography>

                    </div>
                  ))}
                </Box>
              </div>
            )}
            <Box mt={3} px={2}>
              <Grid container >
                <Grid item xs={4}>
                  <Typography variant="body1" color="initial" className="!text-white">
                    Balance{" "}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Stack
                    direction="row"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    {[1, 10, 100, 1000]?.map((i) => {
                      return (
                        <Box
                          onClick={() => fk.setFieldValue("balance", i)}
                          sx={style.bacancebtn}
                          className={`${fk.values.balance === i ? "!bg-[#00ECBE]" : "!bg-white !text-black"}  cursor-pointer`}

                        >
                          {i}
                        </Box>
                      );
                    })}
                  </Stack>
                </Grid>
              </Grid>
              <Grid container mt={1}>
                <Grid item xs={4}>
                  <Typography variant="body1" color="initial" className="!text-white">
                    Quantity{" "}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Stack
                    direction="row"
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Box
                      sx={style.addsumbtn}
                      onClick={() =>
                        fk.setFieldValue(
                          "qnt",
                          Number(fk.values.qnt) - 1 < 1
                            ? 1
                            : Number(fk.values.qnt) - 1
                        )
                      }
                      className={`!bg-[#00ECBE] !text-white cursor-pointer `}>
                      -
                    </Box>
                    <TextField value={fk.values.qnt} className="inputamt !bg-white" />
                    <Box
                      sx={style.addsumbtn}
                      onClick={() =>
                        fk.setFieldValue("qnt", Number(fk.values.qnt) + 1)
                      }
                      className={`!bg-[#00ECBE]  cursor-pointer px-2 text-white`}

                    >
                      +
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
              <Grid container mt={2} mx={1.5}>
                <Grid item xs={1}></Grid>
                <Grid item xs={12}>
                  <Stack
                    direction="row"
                    alignItems={"center"}
                    justifyContent={"end"}
                  >
                    {[1, 5, 10, 20, 50, 100]?.map((i) => {
                      return (
                        <Box
                          onClick={() => fk.setFieldValue("qnt", i)}
                          sx={style.bacancebtn2}
                          className={`${fk.values.qnt === i ? "!bg-[#00ECBE] " : "!bg-gray-400 "}  cursor-pointer`}
                        >
                          X{i}
                        </Box>
                      );
                    })}
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Grid container >
              <Grid item xs={12}>
                <Stack direction="row" alignItems="center">
                  <Checkbox checked />{" "}
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{ color: "gray", fontSize: "14px" }}
                  >
                    I agree
                  </Typography>
                  <NavLink onClick={handleClickOpend}>
                    <Typography
                      component="a"
                      sx={{
                        color: `${theme.palette.primary.main} !important`,
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      《Pre-sale rules》
                    </Typography>
                  </NavLink>
                </Stack>
              </Grid>
            </Grid>
            <Grid container mt={2} >
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  sx={style.cancelbtn}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Button
                  className={`!bg-[#00ECBE]
           !cursor-pointer`}
                  variant="contained"
                  sx={style.submitbtn}
                  onClick={() => {
                    fk.handleSubmit();
                  }}
                >
                  Total amount ₹{" "}
                  {Number(fk.values.balance || 1) * Number(fk.values.qnt || 1)}
                </Button>
              </Grid>
            </Grid>
          </Box>
          </div>
        </div>

      )}
      <Dialog
        sx={{
          maxWidth: "430px !important",
          minWidth: "430px !important",
          margin: "auto",
          minHeight: "70%",
          maxHeight: "80%",
        }}
        open={opend}
      >
        <Howtoplay />
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
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Same2;

const style = {
  bacancebtn: {
    padding: "2px 6px",
    borderRadius: "20px",
    color: "white",
    fontSize: "12px",
    marginLeft: "5px",
  },
  bacancebtn2: {
    padding: "4px 13px",
    borderRadius: "1px",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
    marginLeft: "5px",
  },
  bacancebtn3: {
    backgroundColor: "#0c624f",
    padding: "1px 5px",
    borderRadius: "6px",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    marginLeft: "5px",
    display: "flex",
    alignItems: "center",
    height: "30px",
    ["@media (max-width:340px)"]: { fontSize: "13px" },
    cursor: 'pointer',

  },
  addsumbtn: {
    padding: "4px 13px",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
    margin: "0px 5px",
  },
  cancelbtn: {
    width: "100%",
    borderRadius: "0px",
    color: "white",
    backgroundColor: "#25253C",
    padding: 1,
  },
  submitbtn: {
    width: "100%",
    borderRadius: "0px",
    color: "white",
    padding: 1,
  },
  bigbtn: {
    width: "50%",
    borderRadius: "20px 0px 0px 20px",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
  },
  smlbtn: {
    width: "50%",
    borderRadius: "0px 20px 20px 0px",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    background: "#6da7f4",
  },
  linetable: {
    "&>p": {
      fontSize: "12px",
      color: "gray",
      border: "1px solid gray",
      borderRadius: "50%",
      width: "15px",
      height: "15px",
      textAlign: "center",
      padding: "2px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    alignItems: "center",
    justifyContent: "space-between",
    "&>p:nth-last-child(1)": {
      width: "20px !important",
      height: "20px !important",
    },
  },
};

