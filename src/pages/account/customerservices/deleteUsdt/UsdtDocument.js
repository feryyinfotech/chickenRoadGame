import { Box, Container } from "@mui/material";
import React from "react";
import SvgIcons from "../../../../component/SvgIcons";
import ph from "../../../../assets/ph.png";
import { ArrowLeft } from '@react-vant/icons';
import { NavLink, useNavigate } from "react-router-dom";
import { Typography } from "react-vant";

const UsdtDocument = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const fileInputRef = React.useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            console.log("Selected file:", selectedFile);
        }
    };
    return (
        <div className='!bg-white h-screen overflow-y-scroll'>
            <SvgIcons />
            <Container className="!h-screen !bg-gray-50 !p-2">
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft className='!text-black' sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '33%', }} className="fcc roboto !text-black !text-2xl " variant="body1" color="initial">Delete Old USDT Add...</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>

                <div className="">
               <div className="mt-5 p-2">
                        <label htmlFor="fileInput" className="block text-xl text-gray-700">
                        Deposit Receipt Proof* 
                        </label>
                        <img
                            src={ph}
                            alt="Upload"
                            className="cursor-pointer" 
                            onClick={handleImageClick}
                        />
                        <input
                            type="file"
                            id="fileInput"
                            className="sr-only"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="mt-2 p-2">
                        <label htmlFor="fileInput" className="block text-xl text-gray-700">
                        Photo Selfie Holding Identity Card*
                        </label>
                        <img
                            src={ph}
                            alt="Upload"
                            className="cursor-pointer" 
                            onClick={handleImageClick}
                        />
                        <input
                            type="file"
                            id="fileInput"
                            className="sr-only"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="mt-2 p-2">
                        <label htmlFor="fileInput" className="block text-xl text-gray-700">
                        Photo Selfie Hold USDT Address *
                        </label>
                        <img
                            src={ph}
                            alt="Upload"
                            className="cursor-pointer" 
                            onClick={handleImageClick}
                        />
                        <input
                            type="file"
                            id="fileInput"
                            className="sr-only"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="">
                        <button className="!w-full !text-xl p-2 !rounded-full !text-white !bg-[#011340] !my-5"
                            onClick={() => navigate("/customer/rechargeform")}>Confirm</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default UsdtDocument;
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