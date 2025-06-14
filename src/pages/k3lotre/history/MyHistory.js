import { Box, Stack, TablePagination } from "@mui/material";
import * as React from "react";
import { useQuery } from "react-query";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import moment from "moment";
import { useSelector } from "react-redux";
import { rupees, zubgback } from "../../../services/urls";
import { k3_HistoryFn } from "../../../services/apiCallings";
import CustomCircularProgress from "../../../shared/loder/CustomCircularProgress";

const MyHistory = ({ gid }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const my_history_data = useSelector(
    (state) => state.aviator.myHistory_trx_one_min
  );
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const visibleRows = React.useMemo(() => {
    const overAllArray = my_history_data?.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
    return overAllArray;
  }, [
    page,
    rowsPerPage,
    my_history_data
  ]);


  return (
    <Box mt={2}>
      <Stack direction="row" className="onegotextbox"></Stack>
      <div className="flex flex-col gap-[2px] ">
        {visibleRows?.map((i) => {
          return (
            <div style={{ mb: 2 }}>
              <Accordion className="!rounded-lg">
                <AccordionSummary
                  expandIcon={
                    <ArrowDownwardIcon
                      sx={{ color: "black", fontSize: "15px" }}
                    />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ color: "white" }}
                >
                  <div className="!w-full !flex !justify-between">
                    <p className="!text-black ">{i?.gamesno}</p>
                    <p
                      className={`${i?.status === "0"
                        ? "!text-red-600"
                        : i?.status === "1"
                          ? "!text-green-600"
                          : "!text-red-600"
                        }`}
                    >
                      {i?.status === "0"
                        ? "Pending"
                        : i?.status === "1"
                          ? "Win"
                          : "Loss"}
                    </p>

                    <span
                      style={{ mr: 1 }}
                      className={`${i?.status === "0"
                        ? "!text-red-600"
                        : i?.status === "1"
                          ? "!text-green-600"
                          : "!text-red-600"
                        }`}
                    >
                      {" "}
                      {rupees}{" "}
                      {i?.status === "1"
                        ? Number(i?.win)?.toFixed(2)
                        : Number(i?.amount || 0).toFixed(2)}
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails >
                  <p className={`!text-green-400 !font-semibold !text-lg`}>
                    Period Detail
                  </p>
                  <div className="!w-full !grid !grid-cols-2 !gap-y-1 ">
                    <span className="text-black py-1 px-2">
                      Period
                    </span>
                    <span className="text-black py-1 px-2 ">
                      {i?.gamesno}
                    </span>
                    <span className="text-black py-1 px-2 ">
                      Contract Money
                    </span>
                    <span className="text-black py-1 px-2 ">
                      {Number(i?.amount || 0).toFixed(2)}
                    </span>
                    <span className="text-black py-1 px-2 ">
                      Contract Count
                    </span>
                    <span className="text-black py-1 px-2 ">
                      0
                    </span>
                    <span className="text-black py-1 px-2 ">
                      Delivery
                    </span>
                    <span className="text-black py-1 px-2 ">
                      {Number(i?.deducted_amount || 0).toFixed(2)}
                    </span>
                    <span className="text-black py-1 px-2 ">
                      Fee
                    </span>
                    <span className="text-black py-1 px-2 ">
                      {(
                        Number(i?.commission || 0)
                      ).toFixed(2)}
                    </span>
                    {/* <span className="text-black py-1 px-2 ">
                      Open Price
                    </span>
                    <span className="text-black py-1 px-2 ">
                      {i?.gamesno}
                    </span> */}
                    <span className="text-black py-1 px-2 ">
                      Result
                    </span>

                    {i?.status !== "0" ? (
                      <div className="flex gap-2 items-center text-black py-1 px-2">
                        <span className={` !cursor-pointer
                       ${i?.color === "green" ||
                            i?.color === "4" ||
                            i?.color === "8" ||
                            i?.color === "12" ||
                            i?.color === "6" ||
                            i?.color === "10" ||
                            i?.color === "14" ||
                            i?.color === "18" ||
                            i?.color === "16"
                            ? "!bg-[#40AD72]"
                            : i?.color === "voilet"
                              ? "!bg-[#B659FE]"
                              : i?.color === "red" ||
                                i?.color === "3" ||
                                i?.color === "7" ||
                                i?.color === "11" ||
                                i?.color === "15" ||
                                i?.color === "5" ||
                                i?.color === "9" ||
                                i?.color === "13" ||
                                i?.color === "17" ||
                                i?.color === "8"
                                ? "!bg-[#FD565C]"
                                : i?.color === "Big"
                                  ? "!bg-[#00ECBE]"
                                  : i?.color === "Small"
                                    ? "!bg-[#6DA7F4]"
                                    : i?.color === "Odd"
                                      ? "!bg-[#fa574a]"
                                      : i?.color === "Even"
                                        ? "!bg-[#40ad72]"
                                        : i?.color === "22"
                                          ? "!bg-[#40ad72]"
                                          : i?.color === "" && "!bg-[#BF6DFE]"
                          }
                         transparentColor font-bold  text-xl `}>{`${i?.result}`}</span>

                        <span className={` !cursor-pointer
                       ${i?.color === "green" ||
                            i?.color === "4" ||
                            i?.color === "8" ||
                            i?.color === "12" ||
                            i?.color === "6" ||
                            i?.color === "10" ||
                            i?.color === "14" ||
                            i?.color === "18" ||
                            i?.color === "16"
                            ? "!bg-[#40AD72]"
                            : i?.color === "voilet"
                              ? "!bg-[#B659FE]"
                              : i?.color === "red" ||
                                i?.color === "3" ||
                                i?.color === "7" ||
                                i?.color === "11" ||
                                i?.color === "15" ||
                                i?.color === "5" ||
                                i?.color === "9" ||
                                i?.color === "13" ||
                                i?.color === "17" ||
                                i?.color === "8"
                                ? "!bg-[#FD565C]"
                                : i?.color === "Big"
                                  ? "!bg-[#00ECBE]"
                                  : i?.color === "Small"
                                    ? "!bg-[#6DA7F4]"
                                    : i?.color === "Odd"
                                      ? "!bg-[#fa574a]"
                                      : i?.color === "Even"
                                        ? "!bg-[#40ad72]"
                                        : i?.color === "22"
                                          ? "!bg-[#40ad72]"
                                          : i?.color === "" && "!bg-[#BF6DFE]"
                          }
                         transparentColor font-bold  text-xl `}>
                          {i?.color && i.color.charAt(0).toUpperCase() + i.color.slice(1)}</span>
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <span className="text-black py-1 px-2">
                      Select
                    </span>
                    <div className="!text-black py-1 px-2">
                      <span
                        className={` !cursor-pointer
                       ${i?.color === "green" ||
                            i?.color === "4" ||
                            i?.color === "8" ||
                            i?.color === "12" ||
                            i?.color === "6" ||
                            i?.color === "10" ||
                            i?.color === "14" ||
                            i?.color === "18" ||
                            i?.color === "16"
                            ? "!bg-[#40AD72]"
                            : i?.color === "voilet"
                              ? "!bg-[#B659FE]"
                              : i?.color === "red" ||
                                i?.color === "3" ||
                                i?.color === "7" ||
                                i?.color === "11" ||
                                i?.color === "15" ||
                                i?.color === "5" ||
                                i?.color === "9" ||
                                i?.color === "13" ||
                                i?.color === "17" ||
                                i?.color === "8"
                                ? "!bg-[#FD565C]"
                                : i?.color === "Big"
                                  ? "!bg-[#00ECBE]"
                                  : i?.color === "Small"
                                    ? "!bg-[#6DA7F4]"
                                    : i?.color === "Odd"
                                      ? "!bg-[#fa574a]"
                                      : i?.color === "Even"
                                        ? "!bg-[#40ad72]"
                                        : i?.color === "22"
                                          ? "!bg-[#40ad72]"
                                          : i?.color === "" && "!bg-[#BF6DFE]"
                          }
                        transparentColor font-bold text-xl`}>
                        {i?.number} {" "}
                        {i?.color && i.color.charAt(0).toUpperCase() + i.color.slice(1)}</span>

                    </div>
                    <span className="text-black py-1 px-2">
                      Status
                    </span>
                    <p
                      className={`${i?.status === "0"
                        ? "!text-red-600"
                        : i?.status === "1"
                          ? "!text-green-600"
                          : "!text-red-600"
                        } m-2`}
                    >
                      {i?.status === "0"
                        ? "Pending"
                        : i?.status === "1"
                          ? "Win"
                          : "Loss"}
                    </p>
                    <span className="text-black py-1 px-2">
                      Amount
                    </span>
                    <span
                      className={`!text-green-500 text-black py-1 px-2`}
                    >
                      {" "}
                      {rupees} {i?.win || 0}
                    </span>
                    <span className="text-black py-1 px-2">
                      Create Time
                    </span>
                    <span className="text-black py-1 px-2">
                      {moment(i?.updatedAt)?.format("DD-MM-YYYY")}{" "}
                      {moment(i?.updatedAt)?.format("HH:mm:ss")}
                    </span>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>

      <Box className="paginationTable">
        <TablePagination
          sx={{
            background: zubgback,
            color: "white",
            borderRadius: "10px",
            marginTop: "10px",
          }}
          rowsPerPageOptions={[2, 5, 10, 15]}
          component="div"
          count={my_history_data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      {/* <CustomCircularProgress isLoading={myhistory_loding_all} /> */}
    </Box>
  );
};

export default MyHistory;
