import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../component/layout/Layout';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import SvgIcons from '../../component/SvgIcons';
import not from "../../assets/not.png"
import r6 from '../../assets/r6.png';
import r7 from '../../assets/r7.png';
import r0 from '../../assets/reb0.png';
import r1 from '../../assets/reb1.png';
import r2 from '../../assets/reb2.png';
import r3 from '../../assets/reb3.png';
import r4 from '../../assets/reb4.png';
import r5 from '../../assets/reb5.png';

const SubordinatesNew = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const [selected, setSelected] = useState('Today');

    const buttons = ['Today', 'Yesterday', 'This month'];


    return (
        <Layout header={false}>
            <SvgIcons />
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '43%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">New subordinates</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" mx={1}>
                    {buttons.map((label) => (
                        <Button
                            key={label}
                            onClick={() => setSelected(label)}
                            variant="contained"
                            className="fs12"
                            sx={{
                                textTransform: 'none',
                                padding: '12px 15px',
                                fontWeight: 500,
                                width: '31.5%',
                                borderRadius: '7px',
                                background: selected === label
                                    ? 'linear-gradient(90deg, #7afec3, #02afb6)'
                                    : '#011341',
                                color: selected === label ? '#000' : '#A9B5D3',
                                boxShadow: 'none',
                                '&:hover': {
                                    background: selected === label
                                        ? 'linear-gradient(90deg, #7afec3, #02afb6)'
                                        : '#011341',
                                }
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </Stack>
                <Box className="flex flex-col items-center justify-center " mt={5}>
                    <svg className="svg-icon mr-2" width={180}>
                        <use xlinkHref="#icon-empty"></use>
                    </svg>
                    <Typography className="text-center fs12" variant="body1" color="#92A8E3">
                        No Data
                    </Typography>
                </Box>
            </Container>
        </Layout >
    );
};

export default SubordinatesNew;

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