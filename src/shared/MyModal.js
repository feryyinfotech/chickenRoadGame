import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { starblue } from "../shared/color";
import { Checkbox } from "react-vant";

function MyModal() {
  const [open, setOpen] = useState(false);
  const first_recharge_get = localStorage.getItem("First_recharge") || 0;

  useEffect(() => {
    if (Number(first_recharge_get) === 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [first_recharge_get]);

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="!flex !justify-center !items-center"
        style={{ background: "000000c7" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            width: 300,
            bgcolor: "#001C54",
            borderRadius: "10px",
            outline: "none",
          }}
        >
          <Box sx={{ background: "#001C54", padding: 2, textAlign: "center", borderRadius: '10px 10px 0 0', }}>
            <Typography id="modal-title" className="white hite fp15 fw500">
              Extra first deposit bonus
            </Typography>
            <Typography id="modal-title" className="white hite fp13 fw400">
              Each account can only receive rewards once
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#011341",
              textAlign: "start",
              maxHeight: "53.5vh",
              overflowY: "scroll",
            }}
          >
            <Box
              className="white 95 w"
              sx={{ p: '12px 8px', background: "#001C54", borderRadius: "7px", width: '95%', margin: '10px auto' }}
            >
              <Box className="">
                <Box className="fcsb w">
                  <Typography className="white  fp15 fw400">
                    First deposit
                    <span className=" fp14 fw500 orange" >
                      200
                    </span>{" "}
                  </Typography>
                  <Typography className=" fp13 orange"  >
                    + ₹10.00
                  </Typography>
                </Box>
                <Typography
                  className="wh  fp13"
                  my={1}
                  sx={{ lineHeight: "15px" }}
                >
                  Deposit 200 for the first time and you will receive 10 bonus
                </Typography>
                <Box className="fcsb" onClick={() => navigate("/deposit")}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      width: "60%",
                      background: "#05012B",
                      borderRadius: "10px",
                      m: 0,
                      p: 0,
                      textTransform: "capitalize !important",
                    }}
                    className="white  fp15 fw400"
                  >
                    0/200
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{ m: 0, p: "0px 12px", bgcolor: "transparent", color: '#dd9138', border: '1px solid #dd9138', fontSize: '13px', fontWeight: '400px' }}
                  >
                    Deposit
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              className="white 95 w"
              sx={{ p: '12px 8px', background: "#001C54", borderRadius: "7px", width: '95%', margin: '10px auto' }}
            >
              <Box className="">
                <Box className="fcsb w">
                  <Typography className="white  fp15 fw400">
                    First deposit
                    <span className="fp14 fw500 orange" >
                      500
                    </span>{" "}
                  </Typography>
                  <Typography className="fp13 orange" >
                    + ₹25.00
                  </Typography>
                </Box>
                <Typography
                  className="wh  fp13"
                  my={1}
                  sx={{ lineHeight: "15px" }}
                >
                  Deposit 500 for the first time and you will receive 25 bonus
                </Typography>
                <Box className="fcsb" onClick={() => navigate("/deposit")}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      width: "60%",
                      background: "#05012B",
                      borderRadius: "10px",
                      m: 0,
                      p: 0,
                      textTransform: "capitalize !important",
                    }}
                    className="white  fp15 fw400"
                  >
                    0/500
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{ m: 0, p: "0px 12px", bgcolor: "transparent", color: '#dd9138', border: '1px solid #dd9138', fontSize: '13px', fontWeight: '400px' }}
                  >
                    Deposit
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              className="white 95 w"
              sx={{ p: '12px 8px', background: "#001C54", borderRadius: "7px", width: '95%', margin: '10px auto' }}
            >
              <Box className="">
                <Box className="fcsb w">
                  <Typography className="white  fp15 fw400">
                    First deposit
                    <span className="fp14 fw500 orange" >
                      5000
                    </span>{" "}
                  </Typography>
                  <Typography className="fp13 orange" >
                    + ₹250.00
                  </Typography>
                </Box>
                <Typography
                  className="wh  fp13"
                  my={1}
                  sx={{ lineHeight: "15px" }}
                >
                  Deposit 5000 for the first time and you will receive 250 bonus
                </Typography>
                <Box className="fcsb" onClick={() => navigate("/deposit")}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      width: "60%",
                      background: "#05012B",
                      borderRadius: "10px",
                      m: 0,
                      p: 0,
                      textTransform: "capitalize !important",
                    }}
                    className="white  fp15 fw400"
                  >
                    0/5000
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{ m: 0, p: "0px 12px", bgcolor: "transparent", color: '#dd9138', border: '1px solid #dd9138', fontSize: '13px', fontWeight: '400px' }}
                  >
                    Deposit
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              className="white 95 w"
              sx={{ p: '12px 8px', background: "#001C54", borderRadius: "7px", width: '95%', margin: '10px auto' }}
            >
              <Box className="">
                <Box className="fcsb w">
                  <Typography className="white  fp15 fw400">
                    First deposit
                    <span className="fp14 fw500 orange" >
                      10000
                    </span>{" "}
                  </Typography>
                  <Typography className="fp13 orange" >
                    + ₹480.00
                  </Typography>
                </Box>
                <Typography
                  className="wh  fp13"
                  my={1}
                  sx={{ lineHeight: "15px" }}
                >
                  Deposit 10000 for the first time and you will receive 480
                  bonus
                </Typography>
                <Box className="fcsb" onClick={() => navigate("/deposit")}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      width: "60%",
                      background: "#05012B",
                      borderRadius: "10px",
                      m: 0,
                      p: 0,
                      textTransform: "capitalize !important",
                    }}
                    className="white  fp15 fw400"
                  >
                    0/10000
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{ m: 0, p: "0px 12px", bgcolor: "transparent", color: '#dd9138', border: '1px solid #dd9138', fontSize: '13px', fontWeight: '400px' }}
                  >
                    Deposit
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              className="white 95 w"
              sx={{ p: '12px 8px', background: "#001C54", borderRadius: "7px", width: '95%', margin: '10px auto' }}
            >
              <Box className="">
                <Box className="fcsb w">
                  <Typography className="white  fp15 fw400">
                    First deposit
                    <span className="fp14 fw500 orange" >
                      30,000
                    </span>{" "}
                  </Typography>
                  <Typography className="fp13 orange" >
                    + ₹1250.00
                  </Typography>
                </Box>
                <Typography
                  className="wh  fp13"
                  my={1}
                  sx={{ lineHeight: "15px" }}
                >
                  Deposit 30,000 for the first time and you will receive 1250
                  bonus
                </Typography>
                <Box className="fcsb" onClick={() => navigate("/deposit")}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      width: "60%",
                      background: "#05012B",
                      borderRadius: "10px",
                      m: 0,
                      p: 0,
                      textTransform: "capitalize !important",
                    }}
                    className="white  fp15 fw400"
                  >
                    0/30000
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{ m: 0, p: "0px 12px", bgcolor: "transparent", color: '#dd9138', border: '1px solid #dd9138', fontSize: '13px', fontWeight: '400px' }}
                  >
                    Deposit
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              className="white 95 w"
              sx={{ p: '12px 8px', background: "#001C54", borderRadius: "7px", width: '95%', margin: '10px auto' }}
            >
              <Box className="">
                <Box className="fcsb w">
                  <Typography className="white  fp15 fw400">
                    First deposit
                    <span className="fp14 fw500 orange" >
                      50000
                    </span>{" "}
                  </Typography>
                  <Typography className="fp13 orange" >
                    + ₹2230.00
                  </Typography>
                </Box>
                <Typography
                  className="wh  fp13"
                  my={1}
                  sx={{ lineHeight: "15px" }}
                >
                  Deposit 50,000 for the first time and you will receive 2230
                  bonus
                </Typography>
                <Box className="fcsb" onClick={() => navigate("/deposit")}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      width: "60%",
                      background: "#05012B",
                      borderRadius: "10px",
                      m: 0,
                      p: 0,
                      textTransform: "capitalize !important",
                    }}
                    className="white  fp15 fw400"
                  >
                    0/50000
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{ m: 0, p: "0px 12px", bgcolor: "transparent", color: '#dd9138', border: '1px solid #dd9138', fontSize: '13px', fontWeight: '400px' }}
                  >
                    Deposit
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              className="white 95 w"
              sx={{ p: '12px 8px', background: "#001C54", borderRadius: "7px", width: '95%', margin: '10px auto' }}
            >
              <Box className="">
                <Box className="fcsb w">
                  <Typography className="white  fp15 fw400">
                    First deposit
                    <span className="fp14 fw500 orange" >
                      100000
                    </span>{" "}
                  </Typography>
                  <Typography className="fp13 orange" >
                    + ₹5688.00
                  </Typography>
                </Box>
                <Typography
                  className="wh  fp13"
                  my={1}
                  sx={{ lineHeight: "15px" }}
                >
                  Deposit 5688 for the first time and you will receive 10,000
                  bonus
                </Typography>
                <Box className="fcsb" onClick={() => navigate("/deposit")}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      width: "60%",
                      background: "#05012B",
                      borderRadius: "10px",
                      m: 0,
                      p: 0,
                      textTransform: "capitalize !important",
                    }}
                    className="white  fp15 fw400"
                  >
                    0/100000
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{ m: 0, p: "0px 12px", bgcolor: "transparent", color: '#dd9138', border: '1px solid #dd9138', fontSize: '13px', fontWeight: '400px' }}
                  >
                    Deposit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 1, position: "relative", width: "95%", margin: 'auto' }}>
            <Box sx={{ mt: 1, py: 1 }} className="white 95 fcsb">
              <FormControlLabel
                className="aghy"
                sx={{ m: 0, width: "20px" }}
                label=""
                control={
                  <Checkbox style={{ '&>div>svg>path': { color: 'white !important' } }} >
                  </Checkbox >
                }
              />
              <Typography variant="body1" className="white  fp13 ">
                No more reminders today
              </Typography>
              <Button
                variant="contained"
                sx={{
                  m: 0,
                  p: "0px 15px",
                  borderRadius: "50px",
                  color: "black",
                  background: "linear-gradient(180deg, #7afec3, #02afb6)",
                  textTransform: "capitalize !important",
                  fontWeight: "500",
                }}
              >
                Activity
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: 1 }} className="white 95 fcc">
            <Button
              className="white"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                bottom: '-7%',
                pt: 0,
                "&>svg": {
                  border: "2px solid rgb(255, 255, 255)",
                  borderRadius: "50px",
                  padding: "1px",
                  width: "25px",
                  height: "25px",
                },
              }}
            >
              <Close sx={{ fontSize: '25px', '&>svg>path': { color: 'white !important' } }} className="white" />
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default MyModal;
