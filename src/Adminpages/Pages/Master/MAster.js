import { Edit, Refresh } from "@mui/icons-material";
import {
    Button,
    Checkbox,
    Dialog,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Switch,
    TextField
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "react-query";
import { apiConnectorGet } from "../../../services/apiconnector";
import { endpoint } from "../../../services/urls";
import { API_URLS } from "../../config/APIUrls";
import axiosInstance from "../../config/axios";
import CustomTable from "../../Shared/CustomTable";

const Master = () => {
    const client = useQueryClient();
    const [loading, setLoading] = useState(false);
    const [datalist, setData] = useState({});
    const [openDialog, setOpenDialog] = useState(false);
    const { data } = useQuery(["game_status"], () => apiConnectorGet(endpoint.status), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    const status = data?.data?.data;

    const { data: statta_matka_staus } = useQuery(
        ["status_of_satta_matka"],
        () => apiConnectorGet(endpoint?.node?.getStatusSattaMatka),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    );
    const statta_matka_staus_result = statta_matka_staus?.data?.data || [];

    const MasterFunction = async (id) => {
        setLoading(true);
        try {
            const res = await axiosInstance.get(API_URLS?.set_game_status + `?t_id=${id}`);
            toast(res?.data?.msg, { id: 1 });
            client.refetchQueries("game_status");
            client.refetchQueries("status_of_satta_matka");
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    const RefreshFunction = async (id) => {
        setLoading(true);
        try {
            const res = await axiosInstance.get(API_URLS?.refresh_status + `?t_id=${id}`);
            toast(res?.data?.msg, { id: 1 });
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    const handleEditClick = () => {
        setOpenDialog(true); // Open the dialog
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const TopupBonus = async () => {
        setLoading(true);
        const reqbody = {
            bonus_name: "Topup Bonus2"
        }
        try {
            const response = await axiosInstance.post(API_URLS?.get_bonus_list, reqbody)
            setData(response?.data?.data)
            handleEditClick()
        }
        catch (e) {
            console.log(e)
        }
        setLoading(false);
    }
    let initialValue = {
        bonus_name: datalist?.bonus_name || "",
        bonus_des: datalist?.description || "",
        bonus_status: datalist?.status === "Deactive" ? "2" : "1",
        bonus_value: datalist?.value || 0,
        bonus_depo_no: datalist?.topup_no === "First Deposit" ? "1" : "2",
    }
    const fk = useFormik({
        initialValues: initialValue,
        enableReinitialize: true,
        onSubmit: () => {
            AddTopupBonusFn(fk.values)
        }
    })
    const AddTopupBonusFn = async (reqbody) => {
        setLoading(true);
        try {
            const response = await axiosInstance.post(API_URLS?.update_bonus_list, reqbody)
            toast(response?.data?.msg);
            if (response?.data?.msg === "Updated successfully")
                setOpenDialog(false)

        }
        catch (e) {
            toast("Network Error.");
        }
        setLoading(false);
    }
    
    const MasterData = [
        // {
        //     id: 1,
        //     name: "Approve For Login ",
        // },
        // {
        //     id: 2,
        //     name: "TopUp Bonus",
        // },
        {
            id: 30,
            name: "INR PAYIN",
        },
        {
            id: 28,
            name: "INR PAYOUT",
        },
        // {
        //     id: 29,
        //     name: "ZP PAYOUT",
        // },
        // {
        //     id: 32,
        //     name: "P2P TRANSFER STATUS",
        // },
        {
            id: 15,
            name: "TRX",
        },
        {
            id: 14,
            name: "WINGO",
        },
        {
            id: 16,
            name: "AVIATOR",
        },
        {
            id: 21,
            name: "K3 Lottery",
        },
        // {
        //     id: 23,
        //     name: "DESAWAR",
        // },
        // {
        //     id: 24,
        //     name: "GALI",
        // },
        // {
        //     id: 25,
        //     name: "FARIDABAD",
        // },
        // {
        //     id: 26,
        //     name: "GHAZIABAD",
        // },
        // {
        //     id: 22,
        //     name: "ROULETTE",
        // },
    ];

    const tablehead = ["S.No.", "Game", "Action"];
    const tablerow = MasterData?.map((item, index) => {
        return [
            <span key={item?.id}>{index + 1}</span>,
            <span> {item.name} </span>,
            <span> {item?.id === 1 ? (
                <Refresh className="!text-green-600" onClick={() => RefreshFunction(item?.id)} />
            ) : 
            item?.id === 2 ? (
                <Edit className="!text-green-600" onClick={TopupBonus} />
            ) 
            : [23, 24, 25, 26].includes(item?.id) ? (
                <Switch
                    checked={statta_matka_staus_result?.find((i) => i?.id === item?.id)?.longtext === "1"}
                    className="!text-green-600"
                    onChange={() => MasterFunction(item?.id)}
                />
            ) : (
                <Switch
                    checked={status?.find((i) => i?.id === item?.id)?.longtext === "1"}
                    className="!text-green-600"
                    onChange={() => MasterFunction(item?.id)}
                />
            )}</span>,
        ];
    })

    return (
        <div>
            <CustomTable
                tablehead={tablehead}
                tablerow={tablerow}
                isLoading={loading} />
            <Dialog open={openDialog} onClose={handleDialogClose} className="!p-5">
                <>
                    <div>
                        <Checkbox
                            checked={String(fk.values.bonus_status) === "1"}
                            onClick={() => fk.setFieldValue("bonus_status", String(fk.values.bonus_status) === "1" ? "2" : "1")}
                        />
                        {String(fk.values.bonus_status) === "1" ? "ON" : "OFF"}

                    </div>
                    <div className="flex gap-2 px-2">
                        <p>Percentage: </p>
                        <TextField
                            id={"bonus_value"}
                            name="bonus_value"
                            onChange={fk.handleChange}
                            value={fk.values.bonus_value}
                        />
                    </div>
                    <div className="flex gap-2 px-2 py-2">
                        <p>Description: </p>
                        <TextField
                            id={"bonus_des"}
                            name="bonus_des"
                            onChange={fk.handleChange}
                            value={fk.values.bonus_des}
                        />
                    </div>
                    <FormControl >
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={fk.values.bonus_depo_no}
                            onChange={(e) => fk.setFieldValue("bonus_depo_no", e.target.value)}
                            className="!flex !gap-2 !px-2"
                        >
                            <FormControlLabel value="1" control={<Radio />} label="First Deposit" />
                            <FormControlLabel value="2" control={<Radio />} label="Regular Deposit" />
                        </RadioGroup>
                    </FormControl>
                    <div>
                        <Button onClick={handleDialogClose}>Cancel</Button>
                        <Button onClick={fk.handleSubmit}>Submit</Button>
                    </div>
                </>
            </Dialog>
        </div >
    );
};

export default Master;
