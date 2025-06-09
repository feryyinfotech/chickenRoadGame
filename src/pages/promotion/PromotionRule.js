import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { ArrowLeft } from '@react-vant/icons';
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import log from "../../assets/images/log.png";
import Layout from "../../component/layout/Layout";
import SvgIcons from "../../component/SvgIcons";
import table from "../../assets/images/table.png";


const PromotionRule = () => {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return <>
        <Layout header={false}>
            <SvgIcons />
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Promotion Rules</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>   <Box >
                    <Typography className="!text-[#00ECBE] !text-center !font-bold !text-lg !my-2">【Promotion partner】program</Typography>
                    <Typography className="text-center">This activity is valid for a long time</Typography>
                </Box>
                <Box sx={{ px: 2, py: 4, background: '#0B0B32' }}>
                    <Box sx={{
                        backgroundColor: '#00184E', borderRadius: '12px', color: 'white', mb: 2, overflow: 'hidden', position: 'relative',
                    }}
                    >
                        <Box sx={{ position: 'relative', height: '60px' }}>
                            <svg width="60%" height="40" style={{ position: 'absolute', top: 0, left: 0, marginLeft: '20%' }}
                                preserveAspectRatio="none" className="svg-icon">
                                <use xlinkHref="#icon-ruleHead" />
                            </svg>
                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#fff', mt: '-5%' }}>
                                    01
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ px: 2, pb: 3 }}>
                            <Typography
                                className="fs12 fw500"
                                sx={{
                                    fontSize: '14px',
                                    color: '#92A8E3',
                                    lineHeight: 1.6,
                                    textAlign: 'left',
                                    mt: -2,
                                }}
                            >
                                There are 6 subordinate levels in inviting friends, if A invites B, then B is a level 1 subordinate of A. If B invites C, then C is a level 1 subordinate of B and also a level 2 subordinate of A. If C invites D, then D is a level 1 subordinate of C, at the same time a level 2 subordinate of B and also a level 3 subordinate of A.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Rule 02 */}
                    <Box sx={{
                        backgroundColor: '#00184E', borderRadius: '12px', color: 'white', mb: 2, overflow: 'hidden', position: 'relative',
                    }}
                    >
                        <Box sx={{ position: 'relative', height: '60px' }}>
                            <svg width="60%" height="40" style={{ position: 'absolute', top: 0, left: 0, marginLeft: '20%' }}
                                preserveAspectRatio="none" className="svg-icon">
                                <use xlinkHref="#icon-ruleHead" />
                            </svg>
                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#fff', mt: '-5%' }}>
                                    02
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ px: 2, pb: 3 }}>
                            <Typography
                                className="fs12 fw500"
                                sx={{
                                    fontSize: '14px',
                                    color: '#92A8E3',
                                    lineHeight: 1.6,
                                    textAlign: 'left',
                                    mt: -2,
                                }}
                            >
                                When inviting friends to register, you must send the invitation link provided or enter the invitation code manually so that your friends become your level 1 subordinates.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Rule 03 */}
                    <Box sx={{
                        backgroundColor: '#00184E', borderRadius: '12px', color: 'white', mb: 2, overflow: 'hidden', position: 'relative',
                    }}
                    >
                        <Box sx={{ position: 'relative', height: '60px' }}>
                            <svg width="60%" height="40" style={{ position: 'absolute', top: 0, left: 0, marginLeft: '20%' }}
                                preserveAspectRatio="none" className="svg-icon">
                                <use xlinkHref="#icon-ruleHead" />
                            </svg>
                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#fff', mt: '-5%' }}>
                                    03
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ px: 2, pb: 3 }}>
                            <Typography
                                className="fs12 fw500"
                                sx={{
                                    fontSize: '14px',
                                    color: '#92A8E3',
                                    lineHeight: 1.6,
                                    textAlign: 'left',
                                    mt: -2,
                                }}
                            >
                                The invitee registers via the inviter's invitation code and completes the deposit, shortly after that the commission will be received immediately.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Rule 04 */}
                    <Box sx={{
                        backgroundColor: '#00184E', borderRadius: '12px', color: 'white', mb: 2, overflow: 'hidden', position: 'relative',
                    }}
                    >
                        <Box sx={{ position: 'relative', height: '60px' }}>
                            <svg width="60%" height="40" style={{ position: 'absolute', top: 0, left: 0, marginLeft: '20%' }}
                                preserveAspectRatio="none" className="svg-icon">
                                <use xlinkHref="#icon-ruleHead" />
                            </svg>
                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#fff', mt: '-5%' }}>
                                    04
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ px: 2, pb: 3 }}>
                            <Typography
                                className="fs12 fw500"
                                sx={{
                                    fontSize: '14px',
                                    color: '#92A8E3',
                                    lineHeight: 1.6,
                                    textAlign: 'left',
                                    mt: -2,
                                }}
                            >
                                The calculation of yesterday's commission starts every morning at 01:00. After the commission calculation is completed, the commission is rewarded to the wallet and can be viewed through the commission collection record.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Rule 05 */}
                    <Box sx={{
                        backgroundColor: '#00184E', borderRadius: '12px', color: 'white', mb: 2, overflow: 'hidden', position: 'relative',
                    }}
                    >
                        <Box sx={{ position: 'relative', height: '60px' }}>
                            <svg width="60%" height="40" style={{ position: 'absolute', top: 0, left: 0, marginLeft: '20%' }}
                                preserveAspectRatio="none" className="svg-icon">
                                <use xlinkHref="#icon-ruleHead" />
                            </svg>
                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#fff', mt: '-5%' }}>
                                    05
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ px: 2, pb: 3 }}>
                            <Typography
                                className="fs12 fw500"
                                sx={{
                                    fontSize: '14px',
                                    color: '#92A8E3',
                                    lineHeight: 1.6,
                                    textAlign: 'left',
                                    mt: -2,
                                    whiteSpace: 'pre-line',
                                }}
                            >
                                Commission rates vary depending on your agency level on that day
                                {'\n'}Number of Teams: How many downline deposits you have to date.
                                {'\n'}Team Deposits: The total number of deposits made by your downline in one day.
                                {'\n'}Team Deposit: Your downline deposits within one day.
                            </Typography>
                        </Box>
                    </Box>
                    <Box component="img" sx={{ mb: 2, }} src={table}></Box>
                    <Box sx={{
                        backgroundColor: '#00184E', borderRadius: '12px', color: 'white', mb: 2, overflow: 'hidden', position: 'relative',
                    }}
                    >
                        <Box sx={{ position: 'relative', height: '60px' }}>
                            <svg width="60%" height="40" style={{ position: 'absolute', top: 0, left: 0, marginLeft: '20%' }}
                                preserveAspectRatio="none" className="svg-icon">
                                <use xlinkHref="#icon-ruleHead" />
                            </svg>
                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#fff', mt: '-5%' }}>
                                    06
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ px: 2, pb: 3 }}>
                            <Typography
                                className="fs12 fw500"
                                sx={{
                                    fontSize: '14px',
                                    color: '#92A8E3',
                                    lineHeight: 1.6,
                                    textAlign: 'left',
                                    mt: -2,
                                    whiteSpace: 'pre-line',
                                }}
                            >
                                The commission percentage depends on the membership level. The higher the membership level, the higher the bonus percentage. Different game types also have different payout percentages.
                                {'\n'}The commission rate is specifically explained as follows
                                {'\n'}
                                <NavLink to="/promotion/Rebate" className="!text-[#D2343A]">View rebate ratio &gt;&gt;</NavLink>
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        backgroundColor: '#00184E', borderRadius: '12px', color: 'white', mb: 2, overflow: 'hidden', position: 'relative',
                    }}
                    >
                        <Box sx={{ position: 'relative', height: '60px' }}>
                            <svg width="60%" height="40" style={{ position: 'absolute', top: 0, left: 0, marginLeft: '20%' }}
                                preserveAspectRatio="none" className="svg-icon">
                                <use xlinkHref="#icon-ruleHead" />
                            </svg>
                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#fff', mt: '-5%' }}>
                                    07
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ px: 2, pb: 3 }}>
                            <Typography
                                className="fs12 fw500"
                                sx={{
                                    fontSize: '14px',
                                    color: '#92A8E3',
                                    lineHeight: 1.6,
                                    textAlign: 'left',
                                    mt: -2,
                                }}
                            >
                                TOP20 commission rankings will be randomly awarded with a separate bonus
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        backgroundColor: '#00184E', borderRadius: '12px', color: 'white', mb: 2, overflow: 'hidden', position: 'relative',
                    }}
                    >
                        <Box sx={{ position: 'relative', height: '60px' }}>
                            <svg width="60%" height="40" style={{ position: 'absolute', top: 0, left: 0, marginLeft: '20%' }}
                                preserveAspectRatio="none" className="svg-icon">
                                <use xlinkHref="#icon-ruleHead" />
                            </svg>
                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                    height: '60px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#fff', mt: '-5%' }}>
                                    08
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ px: 2, pb: 3 }}>
                            <Typography
                                className="fs12 fw500"
                                sx={{
                                    fontSize: '14px',
                                    color: '#92A8E3',
                                    lineHeight: 1.6,
                                    textAlign: 'left',
                                    mt: -2,
                                }}
                            >
                                The final interpretation of this activity belongs to Tahalka
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Layout >

    </>
}
export default PromotionRule;
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
    design: {
        clippath: "polygon(7% 0%, 93% 0%, 100% 50%, 93% 100%, 7% 100%, 0% 50%)",
    }
};
