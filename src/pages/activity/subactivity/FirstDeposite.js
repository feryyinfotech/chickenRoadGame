import {
    Box,
    Button,
    Container,
    Typography
} from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../../component/layout/Layout";
import SvgIcons from "../../../component/SvgIcons";
import { ArrowLeft } from '@react-vant/icons';
import f1 from "../../../assets/f11.png"


function FirstDeposit() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <Layout header={false}>
            <SvgIcons />
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '43%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">First Deposit Bonus</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <div>
                    <Box
                        sx={{
                            background: "",
                            textAlign: "start",
                        }}
                    >
                        <Box
                            className="white 95 w"
                            sx={{ p: '12px 8px', background: "#001C54", borderRadius: "10px", width: '95%', margin: '10px auto' }}
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
                    <div className="flex justify-center items-center">
                    <img src={f1} alt=""  />
                    </div>
                </div>
               
            </Container>
        </Layout>
    );
}

export default FirstDeposit;
export const style = {
    container: { background: '#05012B', width: '100%', height: '100vh', overflow: 'auto', },
    header: {
        padding: '10px 8px',
        background: "zubgtext",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > p': {
            fontSize: '17px',
            fontWeight: '400',
            textAlign: 'center',
            color: 'white',
        },
        '& > a > svg': {
            color: 'white',
            fontSize: '22px'
        }
    },
};