import { ArrowDropDown } from '@mui/icons-material';
import { Box, Container, MenuItem, Select, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import moment from 'moment';
import React from 'react';
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import backbtn from '../../assets/images/backBtn.png';
import Layout from '../../component/layout/Layout';
import { apiConnectorPost } from '../../services/apiconnector';
import { endpoint } from '../../services/urls';
import theme from '../../utils/theme';
import Calendar from './Calender';
import { ArrowLeft } from '@react-vant/icons';
import SvgIcons from '../../component/SvgIcons';
import { ConfigProvider, Picker, Popup, DatetimePicker } from 'react-vant';
import enUS from 'react-vant/es/locale/lang/en-US';


const MyCommission = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(
    moment(Date.now())?.format('YYYY-MM-DD')
  );

  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleDateSelect = (date) => {
    const selected = dayjs(date)?.format('YYYY-MM-DD');
    const today = dayjs().format('YYYY-MM-DD');

    if (dayjs(selected).isAfter(today)) {
      toast.error(
        'Future dates are not allowed. Please select today or an earlier date'
      );
      return;
    }
    setSelectedDate(selected);
    setIsOpen(false);
  };

  const fetchData = async () => {
    setLoading(true);
    const reqbody = {
      in_date: selectedDate,
    };
    try {
      const response = await apiConnectorPost(
        `${endpoint.commission_data}`,
        reqbody
      );
      if (response?.data?.msg === 'Data get successfully') {
        setData(response.data?.data);
      } else {
        toast.error('Data not found');
      }
    } catch (e) {
      toast.error(e?.message || 'An error occurred');
    }
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, [selectedDate]);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Layout header={false}>
        <Container sx={style.container} >
          <SvgIcons />
          <Box sx={style.header}>
            <Box component={NavLink} onClick={() => goBack()} sx={{ width: '10%' }}>
              <ArrowLeft sx={{ fontSize: '22px !important', }} />
            </Box>
            <Typography sx={{ width: '80%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Commission Income</Typography>
            <Typography sx={{ width: '10%' }} variant="body1" color="initial" component={NavLink} to="/promotion/Subordinate/new">
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, px: 2, }}>
            <Box onClick={() => setShowDatePicker(true)} sx={{ width: '100%' }}>
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
          {/* <Stack
            direction="row"
            justifyContent={'space-between'}
            className="!mt-5 !mx-3 "
            sx={{ pb: 2 }}
          >
            <Box
              className="!border  !p-2 !flex !justify-between"
              onClick={() => setIsOpen(true)}
            >
              {selectedDate} <ArrowDropDown />
            </Box>
          </Stack> */}
          {data?.map((item) => {
            return (
              <div className="flex flex-col justify-center gap-1 mt-5 !mb-20 m-2">
                <div
                  className="flex flex-col   justify-center shadow-xl rounded-lg    p-3"
                  style={{ background: '#00ECBE', color: 'white' }}
                >
                  <p className="">Settlement successfully </p>
                  <p className="">{item?.satelment_date || 0}</p>
                  The commission has been automatically credited to your balance
                </div>
                <div
                  className="flex justify-between shadow-xl  rounded-lg    p-3"
                  style={{ background: '#00ECBE', color: 'white' }}
                >
                  <p className="">Number of bettors</p>
                  <p className="font-bold">{item?.num_of_betters || 0}</p>
                </div>
                <div
                  className="flex justify-between shadow-xl  rounded-lg    p-3"
                  style={{ background: '#00ECBE', color: 'white' }}
                >
                  <p className="">Bet Amount</p>
                  <p className="font-bold">{item?.better_amount || 0}</p>
                </div>
                <div
                  className="flex justify-between shadow-xl  rounded-lg    p-3"
                  style={{ background: '#00ECBE', color: 'white' }}
                >
                  <p className="">Commission Payout</p>
                  <p className="font-bold">
                    {item?.total_commission_user || 0}
                  </p>
                </div>
                <div
                  className="flex justify-between shadow-xl  rounded-lg    p-3"
                  style={{ background: '#00ECBE', color: 'white' }}
                >
                  <p className="">Date</p>
                  <p className="font-bold">{item?.clossing_date || 0}</p>
                </div>
              </div>
            );
          })}
        </Container>
      </Layout>
      <div className="flex justify-center items-center fixed  bg-black bg-opacity-50">
        <div
          className={`drawer bg-white w-full max-w-[27rem] mx-auto  rounded-t-xl p-2 transition-all duration-300  ${isOpen ? 'open' : ''
            }`}
        >
          <div className="!flex flex-col justify-between ">
            <Calendar
              onDateSelect={handleDateSelect}
              selectedDate={selectedDate}
              className="!mt-10"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MyCommission;
const style = {
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
