import {
    Button,
    TextField
} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useFormik } from "formik";
import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";
import toast from "react-hot-toast";
import CustomCircularProgress from "../../../shared/loder/CustomCircularProgress";

const Master = () => {
    const client = useQueryClient();
    const [loading, setLoading] = useState(false);
    const [file1, setFile1] = useState(null); 
    const [base64QR1, setBase64QR1] = useState(null);

    const [file2, setFile2] = useState(null); 
    const [base64QR2, setBase64QR2] = useState(null); 

    const { data } = useQuery(["address"], () => axiosInstance.get(API_URLS.admin_addess), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    const Address = data?.data?.data;

    let initialValue = {
        qr: Address?.[0]?.qr_code || "",
        type: Address?.[0]?.usdt_type || "",
        address: Address?.[0]?.usdt_address || "",
        rate: Address?.[0]?.market_rate || "",
    }

    const fk = useFormik({
        initialValues: initialValue,
        enableReinitialize: true,
        onSubmit: () => {
            const reqbody = {
                qr: base64QR1, 
                rate: fk.values.rate,
                type: fk.values.type === "USDT.BEP20" ? 1 : 2,
                address: fk.values.address,
            }
            upload_addessFn(reqbody);
        }
    });

    let initialValuesss = {
        qr: Address?.[1]?.qr_code || "",
        type: Address?.[1]?.usdt_type || "",
        address: Address?.[1]?.usdt_address || "",
        rate: Address?.[1]?.market_rate || "",
    }

    const formik = useFormik({
        initialValues: initialValuesss,
        enableReinitialize: true,
        onSubmit: () => {
            const reqbody = {
                qr: base64QR2,
                rate: formik.values.rate,
                type: formik.values.type === "USDT.BEP20" ? 1 : 2,
                address: formik.values.address,
            }
            upload_addessFn(reqbody);
        }
    });

    const upload_addessFn = async (reqbody) => {
        setLoading(true);
        try {
            const response = await axiosInstance.post(API_URLS?.upload_addess, reqbody);
            toast(response?.data?.msg);
            client.refetchQueries("address")
        }
        catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    const handleFileChange1 = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile1(selectedFile);
            convertToBase64(selectedFile, 1); 
        }
    };

    const handleFileChange2 = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile2(selectedFile);
            convertToBase64(selectedFile, 2); 
        }
    };

    const convertToBase64 = (file, cardNumber) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if (cardNumber === 1) {
                setBase64QR1(reader.result); 
            } else if (cardNumber === 2) {
                setBase64QR2(reader.result); 
            }
        };
    };

    return (
        <div className="!flex !justify-center gap-10 mt-5">
     
            <Card className="!my-2" sx={{ maxWidth: 345 }}>
                <CardContent
                    className="!flex !flex-col  !gap-2 !justify-center"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="body2" sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}>
                        <img
                            src={base64QR1 || Address?.[0]?.qr_code} 
                            alt="QR Code"
                            className="h-[100px] w-[110px] pb-2"
                        />
                        <input type="file" id="qr" name="qr" onChange={handleFileChange1} className="!ml-16" />
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        <TextField
                            name="type"
                            value={fk.values.type}
                            disabled
                        />
                    </Typography>
                    <Typography className="!text-xs">
                        <TextField
                            name="address"
                            value={fk.values.address}
                            onChange={fk.handleChange}
                        />
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" className="!text-xs">
                        <TextField
                            name="rate"
                            value={fk.values.rate}
                            onChange={fk.handleChange}
                        />
                    </Typography>
                </CardContent>
                <CardActions className="!mb-2"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }} >
                    <Button className="!bg-blue-600 !text-white" size="small" onClick={fk.handleSubmit}>
                        Submit
                    </Button>
                    <Button className="!bg-red-600 !text-white" size="small" >
                        Cancel
                    </Button>
                    <CustomCircularProgress isLoading={loading} />
                </CardActions>
            </Card>

            {/* Card 2 */}
            {/* <Card className="!my-2" sx={{ maxWidth: 345 }}>
                <CardContent
                    className="!flex !flex-col !gap-2 !justify-center"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="body2" sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}>
                        <img
                            src={base64QR2 || Address?.[1]?.qr_code} 
                            alt="QR Code"
                            className="h-[100px] w-[110px] pb-2"
                        />
                        <input type="file" id="qr" name="qr" onChange={handleFileChange2} className="!ml-16" />
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        <TextField
                            name="type"
                            value={formik.values.type}
                            disabled
                        />
                    </Typography>
                    <Typography className="!text-xs">
                        <TextField
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                        />
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" className="!text-xs">
                        <TextField
                            name="rate"
                            value={formik.values.rate}
                            onChange={formik.handleChange}
                        />
                    </Typography>
                </CardContent>
                <CardActions className="!mb-2"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }} >
                    <Button className="!bg-blue-600 !text-white" size="small" onClick={formik.handleSubmit}>
                        Submit
                    </Button>
                    <Button className="!bg-red-600 !text-white" size="small" >
                        Cancel
                    </Button>
                    <CustomCircularProgress isLoading={loading} />
                </CardActions>
            </Card> */}
        </div>
    );
};

export default Master;
