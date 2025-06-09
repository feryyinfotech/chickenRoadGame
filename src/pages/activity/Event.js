import { Box, Container, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';
const Event = () => {
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
                    <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Events</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <div className="p-2 m-4 shadow-md bg-[#011341] rounded-md  flex flex-col">
                    <p className='text-center font-bold text-red-600'>Bonus for first deposit negative profit</p>
                    <p className='text-sm'>Event start time , First deposit for new users Negative hourly profit The platform returns 
                    0%  bonus ，Bonus limit ₹0.00 ，The membership system that meets the standard automatically distributes bonuses。 
                    </p>
                </div>
                <p className='text-red-600 text-center py-2 font-bold'>New members get bonuses by playing games</p>
            </Container>
        </Layout>
    );
};

export default Event;
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