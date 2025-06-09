import { Box, Container, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';


function MainNotification() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const notifications = [
        {
            title: "Prevent hacker remind",
            description:
                "Our customer service never send a link to the member, if you received a link from someone who pro-claimed as Tahalka customer service do not click the link to prevent being hack or lost data. Thank you",
            date: "2025-03-24 14:48:50",
        },
        {
            title: "WELCOMME TO Tahalka",
            description:
                "🎉 🎉 🎉 Welcome to join the Tahalka platform. We provide a brand new gaming experience and a comprehensive range of popular games. 🍊🍊🍊 You are welcome to register at Tahalka and participate in the game. Thank you.",
            date: "2025-03-24 14:46:29",
        },
    ];


    return (
        <Layout header={false}>
            <SvgIcons />
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Notification</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <Box sx={{ maxWidth: 500, mx: "auto", mt: "30px", px: 2, pb: 5, color: "#92A8E3", }}>
                    {notifications.map((note, idx) => (
                        <Box key={idx} sx={{ background: "#001952", borderRadius: 2, p: 2, mb: 2, }}>
                            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                <svg className="svg-icon" width="25" height="25" fill='#6EF6C1'>
                                    <use xlinkHref="#icon-notificationIcon"></use>
                                </svg>
                                <Typography sx={{ fontWeight: 500, ml: 1, color: 'white' }}>{note.title}</Typography>
                            </Box>
                            <Typography sx={{ fontSize: 13, lineHeight: 1.5 }}>{note.description}</Typography>
                            <Typography sx={{ fontSize: 11, mt: 1 }}>{note.date}</Typography>
                        </Box>
                    ))}

                    <Typography sx={{ textAlign: "center", mt: 3, color: "white" }}>No more</Typography>
                </Box>
            </Container>
        </Layout>
    );
}

export default MainNotification;



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

