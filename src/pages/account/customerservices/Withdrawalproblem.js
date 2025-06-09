import { Box, Container } from "@mui/material";
import { ArrowLeft } from '@react-vant/icons';
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Typography } from "react-vant";
import SvgIcons from "../../../component/SvgIcons";
import not from "../../../assets/w.png"

const WithdravalProblem = () => {
   const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
       <div className='!bg-white h-screen overflow-y-scroll'>
            <SvgIcons />
            <Container className="!h-screen !bg-gray-50 !p-2">
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft className='!text-black'  sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '33%', }} className="fcc roboto !text-black !text-2xl " variant="body1" color="initial">Withdrawal History</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
            
                   <div className="mt-7 p-2">
                  <img src={not} alt=""/>
                   </div>
            </Container>
        </div>
    );
};

export default WithdravalProblem;
const style = {
    container: { background: '#fff' },
    header: {
        padding: '10px 8px',
        background: "zubgtext",
        display: 'flex',
        alignItems: 'center',
        '& > p': {
            textAlign: 'center',
            color: 'white',
        },
        '& > a > svg': {
            color: 'white',
            fontSize: '22px'
        }
    },
   
};