import React, { useState } from "react";
import SvgIcons from "../../../component/SvgIcons";
import { Box, Button, Container, FilledInput, FormControl, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import Layout from "../../../component/layout/Layout";
import { ArrowLeft, ClosedEye, EyeO } from '@react-vant/icons';
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowRight } from "@mui/icons-material";

const ChangeLoginPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();
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
                    <Typography sx={{ width: '33%', fontSize: '16px !important', }} className="fcc roboto " variant="body1" color="initial">Change  Password </Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <Box m={3} className="!mt-16">
                    <Box mt={2}>
                        <Stack direction="row" alignItems="center">
                            <svg style={{ marginRight: '10px' }} className="svg-icon" width="25" height="25" fill={'#00ECBE'}><use xlinkHref="#icon-editPswIcon"></use></svg>
                            <Typography variant="body1" color="initial" sx={{ color: '#e3efff' }} >
                                Login Password
                            </Typography>
                        </Stack>
                        <FormControl fullWidth sx={{ ...style.passwordfield }}>
                            <FilledInput placeholder="Login password" id="password" name="password"
                                type={showPassword ? 'text' : 'password'} endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                            {showPassword ? <ClosedEye className="!text-white" /> : <EyeO className="!text-white" />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Box>
                    <Box mt={2}>
                        <Stack direction="row" alignItems="center">
                            <svg style={{ marginRight: '10px' }} className="svg-icon" width="25" height="25" fill={'#00ECBE'}><use xlinkHref="#icon-editPswIcon"></use></svg>
                            <Typography variant="body1" color="initial" sx={{ color: '#e3efff' }} >
                                New Login Password
                            </Typography>
                        </Stack>
                        <FormControl fullWidth sx={{ ...style.passwordfield }}>
                            <FilledInput placeholder="New Login password" id="password" name="password"
                                type={showPassword ? 'text' : 'password'} endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                            {showPassword ? <ClosedEye className="!text-white" /> : <EyeO className="!text-white" />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Box>
                    <Box mt={2}>
                        <Stack direction="row" alignItems="center">
                            <svg style={{ marginRight: '10px' }} className="svg-icon" width="25" height="25" fill={'#00ECBE'}><use xlinkHref="#icon-editPswIcon"></use></svg>
                            <Typography variant="body1" color="initial" sx={{ color: '#e3efff' }} >
                                Confirm Login Password
                            </Typography>
                        </Stack>
                        <FormControl fullWidth sx={{ ...style.passwordfield }}>
                            <FilledInput placeholder="Confirm Login password" id="password" name="password"
                                type={showPassword ? 'text' : 'password'} endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                            {showPassword ? <ClosedEye className="!text-white" /> : <EyeO className="!text-white" />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Box>
                    <div className="flex justify-end p-2 mt-4 ">
                        <p className="text-gray-400 text-sm" onClick={()=>navigate("/forgot")}>Forgot original login password</p> <ArrowRight className="!text-gray-400"/>
                    </div>
                    <Button sx={style.mainwallettrbutton} className="roboto !mt-8" >
                        Save Changes
                    </Button>
                </Box>

            </Container>
        </Layout>


    </>
}
export default ChangeLoginPassword;
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