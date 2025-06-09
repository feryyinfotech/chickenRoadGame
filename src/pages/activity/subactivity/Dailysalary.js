import {
    Box,
    Button,
    Container,
    Typography
} from "@mui/material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../../component/layout/Layout";
import SvgIcons from "../../../component/SvgIcons";
import { ArrowLeft } from '@react-vant/icons';
import D1 from "../../../assets/activutydaily.jpg"
import actbanner6 from '../../../assets/images/b2.jpg';

function Daily() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <Layout header={false}>
            <SvgIcons />
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '43%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Activity Details</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <div className="flex flex-col gap-2 mb-5 justify-center items-center">
                       <Box sx={style.actimg2}>
                              <Box
                                component="img"
                                sx={{ width: '100%', borderRadius: '10px 10px 0px 0px' }}
                                src={actbanner6}
                              ></Box>
                              <Typography variant="body1" color="white" className="!font-bold !text-center">
                               DAILY SALARY SYSTEM
                              </Typography>
                            </Box>
                    <img src={D1} alt=""  className="px-3" />
                    </div>
               
            </Container>
        </Layout>
    );
}

export default Daily;
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