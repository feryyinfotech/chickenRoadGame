
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
const Same3 = ({ timing, gid }) => {
  const user_id = localStorage.getItem("user_id");
  const [open, setOpen] = useState(false);
  const [getBalance, setBalance] = useState(0);
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
    // setIsChecked(parseInt(number));
    setIsChecked((prevSelectedNumbers) => ({
      ...prevSelectedNumbers,
      [number]: !prevSelectedNumbers[number]
    }));
    handleClickOpen();
  };
  const handleNumberClick1 = (number) => {
    setSelectNumber((prevSelectedNumbers) => {
      if (prevSelectedNumbers.includes(number)) {
        return prevSelectedNumbers.filter((n) => n !== number);
      } else {
        return [...prevSelectedNumbers, number];
      }
    });
    setChecked((prevSelectedNumbers) => ({
      ...prevSelectedNumbers,
      [number]: !prevSelectedNumbers[number]
    }));
    handleClickOpen();
  };
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

  useEffect(() => {
    if (gid === "1") {
      if (Number(timing) <= 5) {
        setOpen(false)
        fk.handleReset()
      };
    } else if (gid === "2") {
      if (Number(String(timing)?.split("_")?.[0]) === 0) {
        if (Number(String(timing)?.split("_")?.[1]) <= 5) {
          setOpen(false)
          fk.handleReset()
        };
      }
    } else {
      if (Number(String(timing)?.split("_")?.[0]) === 0) {
        if (Number(String(timing)?.split("_")?.[1]) <= 5) {
          setOpen(false)
          fk.handleReset()
        };
      }
    }
  }, [timing]);
  const initialValue = {
    balance: "1",
    qnt: "1",
  }

  const fk = useFormik({
    initialValues: initialValue,
    isSuccessPlaceBet: true,
    onSubmit: () => {
      if (
        Number( 0) <
        Number(fk.values.balance || 1) * Number(fk.values.qnt || 1)
      )
        return toast("Your bid amount is more than wallet amount");
      betFunctionStart();
    },
  });

  async function betFunctionStart() {
    setLoding(true);
    const reqBody = {
      userid: user_id?.toString(),
      amount: (
        Number(fk.values.balance || 1) * Number(fk.values.qnt || 1) || 0
      )?.toString(),
      number: `${(selectNumber === "green" && 11) ||
        (selectNumber === "voilet" && 12) ||
        (selectNumber === "red" && 13) ||
        (selectNumber === "two" && 15) || // this is big
        (selectNumber === "one" && 14) || // this is small
        (selectNumber === "even" && 16) || // this is small
        (selectNumber === "odd" && 17) || // this is small
        Number(selectNumber) + 1
        }`,
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
    client.refetchQueries("myAll_trx_history");
    setLoding(false);
  }
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

  console.log("modal is open ", open)

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
        <p className="text-white">3 of same Number: odds (13.83)</p>
        <div className="flex gap-1 justify-between my-4 m-2 cursor-pointer">
          {[111, 222, 333, 444, 555, 666].map(number => (
            <p
              key={number}
              className="!bg-[#4e2d8e] px-4 py-2 text-white rounded-md relative"
              onClick={() => handleNumberClick(String(number))}
            >
              {number}
              {isChecked[number] && (
                <span className="absolute text-[10px] w-4 h-4 border border-purple-600 font-bold right-0 bottom-0 bg-white rounded-full text-center text-purple-600">✔</span>
              )}
            </p>
          ))}
        </div>
        <p className="text-white">Any 3  numbers: odds (16.83)</p>
        <div className=" m-2 my-4 w-full cursor-pointer">
          {["Any of the 3 number same : odd number"].map(number => (
            <p
              key={number}
              className="!bg-[#6a253c] px-5 py-2 text-white rounded-md relative"
              onClick={() => handleNumberClick1((number))}
            >
              {number}
              {Checked[number] && (
                <span className="absolute text-[10px] w-4 h-4 border font-bold right-0 bottom-0 bg-white rounded-full text-center text-purple-600">✔</span>
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
                <Typography className="!text-left !text-white !m-2">3 off the Same numbers</Typography>
                <Box px={1}
                  className="!flex  justify-start gap-1 !m-1">

                  {selectedNumbers.map((number) => (
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={{
                        textAlign: "center",
                        fontWeight: "400 ",
                        background: "#011341",
                      }}
                      className={` !cursor-pointer !px-2 !w-fit !rounded
                        ${number === "green" ||
                          number === "4" ||
                          number === "8" ||
                          number === "12" ||
                          number === "6" ||
                          number === "10" ||
                          number === "16"
                          ? "!bg-[#0c624f]"
                          : number === "voilet"
                            ? "!bg-[#4e2d8e]"
                            : number === "voilet" ||
                              number === "222" ||
                              number === "555" ||
                              number === "111" ||
                              number === "888" ||
                              number === "444" ||
                              number === "666" ||
                              number === "333"
                              ? "!bg-[#4e2d8e]"
                              : number === "Big"
                                ? "!bg-[#0c624f]"
                                : number === "Small"
                                  ? "!bg-[#6da7f4]"
                                  : number === "Any of the 3 number same : odd number"
                                    ? "!bg-[#6a253c]"
                                    : number === "Even"
                                      ? "!bg-[#0c624f]"
                                      : number === "0"
                                        ? "!bg-[#4e2d8e]"
                                        : number === "5" && "!bg-[#4e2d8e]"
                        }
    `}
                    >
                      {isNaN(Number(number)) ? number?.toString()?.toLocaleUpperCase() : number}
                    </Typography>
                  ))}
                </Box>
              </div>
            }
            {Checked &&
              <div>

                <Box px={1}
                  className="!m-1 !flex flex-col justify-start gap-1">
                  <Typography className="!mt-1 !text-white !text-left ">Any 3 of the same number: odds</Typography>
                  {selectNumber.map((number) => (
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={{
                        textAlign: "center",
                        background: "#011341",

                      }}
                      className={`!text-sm !cursor-pointer !px-2 !w-fit !rounded
               ${number === "green" ||
                          number === "4" ||
                          number === "8" ||
                          number === "12" ||
                          number === "6" ||
                          number === "10" ||
                          number === "16"
                          ? "!bg-[#0c624f]"
                          : number === "voilet"
                            ? "!bg-[#B659FE]"
                            : number === "voilet" ||
                              number === "222" ||
                              number === "555" ||
                              number === "111" ||
                              number === "888" ||
                              number === "444" ||
                              number === "666" ||
                              number === "333"
                              ? "!bg-[#4e2d8e]"
                              : number === "Big"
                                ? "!bg-[#0c624f]"
                                : number === "Small"
                                  ? "!bg-[#6da7f4]"
                                  : number === "Any of the 3 number same : odd number"
                                    ? "!bg-[#6a253c]"
                                    : number === "Even"
                                      ? "!bg-[#0c624f]"
                                      : number === "0"
                                        ? "!bg-[#4e2d8e]"
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

            <Box mt={3} px={2}>
              <Grid container >
                <Grid item xs={4}>
                  <Typography className="!text-white" variant="body1" color="initial">
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
                          className={`${fk.values.balance === i ? "!bg-[#00ECBE]" : "!bg-gray-400"}  cursor-pointer`}

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
                  <Typography className="!text-white" variant="body1" color="initial">
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
                      className={`!bg-[#00ECBE]  cursor-pointer `}

                    >
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
                          className={`${fk.values.qnt === i ? "!bg-[#00ECBE]" : "!bg-gray-400"}  cursor-pointer`}
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
            <Grid container mt={2}>
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

export default Same3;

const style = {
  bacancebtn: {
    padding: "4px 13px",
    borderRadius: "20px",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
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

