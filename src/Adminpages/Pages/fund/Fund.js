import { Box, Button, CircularProgress, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";
import { candidateName } from "../../Services";
import { FilterAlt } from "@mui/icons-material";
import moment from "moment";
import VantToast from "../../../shared/toast/Toast";

const Fund = () => {
  const [loding, setloding] = useState(false);
  const [dataa, setData] = useState([]);
  const [search, setSearch] = useState("");


  const initialValue = {
    user_id_table: "",
    u_req_amount: ""
  };

  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    onSubmit: () => {
      if (!fk.values.u_req_amount)
        return toast("Select amount ");
      FundAdd(fk.values);
    },
  });

  async function FundAdd(reqBody) {
    const req = {
      user_id: reqBody?.user_id_table,
      u_req_amount: reqBody?.u_req_amount,
    };
    setloding(true);
    try {
      const res = await axiosInstance.post(API_URLS.add_fund, req);
      VantToast(res?.data?.msg, 's');
      if (res?.data?.msg === "Amount Added successfully.") {
        fk.handleReset();
      }
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  }
  const INRPayingFunction = async () => {
    setloding(true);
    try {
      const res = await axiosInstance.post(API_URLS?.inr_payingdata, {
        start_date: "",
        end_date: "",
        username: search,
      });
      setData(res?.data?.data?.[0] || []);

      if (res) {
      }
    } catch (e) {
      console.log(e);
    }
    setloding(false);
  };

  const { data } = useQuery(
    ["getname", fk.values.user_id],
    () => candidateName({ userid: fk.values.user_id }),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false
    }
  );
  const result = data?.data?.data;
  useEffect(() => {
    fk.setFieldValue("user_id_table", result?.id);
  }, [result]);
  if (loding)
    return (
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  return (
    <>
      <div className="flex   px-2 gap-5 !justify-start py-2">
        <TextField
          className="bg-white"
          type="search"
          placeholder="Search by user id"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          onClick={() => INRPayingFunction()}
          variant="contained"
          startIcon={<FilterAlt />}
        >
          Filter
        </Button>
      </div>
      {dataa && dataa?.full_name && (
        <div className="px-5">
          <p className="">Name : {dataa?.full_name}</p>
          <p>UserId : {dataa?.username}</p>
          <p>Mobile No : {dataa?.mobile}</p>
          <p>Amount : ₹{Number(dataa?.tr15_amt)?.toFixed(2)}</p>
          <p>Req. Date : {moment.utc(dataa?.tr15_date)?.format("DD-MM-YYYY HH:mm:ss")}</p>
          <p>Suc. Date : {moment(dataa?.success_date)?.format("DD-MM-YYYY HH:mm:ss")}</p>
        </div>
      )}
      <div className="!flex justify-center items-center">
        <div className="p-5  w-[50%]  bg-white !bg-opacity-10 !rounded-lg">
          <p className="!text-center font-bold !py-4 text-white text-lg">Credit Fund</p>
          <div className="grid grid-cols-1   gap-[6%]  gap-y-4">

            <div>
              <p className="font-bold text-white ">User ID </p>
              <TextField
                fullWidth
                className="!bg-white"
                id="user_id"
                name="user_id"
                placeholder="User ID"
                value={fk.values.user_id}
                onChange={fk.handleChange}
              />{" "}
              {fk.values.user_id ? (
                result ? (
                  <div className="no-error flex justify-between">
                    <span> Referral From: {result?.full_name}</span>
                    {(String(fk.values.wallet_type) === "2" && (
                      <span> Winning Wallet: {result?.winning_wallet}</span>
                    )) ||
                      (String(fk.values.wallet_type) === "1" && (
                        <span> Main Wallet: {result?.wallet}</span>
                      ))}
                  </div>
                ) : (
                  <div className="error">Invalid Referral Id</div>
                )
              ) : null}

            </div>

            <div>
              <p className="text-white font-bold">Amount</p>
              <TextField
                className="!bg-white"
                fullWidth
                id="u_req_amount"
                name="u_req_amount"
                placeholder="Amount"
                value={fk.values.u_req_amount}
                onChange={fk.handleChange}
              />
            </div>


          </div>

          <div className="flex justify-end gap-3 !mt-5">
            <Button
              onClick={() => fk.handleReset()}
              variant="contained"
              className="!bg-[#E74C3C]"
            >
              Clear
            </Button>
            <Button
              onClick={() => fk.handleSubmit()}
              variant="contained"
              className="!bg-[#131044] !text-white"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fund;
