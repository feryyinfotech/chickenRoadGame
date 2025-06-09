import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { ArrowLeft } from '@react-vant/icons';
import React from 'react';
import { BiCopy } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import teamPartnerBg from '../../assets/images/teamPartnerBg-7a2f5d9d.png';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';
import MyModal from '../../shared/MyModal';
import copy from 'clipboard-copy';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import VantToast from '../../shared/toast/Toast';
import { endpoint, front_end_domain } from '../../services/urls';
import { apiConnectorGet } from '../../services/apiconnector';
import { useQuery } from 'react-query';

const data = [
  {
    label: '1st deposit',
    rows: [
      { condition: '₹200 ≤ Amount<₹500 and Turnover ≥ ₹1,000', bonus: '₹58' },
      {
        condition: '₹500 ≤ Amount<₹1,000 and Turnover ≥ ₹2,500',
        bonus: '₹108',
      },
      {
        condition: '₹1,000 ≤ Amount<₹2,500 and Turnover ≥ ₹5,000',
        bonus: '₹158',
      },
      {
        condition: '₹2,500 ≤ Amount<₹5,000 and Turnover ≥ ₹12,500',
        bonus: '₹208',
      },
      { condition: 'Amount ≥ ₹5,000 and Turnover ≥ ₹25,000', bonus: '₹388' },
    ],
  },
  {
    label: '2nd deposit',
    rows: [
      { condition: '₹300 ≤ Amount<₹1,000 and Turnover ≥ ₹2,000', bonus: '₹58' },
      {
        condition: '₹1,000 ≤ Amount<₹2,500 and Turnover ≥ ₹10,000',
        bonus: '₹108',
      },
      {
        condition: '₹2,500 ≤ Amount<₹5,000 and Turnover ≥ ₹25,000',
        bonus: '₹158',
      },
      {
        condition: '₹5,000 ≤ Amount<₹10,000 and Turnover ≥ ₹50,000',
        bonus: '₹208',
      },
      { condition: 'Amount ≥ ₹10,000 and Turnover ≥ ₹75,000', bonus: '₹388' },
    ],
  },
  {
    label: '3rd deposit',
    rows: [
      {
        condition: '₹1,000 ≤ Amount<₹2,500 and Turnover ≥ ₹15,000',
        bonus: '₹58',
      },
      {
        condition: '₹2,500 ≤ Amount<₹5,000 and Turnover ≥ ₹37,500',
        bonus: '₹108',
      },
      {
        condition: '₹5,000 ≤ Amount<₹10,000 and Turnover ≥ ₹75,000',
        bonus: '₹158',
      },
      {
        condition: '₹10,000 ≤ Amount<₹20,000 and Turnover ≥ ₹125,000',
        bonus: '₹208',
      },
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

function TeamPartner() {
  const { data: wallet_amount } = useQuery(
    ['wallet_amount_amount'],
    () => apiConnectorGet(endpoint.get_balance),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const wallet_amount_data = wallet_amount?.data?.data || 0;
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const bonusData = [
    {
      deposit: '1st deposit',
      conditions: [
        { amount: '₹200', turnover: '₹1,000', bonus: '₹58' },
        { amount: '₹500', turnover: '₹2,500', bonus: '₹108' },
        { amount: '₹1,000', turnover: '₹5,000', bonus: '₹158' },
        { amount: '₹2,500', turnover: '₹12,500', bonus: '₹208' },
        { amount: '₹5,000', turnover: '₹25,000', bonus: '₹388' },
        { amount: '₹300', turnover: '₹1,000', bonus: '₹58' },
        { amount: '₹1,000', turnover: '₹2,500', bonus: '₹108' },
        { amount: '₹2,500', turnover: '₹5,000', bonus: '₹158' },
      ],
    },
    {
      deposit: '2nd deposit',
      conditions: [
        { amount: '₹5,000', turnover: '₹25,000', bonus: '₹208' },
        { amount: '₹10,000', turnover: '₹50,000', bonus: '₹388' },
        { amount: '₹10,000', turnover: '₹25,000', bonus: '₹158' },
        { amount: '₹1,000', turnover: '₹15,000', bonus: '₹58' },
        { amount: '₹2,500', turnover: '₹37,500', bonus: '₹108' },
      ],
    },
    {
      deposit: '3rd deposit',
      conditions: [
        { amount: '₹5,000', turnover: '₹75,000', bonus: '₹158' },
        { amount: '₹10,000', turnover: '₹125,000', bonus: '₹208' },
        { amount: '₹20,000', turnover: '₹225,000', bonus: '₹388' },
      ],
    },
  ];

  const Bullet = () => (
    <FiberManualRecordIcon
      sx={{ fontSize: 8, color: '#00e3ff', verticalAlign: 'middle', mr: 1 }}
    />
  );

  const functionTOCopy = (value) => {
    copy(value);
    VantToast('Copied to clipboard!', 's');
  };
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
          <Typography
            sx={{ width: '33%' }}
            variant="body1"
            color="initial"
          ></Typography>
        </Box>

        {/* Top banner */}
        <Box sx={style.banner}>
          <Box
            component="img"
            src={teamPartnerBg}
            alt="trophy"
            sx={{ width: '100%', height: 'auto' }}
          />
          <Box sx={style.bannerText}>
            <Typography
              sx={{
                fontWeight: 600,
                width: 164,
                textAlign: 'start',
                fontSize: 16,
                fontFamily: 'ui-monospace !important',
                color: 'black',
              }}
            >
              Invite friends to get max rewards
            </Typography>
            <Box sx={style.amountBox}>₹388.00</Box>
          </Box>
        </Box>

        {/* Invitation stats */}
        <Box sx={style.statsBox}>
          {[
            { label: 'Invitation count', value: '0' },
            {
              label: 'Effective Invitation count',
              value: '0',
              color: '#00FF85',
            },
            {
              label: 'Invitation total bonus',
              value: '₹0.00',
              color: '#FF4D4F',
            },
          ].map((item, idx) => (
            <Box key={idx} sx={style.statItem}>
              <Typography sx={{ color: '#6CA8E3', fontSize: '14px' }}>
                {item.label}
              </Typography>
              <Typography sx={{ color: item.color || '#fff', fontWeight: 600 }}>
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>

        <Typography sx={style.recordText}>Invitation record</Typography>

        <Box sx={{ px: 2 }}>
          {/* Label */}
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 16,
              fontFamily: 'ui-monospace',
              color: 'white',
              mb: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box sx={{ width: 3, height: 16, background: '#00ECBE', mr: 1 }} />
            Invitation link
          </Typography>

          {/* Link Box */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              background: '#061137',
              borderRadius: '30px',
              overflow: 'hidden',
              width: '100%',
              maxWidth: 500,
            }}
          >
            {/* URL */}
            <Box
              sx={{
                flex: 1,
                px: 2,
                py: 1.2,
                color: 'white',
                fontSize: 14,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                fontFamily: 'ui-monospace',
              }}
            >
              {front_end_domain}/register/?ref=$
              {wallet_amount_data?.referral_code}
            </Box>

            {/* Copy Button */}
            <Box
              sx={{
                background: '#00ECBE',
                padding: '15px 45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)',
                height: '100%',
                cursor: 'pointer',
              }}
            >
              <BiCopy
                size={20}
                color="#05012B"
                onClick={() =>
                  functionTOCopy(
                    `${front_end_domain}/register/?ref=${wallet_amount_data?.referral_code}`
                  )
                }
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            background: '#011341',
            borderRadius: '12px',
            p: 1,
            width: '95%',
            maxWidth: 600,
            ml: '2.5%',
            mt: 2,
            mb: 3,
          }}
        >
          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <svg className="svg-icon" width="25" height="25">
              <use xlinkHref="#icon-shuoming"></use>
            </svg>
            <Typography
              sx={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}
            >
              Invitation rules
            </Typography>
          </Box>

          {/* Subtext */}
          <Typography sx={{ color: '#fff', fontSize: 14, mb: 2 }}>
            If you invites player A, with in{' '}
            <Box component="span" sx={{ color: '#ff4d4f', fontWeight: 600 }}>
              6 Day
            </Box>
          </Typography>

          {/* Table */}
          <TableContainer
            component={Paper}
            sx={{
              backgroundColor: '#2C5ECA',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid #1f2a57',
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#2C5ECA' }}>
                  <TableCell
                    className="roboto"
                    colSpan={2}
                    sx={{
                      color: '#fff',
                      fontSize: '15px',
                      textAlign: 'center',
                      borderRight: '1px solid #1f2a57',
                      lineHeight: '32px',
                      fontWeight: 400,
                      width: '70%',
                    }}
                  >
                    When Player A
                  </TableCell>
                  <TableCell
                    className="roboto"
                    sx={{
                      color: '#fff',
                      fontSize: '15px',
                      textAlign: 'center',
                      lineHeight: '32px',
                      fontWeight: 400,
                    }}
                  >
                    You get bonus
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((section) =>
                  section.rows.map((row, idx) => (
                    <TableRow
                      key={`${section.label}-${idx}`}
                      sx={{
                        backgroundColor: idx % 2 === 0 ? '#0b1b3e' : '#0d2457',
                      }}
                    >
                      {idx === 0 && (
                        <TableCell
                          rowSpan={section.rows.length}
                          sx={{
                            color: '#929AB9',
                            textAlign: 'center',
                            fontSize: '13px',
                            textTransform: 'capitalize',
                            borderRight: '1px solid #1f2a57',
                            backgroundColor: '#0b1b3e',
                            verticalAlign: 'middle',
                            width: '90px',
                            padding: '10px',
                          }}
                        >
                          {section.label}
                        </TableCell>
                      )}
                      <TableCell
                        sx={{
                          color: '#929AB9',
                          fontSize: '13px',
                          padding: '10px',
                          borderRight: '1px solid #1f2a57',
                          lineHeight: '17px',
                          textAlign: 'center',
                        }}
                      >
                        {row.condition}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: '#ff4d4f',
                          fontSize: '13px',
                          padding: '10px',
                          textAlign: 'center',
                        }}
                      >
                        {row.bonus}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ mt: 3, px: 1 }}>
            {/* Red warning */}
            <Typography
              sx={{ color: '#ff4d4f', fontSize: 14, fontWeight: 600, mb: 2 }}
            >
              *Each deposit can only get one bonus.
            </Typography>

            {/* Bullet 1 */}
            <Typography sx={{ color: '#929AB9', fontSize: 14, mb: 1 }}>
              <Bullet />
              eg: Player A 1st deposit{' '}
              <Box component="span" sx={{ color: '#ff4d4f' }}>
                ₹199.00
              </Box>{' '}
              and turnover{' '}
              <Box component="span" sx={{ color: '#ff4d4f' }}>
                ₹1,000.00
              </Box>
              , you can't get bonus
            </Typography>

            {/* Bullet 2 */}
            <Typography sx={{ color: '#929AB9', fontSize: 14, mb: 1 }}>
              <Bullet />
              the reward has no limitation, the more you invited the more
              rewards you will get it
            </Typography>

            {/* Bullet 3 */}
            <Typography sx={{ color: '#929AB9', fontSize: 14 }}>
              <Bullet />
              If the conditions are met the rewards will be automatically
              credited to player's balance
            </Typography>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default TeamPartner;

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
  banner: {
    position: 'relative',
  },
  bannerText: {
    position: 'absolute',
    top: '20px',
    right: '15px',
    textAlign: 'right',
  },
  amountBox: {
    mt: '5px',
    fontSize: '16px',
    background: '#FF9E41',
    borderRadius: '20px',
    padding: '4px 20px',
    color: '#fff',
    display: 'inline-block',
  },
  statsBox: {
    px: 2,
    mt: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: 1.2,
  },
  statItem: {
    background: '#011341',
    borderRadius: '10px',
    padding: '10px 12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recordText: {
    textAlign: 'center',
    color: '#fff',
    mt: 2,
    fontSize: '14px',
    cursor: 'pointer',
  },
  inviteSection: {
    px: 2,
    mt: 3,
  },
  inviteTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#00FFDC',
    mb: 1,
  },
  linkBox: {
    background: '#001E5F',
    borderRadius: '30px',
    padding: '8px 12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkText: {
    fontSize: '12px',
    color: '#fff',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  copyBtn: {
    ml: 1,
    p: 1,
    background: '#00FFDC',
    borderRadius: '0 30px 30px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
