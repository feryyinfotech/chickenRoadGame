import { Box, Container, Stack, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import moment from 'moment';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SvgIcons from '../../../component/SvgIcons';
import Layout from '../../../component/layout/Layout';
import theme from '../../../utils/theme';

const Recharge = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const res = [
        {
            tr15_status: "Recharge Failed",
            tr15_amt: "200",
            Deposit_type: "UPI",
            tr15_date: "12:03:2024",
            tr15_trans: "RC2025041112501458275139a"
        },
      
      
    ]

    return (
        <div className='!bg-white h-screen overflow-y-scroll'>
            <SvgIcons />
            <Container className="!h-screen !bg-gray-100">
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft className='!text-black'  sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '50%', fontSize: '23px !important', }} className="fcc roboto !text-black " variant="body1" color="initial">Recharge History</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                {/* <CustomCircularProgress isLoading={isLoading} /> */}
                {res?.map((i, index) => {
                    return (
                        <Box
                            key={index}
                            sx={{
                                padding: '5px',
                                borderRadius: '10px',
                                background: '#fff',
                                width: '95%',
                                margin: '16px auto !important',
                            }}
                        >
                            <Stack
                                direction="row"
                                sx={{
                                    paddingBottom: '10px',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    borderBottom: '1px solid #efefef',
                                }}
                            >
                                <Box>
                                    <Typography className="bg-[#18b660] !text-xl !text-white rounded px-2 py-1 !flex justify-center">
                                        Recharge
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        color: 'red',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {i?.tr15_status}
                                </Box>
                            </Stack>
                            <Stack
                                direction="row"
                                sx={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    '&>p:nth-child(1)': {
                                        color: '#888',
                                        py: 1,
                                    },
                                    '&>p:nth-child(2)': {
                                        color: theme.palette.primary.main,
                                        py: 1,
                                    },
                                }}
                            >
                                <Typography variant="body1" color="initial">
                                    Amount
                                </Typography>
                                <Typography variant="body1" className="!text-red-400"> {i?.tr15_amt}</Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                sx={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    '&>p': {
                                        color: '#888',
                                        py: 1,
                                    },
                                }}
                            >
                                <Typography variant="body1" color="initial">
                                    Type
                                </Typography>
                                <Typography variant="body1" color="initial">
                                    {i?.Deposit_type}
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                sx={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    '&>p': {
                                        color: '#888',
                                        py: 1,
                                    },
                                }}
                            >
                                <Typography variant="body1" color="initial">
                                    Time
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="initial"
                                    className=""
                                >
                                    {moment.utc(i?.tr15_date)?.format('DD-MM-YYYY HH:mm:ss')}
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                sx={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    '&>p': {
                                        color: '#888',
                                        py: 1,
                                    },
                                }}
                            >
                                <Typography variant="body1" color="initial">
                                    Order Number
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="initial"
                                    className=""
                                >
                                    {i?.tr15_trans}
                                </Typography>
                            </Stack>
                            <button className="!w-full !text-xl p-2 !rounded-full !text-white !bg-[#011340] !my-5" 
                            onClick={()=>navigate("/customer/rechargeform")}>Submit Reciept</button>

                        </Box>
                    );
                })}


            </Container>
        </div>

    );
};

export default Recharge;
const style = {
    container: { background: '#fff', width: '100%', height: '100vh', overflow: 'auto', },
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
    paytmbtntwo: {
        borderRadius: '20px',
        textTransform: 'capitalize',
        mb: 2,
        width: '92%',
        mt: 2,
        mx: 2,
        padding: '10px',
        '&:hover': { border: '1px solid transparent' },
    },
    wdbtn: {
        width: '95% !important',
        boxShadow: '0 0.05333rem #b6bad0',
        borderRadius: '20px',
        border: 'none',
        color: '#fff',
        letterSpacing: '0.13333rem',
        fontWeight: '700',
        fontSize: '15px',
        height: '0.93333rem',
        width: '100%',
        background:
            'linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%), linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%)',
        backgroundSize: '100% 100%, 100% 100%',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, no-repeat',
        textShadow: '0 0.02667rem 0.01333rem #afb0be',
        padding: '20px',
        mt: 3,
    },
};
