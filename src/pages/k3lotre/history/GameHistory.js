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
import d6 from '../../../assets/images/r1.png';
import d2 from '../../../assets/images/r2.png';
import d5 from '../../../assets/images/r3.png';
import d4 from '../../../assets/images/r4.png';
import d3 from '../../../assets/images/r5.png';
import d1 from '../../../assets/images/r6.png';
import theme from '../../../utils/theme';

const GameHistory = ({ gid }) => {
  const dispatch = useDispatch();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const imgageArray = [d1, d2, d3, d4, d5, d6];
  const isLoading = false;

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
                Sum
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
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              '&>tr>td': { padding: '10px 5px', border: 'none' },
              '&>tr': { borderBottom: '1px solid #ced4d7' },
            }}
          >
            {visibleRows?.map((i) => {
              const resultArray = i?.result_string?.split(',').map(Number);
              const total = resultArray?.reduce((acc, curr) => acc + curr, 0);
              let resultType = '';
              if (total >= 3 && total <= 10) {
                resultType = 'Small';
              } else if (total >= 11 && total <= 18) {
                resultType = 'Big';
              }
              const oddEven = total % 2 === 0 ? 'Even' : 'Odd';
              return (
                <TableRow key={i?.gamesno} className="!w-[95%]">
                  <TableCell
                    sx={{ verticalAlign: 'bottom', textAlign: 'center' }}
                  >
                    <p className="my-4 text-white">{i?.gamesno}</p>
                  </TableCell>
                  <TableCell sx={{ verticalAlign: 'top', textAlign: 'center' }}>
                    <div className="flex justify-center gap-4 my-4 text-white">
                      <span className="w-[10%]">{total} </span>
                      <span className="w-[20%]">{resultType}</span>
                      <span className="w-[20%]"> {oddEven}</span>
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{ verticalAlign: 'bottom', textAlign: 'center' }}
                  >
                    <div className="flex justify-center gap-2 my-4">
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

export default GameHistory;
