import React, { useState } from 'react';
import nodata from '../../../assets/not.png';
import { ConfigProvider, Popup, DatetimePicker, Picker } from 'react-vant';
import enUS from 'react-vant/es/locale/lang/en-US';
import { Box, MenuItem, Select } from '@mui/material';
import moment from 'moment';
import all from '../../../assets/casbet.png';
import evocas from '../../../assets/evocas.png';
import casi from '../../../assets/casi.png';
import dvg from '../../../assets/dvg.png';
import ag from '../../../assets/ag.png';
import wm from '../../../assets/wm.png';
import mg from '../../../assets/mg.png';

export const CasinobetHistory = () => {
  const [value, setValue] = useState('1');
  const [showPicker, setShowPicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedValue, setSelectedValue] = useState('All');
  const [selectedDate, setSelectedDate] = useState(null);
  const ChangeHandler = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className="flex flex-col pt-1 mx-2">
      <Box sx={{ display: 'flex', gap: 2, px: 1 }}>
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
                selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : ''
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
          style={{ backgroundColor: '#ff000000' }}
        >
          <div
            style={{
              maxWidth: '430px',
              margin: '0 auto',
              backgroundColor: '#05012B',
              borderRadius: '12px 12px 0 0',
            }}
          >
            <div className="grid grid-cols-2 gap-3 pt-2 m-3">
              <div
                className={`flex h-14 p-2 items-center gap-2 rounded-lg ${
                  value === '1' ? 'bg-[#58E7BF] ' : 'bg-[#001C54]'
                }`}
                onClick={() => ChangeHandler('1')}
              >
                <img src={all} className="w-12" />
                <p
                  className={`${
                    value === '1' ? 'text-[#070931]' : 'text-[#4466b4]'
                  }`}
                >
                  All
                </p>
              </div>
              <div
                className={`flex h-14 p-2 items-center gap-2 rounded-lg ${
                  value === '2' ? 'bg-[#58E7BF] ' : 'bg-[#001C54]'
                }`}
                onClick={() => ChangeHandler('2')}
              >
                <img src={evocas} className="w-12" />
                <p
                  className={`${
                    value === '2' ? 'text-[#070931]' : 'text-[#4466b4]'
                  }`}
                >
                  EVO_Video
                </p>
              </div>
              <div
                className={`flex h-14 p-2 items-center gap-2 rounded-lg ${
                  value === '3' ? 'bg-[#58E7BF] ' : 'bg-[#001C54]'
                }`}
                onClick={() => ChangeHandler('3')}
              >
                <img src={casi} className="w-12" />
                <p
                  className={`${
                    value === '3' ? 'text-[#070931]' : 'text-[#4466b4]'
                  }`}
                >
                  SEXY_Video
                </p>
              </div>
              <div
                className={`flex h-14 p-2 items-center gap-2 rounded-lg ${
                  value === '4' ? 'bg-[#58E7BF] ' : 'bg-[#001C54]'
                }`}
                onClick={() => ChangeHandler('4')}
              >
                <img src={dvg} className="w-12" />
                <p
                  className={`${
                    value === '4' ? 'text-[#070931]' : 'text-[#4466b4]'
                  }`}
                >
                  DG
                </p>
              </div>
              <div
                className={`flex h-14 p-2 items-center gap-2 rounded-lg ${
                  value === '5' ? 'bg-[#58E7BF] ' : 'bg-[#001C54]'
                }`}
                onClick={() => ChangeHandler('5')}
              >
                <img src={ag} className="w-12" />
                <p
                  className={`${
                    value === '5' ? 'text-[#070931]' : 'text-[#4466b4]'
                  }`}
                >
                  AG_Video
                </p>
              </div>
              <div
                className={`flex h-14 p-2 items-center gap-2 rounded-lg ${
                  value === '6' ? 'bg-[#58E7BF] ' : 'bg-[#001C54]'
                }`}
                onClick={() => ChangeHandler('6')}
              >
                <img src={wm} className="w-12" />
                <p
                  className={`${
                    value === '6' ? 'text-[#070931]' : 'text-[#4466b4]'
                  }`}
                >
                  WM_Video
                </p>
              </div>
              <div
                className={`flex h-14 p-2 items-center gap-2 rounded-lg ${
                  value === '7' ? 'bg-[#58E7BF] ' : 'bg-[#001C54]'
                }`}
                onClick={() => ChangeHandler('7')}
              >
                <img src={mg} className="w-12" />
                <p
                  className={`${
                    value === '7' ? 'text-[#070931]' : 'text-[#4466b4]'
                  }`}
                >
                  MG_Video
                </p>
              </div>
            </div>
          </div>
        </Popup>
        <Popup
          round
          position="bottom"
          visible={showDatePicker}
          onClose={() => setShowDatePicker(false)}
          style={{ backgroundColor: '#ff000000' }}
        >
          <div
            style={{
              maxWidth: '430px',
              margin: '0 auto',
              backgroundColor: '##05012B',
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
      <div className="flex justify-center items-center p-9 ">
        <img src={nodata} />
      </div>
      {value === 1}
      {value === 2}
      {value === 3}
      {value === 4}
      {value === 5}
      {value === 6}
      {value === 7}
    </div>
  );
};
const selectStyle = {
  background: '#021244',
  color: 'white',
  borderRadius: '5px',
  width: '100%',
  height: '40px',
  px: 2,
  fontSize: 14,
  '.MuiSvgIcon-root': { color: 'white' },
};
