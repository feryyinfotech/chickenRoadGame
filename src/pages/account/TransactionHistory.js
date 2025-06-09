import {
  KeyboardArrowLeftOutlined
} from '@mui/icons-material';
import {
  Box,
  Container,
  MenuItem,
  Select,
  Stack,
  Typography
} from '@mui/material';
import moment from 'moment';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ConfigProvider, DatetimePicker, Picker, Popup } from 'react-vant';
import enUS from 'react-vant/es/locale/lang/en-US';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';

function TransactionHistory() {
  const [loding, setLoading] = React.useState(false);
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedValue, setSelectedValue] = useState('All');
  const [tempValue, setTempValue] = useState('All');
  const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = React.useState(null);
  const [selectedLevel, setSelectedLevel] = React.useState('All');

  const options = [
    { text: 'All', value: 'All' },
    { text: 'Bet', value: 'Bet' },
    { text: 'Agent commission ', value: 'Agent commission' },
    { text: 'Win', value: 'Win' },
    { text: 'Red envelope', value: 'Red envelope' },
    { text: 'Deposit', value: 'Deposit' },
    { text: 'Withdraw', value: 'Withdraw' },
    { text: 'Cancel withdraw', value: 'Cancel withdraw' },
    { text: 'Attendance Bonus', value: 'Attendance Bonus' },
    { text: 'Agents Red envelope', value: 'Agents Red envelope' },
    { text: 'Withdrawal rejected', value: 'Withdrawal rejected' },
    { text: 'Deposit Gift', value: 'Deposit Gift' },
    { text: 'Manual deposit', value: 'Manual deposit' },
    { text: 'Sign up bonus', value: 'Sign up bonus' },
    { text: 'Bonus', value: 'Bonus' },
    { text: 'First deposit bonus', value: 'First deposit bonus' },
    { text: 'First deposit rebate', value: 'First deposit rebate' },
    { text: 'Investment and financial management', value: 'Investment and financial management' },
    { text: 'Financial income', value: 'Financial income' },
    { text: 'Financial capital', value: 'Financial capital' },
    { text: 'Capital', value: 'Capital' },
    { text: 'Mission rewards', value: 'Mission rewards' },
    { text: 'Game moved in', value: 'Game moved in' },
    { text: 'Game moved out', value: 'Game moved out' },
    { text: 'Winning slots', value: 'Winning slots' },
    { text: 'Bank binding bonus', value: 'Bank binding bonus' },
    { text: 'Game refunded', value: 'Game refunded' },
    { text: 'USDT deposit', value: 'USDT deposit' },
    { text: 'Betting rebate', value: 'Betting rebate' },
    { text: 'VIP level up reward', value: 'VIP level up reward' },
    { text: 'VIP monthly reward', value: 'VIP monthly reward' },
    { text: 'VIP deposit bonus', value: 'VIP deposit bonus' },
    { text: 'Bonus deduction', value: 'Bonus deduction' },
    { text: 'Manual withdrawal', value: 'Manual withdrawal' },
    { text: 'One-Click rebate', value: 'One-Click rebate' },
    { text: 'Slots Jackpot', value: 'Slots Jackpot' },
    { text: 'Bind mobile phone rewards', value: 'Bind mobile phone rewards' },
    { text: 'XOSO issue canceled', value: 'XOSO issue canceled' },
    { text: 'Bind email rewards', value: 'Bind email rewards' },
    { text: 'Weekly Award', value: 'Weekly Award' },
    { text: 'C2C Withdraw Awards', value: 'C2C Withdraw Awards' },
    { text: 'C2C Withdraw', value: 'C2C Withdraw' },
    { text: 'C2C Withdraw Back', value: 'C2C Withdraw Back' },
    { text: 'C2C Recharge', value: 'C2C Recharge' },
    { text: 'C2C Recharge Awards', value: 'C2C Recharge Awards' },
    { text: 'Newbie gift pack', value: 'Newbie gift pack' },
    { text: 'Tournament Rewards', value: 'Tournament Rewards' },
    { text: 'Return Awards', value: 'Return Awards' },
    { text: 'New members will receive bonuses if they make a loss on their first deposit', value: 'New members will receive bonuses if they make a loss on their first deposit' },
    { text: 'New members get bonuses by playing games', value: 'Tournament Rewards' },
    { text: 'Daily rewards', value: 'Daily rewards' },
    { text: 'Turntable Awards', value: 'Turntable Awards' },
    { text: 'Partner rewards', value: 'Partner rewards' },
    { text: 'ARPay Cash Back', value: 'ARPay Cash Back' },
    { text: 'Join channel rewards', value: 'Join channel rewards' },
    { text: 'Recharge Replenishment', value: 'Recharge Replenishment' },
    { text: 'Withdrawal Reward', value: 'Withdrawal Reward' },


  ];

  React.useEffect(() => {
  }, [selectedLevel, selectedDate]);
  const navigate = useNavigate();

  const transactions = [
    {
      detail: 'Agent commission',
      time: '2025-04-16 01:05:32',
      balance: 0.25,
    },
    {
      detail: 'Agent commission',
      time: '2025-04-15 22:40:10',
      balance: 1.50,
    },
    {
      detail: 'Agent commission',
      time: '2025-04-14 17:20:00',
      balance: 0.75,
    },
  ];


  return (
    <Layout header={false}>
      <SvgIcons />
      <Container
        sx={{ background: '', width: '100%', padding: '10px' }}
        className="h-screen overflow-scroll"
      >
        {/* <CustomCircularProgress isLoading={loding} /> */}
        <Box
          sx={{
            ...style.header,
            backgroundColor: '#0A0F3C',
            p: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box component={NavLink} to="/account">
            <KeyboardArrowLeftOutlined sx={{ color: 'white' }} />
          </Box>
          <Typography
            variant="body1"
            sx={{ color: 'white', fontWeight: 'bold' }}
          >
            Transaction History
          </Typography>
          <Box sx={{ width: 24 }} />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, px: 2, mt: 2 }}>
          <Box onClick={() => setShowPicker(true)} sx={{ width: '50%' }}>
            <Select
              value={selectedValue}
              displayEmpty
              fullWidth
              readOnly
              sx={{ ...selectStyle, width: '100%' }}
            >
              <MenuItem value={selectedValue}>{selectedValue}</MenuItem>
            </Select>
          </Box>

          <Box onClick={() => setShowDatePicker(true)} sx={{ width: '50%' }}>
            <Select
              value={selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : ''}
              displayEmpty
              fullWidth
              readOnly
              sx={selectStyle}
            >
              <MenuItem value={selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : ''}>
                {selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : 'Choose a Date'}
              </MenuItem>
            </Select>
          </Box>
        </Box>

        <ConfigProvider locale={enUS}>
          <Popup
            round
            position="bottom"
            visible={showPicker}
            onClose={() => setShowPicker(false)}
            style={{ backgroundColor: '#ff000000', paddingBottom: '10px' }}
          >
            <div
              style={{
                maxWidth: '430px',
                margin: '0 auto',
                backgroundColor: '#171A31',
                borderRadius: '12px 12px 0 0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderBottom: '1px solid #2c2c6c',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '500',
                  background: '#011341',
                  borderRadius: '12px 12px 0 0',
                }}
              >
                <span onClick={() => setShowPicker(false)} style={{ cursor: 'pointer' }}>Cancel</span>
                <span>Status</span>
                <span
                  onClick={() => {
                    setSelectedValue(tempValue);
                    setShowPicker(false);
                  }}
                  style={{ cursor: 'pointer', color: '#00E3B9' }}
                >
                  Confirm
                </span>
              </div>

              <Picker
                columns={[options]}
                value={[tempValue]}
                onChange={(val) => setTempValue(val[0])}
                showToolbar={false}
                itemHeight={48}
                visibleItemCount={5}
                style={{ backgroundColor: '#05114d', color: 'white', textAlign: 'center' }}
                optionRender={(option) => (
                  <div style={{ color: 'white', fontSize: '16px', textAlign: 'center', padding: '12px 0' }}>
                    {option.text}
                  </div>
                )}
              />
            </div>
          </Popup>

          {/* Date Picker Popup */}
          <Popup
            round
            position="bottom"
            visible={showDatePicker}
            onClose={() => setShowDatePicker(false)}
            style={{ backgroundColor: '#ff000000', paddingBottom: '10px' }}
          >
            <div
              style={{
                maxWidth: '430px',
                margin: '0 auto',
                backgroundColor: '#171A31',
                borderRadius: '12px 12px 0 0',
                overflow: 'hidden',
              }}
            >
              <DatetimePicker
                title="Select Date"
                type="date"
                minDate={new Date(2020, 0, 1)}
                maxDate={new Date(2025, 10, 1)}
                value={selectedDate || new Date()}
                onChange={setSelectedDate}
                onCancel={() => setShowDatePicker(false)}
                onConfirm={() => setShowDatePicker(false)}
              />
            </div>
          </Popup>
        </ConfigProvider>
        {transactions.map((item, index) => (
          <Box
            key={index}
            className="bg-[#001C54] w-[93%] p-[5px] rounded mt-[10px] ml-[16px] "
          >
            <Typography className="!p-2 !text-white !font-bold">{item.detail}</Typography>
            <div className="!bg-[#011341]">
              <div className="flex justify-between bg-[#05012b] font-bold rounded p-1 my-2 px-2 text-sm">
                <p>Detail</p>
                <p>{item.detail}</p>
              </div>
              <div className="flex justify-between bg-[#05012b] font-bold rounded p-1 mb-2 px-2 text-sm">
                <p>Time</p>
                <p>{item.time}</p>
              </div>
              <div className="flex justify-between bg-[#05012b] font-bold rounded p-1 mb-2 px-2 text-sm">
                <p>Balance</p>
                <p className="text-green-500 ">₹ {item.balance}</p>
              </div>
              <div className="mt-6 mb-2 mx-1 border border-blue-800 h-16 rounded" />
            </div>
          </Box>
        ))}

        <Stack className="!flex  mt-5 items-center ">

          <Typography variant="body1" color="white">
            No more
          </Typography>
        </Stack>
      </Container>
    </Layout>
  );
}
export default TransactionHistory;
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
const selectStyle = {
  background: '#021244',
  color: 'white',
  borderRadius: '5px',
  width: '100%',
  px: 2,
  fontSize: 14,
  '.MuiSvgIcon-root': { color: 'white' },
};
