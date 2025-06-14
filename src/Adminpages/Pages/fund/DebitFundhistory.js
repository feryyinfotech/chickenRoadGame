import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, TablePagination, TextField } from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../Shared/CustomTable";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";
import { FilterAlt } from "@mui/icons-material";

const DebitFundHistory = () => {
  const [loding, setloding] = useState(false);
  const [data, setData] = useState([]);
  const [from_date, setFrom_date] = useState();
  const [to_date, setTo_date] = useState();
  const [search, setSearch] = useState("");

  const DebitFundHistoryRequestFunction = async () => {
    setloding(true);
    try {
      const res = await axiosInstance.post(API_URLS?.debit_fund_history, {
        start_date: from_date,
        end_date: to_date,
        username: search,
      });
      setData(res?.data?.data || []);
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  };
  useEffect(() => {
    DebitFundHistoryRequestFunction();
  }, []);

  const tablehead = [
    <span>S.No.</span>,
    <span>User Id</span>,
    <span>Name</span>,
    <span>Mobile No.</span>,
    <span>Type</span>,
    <span>Amount</span>,
    <span>Date</span>,
  ];

  const tablerow = data?.map((i, index) => {
    return [
      <span>{index + 1}</span>,
      <span>{i?.username}</span>,
      <span>{i?.full_name}</span>,
      <span>{i?.mobile}</span>,
      <span>{"Debited"}</span>,
      <span>{Number(i?.l01_amount)?.toFixed(2)}</span>,
      <span>{moment(i?.l01_date)?.format("YYYY-MM-DD HH:mm:ss")}</span>,
    ];
  });

  return (
    <div>
      <div className="flex bg-white my-2 px-2 gap-5 !justify-start py-2">
        <span className="font-bold">From:</span>
        <TextField
          type="date"
          value={from_date}
          onChange={(e) => setFrom_date(e.target.value)}
        />
        <span className="font-bold">To:</span>
        <TextField
          type="date"
          value={to_date}
          onChange={(e) => setTo_date(e.target.value)}
        />
        <TextField
          type="search"
          placeholder="Search by user id"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          onClick={() => DebitFundHistoryRequestFunction()}
          variant="contained"
          startIcon={<FilterAlt />}
        >
          Filter
        </Button>
      </div>
      <CustomTable
        tablehead={tablehead}
        tablerow={tablerow}
        isLoading={loding}
      />
    </div>
  );
};

export default DebitFundHistory;
