import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { ArrowLeft } from '@react-vant/icons';
import React from 'react';
import { BiCopy } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import teamPartnerBg from '../../assets/images/teamPartnerBg-7a2f5d9d.png';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';
import MyModal from '../../shared/MyModal';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const data = [
    {
        label: '1st deposit',
        rows: [
            { condition: '₹200 ≤ Amount<₹500 and Turnover ≥ ₹1,000', bonus: '₹58' },
            { condition: '₹500 ≤ Amount<₹1,000 and Turnover ≥ ₹2,500', bonus: '₹108' },
            { condition: '₹1,000 ≤ Amount<₹2,500 and Turnover ≥ ₹5,000', bonus: '₹158' },
            { condition: '₹2,500 ≤ Amount<₹5,000 and Turnover ≥ ₹12,500', bonus: '₹208' },
            { condition: 'Amount ≥ ₹5,000 and Turnover ≥ ₹25,000', bonus: '₹388' },
        ],
    },
    {
        label: '2nd deposit',
        rows: [
            { condition: '₹300 ≤ Amount<₹1,000 and Turnover ≥ ₹2,000', bonus: '₹58' },
            { condition: '₹1,000 ≤ Amount<₹2,500 and Turnover ≥ ₹10,000', bonus: '₹108' },
            { condition: '₹2,500 ≤ Amount<₹5,000 and Turnover ≥ ₹25,000', bonus: '₹158' },
            { condition: '₹5,000 ≤ Amount<₹10,000 and Turnover ≥ ₹50,000', bonus: '₹208' },
            { condition: 'Amount ≥ ₹10,000 and Turnover ≥ ₹75,000', bonus: '₹388' },
        ],
    },
    {
        label: '3rd deposit',
        rows: [
            { condition: '₹1,000 ≤ Amount<₹2,500 and Turnover ≥ ₹15,000', bonus: '₹58' },
            { condition: '₹2,500 ≤ Amount<₹5,000 and Turnover ≥ ₹37,500', bonus: '₹108' },
            { condition: '₹5,000 ≤ Amount<₹10,000 and Turnover ≥ ₹75,000', bonus: '₹158' },
            { condition: '₹10,000 ≤ Amount<₹20,000 and Turnover ≥ ₹125,000', bonus: '₹208' },
            { condition: 'Amount ≥ ₹20,000 and Turnover ≥ ₹225,000', bonus: '₹388' },
        ],
    },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: '#003087',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
}));

const StyledBonusCell = styled(TableCell)(({ theme }) => ({
    color: '#ff0000',
    fontWeight: 'bold',
    textAlign: 'center',
}));


function Subordinatedata() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const bonusData = [
        {
            deposit: '1st deposit', conditions: [
                { amount: '₹200', turnover: '₹1,000', bonus: '₹58' },
                { amount: '₹500', turnover: '₹2,500', bonus: '₹108' },
                { amount: '₹1,000', turnover: '₹5,000', bonus: '₹158' },
                { amount: '₹2,500', turnover: '₹12,500', bonus: '₹208' },
                { amount: '₹5,000', turnover: '₹25,000', bonus: '₹388' },
                { amount: '₹300', turnover: '₹1,000', bonus: '₹58' },
                { amount: '₹1,000', turnover: '₹2,500', bonus: '₹108' },
                { amount: '₹2,500', turnover: '₹5,000', bonus: '₹158' },
            ]
        },
        {
            deposit: '2nd deposit', conditions: [
                { amount: '₹5,000', turnover: '₹25,000', bonus: '₹208' },
                { amount: '₹10,000', turnover: '₹50,000', bonus: '₹388' },
                { amount: '₹10,000', turnover: '₹25,000', bonus: '₹158' },
                { amount: '₹1,000', turnover: '₹15,000', bonus: '₹58' },
                { amount: '₹2,500', turnover: '₹37,500', bonus: '₹108' },
            ]
        },
        {
            deposit: '3rd deposit', conditions: [
                { amount: '₹5,000', turnover: '₹75,000', bonus: '₹158' },
                { amount: '₹10,000', turnover: '₹125,000', bonus: '₹208' },
                { amount: '₹20,000', turnover: '₹225,000', bonus: '₹388' },
            ]
        },
    ];

    const Bullet = () => (
        <FiberManualRecordIcon
            sx={{ fontSize: 8, color: '#00e3ff', verticalAlign: 'middle', mr: 1 }}
        />
    );

    return (
        <Layout header={false}>
            <Container sx={style.container}>
                <MyModal />
                <SvgIcons />

                <Box sx={style.header}>
                    <Box component={NavLink} onClick={goBack} sx={{ width: '33%' }}>
                        <ArrowLeft sx={{ fontSize: '22px !important' }} />
                    </Box>
                    <Typography
                        sx={{ width: '33%', fontSize: '18px !important' }}
                        className="fcc roboto"
                        variant="body1"
                        color="initial"
                    >
                        Partner rewards
                    </Typography>
                    <Typography sx={{ width: '33%' }} variant="body1" color="initial"></Typography>
                </Box>
            </Container>
        </Layout >
    );
}

export default Subordinatedata;

const style = {
    container: {
        background: '#05012B',
        width: '100%',
        height: '100vh',
        overflow: 'auto',
        p: 0,
    },
    header: {
        padding: '10px 8px',
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
            fontSize: '22px',
        },
    },
};