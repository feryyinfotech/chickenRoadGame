import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, TablePagination, TextField } from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../Shared/CustomTable";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";

const FundHistory = () => {
  const [loding, setloding] = useState(false);
  const [data, setData] = useState([]);
   const [from_date, setFrom_date] = useState();
  const [to_date, setTo_date] = useState();

  const withdrawlRequestFunction = async () => {
    setloding(true);
    try {
      const res = await axiosInstance.get(API_URLS?.get_fund_history);
      setData(res?.data?.data || []);
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  };
  useEffect(() => {
    withdrawlRequestFunction();
  }, []);


  const tablehead = [
    <span>S.No.</span>,
    <span>User Id</span>,
    <span>Name</span>,
    <span>Mobile No.</span>,
    <span>Amount</span>,
    <span>Status</span>,
    <span>Transaction Id</span>,
    <span>Date/Time</span>,
  ];

  const tablerow = data?.map((i, index) => {
    return [
      <span>{index + 1}</span>,
      <span>{i?.username}</span>,
      <span>{i?.full_name}</span>,
      <span>{i?.mobile}</span>,
      <span>{Number(i?.tr15_amt)?.toFixed(2)}</span>,
      <span className="text-green-800">{i?.tr15_status}</span>,
      <span>{i?.tr15_trans}</span>,
      <span>{moment.utc(i?.tr15_date)?.format("YYYY-MM-DD  HH:mm:ss")}</span>,
    ];
  });

  return (
    <div>
      <div className="flex px-2 bg-white my-2 !justify-start py-2 gap-2 !place-items-center">
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
        <Button
          onClick={() => withdrawlRequestFunction()}
          variant="contained"
          startIcon={<FilterAltIcon />}
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

export default FundHistory;
