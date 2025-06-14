import { FilterAlt, Lock } from "@mui/icons-material";
import { Button, Switch, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CustomTable from "../../Shared/CustomTable";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";
import moment from "moment";
import SweetAlert from "sweetalert2";



const INRPayout = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [totalamount, setTotalamount] = useState([]);
  const [from_date, setFrom_date] = useState("");
  const [to_date, setTo_date] = useState("");
  const [loding, setloding] = useState(false);

  const INRPayoutFunction = async () => {
    setloding(true);
    try {
      const res = await axiosInstance.post(API_URLS?.usdt_payoutdata, {
        start_date: from_date,
        end_date: to_date,
        username: search,
        deposit_type:2
      });
      setData(res?.data?.data || []);
      setTotalamount(res?.data?.total)
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
    INRPayoutFunction()
  }, [])


  const changeStatusApprovedFunction = async (id) => {
    try {
      const reqbody={
        t_id:id,
        status:"Approve"
      }
      const res = await axiosInstance.post(API_URLS?.approval_payout_usdt , reqbody);
      if (res) INRPayoutFunction();
      toast(res?.data?.msg);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = (id) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "You want to Approve this Amount!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "custom-confirm",
        cancelButton: "custom-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        changeStatusApprovedFunction(id);
      }
    });
  };
  useEffect(() => {
    INRPayoutFunction();
  }, []);

  const changeStatusRejectFunction = async (id) => {
    try {
      const reqbody={
        t_id:id,
        status:"Reject"
      }
      const res = await axiosInstance.post(API_URLS?.approval_payout_usdt , reqbody);
      if (res) INRPayoutFunction();
      toast(res?.data?.msg);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmitReject = (id) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "You want to Reject this Amount!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "custom-confirm",
        cancelButton: "custom-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        changeStatusRejectFunction(id);
      }
    });
  };

  const tablehead = [
    <span>S.No</span>,
    <span>Name</span>,
    <span>User Id</span>,
    <span>Mobile</span>,
    <span>USDT</span>,
    <span>Amount</span>,
    <span>Status</span>,
    <span>UTR No.</span>,
    <span>Deposit Type</span>,
    <span>Req. Date</span>,
    <span>Success Date</span>,
    <span>Action</span>,

  ];

  const tablerow = data?.map((i, index) => {
    return [
      <span>{index + 1}</span>,
      <span>{i?.full_name}</span>,
      <span>{i?.username}</span>,
      <span>{i?.mobile}</span>,
      <span>{i?.zp_token}</span>,
      <span>{i?.tr15_amt}</span>,
      <span>{i?.tr15_status}</span>,
      <span className="">{i?.tr15_trans}</span>,
      <span className="">{i?.Deposit_type}</span>,
      <span className="">{moment.utc(i?.tr15_date)
        .format("DD-MM-YYYY HH:mm:ss")}</span>,
      <span className="">{moment.utc(i?.success_date)
        .format("DD-MM-YYYY HH:mm:ss")}</span>,
    <span>
        {i?.tr15_status === "Pending" ? (
        <div className="!flex justify-center gap-2">
            <Button
            variant="contained"
            className="!bg-[#198754]"
            onClick={() => handleSubmit(i?.tr15_id)}
          >
            Approve
          </Button>
          <Button
          variant="contained"
          className="!bg-rose-800"
          onClick={() => handleSubmitReject(i?.tr15_id)}
        >
          Reject
        </Button>
        </div>
        ) : (
          <Lock />
        )}
      </span>,
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
          onClick={() => INRPayoutFunction()}
          variant="contained"
          startIcon={<FilterAlt />}
        >
          Filter
        </Button>
      </div>
      <CustomTable
         isTotal ={<div className="bg-white my-2 p-2 px-5 !text-right">Total Amount : <span className="!font-bold">{totalamount}</span></div>}
        tablehead={tablehead}
        tablerow={tablerow}
        isLoading={loding}
      />

    </div>
  );
};

export default INRPayout;
