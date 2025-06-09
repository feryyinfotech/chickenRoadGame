import {
  Box, Button, Container,
  MenuItem,
  Select,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { AppsO, ArrowLeft } from '@react-vant/icons';
import moment from 'moment';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import { ConfigProvider, Picker, Popup, DatetimePicker } from 'react-vant';
import enUS from 'react-vant/es/locale/lang/en-US';
import UPT from "../../../assets/images/payNameIcon_20250317165432r3g1.png";
import atmchip from "../../../assets/payNameIcon1.png";
import Layout from '../../../component/layout/Layout';
import SvgIcons from '../../../component/SvgIcons';
import { apiConnectorGet } from '../../../services/apiconnector';
import { endpoint } from '../../../services/urls';
import CustomCircularProgress from '../../../shared/loder/CustomCircularProgress';
import theme from '../../../utils/theme';

function Depositehistory() {

  const [tab, setTab] = useState('All');
  const [showPicker, setShowPicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedValue, setSelectedValue] = useState('All');
  const [isAllValue, setIsAllValue] = useState(false);
  const [tempValue, setTempValue] = useState('All');
  const [selectedDate, setSelectedDate] = useState(null);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { isLoading, data } = useQuery(
    ['deposit_history_usdt'],
    () => apiConnectorGet(endpoint?.deposit_history_usdt),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const res = data?.data?.data || [];
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
          <Typography sx={{ width: '40%', fontSize: '18px' }} className="fcc roboto ffr">
            Deposit history
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
            <ToggleButton className=" ffr fs14 fcc" value="All" sx={getToggleBtnStyle(tab === 'All')}>
              <AppsO style={{ marginRight: '5px' }} /> All
            </ToggleButton>
            <ToggleButton className=" ffr" value="USDT" sx={getToggleBtnStyle(tab === 'USDT')}>
              <Box className=" ffr" component="img" src={atmchip} width={25} sx={{ mr: '5px' }} /> USDT
            </ToggleButton>
            <ToggleButton className=" ffr" value="UPI-QR" sx={getToggleBtnStyle(tab === 'UPI-QR')}>
              <Box className=" ffr" component="img" src={UPT} width={25} sx={{ mr: '5px' }} /> UPI-QR
            </ToggleButton>
          </ToggleButtonGroup>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box onClick={() => setShowPicker(true)} sx={{ width: '50%' }}>
              <Select className=" ffr"
                value={selectedValue}
                displayEmpty
                fullWidth
                readOnly
                sx={{ ...selectStyle, width: '100%' }}
              >
                <MenuItem value={selectedValue} className=" ffr">{selectedValue}</MenuItem>
              </Select>
            </Box>
            <Box onClick={() => setShowDatePicker(true)} sx={{ width: '50%' }}>
              <Select className=" ffr"
                value={selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : ''}
                displayEmpty
                fullWidth
                readOnly
                sx={selectStyle}
              >
                <MenuItem className=" ffr" value={selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : ''}>
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
                  <span onClick={() => setShowPicker(false)} style={{ cursor: 'pointer' }} className=" ffr">Cancel</span>
                  <span className=" ffr">Status</span>
                  <span
                    onClick={() => {
                      setSelectedValue(tempValue);
                      setShowPicker(false);
                    }} className=" ffr"
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
              <div className=" ffr"
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
        {res.map((i, index) => (
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
              justifyContent="space-between"
              alignItems="center"
              sx={{ paddingBottom: '10px', borderBottom: '1px solid #6c6c6c' }}
            >
              <Typography sx={{ background: '#17B15E', }} className="ffr !text-white rounded px-3 py-1 !flex justify-center  fs15 fw500">
                Deposit
              </Typography>
              <Typography sx={infoValue} className=" ffr" >{i?.tr15_status}</Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Typography className=" ffr" sx={infoLabel}>Balance</Typography>
              <Typography className=" ffr" sx={{ ...infoValue, color: '#dd9138 !important' }}>{i?.tr15_amt}</Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Typography className=" ffr" sx={infoLabel}>Type</Typography>
              <Typography className=" ffr" sx={infoValue}>{i?.Deposit_type}</Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Typography className=" ffr" sx={infoLabel}>Time</Typography>
              <Typography className=" ffr" sx={infoLabel}>
                {moment.utc(i?.tr15_date).format('DD-MM-YYYY HH:mm:ss')}
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography className=" ffr" sx={infoLabel}>Order number</Typography>
              <Typography className=" ffr flex items-center" sx={infoLabel} >
                RC2025041112591386176124a    <svg className="svg-icon" width="15" height="15" style={{ marginLeft: '5px' }}>
                  <use xlinkHref="#icon-copy"></use>
                </svg>
              </Typography>
            </Stack>
          </Box>
        ))}

        <Button
          sx={style.paytmbtntwo}
          variant="outlined"
          onClick={() => setIsAllValue(!isAllValue)}
        >
          {isAllValue ? 'Show Less' : 'All History'}
        </Button>
      </Container>
    </Layout>
  );
}

export default Depositehistory;

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
  color: '#92a8e3',
  fontSize: '13px',
  fontWeight: 600,
  py: '6px',
};

const infoValue = {
  color: '#92A8E3',
  fontSize: '15px',
  fontWeight: 600,
  py: '6px',
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
    mb: 2,
    width: '92%',
    mt: 2,
    mx: 2,
    padding: '5px',
  },
};