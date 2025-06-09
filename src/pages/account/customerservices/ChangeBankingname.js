import { Box, Container } from "@mui/material";
import React from "react";
import { useState } from "react";
import SvgIcons from "../../../component/SvgIcons";
import { ArrowLeft } from '@react-vant/icons';
import { NavLink, useNavigate } from "react-router-dom";
import { Typography } from "react-vant";

const ChangeBankingname = () => {
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
                    <Typography sx={{ width: '33%', }} className="fcc roboto !text-black !text-2xl " variant="body1" color="initial">Change Bank Name</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
            
                   <div className="">
                    <div className="mt-7 p-2">
                        <label htmlFor="utrNumber" className="block text-xl  text-gray-700">
                        Correct bank name*
                        </label>
                        <input
                            type="text"
                            id="utrNumber"
                            placeholder="Please enter bank name"
                            className="mt-1 block w-full border border-gray-300  bg-white text-xl  shadow-md text-black rounded-md  py-2 px-3 "
                            required
                        />
                    </div>
                    <div className="mt-2 p-2">
                        <label htmlFor="receiverUPI" className="block text-xl  text-gray-700">
                        Bank number*
                        </label>
                        <input
                            type="text"
                            id="receiverUPI"
                            className="mt-1 block w-full border border-gray-300  bg-white text-xl  shadow-md text-black rounded-md  py-2 px-3  sm:"
                            placeholder="Please enter Bank number"
                            required
                        />
                    </div>
                    
                    <div className="">
                    <button className="!w-full !text-xl p-2 !rounded-full !text-white !bg-[#011340] !my-5" 
                            onClick={()=>navigate("/customer/rechargeform")}>Confirm</button>
                    </div>
                   </div>
            </Container>
        </div>
    );
};

export default ChangeBankingname;
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