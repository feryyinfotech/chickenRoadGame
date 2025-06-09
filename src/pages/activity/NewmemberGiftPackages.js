import React from 'react';
import Layout from '../../component/layout/Layout';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import newdata from '../../assets/new.png';
import newdata1 from '../../assets/acde.png';
import { ArrowLeft } from '@react-vant/icons';
import SvgIcons from '../../component/SvgIcons';
const NewmemberGiftPackages = () => {
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
                    <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Activity Details</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <div className=" ">
                    <img
                        src={newdata}
                        alt="Background"
                        className='cursor-pointer'
                        onClick={() => navigate('/event')}
                    />
                    <img
                        src={newdata1}
                        alt="Background"
                        className='mt-2'
                    />
                    {/* <img
                        src={newdata2}
                        alt="Background"
                        className='mt-2'
                    /> */}
                    <div className='w-full mt-5' >
                        <div className='flex justify-center  gap-4 p-2 font-semibold bg-[#2c5eca] mx-3  text-lg rounded-t-xl leading-none'>
                            <p className='text-white'>Conditions of participation</p>
                            <p className='text-white'>Get Compensation Bonus</p>
                            <p className='text-white'>Bonus limit</p>
                        </div>
                        <div className='flex justify-center gap-4 p-2  bg-[#011341] mx-3 space-y-0 text-lg rounded-b-xl'>
                            <p className='text-white border-r border-[#2c5eca]'>First deposit for new users </p>
                            <p className='text-white border-r border-[#2c5eca]'>Total <span className='text-red-500'>0%</span>  compensation from First Deposit Amount</p>
                            <p className='text-red-500'>₹0.00</p>
                        </div>
                    </div>
                    <Button className="!w-[95%] !bg-gray-700  !text-gray-700 !rounded-full !mx-2 !my-4 ">
                        See
                    </Button>
                </div>
            </Container>
        </Layout>
    );
};

export default NewmemberGiftPackages;
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