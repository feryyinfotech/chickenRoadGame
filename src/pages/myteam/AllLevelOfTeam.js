import {
  ArrowDownwardOutlined,
  KeyboardArrowLeftOutlined,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
} from "@mui/material";
import "jspdf-autotable";
import moment from "moment";
import * as React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/layout/Layout";
import { apiConnectorGet } from "../../services/apiconnector";
import { endpoint, zubgback } from "../../services/urls";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";
import theme from "../../utils/theme";

export default function AllLevelOfTeam() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = React.useState(null);
  const { isLoading, data } = useQuery(
    ["get_all_level"],
    () => apiConnectorGet(endpoint?.get_level),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const result = data?.data?.data;

  const { isLoading: levelloading, data: leveldata } = useQuery(
    ["get_level", selectedLevel],
    () => apiConnectorGet(endpoint?.get_level + `?level_id=${selectedLevel}`),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      enabled: !!selectedLevel,
    }
  );

  const result_level = leveldata?.data?.data;

  return (
    <Layout>
      <Container
        sx={{
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 5,
        }}
        className="no-scrollbar"
      >
        <CustomCircularProgress isLoading={isLoading || levelloading} />

        <Box>
          <Box sx={style.header}>
            <Box
              className="!cursor-pointer !text-white"
              onClick={() => navigate("/promotion")}
            >
              <KeyboardArrowLeftOutlined />
            </Box>
            <p className="!font-bold !text-xl">Referral Data</p>
          </Box>
          {
            <Accordion className="!rounded-lg">
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ background: "#011341", color: "white", mt: 2 }}
                className="!rounded-lg"
              >
                <div className="w-full grid grid-cols-4 ">
                  <span className="!text-center">Levels</span>
                  <p className="!text-center">Members</p>
                  <p className="!text-center">Dep. Amnt.</p>
                  <p className="!text-center">Total Bet</p>
                </div>
              </AccordionSummary>
            </Accordion>
          }
          {result
            ?.filter((k) => k?.level_id?.split(" ")?.[1] === "1")
            ?.map((i) => {
              return (
                <Box
                  key={i?.level_id}
                  sx={{
                    width: "95%",
                    margin: "10px 2.5% 10px 2.5%",
                    borderRadius: "5px",
                  }}
                >
                  <Accordion
                    className="!rounded-lg"
                    onClick={() =>
                      setSelectedLevel(i?.level_id?.split(" ")?.[1])
                    }
                  >
                    <AccordionSummary
                      aria-controls="panel1-content"
                      id="panel1-header"
                      sx={{
                        background: '#011341',
                        color: "white",
                        borderRadius: "0px",
                      }}
                    >
                      <div className="w-full grid grid-cols-4 ">
                        <p className="!text-center">{i?.level_id}</p>
                        <p className="!text-center">{i?.cnt}</p>
                        <p className="!text-center">
                          {Number(i?.total_deposit)?.toFixed(2)}
                        </p>
                        <p className="!text-center">
                          {Number(i?.total_bet)?.toFixed(0, 2)}
                        </p>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        background: "white",
                        color: "white",
                      }}
                    >
                      <Box>
                        <Box sx={style.accordian}>
                          <div
                            style={{ color: "black" }}
                            className="!grid !grid-cols-8 gap-2 !text-xs !text-center"
                          >
                            <span className=""> S.No</span>
                            <span className=""> User Id</span>
                            <span className="">User Name</span>
                            <span className="">Mob No.</span>
                            <span className="">Reg. Date</span>
                            <span className="">Act. Date</span>
                            <span className="">Act. Amnt</span>
                            <span className="">Today Bet</span>
                          </div>
                          <div className="h-[2px] w-full "></div>
                          {result_level?.map((item, index) => {
                            return (
                              <div
                                style={{
                                  color: "white",
                                  background: "#011341",
                                  color: "white",
                                  borderRadius: "5px",
                                  padding: "5px 10px",
                                }}
                                className="!grid !grid-cols-11 gap-2 !text-[8px] !text-center"
                              >
                                <span className="">
                                  {index + 1}
                                </span>
                                <span className="col-span-2">
                                  {item?.username || "N/A"}
                                </span>
                                <span className="">
                                  {item?.full_name?.substring(0, 6) + ".." ||
                                    "N/A"}
                                </span>
                                <span className="col-span-2">
                                  {item?.mobile || "N/A"}
                                </span>
                                <span className="col-span-2">
                                  {item?.registr_date
                                    ? moment
                                      .utc(item?.registr_date)
                                      ?.format("DD-MM-YYYY HH:mm:ss")
                                    : "D"}
                                </span>
                                <span className="">
                                  {item?.first_depo_date
                                    ? moment
                                      .utc(item?.first_depo_date)
                                      ?.format("DD-MM-YYYY HH:mm:ss")
                                    : "D"}
                                </span>
                                <span className="">
                                  {item?.first_deposit_amnt === null ||
                                    item?.first_deposit_amnt === "0"
                                    ? "--"
                                    : Number(item?.first_deposit_amnt)?.toFixed(2)}
                                </span>
                                <span className="">
                                  {Number(item?.today_betting_by_user)?.toFixed(0, 2) || "0"}
                                </span>
                              </div>
                            );
                          })}
                        </Box>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              );
            })}
        </Box>
      </Container>
    </Layout>
  );
}
const style = {
  header: {
    padding: "15px 8px",
    background: zubgback,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "15px",
      fontWeight: "600",
      textAlign: "center",
      color: "white",
    },
    "& > a > svg": {
      color: "white",
      fontSize: "35px",
    },
  },
  accordian: {
    backgroundColor: "zubgwhite",
    "&>div": { mb: 1 },
    "&>div>div:nth-child(1)": {
      borderRight: "1px solid black",
    },
    "&>div>div:nth-child(2)": {},
    "&>div>div>p": {
      color: "white",
      fontSize: "14px",
      fontWeight: 500,
    },
  },
};
