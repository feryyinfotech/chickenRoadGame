

import { Box, Grid, Stack, Typography } from "@mui/material";
import CryptoJS from "crypto-js";
import React from 'react';
import { NavLink } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import sportimg from '../../../assets/images/chess.png';
import vendorlogo15 from '../../../assets/images/vendorlogo15.png';
import vendorlogo16 from '../../../assets/images/vendorlogo16.png';


function PVC({ alljiligames, getGamnesbyID }) {

    const style = {
        winbox: { background: 'linear-gradient(175deg, rgba(1,19,65,1) 0%, rgba(35,196,185,1) 100%)', borderRadius: '20px', height: '150px', marginBottom: '20px', },
        positiongame: {
            position: 'absolute', top: '10px', left: '20px',
            '&>div>p': { fontSize: '12px', fontWeight: 400, color: 'white' }
        },
        gameheading: { fontSize: '20px', fontWeight: 700, color: 'white' },
    }

    return (
        <Box sx={{ padding: '15px' }}>
            <Stack direction='row' sx={{ alignItems: 'center', mb: 2 }}>
                <Box component='img' src={sportimg} width={25} ></Box>
                <Typography variant="body1" color="initial" sx={{ ml: 1, fontSize: '15px', fontWeight: 600 }}>
                    PVC                </Typography>
            </Stack>
            {alljiligames ?
                <Grid container spacing={2}>
                    {alljiligames?.map((item) => {
                        return <>
                            <Grid item xs={6}>
                                <Box sx={style.winbox} onClick={() => getGamnesbyID(item?.id)}>
                                    <Box component='img' className="!rounded-2xl" src={item?.img} sx={{ width: '100%', height: '100%' }}></Box>
                                </Box>
                            </Grid></>
                    })}
                </Grid> :
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <NavLink to='/comingsoon'>
                            <Box sx={style.winbox}>
                                <Box component='img' src={vendorlogo15} sx={{ width: '100%', height: '100%' }}></Box>
                            </Box>
                        </NavLink>
                    </Grid>
                    <Grid item xs={6}>
                        <NavLink to='/comingsoon'>
                            <Box sx={style.winbox}>
                                <Box component='img' src={vendorlogo16} sx={{ width: '100%', height: '100%' }}></Box>
                            </Box>
                        </NavLink>
                    </Grid>
                </Grid>}



        </Box>
    )
}

export default PVC

