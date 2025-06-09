import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import { Box, Container, Stack, Typography } from '@mui/material';
import copy from 'clipboard-copy';
import { useEffect } from 'react';
import { IoIosPeople } from 'react-icons/io';
import { MdDashboard, MdMoney, MdOutlineEmojiPeople } from 'react-icons/md';
import { useQuery } from 'react-query';
// import cardbg from '../../assets/images/cardbg.png';
import { NavLink, useNavigate } from 'react-router-dom';
import cardbg from '../../assets/images/promotionbg-13880556.png';
import copyinvitationcode from '../../assets/images/copyinvitationcode.png';
import subcordinatedata from '../../assets/images/subcordinatedata.png';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';
import { checkTokenValidity } from '../../services/apiCallings';
import { apiConnectorGet } from '../../services/apiconnector';
import { endpoint, front_end_domain } from '../../services/urls';
import CustomCircularProgress from '../../shared/loder/CustomCircularProgress';
import MyModal from '../../shared/MyModal';
import VantToast from '../../shared/toast/Toast';
import theme from '../../utils/theme';
import { ArrowLeft } from '@react-vant/icons';

function Promotion() {
  const { isLoading, data } = useQuery(
    ['yesterday_income'],
    () => apiConnectorGet(endpoint?.yesterday_income),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: true,
    }
  );
  const result = data?.data?.data || [];
  // console.log(result);
  const { data: promotion } = useQuery(
    ['promotion_data'],
    () => apiConnectorGet(endpoint?.promotion_data),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: true,
    }
  );
  const promotion_res = promotion?.data?.data || [];

  const functionTOCopy = (value) => {
    copy(value);
    VantToast('Copied to clipboard!', 's');
  };

  useEffect(() => {
    if (!checkTokenValidity()) {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = '/'; // Redirect to login page
    }
  }, []);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Layout header={false}>
      <Container sx={style.container}>
        <MyModal />
        <SvgIcons />
        <CustomCircularProgress
          isLoading={isLoading || result?.username === null || result === ''}
        />
        <Box sx={style.header}>
          <Box
            component={NavLink}
            onClick={() => goBack()}
            sx={{ width: '33%' }}
          >
            {/* <ArrowLeft sx={{ fontSize: '22px !important', }} /> */}
          </Box>
          <Typography
            sx={{ width: '33%', fontSize: '18px !important' }}
            className="fcc roboto"
            variant="body1"
            color="initial"
          >
            Agency
          </Typography>
          <Typography
            sx={{ width: '33%' }}
            variant="body1"
            color="initial"
            component={NavLink}
            to="/promotion/Subordinate/new"
          >
            <svg
              style={{ float: 'inline-end' }}
              className="svg-icon"
              width="25"
              height="25"
            >
              <use xlinkHref="#icon-subordinate"></use>
            </svg>{' '}
          </Typography>
        </Box>
        <Box sx={style.commitionboxOuter}>
          <Box
            sx={{
              width: '92%',
              margin: 'auto',
              borderRadius: '10px',
              pb: 3,
            }}
          >
            <Box sx={style.commitionbox}>
              <Typography
                variant="body1"
                color="#05012b"
                className=" !text-md !py-2 roboto"
              >
                {Number(result?.yesterday_income || 0)?.toFixed(4)}
              </Typography>

              <Typography variant="body1" className="roboto" color="#00ecbe">
                Yesterday's total commission
              </Typography>
              <Typography variant="body1" color="#05012b" className="roboto">
                Upgrade the level to increase commission income
              </Typography>
            </Box>
          </Box>
          <Box sx={style.subcordinateBox}>
            <Stack
              direction="row"
              sx={{
                width: '100%',
                margin: 'auto',
              }}
            >
              <Box sx={style.subordinatesleft}>
                <svg className="svg-icon" width="25" height="25">
                  <use xlinkHref="#icon-teamSubordinates"></use>
                </svg>
                <Typography variant="body1" color="initial">
                  {' '}
                  Direct subordinates
                </Typography>
              </Box>
              <Box sx={style.subordinatesRight}>
                <svg className="svg-icon" width="25" height="25">
                  <use xlinkHref="#icon-teamSubordinates"></use>
                </svg>
                <Typography variant="body1" color="initial">
                  Team subordinates
                </Typography>
              </Box>
            </Stack>
            <Box sx={style.boxStyles}>
              <Box sx={style.innerBoxStyles}>
                <Box sx={style.subcordinatelist}>
                  <Typography variant="body1" color="#fff" fontSize="14px">
                    {result?.direct_reg || 0}
                  </Typography>

                  <Typography variant="body1" className="THBY">
                    Number of Register
                  </Typography>
                </Box>
                <Box sx={style.subcordinatelist}>
                  <Typography
                    variant="body1"
                    color="#13AC5E !important"
                    fontSize="14px"
                  >
                    {result?.direct_depo_mem || 0}
                  </Typography>
                  <Typography variant="body1" className="THBY">
                    Deposit number
                  </Typography>
                </Box>

                <Box sx={style.subcordinatelist}>
                  <Typography
                    variant="body1"
                    color="initial"
                    fontSize="14px"
                    className="!text-orange-400"
                  >
                    {Number(result?.direct_yest_depo || 0)?.toFixed(2)}
                  </Typography>
                  <Typography variant="body1" color="initial" className="THBY">
                    Deposit amount
                  </Typography>
                </Box>
                <Box sx={style.subcordinatelist}>
                  <Typography variant="body1" color="#fff" fontSize="14px">
                    {Number(result?.total_direct_topup || 0)?.toFixed(2)}
                  </Typography>
                  <Typography variant="body1" color="initial" className="THBY">
                    Number of people making first deposit
                  </Typography>
                </Box>
              </Box>

              <Box sx={style.innerBoxStylestwo}>
                <Box sx={style.subcordinatelist}>
                  <Typography variant="body1" color="#fff" fontSize="14px">
                    {result?.team_reg || 0}
                  </Typography>
                  <Typography variant="body1" color="initial" className="THBY">
                    {' '}
                    Number of Registers
                  </Typography>
                </Box>

                <Box sx={style.subcordinatelist}>
                  <Typography
                    variant="body1"
                    color="#13AC5E !important"
                    fontSize="14px"
                  >
                    {result?.team_depo_mem || 0}
                  </Typography>
                  <Typography variant="body1" color="initial" className="THBY">
                    Deposit number
                  </Typography>
                </Box>

                <Box sx={style.subcordinatelist}>
                  <Typography
                    variant="body1"
                    className="!text-orange-400"
                    fontSize="14px"
                  >
                    {Number(result?.team_yest_depo || 0)?.toFixed(2)}
                  </Typography>
                  <Typography variant="body1" color="initial" className="THBY">
                    {' '}
                    Deposit amount
                  </Typography>
                </Box>

                <Box sx={style.subcordinatelist}>
                  <Typography variant="body1" color="#fff" fontSize="14px">
                    {Number(
                      Number(result?.total_direct_topup || 0) +
                        Number(result?.total_team_topup || 0)
                    )?.toFixed(2)}
                  </Typography>
                  <Typography variant="body1" color="initial" className="THBY">
                    {' '}
                    Number of people making first deposit
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={style.invitebtn}>
              <NavLink to="/invite">
                <Typography
                // sx={{}}
                // onClick={() => {
                //   functionTOCopy(
                //     `${front_end_domain}/register/?ref=${result?.username}`
                //   );
                // }}
                >
                  INVITATION LINK
                </Typography>
              </NavLink>
            </Box>
          </Box>
          <Box sx={style.invitebutton} className="invitebutton">
            <NavLink to="/promotion/TeamPartner">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <svg className="svg-icon mr-2" width="30" height="30">
                    <use xlinkHref="#icon-team_partner"></use>
                  </svg>
                  <Typography variant="body1" color="initial">
                    Partner rewards
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <Box sx={style.invitbox} className={'!cursor-pointer'}>
              <Stack direction="row">
                <svg className="svg-icon mr-2" width="30" height="30">
                  <use xlinkHref="#icon-copy_Code"></use>
                </svg>
                <Typography variant="body1" color="initial">
                  Copy invitation code
                </Typography>{' '}
              </Stack>
              <Stack direction="row">
                <Typography
                  // variant="body1"
                  // color="initial"
                  className="!text-[#92A8E3] !text-sm"
                >
                  {result?.username}
                </Typography>
                <svg
                  className="svg-icon mr-2"
                  width="20"
                  height="20"
                  onClick={() => {
                    functionTOCopy(
                      `${front_end_domain}/register/?ref=${result?.username}`
                    );
                  }}
                >
                  <use xlinkHref="#icon-copy"></use>
                </svg>
              </Stack>
            </Box>
            <NavLink to="/promotion/Subordinates">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <Box component="img" src={subcordinatedata}></Box>
                  <Typography variant="body1" color="initial">
                    Subordinate Data
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <NavLink to="/promotion/MyCommission">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <svg className="svg-icon mr-2" width="30" height="30">
                    <use xlinkHref="#icon-commission"></use>
                  </svg>
                  {/* <Box component="img" src={subcordinatedata}></Box> */}
                  <Typography variant="body1" color="initial">
                    Commission detail
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <NavLink to="/promotion/PromotionRule">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <svg className="svg-icon mr-2" width="30" height="30">
                    <use xlinkHref="#icon-invite_reg"></use>
                  </svg>
                  <Typography variant="body1" color="initial">
                    Inviation Rule
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            {/* <NavLink to="/account/income-main/my-team">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <Box component="img" src={subcordinatedata}></Box>
                  <Typography variant="body1" color="initial">
                    Referral Data
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink> */}
            {/* <NavLink to="/account/income-main/my-team/levels">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <Box component="img" src={subcordinatedata}></Box>
                  <Typography variant="body1" color="initial">
                    Team data
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink> */}

            {/* <NavLink to="/promotion/TeamReport">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <Box component="img" src={subcordinatedata}></Box>
                  <Typography variant="body1" color="initial">
                    Team Report
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink> */}
            {/* <NavLink to="/promotion/Subordinates">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <Box component="img" src={subcordinatedata}></Box>
                  <Typography variant="body1" color="initial">
                    Referral Income
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink> */}

            <NavLink to="/promotion/Server">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <svg className="svg-icon mr-2" width="30" height="30">
                    <use xlinkHref="#icon-server"></use>
                  </svg>
                  {/* <Box component="img" src={subcordinatedata}></Box> */}
                  <Typography variant="body1" color="initial">
                    Agent Line Customer Service
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <NavLink to="/promotion/Rebate">
              <Box sx={style.invitbox}>
                <Stack direction="row">
                  <svg className="svg-icon mr-2" width="30" height="30">
                    <use xlinkHref="#icon-rebateRatio"></use>
                  </svg>
                  {/* <Box component="img" src={subcordinatedata}></Box> */}
                  <Typography variant="body1" color="initial">
                    Rebate Ratio
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <ArrowForwardIosOutlinedIcon />
                </Stack>
              </Box>
            </NavLink>
            <Box sx={style.subcordinateBox2}>
              <Stack direction="row" sx={{ width: '100%', mt: 2, ml: '-13px' }}>
                <Box sx={{ ...style.subordinatesleft, background: '' }}>
                  <svg className="svg-icon mr-2" width="30" height="30">
                    <use xlinkHref="#icon-promotionData"></use>
                  </svg>
                  <Typography variant="body1">Promotion Data</Typography>
                </Box>
              </Stack>
              <Box sx={style.boxStyles}>
                <Box sx={style.innerBoxStyles}>
                  <Box
                    sx={style.subcordinatelist}
                    className={'!flex  !flex-col !items-center'}
                  >
                    <Typography variant="body1" className="white fs15 fw500">
                      {promotion_res?.[0]?.current_week_comission || 0}
                    </Typography>
                    <Typography variant="body1" className="fs14">
                      This Week
                    </Typography>
                  </Box>
                </Box>

                <Box sx={style.innerBoxStylestwo}>
                  <Box
                    sx={style.subcordinatelist}
                    className={'!flex  !flex-col !items-center'}
                  >
                    <Typography variant="body1" className="white fs15 fw500">
                      {promotion_res?.[0]?.total_commission || 0}
                    </Typography>
                    <Typography variant="body1" className="fs14">
                      Total Commission
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={style.boxStyles}>
                <Box sx={style.innerBoxStyles}>
                  <Box
                    sx={style.subcordinatelist}
                    className={'!flex  !flex-col !items-center'}
                  >
                    <Typography variant="body1" className="white fs15 fw500">
                      {promotion_res?.[0]?.direct_subordinate || 0}
                    </Typography>
                    <Typography variant="body1" className="fs14">
                      Direct subordinate
                    </Typography>
                  </Box>
                </Box>

                <Box sx={style.innerBoxStylestwo}>
                  <Box
                    sx={style.subordinatelist}
                    className={'!flex  !flex-col !items-center'}
                  >
                    <Typography variant="body1" className="white fs15 fw500">
                      {promotion_res?.[0]?.team_subordinate || 0}
                    </Typography>
                    <Typography
                      variant="body1"
                      className="fs14"
                      textAlign="center"
                    >
                      Total number of subordinates in the team
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={style.promotionBoxOutertwo}></Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default Promotion;

const style = {
  container: {
    background: '#05012B',
    width: '100%',
    height: '100vh',
    overflow: 'auto',
  },
  header: {
    padding: '10px 8px',
    background: 'zubgtext',
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
  commitionboxOuter: {
    width: '100%',
    height: '260px',
    background: '#56c0b2',
    '&>img': { width: '100%', height: '100%' },
    backgroundImage: `url(${cardbg})`,
    backgroundSize: '100%',
  },
  commitionbox: {
    margin: 'auto',
    textAlign: 'center',
    py: 2,
    // backgroundImage: `url(${cardbg})`,
    '&>p:nth-child(1)': { fontSize: '25px', fontWeight: '500' },
    '&>p:nth-child(2)': {
      fontSize: '13px',
      fontWeight: 400,
      padding: '4px 10px',
      background: '#05012B',
      borderRadius: '20px',
      width: 'fit-content',
      margin: 'auto',
      marginTop: '-7px',
    },
    '&>p:nth-child(3)': {
      fontSize: '12px',
      fontWeight: '400',
      marginTop: '5px',
    },
  },
  subordinatesleft: {
    width: '50%',
    textAlign: 'center',
    py: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#2C5ECA',
    borderTopLeftRadius: '10px',
    '&>svg': {
      color: theme.palette.primary.main,
      fontSize: '25px',
      marginRight: '10px',
    },
    '&>p': { color: 'white', fontSize: '14px', fontWeight: '500' },
  },
  subordinatesRight: {
    width: '50%',
    textAlign: 'center',
    py: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#2C5ECA',
    borderTopRightRadius: '10px',
    '&>svg': {
      color: theme.palette.primary.main,
      fontSize: '25px',
      marginRight: '10px',
    },
    '&>p': { color: 'white', fontSize: '14px', fontWeight: '500' },
  },

  boxStyles: {
    padding: '11px',
    display: 'flex',
    borderRadius: ' 0px 0px 10px 10px',
    width: '100%',
    margin: 'auto;',
    background: ' #011341',
  },
  innerBoxStyles: {
    width: '50%',
    borderRight: '1px solid black',
    borderBottomLeftRadius: '10px',
    padding: '0px 0px',
  },
  innerBoxStylestwo: { width: '50%', padding: '0px 0px' },
  subcordinatelist: {
    textAlign: 'center',
    mb: 1,
  },
  subcordinateBox: {
    width: '92%',
    mt: '20px',

    ml: '4%',
    mb: '20px',
    borderRadius: '20px',
  },
  subcordinateBox2: {
    width: '92%',
    mt: '20px',
    background: ' #011341',
    ml: '4%',
    mb: '20px',
    borderRadius: '20px',
  },
  invitebutton: {
    width: '100%',
    background: '#05012B',
  },
  invitebtn: {
    mt: '20px',
    // pb: 2,
    '&>a>p': {
      width: '90%',
      marginLeft: '5%',
      borderRadius: '20px',
      textAlign: 'center',
      padding: '7px',
      background: 'linear-gradient(180deg, #7afec3, #02afb6)',
      color: '#05012B',
      fontSize: '17px',
      fontWeight: 'bolder',
    },
  },
  invitbox: {
    background: '#011341',
    width: '92%',
    ml: '4%',
    padding: '10px',
    mb: '20px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&>div>img': {
      width: '30px',
      marginRight: '10px',
      filter: 'hue-rotate(124deg)',
    },
    '&>div>p': {
      fontSize: '16px',
      color: 'white ',
      fontWeight: '400',
    },
    '&>div': { alignItems: 'center' },
    '&>div:nth-child(2)>p': { marginRight: '20px', color: 'hite !important' },
    '&>div:nth-child(2)>svg': {
      fontSize: '22px',
      marginRight: '10px',
      color: 'white ',
    },
  },
  promotionBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&>div:nth-child(1)': { alignItems: 'center' },
    '&>div:nth-child(1)>img': { width: '35px', marginRight: '10px' },
    '&>div:nth-child(1)>p': {
      fontSize: '17px',
      fontWeight: 500,
      color: 'black !important',
    },
  },
  promotionBoxOuter: {
    width: '92%',
    background: '#011341',
    padding: '10px',
    mt: '20px',
    borderRadius: '5px',
    marginLeft: '2.5%',
    paddingBottom: '15px',
    '&>div:nth-child(2)>div:nth-child(1)': {
      my: '10px',
      borderRight: '1px solid gray',
      width: '50%',
      textAlign: 'center',
    },
    '&>div:nth-child(2)>div:nth-child(2)': {
      my: '10px',
      width: '50%',
      textAlign: 'center',
    },
    '&>div:nth-child(2)>div>p:nth-child(1)': { color: 'white ' },
    '&>div:nth-child(2)>div>p:nth-child(2)': {
      fontSize: '13px',
      fontWeight: 500,
      color: 'grey !important',
    },
    '&>div:nth-child(3)>div:nth-child(1)': {
      my: '10px',
      borderRight: '1px solid gray',
      width: '50%',
      textAlign: 'center',
    },
    '&>div:nth-child(3)>div:nth-child(2)': {
      my: '10px',
      width: '50%',
      textAlign: 'center',
    },
    '&>div:nth-child(3)>div>p:nth-child(1)': { color: 'black !important' },
    '&>div:nth-child(3)>div>p:nth-child(2)': {
      fontSize: '13px',
      fontWeight: 500,
      color: 'grey !important',
    },
  },
  promotionBoxOutertwo: {
    width: '90%',
    padding: '10px',
    borderRadius: '5px',
    marginLeft: '5%',
    paddingBottom: '70px',
  },
};
