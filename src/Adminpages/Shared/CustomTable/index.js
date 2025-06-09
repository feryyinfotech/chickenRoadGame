import {
  Box,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import React from "react";

const CustomTable = ({
  tablehead,
  tablerow,
  className,
  isLoading,
  isTotal,
}) => {
  // console.log(tablerow)
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // backgroundColor: theme.palette.common.black,
      // color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: "4px 10px !important", // Adjust the padding values as needed
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      // backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const visibleRows = React.useMemo(
    () => tablerow?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, tablerow]
  );
  return (
    <>
      <TableContainer sx={{}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className="">
            <TableRow>
              {tablehead.map((column) => (
                <TableCell className=" !font-bold  !text-center">
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => {
                return (
                  <StyledTableRow>
                    {tablehead.map(() => (
                      <TableCell>
                        <Skeleton />
                      </TableCell>
                    ))}
                  </StyledTableRow>
                );
              })
            ) : tablerow?.length === 0 ? (
              <TableRow>
                {tablehead
                  ?.slice(0, parseInt(tablehead?.length / 2 - 1))
                  .map((column) => (
                    <TableCell></TableCell>
                  ))}
                <TableCell>No data Found</TableCell>
              </TableRow>
            ) : (
              visibleRows?.map((row, index) => (
                <StyledTableRow
                  key={index}
                  className="hover:!bg-purple-200 cursor-pointer"
                >
                  {row?.map((i) => {
                    return (
                      <StyledTableCell
                        component="th"
                        scope="row"
                        className=" !text-center !py-[10px]"
                      >
                        {i}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {isTotal && isTotal}
      <Box sx={{ mt: 3 }}>
        <Stack spacing={2}>
          <TablePagination
            className={""}
            rowsPerPageOptions={[10, 15, 20]}
            component="div"
            count={tablerow?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Rows per page:"
          />
        </Stack>
      </Box>
    </>
  );
};

export default CustomTable;
