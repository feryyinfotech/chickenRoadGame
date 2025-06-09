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
  Typography,
} from "@mui/material";
import "jspdf-autotable";
import moment from "moment";
import * as React from "react";
import { useQuery } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../component/layout/Layout";
import { apiConnectorGet } from "../../services/apiconnector";
import { endpoint, zubgback } from "../../services/urls";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";
import theme from "../../utils/theme";
import { ArrowLeft } from '@react-vant/icons';
import SvgIcons from "../../component/SvgIcons";


export default function Tables() {
  const [selectedLevel, setSelectedLevel] = React.useState(null);
  const [expanded, setExpanded] = React.useState(null); // State to track expanded accordion

  const handleChange = (levelId) => {
    setExpanded(expanded === levelId ? null : levelId); // Toggle between expanded and closed
  };

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
    [`get_level_${selectedLevel || 1}`, selectedLevel],
    () => apiConnectorGet(endpoint?.get_level + `?level_id=${selectedLevel}`),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      enabled: !!selectedLevel,
    }
  );

  const result_level = leveldata?.data?.data;

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout header={false}>
      <SvgIcons />
      <CustomCircularProgress isLoading={isLoading || levelloading} />
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()} sx={{ width: '33%' }}>
            <ArrowLeft sx={{ fontSize: '22px !important', }} />
          </Box>
          <Typography sx={{ width: '33%', fontSize: '18px !important', }} className="fcc roboto" variant="body1" color="initial">Team Data</Typography>
          <Typography sx={{ width: '33%' }} variant="body1" color="initial"> </Typography>
        </Box>

        <Box sx={{ width: '96%', margin: '0 auto', }}>
          {
            <Accordion className="!rounded-lg">
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ background: "#05012bcf", color: "white !important", mt: 2 }}
                className="!rounded-lg"
              >
                <div className="w-full grid grid-cols-4 ">
                  <span className="!text-center !text-white">Levels</span>
                  <p className="!text-center !text-white">Members</p>
                  <p className="!text-center !text-white">Dep. Amnt.</p>
                  <p className="!text-center !text-white">Total Bet</p>
                </div>
              </AccordionSummary>
            </Accordion>
          }
          {result?.map((i) => {
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
                  expanded={expanded === i?.level_id} // Open this accordion if it's the selected one
                  onChange={() => handleChange(i?.level_id)} // Toggle the accordion
                  className="!rounded-lg"
                  onClick={() => setSelectedLevel(i?.level_id?.split(" ")?.[1])}
                >
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                      background: theme.palette.primary.light,
                      color: "black",
                      borderRadius: "0px",
                    }}
                  >
                    <div className="w-full grid grid-cols-4 ">
                      <p className="!text-center !text-black">{i?.level_id}</p>
                      <p className="!text-center !text-black">{i?.cnt}</p>
                      <p className="!text-center !text-black">
                        {Number(i?.total_deposit)?.toFixed(2)}
                      </p>
                      <p className="!text-center !text-black">
                        {Number(i?.total_bet)?.toFixed(0, 2)}
                      </p>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      background: "black",
                      color: "black",
                    }}
                  >
                    <Box>
                      <Box sx={style.accordian}>
                        <div
                          style={{ color: "black" }}
                          className="!grid !grid-cols-11 gap-2 !text-xs !text-center"
                        >
                          <span className=" !text-white "> S.No</span>
                          <span className=" !text-white "> User Id</span>
                          <span className=" !text-white col-span-2">User Name</span>
                          <span className=" !text-white col-span-2"> Sponsor Id</span>
                          <span className=" !text-white col-span-2">Sponsor Name</span>
                          <span className=" !text-white ">Reg. Date</span>
                          <span className=" !text-white ">Act. Date</span>
                          <span className=" !text-white ">Act. Amnt</span>

                        </div>
                        <div className="h-[2px] w-full "></div>
                        {result_level?.map((item, index) => {
                          return (
                            <div
                              style={{
                                color: "black",
                                background: "#00ECBE",
                                color: "black",
                                borderRadius: "5px",
                                padding: "5px 10px",
                              }}
                              className="!grid !grid-cols-12 gap-2 !text-[8px] !text-center"
                            >
                              <span className=" !text-black">{index + 1}</span>
                              <span className=" !text-black col-span-2">
                                {item?.username || "N/A"}
                              </span>
                              <span className=" !text-black col-span-2">
                                {item?.full_name || "N/A"}
                              </span>
                              <span className=" !text-black col-span-2">
                                {item?.spon_id || "N/A"}
                              </span>
                              <span className=" !text-black col-span-2">
                                {item?.spon_name || "N/A"}
                              </span>
                              <span className=" !text-black">
                                {item?.registr_date
                                  ? moment
                                    .utc(item?.registr_date)
                                    ?.format("DD-MM-YYYY HH:mm:ss")
                                  : "D"}
                              </span>
                              <span className=" !text-black">
                                {item?.first_depo_date
                                  ? moment
                                    .utc(item?.first_depo_date)
                                    ?.format("DD-MM-YYYY HH:mm:ss")
                                  : "D"}
                              </span>
                              <span className=" !text-black">
                                {item?.first_deposit_amnt === null ||
                                  item?.first_deposit_amnt === "0"
                                  ? "--"
                                  : Number(item?.first_deposit_amnt)?.toFixed(2)}
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
  container: { background: '#05012B', width: '100%', height: '100vh', overflow: 'auto', },
  header: {
    padding: '10px 8px',
    background: "zubgtext",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '17px',
      fontWeight: '400',
      textAlign: 'center',
      color: 'white',
    },
    '& > a > svg': {
      color: 'white',
      fontSize: '22px'
    }
  },
  accordian: {
    backgroundColor: "black",
    "&>div": { mb: 1 },
    "&>div>div:nth-child(1)": {
      borderRight: "1px solid black",
    },
    "&>div>div:nth-child(2)": {},
    "&>div>div>p": {
      color: "black",
      fontSize: "14px",
      fontWeight: 500,
    },
  },
};
