import { Box, Container } from "@mui/material";
import React from "react";
import { useState } from "react";
import SvgIcons from "../../../component/SvgIcons";
import { ArrowLeft } from '@react-vant/icons';
import { NavLink, useNavigate } from "react-router-dom";
import { Typography } from "react-vant";
import ph from "../../../assets/ph.png";


const DepositNotReceiveForm = () => {
   const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
 const fileInputRef = React.useRef(null);
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
                        <ArrowLeft className='!text-black'  sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '33%', }} className="fcc roboto !text-black !text-2xl " variant="body1" color="initial">Deposit Not Recieve</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
            
                   <div className="">
                   <div className="mt-7 p-2">
                        <label htmlFor="orderNumber" className="block  text-xl font-medium text-gray-300">
                            Order Number*
                        </label>
                        <input
                            type="text"
                            id="orderNumber"
                            className="mt-1 block w-full border border-gray-300  bg-white text-xl font-medium shadow-md text-gray-300 rounded-md  py-2 px-3  sm:"
                            value={"RC2025041112501458275139a"}
                            disabled
                        />
                    </div>
                    <div className="mt-2 p-2">
                        <label htmlFor="orderNumber" className="block  text-xl font-medium text-gray-300">
                            Order Amount*
                        </label>
                        <input
                            type="number"
                            id="orderamount"
                            className="mt-1 block w-full border border-gray-300  bg-white text-xl font-medium shadow-md text-gray-300 rounded-md  py-2 px-3  sm:"
                            value={"500"}
                            disabled
                        />
                    </div>
                    <div className="mt-2 p-2">
                        <label htmlFor="utrNumber" className="block  font-medium text-gray-700">
                            UTR Number*
                        </label>
                        <input
                            type="text"
                            id="utrNumber"
                            placeholder="Please enter UTR"
                            className="mt-1 block w-full border border-gray-300  bg-white text-xl font-medium shadow-md text-black rounded-md  py-2 px-3  sm:"
                            // value={utrNumber}
                            // onChange={(e) => setUTRNumber(e.target.value)}
                            required
                        />
                        {/* {utrNumber === "" && <p className="text-red-500 text-xs italic">Please enter UTR</p>} */}
                    </div>
                    <div className="mt-2 p-2">
                        <label htmlFor="receiverUPI" className="block  font-medium text-gray-700">
                            Receiver UPI ID*
                        </label>
                        <input
                            type="text"
                            id="receiverUPI"
                            className="mt-1 block w-full border border-gray-300  bg-white text-xl font-medium shadow-md text-black rounded-md  py-2 px-3  sm:"
                            placeholder="Please enter content"
                            // value={receiverUPI}
                            // onChange={(e) => setReceiverUPI(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-2 p-2">
                        <label htmlFor="pdfPassword" className="block  font-medium text-gray-700">
                            PDF Password
                        </label>
                        <input
                            type="password"
                            id="pdfPassword"
                            className="mt-1 block w-full border border-gray-300  bg-white text-xl font-medium shadow-md text-black rounded-md  py-2 px-3  sm:"
                            placeholder="Please enter content"
                            // value={pdfPassword}
                            // // onChange={(e) => setPdfPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-2 p-2">
                        <label className="block  font-medium text-gray-700">
                            Deposit proof receipt detail!
                        </label>
                        <div className="mt-1 flex items-center"
                         onClick={handleImageClick}>
                        {previewUrl ? (
                                <img src={previewUrl} alt="Preview" className=" max-w-full" />
                            ) : (
                                <img src={ph} alt="Upload" className="" />
                            )}
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
                    </div>
                    <div className="border-t border-gray-200 pt-4 mt-2 p-2">
                        <p className="block  font-medium text-gray-700">
                            Over 1 days, Submit video statement from second devices :
                        </p>
                        <div className="mt-1 flex items-center"
                         onClick={handleImageClick}>
                         {previewUrl ? (
                                 <img src={previewUrl} alt="Preview" className=" max-w-full" />
                             ) : (
                                 <img src={ph} alt="Upload" className="" />
                             )}
                        <input
                            type="file"
                            id="fileInput"
                            className="sr-only"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4 mt-2 p-2">
                        <p className="block  font-medium text-gray-700">
                            Over 3 days, Submit PDF :
                        </p>
                        <div className="mt-1 flex items-center"
                        onClick={handleImageClick}>
                        {previewUrl ? (
                                <img src={previewUrl} alt="Preview" className=" max-w-full" />
                            ) : (
                                <img src={ph} alt="Upload" className="" />
                            )}
                        <input
                            type="file"
                            id="fileInput"
                            className="sr-only"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                        </div>
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

export default DepositNotReceiveForm;
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