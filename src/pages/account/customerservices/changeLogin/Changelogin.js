import { Box, Container } from "@mui/material";
import { ArrowLeft } from '@react-vant/icons';
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Typography } from "react-vant";
import SvgIcons from "../../../../component/SvgIcons";

const ChangeLogin = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(59);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [canResend, setCanResend] = useState(false);

    const goBack = () => {
        navigate(-1);
    };

    const handleSendCode = () => {
        setIsTimerActive(true);
        setCanResend(false);
        setTimer(59);
    };

    useEffect(() => {
        let intervalId;

        if (isTimerActive && timer > 0) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsTimerActive(false);
            setCanResend(true);
        }

        return () => clearInterval(intervalId);
    }, [isTimerActive, timer]);

    return (
        <div className='!bg-white h-screen overflow-y-scroll'>
            <SvgIcons />
            <Container className="!h-screen !bg-gray-50 !p-4">
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft className='!text-black' sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '48%', }} className="fcc roboto !text-black !text-xl " variant="body1" color="initial">Self Services Change ....</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <div className="mt-7 p-2">
                        <label htmlFor="utrNumber" className="block text-xl  text-gray-700">
                        New Password*
                        </label>
                        <input
                            type="text"
                            id="utrNumber"
                            placeholder="Please enter password"
                            className="mt-1 block w-full border border-gray-300  bg-white text-xl  shadow-md text-black rounded-md  py-2 px-3 "
                            required
                        />
                    </div>

                <div className="mt-7 p-2">
                    <label htmlFor="otp" className="block text-xl  text-gray-700">
                        Register phone number to receive OTP *
                    </label>
                    <div className="mt-2  flex justify-start items-center">

                        <input
                            type="text"
                            id="otp"
                            placeholder="Please enter email/sms verification code"
                            className="mt-1 block w-[70%]  border border-gray-300 bg-white text-xl shadow-md text-black rounded-md py-3 px-3"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                        <p
                            className={`text-sm p-2  py-4 rounded-r font-semibold ${canResend
                                    ? '!bg-blue-500 !text-white hover:!bg-blue-700'
                                    : isTimerActive
                                        ? '!bg-gray-300 !text-blacks cursor-not-allowed'
                                        : '!bg-blue-500 !text-white hover:!bg-blue-700'
                                }`}
                            onClick={handleSendCode}
                            disabled={isTimerActive && !canResend}
                        >
                            {canResend ? 'Resend Code' : isTimerActive ? `Resend in ${timer}s` : 'Verification'}
                        </p>
                    </div>
                    <div className="">
                        <button
                            className="!w-full !text-xl p-2 !rounded-full !text-white !bg-[#011340] !my-5 !mt-10"
                            onClick={() => navigate("/customer/rechargeform")}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ChangeLogin;

const style = {
    container: { background: '#fff' },
    header: {
        padding: '10px 8px',
        background: "zubgtext",
        display: 'flex',
        alignItems: 'center',
        '& > p': {
            textAlign: 'center',
            color: 'white',
        },
        '& > a > svg': {
            color: 'white',
            fontSize: '22px'
        }
    },
};