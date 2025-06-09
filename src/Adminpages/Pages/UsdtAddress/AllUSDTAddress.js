import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";
import { Edit, FilterAlt } from "@mui/icons-material";
import moment from "moment";
import CustomTable from "../../Shared/CustomTable";

const AllUSDTAddress = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [newUsdtAddress, setNewUsdtAddress] = useState("");

  const WalletUdstRecord = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.post(API_URLS?.Admin_record_usdt, {
        start_date: "",
        end_date: "",
        username: "",
      });
      setData(res?.data?.data || []);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    WalletUdstRecord();
  }, []);

  const handleOpenDialog = (userId, currentAddress) => {
    setSelectedUserId(userId);
    setNewUsdtAddress(currentAddress);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedUserId(null);
    setNewUsdtAddress("");
  };

  const handleUpdate = async () => {
    try {
      const res = await axiosInstance.post(API_URLS?.Admin_record_usdt_update, {
        t_id: selectedUserId,
        usdt_address: newUsdtAddress,
      });
      if (res) WalletUdstRecord();
      toast(res?.data?.msg);
      handleCloseDialog();
    } catch (e) {
      console.log(e);
    }
  };

  if (loading)
    return (
      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <CircularProgress />
      </div>
    );

  const tablehead = [
    <span>S.No.</span>,
    <span>Action</span>,
    <span>UserID</span>,
    <span>Name</span>,
    <span>USDT Type</span>,
    <span>USDT Address</span>,
    <span>Date/Time</span>,
  ];

  const tablerow = data?.map((i, index) => {
    return [
      <span>{index + 1}</span>,
      <span>
        <Edit className="!text-green-600" onClick={() => handleOpenDialog(i?.userid, i?.usdt_address)} />
      </span>,
      <span>{i?.username || "--"}</span>,
      <span>{i?.full_name || "--"}</span>,

      <span>{i?.usdt_type || "--"}</span>,
      <span>{i?.usdt_address || "--"}</span>,
      <span>{moment.utc(i?.createdAt)?.format("DD-MM-YYYY HH:mm:ss")}</span>,
    ];
  });

  return (
    <div>
      <div className="flex bg-white my-2 px-2 gap-5 !justify-start py-2">
        <span className="font-bold">From:</span>
        <TextField
          type="date"
        />
        <span className="font-bold">To:</span>
        <TextField
          type="date"
        />
        <TextField
          type="search"
          placeholder="Search by user id"
        />
        <Button
          variant="contained"
          startIcon={<FilterAlt />}
        >
          Filter
        </Button>
      </div>
      <CustomTable
        tablehead={tablehead}
        tablerow={tablerow}
        isLoading={loading}
      />

      <Dialog open={openDialog} onClose={handleCloseDialog}
      >
        <DialogTitle>Update USDT Address</DialogTitle>
        <DialogContent>
          <TextField
            label="USDT Address"
            value={newUsdtAddress}
            onChange={(e) => setNewUsdtAddress(e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleUpdate} variant="contained">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AllUSDTAddress;