import React from "react";
import SvgIcons from "../../../component/SvgIcons";
import Layout from "../../../component/layout/Layout";
import { Box, Button, Container, FilledInput, FormControl, InputAdornment, Stack, Typography } from "@mui/material";
import { ArrowLeft } from '@react-vant/icons';
import { NavLink, useNavigate } from "react-router-dom";
import img15 from '../../../assets/images/image (15).png';
import img18 from '../../../assets/v.png';


const BindMailbox = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return <>

        <Layout header={false} footer={false}>
            <SvgIcons />
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto " variant="body1" color="initial">Bind Mailbox </Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <Box m={3} className="!mt-16">
                    <Box mt={2}>
                        <Stack direction="row" alignItems="center" className="gap-2">
                            <Box component="img" src={img15} width={30} height={30}></Box>
                            <Typography variant="body1" color="initial" sx={{ color: '#e3efff' }} >
                                Mail
                            </Typography>
                        </Stack>
                        <FormControl fullWidth sx={{ ...style.passwordfield }}>
                            <FilledInput placeholder="Enter Your email"
                            />
                        </FormControl>
                    </Box>
                    <Box mt={4}>
                        <Stack direction="row" alignItems="center" className="gap-2">
                            <Box component="img" src={img18} width={30} height={30}></Box>
                            <Typography variant="body1" color="initial" sx={{ color: '#e3efff' }} >
                                Verification Code
                            </Typography>
                        </Stack>
                        <FormControl fullWidth sx={{ ...style.passwordfield }}>
                            <FilledInput placeholder="Enter Your code"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button sx={style.mainwallettrbutton} className="!mb-4 !w-24 !text-gray-700" >
                                            Send
                                        </Button>
                                    </InputAdornment>
                                } />
                        </FormControl>
                    </Box>
                    <Button sx={style.mainwallettrbutton} className="roboto !mt-16" >
                        Bind
                    </Button>
                </Box>
            </Container>
        </Layout>
    </>
}
export default BindMailbox;

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

    inputfield: { width: '100%', mt: 2, color: '#92A8E3', '&>div>div>input': { background: '#011341', padding: 3, borderRadius: '10px', color: '#92A8E3' }, '&>div>div>fieldset': { border: 'none !important', color: '#92A8E3' }, '&>div>div>input:focus': { color: '#92A8E3' } },
    passwordfield: { '&>div>input': { padding: 3, color: '#92A8E3' }, '&>div': { mt: 2, background: '#011341', borderRadius: '10px', color: '#92A8E3' }, '&>div::before': { border: 'none !important', color: '#92A8E3' }, '&>div::after:focus': { color: '#92A8E3', border: 'none !important' } },
    selectfield: { '&>div>div': { background: '#011341', borderRadius: '10px', padding: '11px 3px', color: '#92A8E3' }, '&>div>fieldset': { border: '1px solid #011341', color: '#92A8E3', borderRadius: '10px' }, '&>div': { mt: 2, color: '#92A8E3' } },
    mainwallettrbutton: {
        width: "100%",
        height: "0.93333rem",
        color: "black",
        fontSize: "17px",
        fontWeight: "700",
        letterSpacing: "0.01333rem",
        border: "none",
        borderRadius: "20px",
        background: "linear-gradient(90deg, #7afec3, #02afb6) !important",
        padding: "20px 10px",
        mt: 2,
        "&:hover": {
            color: "white",
            background: "#eb8a1f",
        },
    }
};