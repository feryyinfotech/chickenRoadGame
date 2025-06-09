import { Box, Container, Typography } from "@mui/material";
import { ArrowLeft } from '@react-vant/icons';
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../../component/layout/Layout";
import SvgIcons from "../../../component/SvgIcons";
import a1 from "../../../assets/avatar/1.png"
import a2 from "../../../assets/avatar/2.png"
import a3 from "../../../assets/avatar/3.png"
import a4 from "../../../assets/avatar/4.png"
import a5 from "../../../assets/avatar/5.png"
import a6 from "../../../assets/avatar/6.png"
import a7 from "../../../assets/avatar/7.png"
import a8 from "../../../assets/avatar/8.png"
import a9 from "../../../assets/avatar/9.png"
import a10 from "../../../assets/avatar/10.png"
import a11 from "../../../assets/avatar/11.png"
import a12 from "../../../assets/avatar/12.png"
import a13 from "../../../assets/avatar/13.png"
import a14 from "../../../assets/avatar/14.png"
import a15 from "../../../assets/avatar/15.png"
import a16 from "../../../assets/avatar/16.png"
import a17 from "../../../assets/avatar/17.png"
import a18 from "../../../assets/avatar/18.png"
import a19 from "../../../assets/avatar/19.png"
import a20 from "../../../assets/avatar/20.png"

const ChangeAvatar = () => {

    const avatarList = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20];

    const handleSelectAvatar = (avatar) => {
        localStorage.setItem("selectedAvatar", avatar);
        window.dispatchEvent(new Event("avatarChanged"));
        navigate(-1);
    };


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
                    <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto " variant="body1" color="initial">Change avatar </Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <div className="!grid grid-cols-3 place-items-center gap-4 m-4">
                    {avatarList?.map((avatar, index) => (
                        <img
                            key={index}
                            src={avatar}
                            alt={`Avatar ${index + 1}`}
                            onClick={() => handleSelectAvatar(avatar)}
                            className="rounded-xl cursor-pointer hover:scale-105 transition-transform duration-150"
                        />
                    ))}
                </div>

            </Container>
        </Layout>


    </>
}
export default ChangeAvatar;
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