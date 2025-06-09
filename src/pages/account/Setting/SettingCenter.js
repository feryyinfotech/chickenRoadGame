import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, Button, Container, FilledInput, FormControl, Modal, Stack, TextField, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { ArrowLeft } from '@react-vant/icons';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import avatarImg from '../../../assets/images/1-a6662edb.png';
import img14 from '../../../assets/images/image (14).png';
import img15 from '../../../assets/images/image (15).png';
import img16 from '../../../assets/images/image (16).png';
import nick from '../../../assets/nick.png';
import Layout from '../../../component/layout/Layout';
import SvgIcons from '../../../component/SvgIcons';

const ChangeNicknameModal = ({ open, onClose, currentNickname, onNicknameChange }) => {
    const [newNickname, setNewNickname] = useState(currentNickname);

    const handleInputChange = (event) => {
        setNewNickname(event.target.value);
    };

    const handleConfirm = () => {
        onNicknameChange(newNickname);
        onClose();
    };
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="change-nickname-modal-title"
            aria-describedby="change-nickname-modal-description"
        >
            <Box sx={style.modal}>
                <Typography id="change-nickname-modal-title" variant="h6" component="h2" color="white" textAlign="center" mb={2}>
                    Change Nickname
                </Typography>
                <Box className="!bg-[#011341] !shadow  h-[250px] !p-4">
                    <div className='!flex gap-2 justify-start items-center '>
                        <img src={nick} alt='' />
                        <Typography color="#fff" >Nickname</Typography>
                    </div>
                    <FormControl fullWidth sx={{ ...style.passwordfield }}>
                        <FilledInput value={newNickname}
                            onChange={handleInputChange} />
                    </FormControl>
                    <Button sx={style.mainwallettrbutton} className="roboto !mt-20" onClick={handleConfirm} >
                        Confirm
                    </Button>
                </Box>

            </Box>
        </Modal>
    );
};




const SecurityCard = ({ icon, title, value, action }) => (
    <Box
        sx={{
            backgroundColor: '#001848',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
            py: 1.5,
            mt: 1.5,
        }}
    >
        <Stack direction="row" alignItems="center" spacing={1}>
            <Box
                sx={{
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {icon}
            </Box>
            <Typography color="white">{title}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
            <Typography color="#5AC8FA">{value}</Typography>
            {action}
        </Stack>
    </Box>
);


function SettingCenter() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const [avatar, setAvatar] = useState(localStorage.getItem("selectedAvatar") || avatarImg);
    const [nickname, setNickname] = useState("MemberNNG9UCPD"); // Initial nickname
    const [isNicknameModalOpen, setIsNicknameModalOpen] = useState(false);

    useEffect(() => {
        const handleAvatarChange = () => {
            const updated = localStorage.getItem("selectedAvatar") || avatarImg;
            setAvatar(updated);
        };

        window.addEventListener("avatarChanged", handleAvatarChange);

        return () => {
            window.removeEventListener("avatarChanged", handleAvatarChange);
        };
    }, []);


    const handleNicknameClick = () => {
        setIsNicknameModalOpen(true);
    };

    const handleCloseNicknameModal = () => {
        setIsNicknameModalOpen(false);
    };

    const handleNicknameChange = (newNickname) => {
        setNickname(newNickname);
    };

    return (
        <Layout header={false}>
            <SvgIcons />
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
                        <ArrowLeft sx={{ fontSize: '22px !important', }} />
                    </Box>
                    <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Settings Center</Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
                </Box>
                <Box sx={{ backgroundColor: '#0C0025', p: 2 }}>
                    {/* Profile */}
                    <Box
                        sx={{
                            backgroundColor: '#001C54',
                            borderRadius: 3,
                            p: 2,
                        }}
                    >
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar src={avatar} sx={{ width: 66, height: 66 }} />
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1} className="!cursor-pointer" onClick={() => navigate('/setting/changeavatar')}>
                                <Typography color="#5AC8FA" fontSize={14}>Change avatar</Typography>
                                <ArrowForwardIosIcon sx={{ fontSize: 14, color: '##8f9395' }} />
                            </Stack>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" mt={2} onClick={handleNicknameClick} sx={{ borderBottom: '1px solid #313131', pb: 2 }}>
                            <Typography color="#5AC8FA" fontSize={14}>Nickname</Typography>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography color="white">{nickname}        <ArrowForwardIosIcon sx={{ fontSize: 14, color: '##8f9395' }} /></Typography>
                            </Stack>
                        </Stack>
                        {/* UID Row */}
                        <Stack direction="row" justifyContent="space-between" mt={2}>
                            <Typography color="#5AC8FA" fontSize={14}>UID</Typography>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography color="white">302436</Typography>
                                <ContentCopyIcon sx={{ fontSize: 16, color: '#00ECBE' }} />
                            </Stack>
                        </Stack>
                    </Box>

                    {/* Security Info */}
                    <Typography color="white" mt={3} fontWeight="bold">
                        Security information
                    </Typography>

                    <SecurityCard
                        icon={<Box component="img" src={img14} width={40} height={40}></Box>}
                        title="Login password"
                        value="Edit"
                        action={<ArrowForwardIosIcon onClick={() => navigate('/setting/changelogin')} className="!cursor-pointer" sx={{ fontSize: 14, color: '#5AC8FA' }} />}

                    />

                    <SecurityCard  
                        icon={<Box component="img" src={img15} width={40} height={40}></Box>}
                        title="Bind mailbox"
                        value="to bind"
                        action={<ArrowForwardIosIcon onClick={() => navigate('/setting/changebind')} className="!cursor-pointer" sx={{ fontSize: 14, color: '#5AC8FA' }} />}
                    />

                    <SecurityCard
                        icon={<Box component="img" src={img16} width={40} height={40}></Box>}
                        title="Updated version"
                        value="1.0.9"
                        action={null}
                    />
                </Box>
            </Container>
            <ChangeNicknameModal
                open={isNicknameModalOpen}
                onClose={handleCloseNicknameModal}
                currentNickname={nickname}
                onNicknameChange={handleNicknameChange}
            />
        </Layout>
    );
}

export default SettingCenter;

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
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: '#001c54',
        borderRadius: 5,
        boxShadow: 24,
        p: 3,
    },
    passwordfield: { '&>div>input': { padding: 3, color: '#fff' }, '&>div': { mt: 2, background: '#05012b', borderRadius: '10px', color: '#92A8E3' }, '&>div::before': { border: 'none !important', color: '#92A8E3' }, '&>div::after:focus': { color: '#92A8E3', border: 'none !important' } },
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

