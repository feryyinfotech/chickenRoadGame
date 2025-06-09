import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import img6 from '../../assets/images/iconChess-c1aaee6c.png';
import img4 from '../../assets/images/iconFishing-c0078712.png';
import img1 from '../../assets/images/iconLottery-e1521a51.png';
import img5 from '../../assets/images/iconPhysics-0095b0ff.png';
import img2 from '../../assets/images/iconRealPerson-31a7139d.png';
import img3 from '../../assets/images/iconSlots-fc9b3a8c.png';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';


const StatItem = ({ label, value, valueColor = '#FFFFFF', showLine = true }) => (
    <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ mb: 1.5 }}>
        <Box sx={{ position: 'relative', width: '16px', height: '24px', display: 'flex', justifyContent: 'center' }}>
            <Box
                sx={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'linear-gradient(180deg, #00FFD1 0%, #00BBAE 100%)',
                    mt: '6px',
                }}
            />
            {showLine && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '14px',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderLeft: '1px dashed #4DD0E1',
                        height: '20px',
                    }}
                />
            )}
        </Box>

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Typography sx={{ fontSize: '14px', color: '#90CAF9' }}>{label}</Typography>
            <Typography sx={{ fontSize: '14px', color: valueColor }}>{value}</Typography>
        </Box>
    </Stack>
);

const Section = ({ icon, title }) => (
    <Box sx={{ mb: 3 }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            {icon}
            <Typography sx={{ fontWeight: 600, fontSize: '15px', color: '#FFFFFF' }}>{title}</Typography>
        </Stack>
        <StatItem label="Total bet" value="₹0.00" />
        <StatItem label="Number of bets" value="0" />
        <StatItem label="Winning amount" value="₹0.00" valueColor="#00FFB2" showLine={false} />
    </Box>
);


function GameStatistics() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const [selectedTab, setSelectedTab] = useState('Today');

    const data = {
        Today: { amount: '₹0.00', label: 'Total bet' },
        Yesterday: { amount: '₹20.00', label: 'Total bet' },
        'This week': { amount: '₹100.00', label: 'Weekly bet' },
        'This month': { amount: '₹450.00', label: 'Monthly bet' },
    };


    const StatItem = ({ label, value, valueColor = '#FFFFFF', showLine = true }) => (
        <Stack direction="row" spacing={1} alignItems="flex-start" sx={{ mb: 1.5 }}>
            <Box sx={{ position: 'relative', width: '16px', height: '24px', display: 'flex', justifyContent: 'center' }}>
                <Box
                    sx={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'linear-gradient(180deg, #00FFD1 0%, #00BBAE 100%)',
                        mt: '6px',
                    }}
                />
                {showLine && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '14px',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            borderLeft: '1px dashed #4DD0E1',
                            height: '20px',
                        }}
                    />
                )}
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    borderBottom: 'none',
                }}
            >
                <Typography sx={{ fontSize: '14px', color: '#90CAF9' }}>{label}</Typography>
                <Typography sx={{ fontSize: '14px', color: valueColor }}>{value}</Typography>
            </Box>
        </Stack>
    );

    return (
        <Layout header={false}>
            <SvgIcons />
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Game statistics</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <Box sx={{ background: '#00052B', p: 2, borderRadius: '12px' }}>
                    {/* Tab Buttons */}
                    <Stack direction="row" spacing={1} justifyContent="center" mb={2}>
                        {Object.keys(data).map((tab) => (
                            <Button
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                sx={{
                                    fontSize: '13px',
                                    fontWeight: '500',
                                    textTransform: 'none',
                                    borderRadius: '20px',
                                    px: 1,
                                    py: 0.5,
                                    minWidth: '22%',
                                    color: selectedTab === tab ? '#000' : '#92a8e3',
                                    background:
                                        selectedTab === tab
                                            ? 'linear-gradient(180deg, #00FFD1 0%, #00BBAE 100%)'
                                            : '#0A1B4D',
                                    '&:hover': {
                                        background: selectedTab === tab
                                            ? 'linear-gradient(180deg, #00FFD1 0%, #00BBAE 100%)'
                                            : '#122860',
                                    },
                                }}
                            >
                                {tab}
                            </Button>
                        ))}
                    </Stack>

                    {/* Card */}
                    <Box
                        sx={{
                            background: '#011341',
                            padding: '10px',
                            borderRadius: '10px',
                            textAlign: 'center',
                            padding: 4,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#FFB14E',
                                fontWeight: 600,
                                fontSize: '20px',
                                mb: 0.5,
                            }}
                        >
                            {data[selectedTab].amount}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#B0BEC5',
                                fontSize: '14px',
                                mt: 1
                            }}
                        >
                            {data[selectedTab].label}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        background: '#011341',
                        padding: '15px',
                        borderRadius: '8px',
                        mt: 2,
                        mx: 2,
                    }}
                >
                    <Section icon={<Box component='img' src={img1} sx={{ width: 34, height: 34 }} />} title="lottery" />
                    <Section icon={<Box component='img' src={img2} sx={{ width: 34, height: 34 }} />} title="video" />
                    <Section icon={<Box component='img' src={img3} sx={{ width: 34, height: 34 }} />} title="Slot" />
                    <Section icon={<Box component='img' src={img4} sx={{ width: 34, height: 34 }} />} title="Fish" />
                    <Section icon={<Box component='img' src={img5} sx={{ width: 34, height: 34 }} />} title="sport" />
                    <Section icon={<Box component='img' src={img6} sx={{ width: 34, height: 34 }} />} title="ChessCard" />
                </Box>
            </Container>
        </Layout>
    );
}

export default GameStatistics;



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

