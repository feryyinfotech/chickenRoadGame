import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import frrdbackimg from '../../assets/images/feedbackImg-b1f82795.png';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';


function Feedback() {
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
                    <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Feedback</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        bgcolor: "#06012B",
                        borderRadius: 4,
                        p: 2,
                        minHeight: "100vh",
                        gap: 2,
                        color: "#92A8E3",
                    }}
                >
                    <TextField
                        multiline
                        minRows={13}
                        placeholder="Welcome to feedback, please give feedback - please describe the problem in detail when providing feedback, preferably attach a screenshot of the problem you encountered, we will immediately process your feedback!"
                        variant="outlined"
                        fullWidth
                        InputProps={{
                            sx: {
                                borderRadius: 2,
                                backgroundColor: "#011341",
                                color: "#92A8E3",
                                fontSize: "13px",
                                px: 2,
                                pt: 1.5,
                                outline: 'none',
                            },
                        }}
                        InputLabelProps={{ style: { color: '#92A8E3' } }}
                    />

                    <Box textAlign="center">
                        <Typography className="roboto" sx={{ fontSize: '16px', color: "#fff", mt: 3 }}>
                            Send helpful feedback
                        </Typography>
                        <Typography className="roboto" sx={{ fontSize: '16px', color: "#fff", mt: 1 }}>
                            Chance to win Mystery Rewards
                        </Typography>
                    </Box>

                    <Box component="img" src={frrdbackimg} alt="Feedback Illustration" sx={{
                        width: "250px",
                        mx: "auto",
                        mt: "50px"
                    }}
                    />

                    <Button
                        variant="contained"
                        sx={{
                            background: "linear-gradient(90deg, #2AE9C2, #3CE9E6)",
                            borderRadius: 999,
                            color: "#000",
                            px: 5,
                            py: 1.2,
                            mt: 4,
                            textTransform: "none",
                            fontWeight: 600,
                            width: "100%",
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Container>
        </Layout>
    );
}

export default Feedback;



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

