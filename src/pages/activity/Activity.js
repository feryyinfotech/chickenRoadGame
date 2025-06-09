import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import actbanner7 from '../../assets/images/b1.jpg';
import actbanner6 from '../../assets/images/b2.jpg';
import actbanner1 from '../../assets/activeb1.jpg';
import actbanner4 from '../../assets/images/b4.jpg';
import actbanner3 from '../../assets/images/b5.jpg';
import BettingIcon from '../../assets/images/Betting.png';
import BonusIcon from '../../assets/images/Bonusi.png';
import giftredeem from '../../assets/images/giftRedeem.png';
import logo from '../../assets/images/logo.png';
import MissionIcon from '../../assets/images/mission.png';
import giftimage from '../../assets/images/signInBanner.png';
import SuperIcon from '../../assets/images/super.png';
import Layout from '../../component/layout/Layout';
import { checkTokenValidity } from '../../services/apiCallings';
import MyModal from '../../shared/MyModal';

const style = {
  root: {
    background: '#011341',
    pt: 2,
    px: 1,
    '&>p': { color: 'white' },
    '&>p:nth-child(1)': { fontSize: '17px', fontWeight: 600 },
    '&>p:nth-child(2)': { fontSize: '12px', fontWeight: 400, mt: 1 },
    '&>p:nth-child(3)': { fontSize: '12px', fontWeight: 400, pb: 1 },
  },
  act: {
    px: 2,
    alignItems: 'baseline',
    justifyContent: 'space-between',
    width: '100%',
    mt: 3,
  },
  act2: { px: 2, width: '100%', mt: 3 },
  actimg: {
    width: '49%',
    background: '#011341',
    borderRadius: '10px',
    paddingBottom: '20px',
    '&>p:nth-child(2)': { fontSize: '14px', fontWeight: 600, pl: 1 },
    '&>p:nth-child(3)': { fontSize: '12px', fontWeight: 400, pl: 1, pt: 1 },
  },
  actimg2: {
    mb: 2,
    width: '100%',
    background: '#011341',
    borderRadius: '10px',
    paddingBottom: '2px',
    '&>p:nth-child(2)': {
      fontSize: '18px',
      fontWeight: 700,
      pl: 1,
      textAlign: 'center',
    },
  },
};
function Activity() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!checkTokenValidity()) {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = '/'; // Redirect to login page
    }
  }, []);
  return (
    <Layout header={false}>
      <Box className="fcc">
        <Box
          component="img"
          src={logo}
          sx={{ width: '180px', padding: '7px ' }}
        ></Box>
      </Box>
      <Box sx={style.root}>
        <Typography variant="body1" color="initial">
          Activity
        </Typography>
        <Typography variant="body1" color="initial">
          Please remember to follow the event page
        </Typography>
        <Typography variant="body1" color="initial">
          We will launch user feedback activities from time to time
        </Typography>
      </Box>

      <div className="flex items-center justify-between  my-2  p-1 gap-6 w-full">
        <div
          className="  flex flex-col items-center p-3 "
          onClick={() => navigate('/invitationbonus')}
        >
          <Box component="img" src={BonusIcon} sx={{ width: '40px' }}></Box>
          <span className="text-center text-xs mt-2">Invitation Bonus</span>
        </div>
        <div
          className="  flex flex-col items-center p-3 "
          onClick={() => navigate('/bettingrebate')}
        >
          <Box component="img" src={BettingIcon} sx={{ width: '40px' }}></Box>

          <span className=" text-center text-xs mt-2">Betting Rebate</span>
        </div>
        <div
          className="  flex flex-col items-center p-3 "
          onClick={() => navigate('/superjackpot')}
        >
          <Box component="img" src={SuperIcon} sx={{ width: '40px' }}></Box>
          <span className=" text-center text-xs mt-2">Super Jackpot</span>
        </div>
        <div
          className="  flex flex-col items-center p-3 "
          onClick={() => navigate('/member')}
        >
          <Box component="img" src={MissionIcon} sx={{ width: '40px' }}></Box>
          <span className=" text-center text-xs mt-2">
            New member gift package
          </span>
        </div>
      </div>
      <div className="flex  h-[200px] m-2 gap-2 w-full">
        <div
          className="w-[48%] h-full flex flex-col items-center p-1 rounded-lg shadow-md"
          onClick={() => navigate('/gifts')}
        >
          <img src={giftimage} className="w-[100%] " alt="error" />
          <div className="w-full h-[10%] mt-1 p-3">
            <p className="text-white font-bold text-sm">Gifts</p>
            <p className="text-white mt-1 text-xs">
              Enter the redemption code to receive gift rewards.
            </p>
          </div>
        </div>
        <div
          className="w-[48%] h-full flex flex-col items-center p-1 rounded-lg shadow-md"
          onClick={() => navigate('/attendancebonus')}
        >
          <img src={giftredeem} className="w-[100%] " alt="error" />
          <div className="w-full h-[10%] mt-1">
            <p className="text-white font-bold text-sm">Attendance Bonus</p>
            <p className="text-white mt-1 text-xs">
              The more consecutive days you sign in,the higher the reward will
              be.
            </p>
          </div>
        </div>
      </div>
      <Stack sx={{ width: '95%', ml: '2.5%' }}>
        <Box sx={style.actimg2} className="!cursor-pointer" onClick={()=>navigate('/first')}>
          <Box
            component="img"
            sx={{ width: '100%', borderRadius: '10px 10px 0px 0px' }}
            src={actbanner1}
          ></Box>
          <Typography variant="body1" color="white" className="!text-left py-2">
           Member First Deposit Bonus
          </Typography>
        </Box>
        <Box sx={style.actimg2} className="!cursor-pointer" onClick={()=>navigate('/promotion/TeamPartner')}>
          <Box
            component="img"
            sx={{ width: '100%', borderRadius: '10px 10px 0px 0px' }}
            src={actbanner4}
          ></Box>
          <Typography variant="body1" color="white" className="!text-left py-2">
           AGENT REFFERAL BONOUS
          </Typography>
        </Box>
        <Box sx={style.actimg2} className="!cursor-pointer" onClick={()=>navigate('/activity/daily')}>
          <Box
            component="img"
            sx={{ width: '100%', borderRadius: '10px 10px 0px 0px' }}
            src={actbanner6}
          ></Box>
          <Typography variant="body1" color="white" className="!text-left py-2">
          DAILY SALARY SYSTEM
          </Typography>
        </Box>
        <Box sx={style.actimg2} className="!cursor-pointer"
        onClick={()=>navigate('/invitationbonus')}>
          <Box
            component="img"
            sx={{ width: '100%', borderRadius: '10px 10px 0px 0px' }}
            src={actbanner3}
          ></Box>
          <Typography variant="body1" color="white" className="!text-left py-2">
            REFFERAL BONUS
          </Typography>
        </Box>
      
        <Box sx={style.actimg2} mb={5} className="!cursor-pointer !mb-20" onClick={()=>navigate('/newmember')}>
          <Box
            component="img"
            sx={{ width: '100%', borderRadius: '10px 10px 0px 0px' }}
            src={actbanner7}
          ></Box>
          <Typography variant="body1" color="white" className="!text-left py-2">
          RECHARGE BONUS FOR NEW PLAYER
          </Typography>
        </Box>
      </Stack>
    </Layout>
  );
}

export default Activity;
