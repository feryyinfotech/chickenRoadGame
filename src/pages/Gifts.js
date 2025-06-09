import { Box, Button, Container, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import { ArrowLeft } from '@react-vant/icons';
import moment from 'moment';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery, useQueryClient } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import gifts from '../assets/images/giftss.png';
import Layout from '../component/layout/Layout';
import { apiConnectorPost } from '../services/apiconnector';
import { endpoint } from '../services/urls';
import SvgIcons from '../component/SvgIcons';
import VantToast from '../shared/toast/Toast';


const Gifts = () => {
  const [code, setCode] = useState('')
  const navigate = useNavigate();
  const client = useQueryClient();
  const [visibleRows, setVisibleRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const goBack = () => {
    navigate(-1);
  };

  const ClaimIncomeFn = async (id, amnt) => {
    if(!code){
      VantToast("Please Fill The Coupon Code")
    }
    try {
      const reqBody = {
        coupon_code: code
      }
      const response = await apiConnectorPost(endpoint?.get_claim_card, reqBody);
      toast(response?.data?.msg, { id: 1 });
      if (response?.data?.msg === "Coupon Crashed.") {
        client.refetchQueries("get_card_list");
      }
    } catch (e) {
      VantToast(e?.message, 'f');
      console.log(e);
    }
  };
  const reqbody = {
    income_type: 10
  }
  const { data } = useQuery(
    ["Gift Bonus", reqbody],
    () => apiConnectorPost(endpoint?.get_all_income, reqbody),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );
  const res = data?.data?.data;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    setVisibleRows(
      res?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      )
    );
  }, [page, rowsPerPage, res]);

  return (
    <Layout header={false} className="overflow-y-auto">
      <SvgIcons />
      <Container sx={{ background: '#05012B' }} className="h-full">
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
            <ArrowLeft sx={{ fontSize: '22px !important', }} />
          </Box>
          <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">
            Gift</Typography>
          <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
        </Box>
        <div className="w-full ">
          <img src={gifts} />
        </div>
        <div className="w-[95%] m-3 p-3  text-white flex flex-col shadow-lg rounded-lg " style={{ background: '#011341' }}>
          <p className=" wh">Hi</p>
          <p className=" font-semibold wh roboto">
            We have a gift for you
          </p>
          <p className="mt-2 text-sm white roboto">
            Please enter the gift code below
          </p>
          <input
            style={{ background: '#05012B', borderRadius: '30px' }}
            id="coupon_code"
            name="coupon_code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="text"
            placeholder="Please enter gift code here"
            className="w-full mt-3 p-3    placeholder-gray-500 outline-none"
          />


          <Button sx={{ background: 'linear-gradient(90deg, #7afec3, #02afb6) !important', borderRadius: '30px', width: '100%', mt: 2, mb: 4, padding: '8px', color: 'black', }}
            onClick={ClaimIncomeFn}>
            Receive
          </Button>
        </div>
        <div style={{ background: '#011341' }} className="w-[95%] max-w-md md:max-w-lg h-[300px]  mt-4 m-3 p-4 flex flex-col  shadow-lg rounded-lg">
          <div className="flex items-center space-x-4">
            <svg className="svg-icon" width="25" height="25">
              <use xlinkHref="#icon-giftHistory"></use>
            </svg>
            <p className="text-base text-white">History</p>
          </div>
          <Table sx={{ background: "#011341", boxShadow: "#fff", mt: 2, }}>
            <TableHead>
              <TableRow className="!h-10" >
                <TableCell sx={{ color: 'white' }} className=" !font-bold !border !text-sm !border-r  !text-center !border-b !border-white" id="tablepadding">S.No</TableCell>
                <TableCell sx={{ color: 'white' }} className=" !font-bold !border !text-sm !border-r !text-center  !border-b !border-white" id="tablepadding">Date/Time</TableCell>
                <TableCell sx={{ color: 'white' }} className=" !font-bold !border !text-sm !border-r !text-center  !border-b !border-white" id="tablepadding">Amount</TableCell>
                <TableCell sx={{ color: 'white' }} className=" !font-bold !border !text-sm !border-r !text-center  !border-b !border-white" id="tablepadding">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows?.map((i, index) => (
                <TableRow key={i?.id}>
                  <TableCell sx={{ color: 'white', padding: '10px !important' }} className="!border !border-r !text-xs !text-center !mt-5  !border-b !border-white">{index + 1}</TableCell>
                  <TableCell sx={{ color: 'white', padding: '10px !important' }} className="!border !border-r !text-xs !text-center  !border-b !border-white">
                    {moment(i?.created_at).format("DD-MM-YYYY HH:mm:ss")}
                  </TableCell>
                  <TableCell sx={{ color: 'white', padding: '10px !important' }} className="!border !border-r !text-xs !text-center !border-b !border-white">{i?.l01_amount}</TableCell>
                  <TableCell sx={{ color: 'white', padding: '10px !important' }} className="!border !border-r !text-xs !text-center !border-b !border-white">{i?.l01_trans_des}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box className="paginationTable ">
            <TablePagination
              sx={{
                background: "#003847",
                color: "black !important",
                borderRadius: "5px",
                marginTop: "10px",
                mb: 14,
              }}
              rowsPerPageOptions={[10, 15, 25, 35]}
              component="div"
              count={res?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Rows"
            />
          </Box>
        </div>
        {/* <div className="flex flex-col p-3 justify-center items-center">
            <img
              src={nodatafound}
              className="w-[80%] opacity-60"
              alt="No Data"
            />
            <p className="text-sm mt-2">No Data Found</p>
          </div> */}
        {/* </div> */}
      </Container>
    </Layout>
  );
};

export default Gifts;

const style = {
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
}
