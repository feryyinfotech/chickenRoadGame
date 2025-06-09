import {
  Box,
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import d6 from '../../../assets/images/r1.png';
import d2 from '../../../assets/images/r2.png';
import d5 from '../../../assets/images/r3.png';
import d4 from '../../../assets/images/r4.png';
import d3 from '../../../assets/images/r5.png';
import d1 from '../../../assets/images/r6.png';
import theme from '../../../utils/theme';

const Chart = ({ gid }) => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const navigate = useNavigate();
  const isLoading = false;
  const imgageArray = [d1, d2, d3, d4, d5, d6];
  const game_history_data = useSelector(
    (state) => state.aviator.gameHistory_trx_one_min
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () =>
      game_history_data?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [page, rowsPerPage, game_history_data]
  );

  function returnResultString(str) {
    const num = str?.trim()?.split(',');
    let f_num = Number(num?.[0]);
    let s_num = Number(num?.[1]);
    let t_num = Number(num?.[2]);
    if (f_num === s_num && s_num === t_num) return 'Three Same Number';
    else if (f_num === s_num || s_num === t_num || f_num === t_num)
      return 'Two Same Number';
    else return 'No Same Number';
  }
  if (isLoading)
    return (
      <div className="!w-full flex justify-center">
        <CircularProgress />
      </div>
    );
  return (
    <Box mt={2}>
      <TableContainer>
        <Table sx={{ maxWidth: 400 }} aria-label="simple table">
          <TableHead
            sx={{
              background: theme.palette.primary.main,
              '&>tr>th': {
                padding: 1,
                fontSize: '13px',
                fontWeight: 700,
                color: 'white',
              },
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  verticalAlign: 'bottom',
                  padding: '10px 0px !important',
                  textAlign: 'center',
                }}
                className="!text-sm  !pl-[2px] !pr-0"
              >
                Period
              </TableCell>

              <TableCell
                sx={{
                  verticalAlign: 'bottom',
                  padding: '10px 0px  !important',
                  textAlign: 'center',
                }}
                className="!text-sm  !pr-0 !pl-1"
              >
                Result
              </TableCell>
              <TableCell
                sx={{
                  verticalAlign: 'bottom',
                  padding: '10px 0px  !important',
                  textAlign: 'center',
                }}
                className="!text-sm  !pr-0 !pl-1"
              >
                Number
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              '&>tr>td': { padding: '10px 5px', border: 'none' },
              '&>tr': { borderBottom: '1px solid #ced4d7' },
            }}
          >
            {visibleRows?.map((i) => {
              const resultArray = i?.result_string?.split(',')?.map(Number);
              return (
                <TableRow className="!w-[95%]">
                  <TableCell
                    sx={{ verticalAlign: 'bottom', textAlign: 'center' }}
                  >
                    <p className="text-white my-4">{i?.gamesno}</p>
                  </TableCell>
                  <TableCell
                    sx={{ verticalAlign: 'bottom', textAlign: 'center' }}
                  >
                    <div className="flex justify-center gap-4 my-4">
                      {resultArray?.map((num, index) => (
                        <img
                          key={index}
                          src={imgageArray[num - 1]}
                          alt={`result-${num}`}
                          className="w-5"
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell sx={{ verticalAlign: 'top', textAlign: 'center' }}>
                    <div className="flex justify-center gap-2">
                      <span className="text-white my-4">
                        {returnResultString(i?.result_string)}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ background: 'white', mt: 3 }}>
        <Stack spacing={2}>
          <TablePagination
            sx={{ background: '#001C54', color: 'white' }}
            rowsPerPageOptions={[10, 15, 20]}
            component="div"
            // count={game_history_data?.length}
            count={500}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Rows"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Chart;
