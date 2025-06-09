import React from 'react';
import Layout from '../../../component/layout/Layout';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import bgimg from '../../../assets/images/bonus.png';
import coin from '../../../assets/images/coin.png';
import gift from '../../../assets/images/giftt.png';
import { apiConnectorGet } from '../../../services/apiconnector';
import { endpoint } from '../../../services/urls';
import { useQuery } from 'react-query';
import { ArrowLeft } from '@react-vant/icons';
import SvgIcons from '../../../component/SvgIcons';
const AttendanceBonus = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const { data } = useQuery(
        ['deposit_bonus'],
        () => apiConnectorGet(endpoint?.deposit_bonus),
        {
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
        }
    );
    const res = data;
    const plans = [
        { price: '₹ 7.00', day: '1 Day' },
        { price: '₹ 20.00', day: '2 Day' },
        { price: '₹ 100.00', day: '3 Day' },
        { price: '₹ 200.00', day: '4 Day' },
        { price: '₹ 450.00', day: '5 Day' },
        { price: '₹ 2,400.00', day: '6 Day' },
    ];

    return (
        <Layout header={false}>
            <SvgIcons />
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Attendance</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <div className="relative ">
                    <img
                        src={bgimg}
                        className="absolute z-10 w-full h-full object-cover"
                        alt="Background"
                    />
                    <div className="absolute inset-0 bg-[#F54545] opacity-90 "></div>
                    <div className="relative z-10 p-3 flex flex-col ">
                        <h1 className="font-bold text-2xl !text-white">Attendance Bonus</h1>
                        <p className="text-lg !text-white">
                            Get rewards based on consecutive <br />login days
                        </p>
                        <div className="bg-white px-2 rounded-md mt-2 w-fit">
                            <p className="text-sm !text-[#F54545]">Attended consecutively</p>
                            <p className="text-lg !text-[#F54545] font-bold">{res?.length || 0} Day</p>
                        </div>
                        <p className="text-lg mt-2 opacity-90 !text-white">Accumulated</p>
                        <p className="text-xl font-bold !text-white">
                            ₹ {res?.data?.data?.[0]?.l01_amount || 0}
                        </p>
                        <div className="flex justify-between px-5 mt-2">
                            <Button
                                className="!bg-[#ffac3f] !text-white !px-4 !py-2 !rounded-full !text-sm font-medium"
                                onClick={() => navigate('/attendancegamerules')}
                            >
                                Game Rules
                            </Button>
                            <Button
                                className="!bg-[#ffac3f] !text-white !px-4 !py-2 !rounded-full !text-sm !font-medium"
                                onClick={() => navigate('/attendancehistory')}
                            >
                                Attendance History
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 m-4">
                    {plans?.map((plan, index) => (
                        <div
                            key={index}
                            className="shadow-md bg-[#011341] rounded-md justify-center items-center p-2 gap-2 flex flex-col"
                        >
                            <p className="!text-white font-semibold">{plan.price}</p>
                            <img src={coin} className="h-12" />
                            <p>{plan.day}</p>
                        </div>
                    ))}
                </div>
                <div className="m-4 shadow-md bg-[#011341] rounded-md flex justify-between p-2">
                    <img src={gift} className="h-28" />
                    <div className="flex flex-col justify-center items-center pr-5">
                        <p className="text-xl font-bold text-white">₹ 6400.00</p>
                        <p className="text-lg font-semibold ">7 Day</p>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5 mx-10 p-2">
                    <Button
                        variant="contained"
                        className=" !text-xl  !bg-[#40d8bd] !w-full text-[#011341]  !rounded-full "
                    >
                        Attendance
                    </Button>
                </div>
            </Container>
        </Layout>
    );
};

export default AttendanceBonus;
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