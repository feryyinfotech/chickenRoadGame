import { FilterAlt } from "@mui/icons-material";
import { Button, Switch, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CustomTable from "../../Shared/CustomTable";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";
import moment from "moment";


const INRReject = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [from_date, setFrom_date] = useState("");
  const [to_date, setTo_date] = useState("");
  const [loding, setloding] = useState(false);

  const INRRejectFunction = async () => {
    setloding(true);
    try {
      const res = await axiosInstance.post(API_URLS?.inr_manually, {
        start_date: from_date,
        end_date: to_date,
        username: search,
        payout_type:3
      });
      setData(res?.data?.data || []);
      if (res) {
        setTo_date("");
        setFrom_date("");
      }
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  };

  useEffect(() => {
    INRRejectFunction()
  }, [])

  const tablehead = [
    <span>S.No</span>,
    <span>Name</span>,
    <span>User Id</span>,
    <span>Mobile</span>,
    <span>Amount</span>,
    <span>Status</span>,
    <span>UTR No.</span>,
    <span>Date</span>,
  ];

  const tablerow = data?.map((i, index) => {
    return [
      <span>{index + 1}</span>,
      <span>{i?.full_name}</span>,
      <span>{i?.username}</span>,
      <span>{i?.mobile}</span>,
      <span>{Number(i?.tr15_amt)?.toFixed(2)}</span>,
      <span>{i?.tr15_status}</span>,
      <span className="">{i?.tr15_trans}</span>,
      <span className=""> {moment.utc(i?.success_date)
        .format("DD-MM-YYYY HH:mm:ss")}</span>,

    ];
  });

  return (
    <div>
      <div className="flex px-2 gap-5 !justify-start py-2
      bg-white my-2 
      ">
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
          onClick={() => INRRejectFunction()}
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

export default INRReject;
