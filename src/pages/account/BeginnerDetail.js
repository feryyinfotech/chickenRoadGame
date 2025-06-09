import { Box, Container, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';
import r1 from "../../assets/r1.png"
import w1 from "../../assets/wa.png"
import d1 from "../../assets/d1.png"
import wi from "../../assets/wi.png"
import g1 from "../../assets/g1.png"
import t1 from "../../assets/t1.png"
import p1 from "../../assets/p1.png"
import l1 from "../../assets/l1.png"
import b1 from "../../assets/b1.png"
import f1 from "../../assets/f1.png"
import dw from "../../assets/dw.png"
import a1 from "../../assets/a1.png"
import gi from "../../assets/gi.png"


function BeginnerDetail() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <Layout header={false}>
            <SvgIcons />
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '20%' }}>
                        <ArrowLeft sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '60%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Beginner's Guide</Typography>
                    <Typography sx={{ width: '20%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <Box sx={{ maxWidth: 600, mx: "auto", my: 4, px: 2 }}>
                    1.How to register
                    <br />
                    • Fill in your phone number
                    <br />
                    • Set your own password (8 minutes with big and small letters and numbers)
                    <br />
                    • Confirm the password <br />
                    •Fill in your invite code <br />
                    • Click I have read and agree [Privacy Agreement] <br />
                    • Click Register
                    <br />
                    <img src={r1} alt='' />
                    <br />
                    <br />
                    2. How to bet on the WINGO game
                    <br />
                    <br />
                    • Enter the Wingo game
                    <br />
                    • Select the duration of the game (1 minute, 3 minutes, 5 minutes, or 10 minutes)
                    <br />
                    Green: if the result shows 1, 3, 7, 9
                    <br />
                    Red: if the result shows 2, 4, 6, 8
                    <br />
                    Violet: if the result shows 0 or 5
                    <br />
                    Small: if the result shows 0, 1, 2, 3, 4
                    <br />
                    Big: if the result shows 5, 6, 7, 8, 9
                    <br />
                    • Play according to the rules of the game; you are not allowed to place illegal bets
                    <br />
                    Ex: betting (big and small together), (red and green together), or (betting more than 7 numbers) at the same time
                    <br />
                    <img src={w1} alt='' />
                    <br />
                    <br />
                    3. How to Deposit
                    <br />
                    <br />
                    •Click the Wallet icon
                    <br />
                    •Click the Deposit button, and we have two methods to make a deposit (UPIPAY and USDT)
                    <br />
                    • Choose which method you want to use to make a deposit
                    <br />
                    • Select channel
                    <br />
                    • Insert the deposit amount
                    <br />
                    • Click Deposit and make payment by scanning the available barcode
                    <br />
                    <img src={d1} alt='' />
                    <br />
                    <br />
                    4. How to Withdraw
                    <br />
                    <br />
                    •Click the Wallet icon
                    <br />
                    •Click the Withdraw button
                    <br />
                    •Enter the withdraw amount
                    <br />
                    •Make sure your total bet is already 0
                    <br />
                    •Select your bank account or add your bank account
                    <br />
                    •Input the amount you want to withdraw
                    <br />
                    •Input your login password
                    <br />
                    <img src={wi} alt='' />
                    <br />
                    <br />
                    5. Betting History
                    <br />
                    <br />
                    When the betting is complete, you can click My History to see your bet record. You can also check the chart trend to help you decide the next bet, and your game history will show the previous result
                    <br />
                    <img src={g1} alt='' />
                    <br />
                    <br />
                    6.Transaction
                    <br />
                    <br />
                    • You can check all the transactions or activities you do inside the account on transaction, which you can find on the Account icon
                    <br />
                    <img src={t1} alt='' />
                    <br />
                    <br />
                    7.Promotion
                    <br />
                    <br />
                    •If you have a downline or referral member, use your own link to register, and if they make a recharge, you can claim a rebate. The agent will get a <br />
                    minimum commission of 0.7% (level 1) and 0.75% (level 2) from each transaction that is done by the referral (added every day at 1:00 AM). Each game has a different percentage, which you can check on the Promotion menu to check.
                    <br />
                    •You can click the sharing invitation poster to see the barcode
                    <br />
                    <img src={p1} alt='' />
                    <br />
                    <br />
                    8. Change Password
                    <br />
                    <br />
                    •Follow the guide below to change your password.
                    <br />
                    •Login to the Tahalkagame.GAMEaccount
                    <br />
                    •Press Accounticon <br />
                    •Press the Settingsbutton <br />
                    •Press edit login password <br />
                    •Fill in your login password <br />
                    •Fill in a new login password <br />
                    •Re-fill the new login password <br />
                    •Press save changes<br />
                    <img src={l1} alt='' />
                    <br />
                    <br />
                    9. Binding bank account
                    <br />
                    <br />
                    •Login to the TAHALKA.GAME account <br />
                    •Press the Wallet icon <br />
                    •Press the Withdraw button <br />
                    •Press Add Bank <br />
                    •Fill all the columns <br />
                    •Press Save <br />
                    <img src={b1} alt='' />
                    <br />
                    <br />
                    10. Forgot Password
                    <br />
                    Go to the TAHALKA.GAMEwebsite
                    <br />
                    <br />
                    •Press the Account icon
                    <br />
                    •Press Forgot password
                    <br />
                    •Fill in the phone number you registered
                    <br />
                    •Fill in a new password
                    <br />
                    •Refill the new password
                    <br />
                    •Press Send to receive the OTP
                    <br />
                    •Fill in the OTP
                    <br />
                    •Press I have read and agree [Privacy Agreement]
                    <br />
                    •Press Reset
                    <br />
                    <img src={f1} alt='' />
                    <br />
                    <br />
                    11. App Download
                    <br />
                    <br />
                    To download the apps, you can go to the home page, then on the middle bottom, you will see the button to download the apps
                    <br />
                    <img src={dw} alt='' />
                    <br />
                    <br />
                    12.About
                    <br />
                    <br />
                    Press about for more details regarding the privacy policy and risk disclosure agreement.
                    <br />
                    <img src={a1} alt='' />
                    <br />
                    <br />
                    13.Gift<br />
                    <br />
                    •Login to the Tahalka.GAMEaccount 
                    <br/>
                    •Press the Account Icon 
                    <br/>
                    •Press the gift button 
                    <br/>
                    •Fill in the gift codes
                    <br/>
                    •Press Receive
                    <br/>
                    Notes: To get gift codes, you can ask your superior agent
                    <br/>
                    <img src={gi} alt='' />

                </Box>
            </Container>
        </Layout>
    );
}

export default BeginnerDetail;



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

