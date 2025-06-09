import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import {
  Box,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import moment from 'moment';
import * as React from 'react';
import { useQuery } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import nodatafoundimage from '../../../assets/images/nodatafoundimage.png';
import Layout from '../../../component/layout/Layout';
import {
  apiConnectorGet,
  apiConnectorPost,
} from '../../../services/apiconnector';
import { endpoint } from '../../../services/urls';
import CustomCircularProgress from '../../../shared/loder/CustomCircularProgress';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const zubgback = '#00ECBE';
const zubgmid = '#00ECBE';
const zubgbackgrad = '#00ECBE';
function CashBackBonus() {
  const [visibleRows, setVisibleRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const reqbody = {
    income_type: 5,
  };
  const { isLoading, data } = useQuery(
    ['Daily Active Base Sallery', reqbody],
    () => apiConnectorPost(endpoint?.get_all_income, reqbody),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
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

  // React.useEffect(() => {
  //   setVisibleRows(
  //     res?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  //   );
  // }, [page, rowsPerPage, res]);
  // if (!isLoading && !res)
  //   return (
  //     <Layout>
  //       <Container
  //         sx={{
  //           width: '100%',
  //           height: '100vh',
  //           overflow: 'auto',
  //           mb: 5,
  //         }}
  //       >
  //         <Box sx={style.header}>
  //           <Box component={NavLink} onClick={goBack}>
  //             <KeyboardArrowLeftOutlinedIcon />
  //           </Box>
  //           <p>Daily Active Base Sallery</p>
  //         </Box>
  //         <div>
  //           <img className="" src={nodatafoundimage} />
  //         </div>
  //       </Container>
  //     </Layout>
  //   );
  return (
    <Layout header={false}>
      <Container
        sx={{
          width: '100%',
          height: '100vh',
          overflow: 'auto',
          mb: 5,
        }}
        className="no-scrollbar"
      >
        <CustomCircularProgress isLoading={isLoading} />
        {/* <Box sx={style.header}>
          <Box component={NavLink} onClick={goBack}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <p>Daily Active Base Sallery</p>
        </Box> */}
        <Box className=" !bg-[#05012B] p-2">
          <Stack
            direction="row"
            sx={{
              alignItems: 'end',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <NavLink onClick={goBack}>
              <ArrowBackIosNewIcon className="!text-white !text-lg ml-1" />
            </NavLink>
            <Box sx={{ position: 'absolute', left: '30%', top: '10%' }}>
              <Typography
                variant="body1"
                sx={{ color: 'white', fontSize: '16px', fontWeight: '600' }}
              >
                Invitation record
              </Typography>
            </Box>
          </Stack>
        </Box>
        <div
          className="!overflow-x-auto"
          style={{ width: '95%', marginLeft: '2.5%', marginTop: '16px' }}
        >
          {/* <Table sx={{ background: '#00ECBE', boxShadow: '#fff' }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ color: 'white' }}
                  className="!p-2 !font-bold !border !text-xs !border-r  !text-center !border-b !border-white"
                  id="tablepadding"
                >
                  S.No
                </TableCell>
                <TableCell
                  sx={{ color: 'white' }}
                  className="!p-2 !font-bold !border !text-xs !border-r !text-center  !border-b !border-white"
                  id="tablepadding"
                >
                  Reg. Date/Time
                </TableCell>
                <TableCell
                  sx={{ color: 'white' }}
                  className="!p-2 !font-bold !border !text-xs !border-r !text-center  !border-b !border-white"
                  id="tablepadding"
                >
                  Dep. Amnt.
                </TableCell>
                <TableCell
                  sx={{ color: 'white' }}
                  className="!p-2 !font-bold !border !text-xs !border-r !text-center  !border-b !border-white"
                  id="tablepadding"
                >
                  Mem. UID
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows?.map((i, index) => (
                <TableRow key={i?.id}>
                  <TableCell
                    sx={{ color: 'white' }}
                    className="!border !border-r !text-xs !text-center !mt-5  !border-b !border-white"
                  >
                    {index + 1}
                  </TableCell>
                  <TableCell
                    sx={{ color: 'white' }}
                    className="!border !border-r !text-xs !text-center  !border-b !border-white"
                  >
                    {moment(i?.l01_date).format('DD-MM-YYYY HH:mm:ss')}
                  </TableCell>
                  <TableCell
                    sx={{ color: 'white' }}
                    className="!border !border-r !text-xs !text-center  !border-b !border-white"
                  >
                    {Number(i?.l01_deposit_amnt)?.toFixed(2)}
                  </TableCell>
                  <TableCell
                    sx={{ color: 'white' }}
                    className="!border !border-r !text-xs !text-center !border-b !border-white"
                  >
                    {i?.username}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box className="paginationTable ">
            <TablePagination
              sx={{
                background: '#00ECBE',
                color: 'white',
                borderRadius: '10px',
                marginTop: '10px',
                mb: 10,
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
          </Box> */}
          <div className="flex flex-col bg-white bg-opacity-10 p-2">
            <div className="flex items-center justify-between ">
              <p className="text-white text-base ">MemberNNG5Y9SL</p>
              <p>UID:1636378</p>
            </div>
            <div className="flex items-center justify-between pt-1">
              <p className="text-xs">Registration time</p>
              <div className="flex gap-1 items-end text-xs">
                <p className="text-xs ">2025-04-11</p>
                <p className="text-xs ">12:56:59</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <p className="text-sm">Deposit amount</p>
              <div className="flex gap-1 items-end text-xs">
                <p className="text-sm text-[#DD913A]">₹</p>
                <p className="text-sm text-[#DD913A]">200.00</p>
              </div>
            </div>
          </div>
          <div className=" text-center p-2">
            <p className="text-xs text-gray-400">No more</p>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default CashBackBonus;

const style = {
  header: {
    padding: '15px 8px',
    background: zubgback,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '15px',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
    },
    '& > a > svg': {
      color: 'white',
      fontSize: '35px',
    },
  },
  wthui: {
    textAlign: 'center',
    width: '32%',
    minHeight: '15vh',
    background: zubgmid,
    borderRadius: '10px',
    mb: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&>div>p': { color: 'white' },
  },
  paymentlink: {
    width: '32%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '15vh',
    background: zubgmid,
    borderRadius: '10px',
    mb: '10px',
    '&>p': {
      color: 'white',
      fontSize: '12px',
      fontWeight: '500',
      textAlign: 'center',
      mt: '5px',
    },
  },
  paymentBoxOuter: {
    width: '95%',
    margin: 'auto',
    my: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paytmbtn: {
    mb: 2,
    background: zubgback,
    color: 'white !important',
    width: '31%',
    border: '1px solid white',
    padding: '10px',
    '&:hover': { background: zubgbackgrad, border: '1px solid transparent' },
  },
  paytmbtntwo: {
    borderRadius: '5px',
    textTransform: 'capitalize',
    mb: 2,
    background: zubgbackgrad,
    color: 'white !important',
    width: '100%',
    mt: 2,
    border: '1px solid white',
    padding: '10px',
    '&:hover': { background: zubgbackgrad, border: '1px solid transparent' },
  },
  rechargeinstext: {
    mb: '10px',
    alignItems: 'center',
    justifyContent: 'start',
    '&>p': { marginLeft: '10px', color: 'white !important', fontSize: '14px' },
  },
};
