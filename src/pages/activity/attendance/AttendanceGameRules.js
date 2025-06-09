import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../../component/layout/Layout';
import { Box, Container, Stack, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import SvgIcons from '../../../component/SvgIcons';
import game from "../../../assets/atnrules.png"
import game1 from "../../../assets/atnrule2.png"
const AttendanceGameRules = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  // const data = [
  //   {
  //     serialnumber: '1',
  //     amount: '₹300.00',
  //     bonus: '₹7.00',
  //   },
  //   {
  //     serialnumber: '2',
  //     amount: '₹1,000.00',
  //     bonus: '₹20.00',
  //   },
  //   {
  //     serialnumber: '3',
  //     amount: '₹3,000.00',
  //     bonus: '₹100.00',
  //   },
  //   {
  //     serialnumber: '4',
  //     amount: '₹8,000.00',
  //     bonus: '₹200.00',
  //   },
  //   {
  //     serialnumber: '5',
  //     amount: '₹20,000.00',
  //     bonus: '₹450.00',
  //   },
  //   {
  //     serialnumber: '6',
  //     amount: '₹80,000.00',
  //     bonus: '₹2,400.00',
  //   },
  //   {
  //     serialnumber: '7',
  //     amount: '₹200,000.00',
  //     bonus: '₹6,400.00',
  //   },
  // ];
  return (
    <Layout header={false}>
      <SvgIcons />
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
            <ArrowLeft sx={{ fontSize: '22px !important', }} />
          </Box>
          <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Game Rules</Typography>
          <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
        </Box>
        <div>
          <img src={game} alt=''/>
          <img src={game1} alt=''/>
        </div>
        {/* <div className="flex flex-col justify-between items-center">
          <div className="grid grid-cols-3 place-content-between shadow-md !font-semibold bg-[#2c5eca] p-1 rounded-t-md ">
            <p className="!text-white">Continuous attendance</p>
            <p className="!text-white">Accumulated amount</p>
            <p className="!text-white">Attendance bonus</p>
          </div>
          {data.map((i, index) => (
            <div
              className={`flex w-full !font-semibold items-center justify-between p-3 text-center 
      ${index % 2 === 0 ? 'bg-gray-200 ' : ' bg-white bg-opacity-30'}`}
              key={i.serialnumber}
            >
              <p className="w-1/3 text-sm">{i.serialnumber}</p>
              <p className="w-1/3 text-sm">{i.amount}</p>
              <p className="w-1/3 text-sm">{i.bonus}</p>
            </div>
          ))}
        </div> */}
        {/* <div className="flex flex-col  items-center mt-2 p-2 rounded-lg shadow-lg ">
          <div className="flex flex-col ">
            <h1 className="flex items-center justify-center w-full bg-gradient-to-r from-[#F4DD95] to-[#CA9B49] text-white text-lg  py-2 rounded-t-lg">
              Rules
            </h1>
            <ul className=" p-4 rounded-b-lg  text-sm space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">♦</span>
                The higher the number of consecutive login days, the more
                rewards you get, up to 7 consecutive days.
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">♦</span>
                During the activity, please check once a day.
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">♦</span>
                Players with no deposit history cannot claim the bonus.
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">♦</span>
                Deposit requirements must be met from day one.
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">♦</span>
                The platform reserves the right to final interpretation of this
                activity.
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">♦</span>
                When you encounter problems, please contact customer service.
              </li>
            </ul>
          </div>
        </div> */}
      </Container>
    </Layout>
  );
};

export default AttendanceGameRules;
export const style = {
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