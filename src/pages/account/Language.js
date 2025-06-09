import { Box, Container, Stack, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';
import imgEN from '../../assets/images/en-4c6eba8e.png';
import imgHI from '../../assets/images/hd-796a1d34.png';
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


function Language() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };


    const [selectedLang, setSelectedLang] = useState('en');

    const languages = [
        { code: 'en', label: 'English', icon: imgEN },
        { code: 'hi', label: 'हिंदी', icon: imgHI },
    ];

    return (
        <Layout header={false}>
            <SvgIcons />
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Language</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <Box sx={{ backgroundColor: '#05012b', p: 2, borderRadius: '8px' }}>
                    {languages.map((lang) => (
                        <Box
                            key={lang.code}
                            onClick={() => setSelectedLang(lang.code)}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                backgroundColor: selectedLang === lang.code ? '#001848' : 'transparent',
                                borderRadius: '12px',
                                px: 2,
                                py: 1,
                                cursor: 'pointer',
                                mb: 1,
                            }}
                        >
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Box component="img" src={lang.icon} width={24} height={24} />
                                <Typography color="white">{lang.label}</Typography>
                            </Stack>
                            {selectedLang === lang.code ? (
                                <CheckCircleIcon sx={{ color: '#00ECBE' }} />
                            ) : (
                                <RadioButtonUncheckedIcon sx={{ color: 'white' }} />
                            )}
                        </Box>
                    ))}
                </Box>
            </Container>
        </Layout>
    );
}

export default Language;



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

