import { Box, Container } from "@mui/material";
import React, { useState, useRef } from "react";
import SvgIcons from "../../../component/SvgIcons";
import ph from "../../../assets/ph.png";
import { ArrowLeft } from '@react-vant/icons';
import { NavLink, useNavigate } from "react-router-dom";
import { Typography } from "react-vant";

const GameProblem = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
            console.log("Selected file:", file);
        } else {
            setSelectedFile(null);
            setPreviewUrl(null);
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
                    <Typography sx={{ width: '33%', }} className="fcc roboto !text-black !text-2xl " variant="body1" color="initial">Game Problems</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>

                <div className="">
                    <div className="mt-10 p-2">
                        <label htmlFor="utrNumber" className="block text-xl  text-gray-700">
                            Explain the issue happen to you inside the game clear and detail*
                        </label>
                        <textarea
                            type="text"
                            id="utrNumber"
                            placeholder="Please enter content"
                            className="mt-2 block w-full h-[100px] border border-gray-300  bg-white text-xl  shadow-md text-black rounded-md  py-2 px-3 "
                            required
                        />
                    </div>
                    <div className="mt-5 p-2">
                        <label htmlFor="fileInput" className="block text-xl text-gray-700">
                            Attach clear screenshot photo/video of the problem (optional)
                        </label>
                        <div
                            className="cursor-pointer  p-3 flex justify-start items-center"
                            onClick={handleImageClick}
                        >
                            {previewUrl ? (
                                <img src={previewUrl} alt="Preview" className=" max-w-full" />
                            ) : (
                                <img src={ph} alt="Upload" className="" />
                            )}
                        </div>
                        <input
                            type="file"
                            id="fileInput"
                            className="sr-only"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                        {selectedFile && (
                            <p className="text-sm text-gray-500 mt-1">Selected file: {selectedFile.name}</p>
                        )}
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

export default GameProblem;
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