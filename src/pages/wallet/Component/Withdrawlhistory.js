import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import allinactive from '../../../assets/images/allactive.png';
import allactive from '../../../assets/images/allinactive.png';
import backbtn from '../../../assets/images/backBtn.png';
import { apiConnectorGet } from '../../../services/apiconnector';
import { endpoint } from '../../../services/urls';
import CustomCircularProgress from '../../../shared/loder/CustomCircularProgress';
import theme from '../../../utils/theme';
import SvgIcons from '../../../component/SvgIcons';
import Layout from '../../../component/layout/Layout';
import { AppsO, ArrowLeft } from '@react-vant/icons';
import { ConfigProvider, Picker, Popup, DatetimePicker } from 'react-vant';
import enUS from 'react-vant/es/locale/lang/en-US';
import UPT from '../../../assets/images/payNameIcon_20250317165432r3g1.png';
import atmchip from '../../../assets/payNameIcon1.png';

function Withdrawlhistory() {
  const [isAllValue, setIsAllValue] = useState(false);
  const [visibleData, setvisibleData] = useState([]);
  const [value, setValue] = useState(1);

  const { isLoading, data } = useQuery(
    ['withdrawl_history'],
    () => apiConnectorGet(endpoint?.withdrwal_history_usdt),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const res = data?.data?.data || [];

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    isAllValue ? setvisibleData(res) : setvisibleData(res?.slice(0, 3));
  }, [isAllValue, res]);

  const [tab, setTab] = useState('All');
  const [showPicker, setShowPicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedValue, setSelectedValue] = useState('All');
  const [tempValue, setTempValue] = useState('All');
  const [selectedDate, setSelectedDate] = useState(null);
  const options = [
    { text: 'All', value: 'All' },
    { text: 'Pending', value: 'Pending' },
    { text: 'Approved', value: 'Approved' },
    { text: 'Rejected', value: 'Rejected' },
  ];

  return (
    <Layout header={false}>
      <CustomCircularProgress isLoading={isLoading} />
      <SvgIcons />
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={goBack} sx={{ width: '20%' }}>
            <ArrowLeft style={{ fontSize: '22px', color: 'white' }} />
          </Box>
          <Typography
            sx={{ width: '40%', fontSize: '16px' }}
            className="fcc roboto ffr"
          >
            Withdrawal history
          </Typography>
          <Typography sx={{ width: '20%' }}></Typography>
        </Box>
        <Box sx={{ background: '#020235', p: 2, borderRadius: 2 }}>
          <ToggleButtonGroup
            className="fcsb"
            value={tab}
            exclusive
            onChange={(e, newTab) => newTab && setTab(newTab)}
            sx={{ mb: 2, width: '100%' }}
          >
            <ToggleButton
              className="ffr"
              value="All"
              sx={getToggleBtnStyle(tab === 'All')}
            >
              <AppsO style={{ marginRight: '5px' }} /> All
            </ToggleButton>
            <ToggleButton
              className="ffr"
              value="USDT"
              sx={getToggleBtnStyle(tab === 'USDT')}
            >
              <Box
                component="img"
                src={atmchip}
                width={25}
                sx={{ mr: '5px' }}
              />{' '}
              USDT
            </ToggleButton>
            <ToggleButton
              className="ffr"
              value="UPI-QR"
              sx={getToggleBtnStyle(tab === 'UPI-QR')}
            >
              <Box component="img" src={UPT} width={25} sx={{ mr: '5px' }} />{' '}
              UPI-QR
            </ToggleButton>
          </ToggleButtonGroup>

          <Box sx={{ display: 'flex', gap: 2 }}>
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
                value={
                  selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : ''
                }
                displayEmpty
                fullWidth
                readOnly
                sx={selectStyle}
              >
                <MenuItem
                  value={
                    selectedDate
                      ? moment(selectedDate).format('YYYY-MM-DD')
                      : ''
                  }
                >
                  {selectedDate
                    ? moment(selectedDate).format('YYYY-MM-DD')
                    : 'Choose a Date'}
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
                  <span
                    onClick={() => setShowPicker(false)}
                    style={{ cursor: 'pointer' }}
                  >
                    Cancel
                  </span>
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
                  style={{
                    backgroundColor: '#05114d',
                    color: 'white',
                    textAlign: 'center',
                  }}
                  optionRender={(option) => (
                    <div
                      className="ffr"
                      style={{
                        color: 'white',
                        fontSize: '16px',
                        textAlign: 'center',
                        padding: '12px 0',
                      }}
                    >
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
        </Box>
        {/* <Box sx={{ padding: 1 }}>
          <Stack direction="row" justifyContent="space-between" mt={2}>
            <Button
              className={
                value === 1 ? ' gametableactive gametable' : ' gametable'
              }
              onClick={() => handleChange(1)}
            >
              {value === 1 ? (
                <Box component="img" src={allactive} width={20} mr={1}></Box>
              ) : (
                <Box component="img" src={allinactive} width={20} mr={1}></Box>
              )}
              All
            </Button>
          </Stack>
        </Box> */}
        <CustomCircularProgress isLoading={isLoading} />

        {visibleData?.map((i, index) => {
          return (
            <Box
              key={index}
              sx={{
                mb: 2,
                padding: '10px',
                borderRadius: '10px',
                background: '#011341',
                width: '92%',
                margin: 'auto',
                mt: 2,
              }}
            >
              <Stack
                direction="row"
                sx={{
                  paddingBottom: '10px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #efefef',
                }}
              >
                <Box>
                  <Typography
                    sx={{ background: '#17B15E' }}
                    className=" ffr !text-white rounded px-2 py-1 !flex justify-center fs14 fw500"
                  >
                    Withdrawl
                  </Typography>
                </Box>
                <Box
                  className="ffr"
                  sx={{
                    color: '#17B15E',
                    textTransform: 'capitalize',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  {i?.tr15_status}
                </Box>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  '&>p:nth-child(1)': {
                    fontSize: '13px',
                    fontWeight: '600',
                    py: 1,
                  },
                  '&>p:nth-child(2)': {
                    fontSize: '13px',
                    fontWeight: '600',
                    py: 1,
                  },
                }}
              >
                <Typography variant="body1" color="#92a8e3" className="ffr">
                  Balance
                </Typography>
                <Typography variant="body1" color="#dd9138" className="ffr">
                  {' '}
                  {i?.tr15_amt}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  '&>p': {
                    fontSize: '13px',
                    fontWeight: '600',
                    py: 1,
                  },
                }}
              >
                <Typography variant="body1" color="#92a8e3" className="ffr">
                  Type
                </Typography>
                <Typography variant="body1" color="#92a8e3" className="ffr">
                  {i?.Deposit_type}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  '&>p': {
                    fontSize: '13px',
                    fontWeight: '600',
                    py: 1,
                  },
                }}
              >
                <Typography variant="body1" color="#92a8e3" className="ffr">
                  Date/Time
                </Typography>
                <Typography variant="body1" color="#92a8e3" className="ffr">
                  {moment.utc(i?.tr15_date)?.format('DD-MM-YYYY HH:mm:ss')}
                </Typography>
              </Stack>
              {i?.tr15_status === 'Pending' ? (
                ''
              ) : (
                <Stack
                  direction="row"
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '&>p': {
                      fontSize: '13px',
                      fontWeight: '600',
                      py: 1,
                    },
                  }}
                >
                  <Typography variant="body1" color="#92a8e3" className="ffr">
                    {i?.tr15_status === 'Success'
                      ? 'Success Date/Time'
                      : i?.tr15_status === 'Pending'
                      ? ''
                      : 'Failed Date/Time'}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="initial"
                    className="!text-green-500 ffr"
                  >
                    {moment.utc(i?.success_date).format('DD-MM-YYYY HH:mm:ss')}
                  </Typography>
                </Stack>
              )}
              <Stack
                direction="row"
                sx={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  '&>p': {
                    fontSize: '13px',
                    fontWeight: '600',
                    py: 1,
                  },
                }}
              >
                <Typography variant="body1" color="#92a8e3" className="ffr">
                  Order number
                </Typography>
                <Stack
                  direction="row"
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    '&>p:nth-child(1)': {
                      fontSize: '13px',
                      fontWeight: '600',
                      py: 1,
                    },
                    '&>p:nth-child(2)': {
                      fontSize: '13px',
                      fontWeight: '600',
                    },
                  }}
                >
                  <Typography variant="body1" color="#92a8e3" className="ffr">
                    {i?.tr15_trans}
                  </Typography>
                  <IconButton sx={{ padding: 0 }}>
                    <ContentCopyIcon
                      sx={{ color: '#888', width: '15px', ml: 1 }}
                    />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
          );
        })}

        <Button
          sx={style.paytmbtntwo}
          variant="outlined"
          onClick={() => setIsAllValue(!isAllValue)}
        >
          {isAllValue ? 'Show Less' : ' All history'}
        </Button>
      </Container>
    </Layout>
  );
}
export default Withdrawlhistory;

const getToggleBtnStyle = (active) => ({
  width: '30%',
  py: 1,
  borderRadius: '5px !important',
  color: '#fff',
  background: active ? 'linear-gradient(90deg, #7afec3, #02afb6)' : '#0a0e2e',
  fontWeight: 600,
  fontSize: 13,
  textTransform: 'none',
  '&:hover': {
    background: active ? 'linear-gradient(90deg, #7afec3, #02afb6)' : '#011341',
  },
});

const selectStyle = {
  background: '#021244',
  color: 'white',
  borderRadius: '5px',
  width: '100%',
  px: 2,
  fontSize: 14,
  '.MuiSvgIcon-root': { color: 'white' },
};

const infoLabel = {
  color: '#888',
  fontSize: '13px',
  fontWeight: 600,
  py: 1,
};

const infoValue = {
  color: theme.palette.primary.main,
  fontSize: '13px',
  fontWeight: 600,
  py: 1,
};

const style = {
  container: {
    background: '#05012B',
    width: '100%',
    height: '100vh',
    overflow: 'auto',
  },
  header: {
    padding: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '16px',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
    },
  },
  paytmbtntwo: {
    borderRadius: '20px',
    textTransform: 'capitalize',
    mb: 4,
    width: '92%',
    mt: 2,
    mx: 2,
    padding: '7px',
    '&:hover': { border: '1px solid transparent' },
  },
  wdbtn: {
    width: '95% !important',
    boxShadow: '0 0.05333rem #b6bad0',
    borderRadius: '20px',
    border: 'none',
    color: '#fff',
    letterSpacing: '0.13333rem',
    fontWeight: '700',
    fontSize: '15px',
    height: '0.93333rem',
    width: '100%',
    background:
      'linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%), linear-gradient(180deg, #cfd1de 0%, #c7c9d9 100%)',
    backgroundSize: '100% 100%, 100% 100%',
    backgroundPosition: 'center, center',
    backgroundRepeat: 'no-repeat, no-repeat',
    textShadow: '0 0.02667rem 0.01333rem #afb0be',
    padding: '20px',
    mt: 3,
  },
};
