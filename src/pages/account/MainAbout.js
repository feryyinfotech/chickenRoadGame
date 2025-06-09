import { Box, Container, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';
import aboutBg from '../../assets/images/aboutBg-0e9d0afa.png';
import { Arrow } from '@react-vant/icons';


function MainAbout() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const agreements = [
        {
            title: "Confidentiality Agreement",
            icon: <svg className="#icon-privacyIcon" fill="#05012B" width="25" height="25">
                <use xlinkHref="#icon-privacyIcon"></use>
            </svg>,
            path: "/main/About/AboutDetail",
        },
        {
            title: "Risk Disclosure Agreement",
            icon: <svg className="#icon-privacyIcon" fill="#05012B" width="25" height="25">
                <use xlinkHref="#icon-riskProtocal"></use>
            </svg>,
            // path: "/main/About/AboutDetail",
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
                    <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">About Us</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <Box sx={{ maxWidth: 500, mx: "auto", }}>
                    <Box
                        component="img"
                        src={aboutBg}
                        alt="about background"
                        sx={{ width: "100%", height: "auto" }}
                    />

                    <Box sx={{ bgcolor: "#06012B", px: 2, py: 3 }}>
                        {agreements.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                style={{ textDecoration: "none" }}
                            >
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        py: 2,
                                        borderBottom: index !== agreements.length - 1 ? "1px solid #1B2450" : "none",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        {item.icon}
                                        <Typography sx={{ color: "white" }}>{item.title}</Typography>
                                    </Box>
                                    <Arrow />
                                </Box>
                            </NavLink>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
}

export default MainAbout;



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

