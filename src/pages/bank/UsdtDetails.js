import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LabelRoundedIcon from '@mui/icons-material/LabelRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import {
  Box,
  Button,
  Container,
  InputBase,
  MenuItem,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { ArrowLeft } from '@react-vant/icons';
import { useFormik } from "formik";
import "jspdf-autotable";
import * as React from 'react';
import { useState } from 'react';
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import { ConfigProvider, Picker, Popup } from 'react-vant';
import Layout from "../../component/layout/Layout";
import SvgIcons from '../../component/SvgIcons';
import { apiConnectorPost } from "../../services/apiconnector";
import { endpoint } from "../../services/urls";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";
import enUS from 'react-vant/es/locale/lang/en-US';

export default function UsdtDetails() {

  const options = [
    { text: 'TRC', value: 'TRC' },
    { text: 'ERC', value: 'ERC' },
    { text: 'BEP', value: 'BEP' }
  ];


  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('TRC');



  const [isLoading, setloding] = React.useState(false)
  const client = useQueryClient()
  const initialValue = {
    address: ""
  };
  const navigate = useNavigate()
  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    onSubmit: () => {
      const reqBody = {
        address: fk.values.address,
      };
      AddAddressUSDT(reqBody);
    },
  });

  const goBack = () => navigate(-1);
  async function AddAddressUSDT(reqBody) {
    setloding(true)
    try {
      const res = await apiConnectorPost(endpoint?.add_usdt_address, reqBody);
      toast(res?.data?.msg);
      setloding(false)
      if (res?.data?.msg === "Record saved successfully.") {
        client.refetchQueries("qr_address")
        navigate("/withdraw")
      }
      setloding(false)
    } catch (e) {
      console.log(e);
      setloding(false)
    }
  }



  return (
    <Layout header={false} >
      <SvgIcons />
      <Container
        sx={style.container}>
        <CustomCircularProgress isLoading={isLoading} />
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()} sx={{ width: '20%' }}>
            <ArrowLeft style={{ fontSize: '25px !important', color: 'white' }} />
          </Box>
          <Typography sx={{ width: '60%', fontSize: '20px !important', }} className="fcc roboto" variant="body1" color="initial"> Add USDT address</Typography>
          <NavLink to="/withdrawlhistory" style={{ width: '20%', fontSize: '13px !important', color: 'white !important' }}>   <Typography sx={{ fontSize: '13px !important', color: 'white !important', float: 'right' }} variant="body1" color="white">    </Typography></NavLink>
        </Box>
        <Box
          sx={{
            background: "#0b0430",
            p: 2,
            borderRadius: "12px",
            mx: "auto",
            fontFamily: "Bahnschrift, sans-serif"
          }}
        >
          <Box
            sx={{
              backgroundColor: "#011341",
              color: "#ff4d4d",
              borderRadius: "30px",
              px: 2,
              py: 1,
              mb: 4,
              display: "flex",
              alignItems: "center",
              fontSize: "13px"
            }}
          >
            <WarningAmberRoundedIcon sx={{ fontSize: 18, mr: 1 }} />
            To ensure the safety of your funds, please link your wallet
          </Box>
          <Box>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <svg className="svg-icon" width="30" height="30" fill="#00ECBE">
                <use xlinkHref="#icon-usdt1"></use>
              </svg>
              <Typography color="white">Select main network</Typography>
            </Box>

            <Box onClick={() => setVisible(true)} sx={{
              backgroundColor: '#011341', borderRadius: '6px', px: 2,
              py: 1.5, my: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white',
              cursor: 'pointer', maxWidth: 425
            }}
            >
              <Typography>{selected}</Typography>
              <ExpandMoreIcon sx={{ color: 'white' }} />
            </Box>
          </Box>
          <ConfigProvider locale={enUS}>
            <Popup
              visible={visible}
              round
              position="bottom"
              onClose={() => setVisible(false)}
              style={{
                maxWidth: 425,
                width: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#0A0F2B'
              }}
            >
              <Picker
                title=""
                showToolbar
                onCancel={() => setVisible(false)}
                columns={options}
                columnsFieldNames={{ text: 'text', value: 'value' }}
                defaultValue={selected}

                onConfirm={(val) => {
                  setSelected(val);
                  setVisible(false);
                }}
                confirmButtonText="Confirm"
                cancelButtonText="Cancel"
                className="custom-picker"
              />
            </Popup>
          </ConfigProvider>
          {/* USDT Address */}
          <Stack spacing={1.2} mb={3} mt={3}>
            <Box display="flex" alignItems="center" gap={1}>
              <svg className="svg-icon" width="30" height="30" fill="#00ECBE">
                <use xlinkHref="#icon-usdt2"></use>
              </svg>
              <Typography color="white" fontSize="16px">
                USDT Address
              </Typography>
            </Box>
            <InputBase
              placeholder="Please enter the USDT address"
              fullWidth
              sx={{
                backgroundColor: "#011341",
                borderRadius: "6px",
                px: 2,
                py: 1.5,
                color: "#ffffff",
                fontSize: "14px"
              }}
            />
          </Stack>

          {/* Address Alias */}
          <Stack spacing={1.2} mb={4}>
            <Box display="flex" alignItems="center" gap={1}>
              <svg className="svg-icon" width="30" height="30" fill="#00ECBE">
                <use xlinkHref="#icon-usdt3"></use>
              </svg>
              <Typography color="white" fontSize="16px">
                Address Alias
              </Typography>
            </Box>
            <InputBase
              placeholder="Please enter a remark of the withdrawal address"
              fullWidth
              sx={{
                backgroundColor: "#011341",
                borderRadius: "6px",
                px: 2,
                py: 1.5,
                color: "#ffffff",
                fontSize: "14px"
              }}
            />
          </Stack>
          <Button
            fullWidth
            disabled
            sx={{
              borderRadius: "30px",
              backgroundColor: "#d9d9d9",
              color: "#ffffff",
              fontWeight: "bold",
              letterSpacing: "10px",
              py: 1
            }}
          >
            Save
          </Button>
        </Box>
        {/* <div className=" p-5 ">
          <div>
            <p className="pt-5"> USDT Type </p>
            <TextField
              value={"USDT.BEP20"}
              className="!w-[100%] !py-0 !col-span-2"

            />
          </div>
          <div>
            <p className="pt-5">Add USDT Address </p>
            <TextField
              id="address"
              name="address"
              value={fk.values.address}
              onChange={fk.handleChange}
              placeholder="Enter USDT Address"
              className="!w-[100%] !py-0 !col-span-2"
            />
          </div>

          <div className="col-span-2 flex gap-2 mt-4">
            <Button
              className="!bg-[#FD565C] !text-white"
            >
              Cancel
            </Button>
            <Button
              className="!bg-[#BF6DFE] !text-white"
              onClick={() => fk.handleSubmit()}
            >
              Submit
            </Button>
          </div>
        </div> */}
      </Container>
    </Layout>
  );
}
const style = {
  container: {
    background: '#05012B',
    width: '100%',
    height: '100vh',
    overflow: 'auto',
  },
  header: {
    padding: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '16px',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
    },
  },
  wdbtn: {
    width: "95% !important",
    borderRadius: "20px",
    border: "none",
    color: "#fff",
    letterSpacing: "0.13333rem",
    fontWeight: "700",
    fontSize: "15px",
    height: "0.93333rem",
    background:
      "#00ECBE",
    backgroundSize: "100% 100%, 100% 100%",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat, no-repeat",
    textShadow: "0 0.02667rem 0.01333rem #afb0be",
    padding: "20px",
    mt: 3,
  },
};