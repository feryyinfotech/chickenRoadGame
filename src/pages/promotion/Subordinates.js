import {
  KeyboardArrowLeftOutlined,
  Search
} from '@mui/icons-material';
import {
  Box,
  Container,
  MenuItem,
  Select,
  Stack,
  Typography
} from '@mui/material';
import dayjs from 'dayjs';
import moment from 'moment';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { ConfigProvider, Picker, Popup, DatetimePicker } from 'react-vant';
import enUS from 'react-vant/es/locale/lang/en-US';
import Layout from '../../component/layout/Layout';
import SvgIcons from '../../component/SvgIcons';
import { apiConnectorPost } from '../../services/apiconnector';
import { endpoint } from '../../services/urls';
import CustomCircularProgress from '../../shared/loder/CustomCircularProgress';

function Subordinates() {
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
    { text: 'Tier 1', value: 'Tier 1' },
    { text: 'Tier 2', value: 'Tier 2' },
    { text: 'Tier 3', value: 'Tier 3' },
    { text: 'Tier 4', value: 'Tier 4' },
    { text: 'Tier 5', value: 'Tier 5' },
    { text: 'Tier 6', value: 'Tier 6' },
  ];



  const reqbody = {
    level_no: Number(selectedLevel) || 0,
    in_date: selectedDate,
  };
  const subordinate_data = async () => {
    setLoading(true);
    try {
      const response = await apiConnectorPost(
        `${endpoint.subordinate_data}`,
        reqbody
      );
      // toast(response?.data?.msg, { id: 1 });
      if (response?.data?.msg === 'Data get successfully') {
        setData(response.data);
      } else {
        console.log('Data not found');
      }
    } catch (e) {
      console.log(e?.message || 'An error occurred');
    }
    setLoading(false);
  };

  React.useEffect(() => {
    subordinate_data();
  }, [selectedLevel, selectedDate]);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);


  return (
    <Layout header={false}>
      <SvgIcons />
      <Container
        sx={{ background: '', width: '100%', padding: '10px' }}
        className="h-screen"
      >
        <CustomCircularProgress isLoading={loding} />
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
          <Box component={NavLink} to="/promotion/">
            <KeyboardArrowLeftOutlined sx={{ color: 'white' }} />
          </Box>
          <Typography
            variant="body1"
            sx={{ color: 'white', fontWeight: 'bold' }}
          >
            Subordinate data
          </Typography>
          <Box sx={{ width: 24 }} />
        </Box>

        <Box sx={{ px: 2, pt: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#12194C',
              borderRadius: 2,
              px: 2,
              py: 1,
              mb: 1,
            }}
          >
            <input
              type="text"
              placeholder="Search subordinate UID"
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                color: 'white',
                outline: 'none',
                fontSize: '14px',
              }}
            />
            <Box
              sx={{
                backgroundColor: '#00FFD1',
                borderRadius: '20px',
                width: 62,
                height: 33,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ml: 1,
              }}
            >
              <Search sx={{ color: '#0A0F3C', fontSize: 25 }} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, px: 2, }}>
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
        <Box sx={style.promotionBoxOuter}>
          <Stack direction="row"></Stack>
          <Stack direction="row">
            <Box>
              <Typography variant="body1" color="initial">
                {data?.data?.[0]?.deposit_member || 0}
              </Typography>
              <Typography className="!text-gray-300">
                Deposite Member
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="initial">
                {Number(data?.data?.[0]?.deposit_amount || 0).toFixed(2)}
              </Typography>
              <Typography variant="body1" color="initial">
                Deposite Amount
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row">
            <Box>
              <Typography variant="body1" color="initial">
                {data?.data?.[0]?.no_of_betters || 0}
              </Typography>
              <Typography variant="body1" color="initial">
                Number of Betters
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="initial">
                {data?.data?.[0]?.total_bets || 0}
              </Typography>
              <Typography variant="body1" color="initial">
                Total Bets
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row">
            <Box>
              <Typography variant="body1" color="initial">
                {data?.data?.[0]?.mem_making_first_depo || 0}
              </Typography>
              <Typography variant="body1" color="initial" className="!text-xs">
                Number of People Making First Deposit
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="initial">
                {Number(data?.data?.[0]?.first_depo_amount || 0).toFixed(2)}
              </Typography>
              <Typography variant="body1" color="initial">
                First Deposit Amount
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box className="!mb-20 !m-3">
          {data?.history?.map((item) => {
            return (
              <Box
                sx={{
                  background: '#00ECBE',
                  color: 'white',
                  borderRadius: '5px',
                  padding: '5px',
                  mb: 2,
                  mt: 2,
                }}
              >
                <Typography className="!border-b !border-white !my-1 !text-xl">
                  UID : {item?.u_id}
                </Typography>
                <Box className="!mx-1 ">
                  <Stack direction="row" justifyContent={'space-between'}>
                    <Typography className="hunp15">Level</Typography>
                    <Typography className="hunp13">
                      {item?.level_id || 0}
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent={'space-between'}>
                    <Typography className="hunp15">Deposit Amount</Typography>
                    <Typography className="hunp13">
                      {item?.first_deposit_amnt || 0}
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent={'space-between'}>
                    <Typography className="hunp15">Commission </Typography>
                    <Typography className="hunp13">
                      {item?.l01_amount || 0}
                    </Typography>
                  </Stack>
                  {/* <Stack direction="row" justifyContent={'space-between'}>
                    <Typography className="hunp15">Commission </Typography>
                    <Typography className="hunp13">
                      {(item?.betting > 0 ? item?.commission : 0) || 0}
                    </Typography>
                  </Stack> */}
                </Box>
              </Box>
            );
          })}
        </Box>
        <Stack className="!flex  items-center ">
          <svg className="svg-icon mr-2" width="120" height="120">
            <use xlinkHref="#icon-empty"></use>
          </svg>
          <Typography variant="body1" color="white">
            No Data
          </Typography>
        </Stack>
      </Container>
    </Layout>
  );
}
export default Subordinates;
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
  promotionBoxOuter: {
    width: '93%',
    background: '#001C54',
    padding: '5px',
    mt: '10px',
    borderRadius: '5px',
    marginLeft: '3.5%',
    paddingBottom: '15px',

    '&>div:nth-child(2)>div:nth-child(1), &>div:nth-child(3)>div:nth-child(1), &>div:nth-child(4)>div:nth-child(1)':
    {
      my: '10px',
      borderRight: '1px solid gray',
      width: '50%',
      textAlign: 'center',
    },
    '&>div:nth-child(2)>div:nth-child(2), &>div:nth-child(3)>div:nth-child(2), &>div:nth-child(4)>div:nth-child(2)':
    {
      my: '10px',
      width: '50%',
      textAlign: 'center',
    },
    '&>div:nth-child(2)>div>p:nth-child(1), &>div:nth-child(3)>div>p:nth-child(1), &>div:nth-child(4)>div>p:nth-child(1)':
    {
      color: 'white !important',
    },
    '&>div:nth-child(2)>div>p:nth-child(2), &>div:nth-child(3)>div>p:nth-child(2), &>div:nth-child(4)>div>p:nth-child(2)':
    {
      fontSize: '13px',
      fontWeight: 500,
      color: 'grey !important',
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
