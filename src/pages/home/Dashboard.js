import { Close, RefreshRounded } from "@mui/icons-material";
import { Avatar, Box, Dialog, List, ListItem, ListItemAvatar, ListItemText, Button as Muibutton, Stack, Typography, } from "@mui/material";
import { VolumeO } from "@react-vant/icons";
import copy from "clipboard-copy";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, NoticeBar, Swiper as VantSwiper } from "react-vant";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import L11 from "../../assets/images/L11.svg";
import L12 from "../../assets/images/L12.svg";
import banner1 from "../../assets/images/b1.jpg";
import banner2 from "../../assets/images/b2.jpg";
import banner3 from "../../assets/images/b3.png";
import banner4 from "../../assets/images/b4.jpg";
import banner5 from "../../assets/images/b5.jpg";
import bgdeactive from "../../assets/images/bg1.png";
import bgactive from "../../assets/images/bg2.png";
import crown1 from "../../assets/images/crown1.png";
import crown2 from "../../assets/images/crown2.png";
import crown3 from "../../assets/images/crown3.png";
import game1 from "../../assets/images/game1.png";
import game10 from "../../assets/images/game10.png";
import game2 from "../../assets/images/game2.png";
import game3 from "../../assets/images/game3.png";
import game4 from "../../assets/images/game4.png";
import game5 from "../../assets/images/game5.png";
import game6 from "../../assets/images/game6.png";
import game7 from "../../assets/images/game7.png";
import game8 from "../../assets/images/game8.png";
import WithdrawBg from "../../assets/images/l111.svg";
import DepositBg from "../../assets/images/l222.svg";
import logo from "../../assets/images/logo.png";
import p1 from "../../assets/images/p1.png";
import p4 from "../../assets/images/p4.png";
import podium from "../../assets/images/podium.png";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
import profile3 from "../../assets/images/profile3.png";
import winerbanner1 from "../../assets/images/winerbanner1.png";
import Layout from "../../component/layout/Layout";
import {
  checkTokenValidity,
  ProfileDataFunction,
} from "../../services/apiCallings";
import { apiConnectorGet, apiConnectorPost } from "../../services/apiconnector";
import { endpoint, front_end_domain } from "../../services/urls";
import MyModal from "../../shared/MyModal";
import CustomCircularProgress from "../../shared/loder/CustomCircularProgress";
import { enCryptData } from "../../shared/secret";
import theme from "../../utils/theme";
import Casino from "./component/Casino";
import Fishing from "./component/Fishing";
import Lottery from "./component/Lottery";
import MiniGames from "./component/MiniGames";
import PVC from "./component/PVC";
import Populer from "./component/Populer";
import Slots from "./component/Slots";
import Sports from "./component/Sports";
import VantToast from "../../shared/toast/Toast";

const functionTOCopy = (value) => {
  copy(value);
  VantToast('Copied to clipboard!', 's');
};

// Styles using a const object with unique names
const swipeListStyle = {
  swipeListContainer: {
    maxWidth: "430px",
    border: "1px solid #224BA2",
    background: " linear-gradient(180deg, #001C54 0%, #000C33 100%)",
    borderRadius: "8px",
    padding: "0px 16px",
    overflow: "hidden",
    height: "350px",
    position: "relative",
    margin: "15px  auto",
  },
  swipeListContainer2: {
    maxWidth: "430px",
    border: "1px solid #224BA2",
    background: " linear-gradient(180deg, #001C54 0%, #000C33 100%)",
    borderRadius: "8px",
    padding: "30px 0px 0px 0px",
    overflow: "hidden",
    position: "relative",
    margin: "15px  auto",
  },
  swipeListStyledList: {
    padding: 0,
  },
  swipeListStyledListItem: {
    backgroundColor: "transparent",
    borderBottom: "1px solid rgba(34, 75, 162, 0.55)",
    padding: "8px",
  },
  swipeListWinningAmount: {
    fontSize: "12px",
    fontWeight: "400px",
    color: "#92A8E3",
    textTransform: "capitalize",
  },
};

function Dashboard() {
  const client = useQueryClient();
  const [translateY, setTranslateY] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const navigate = useNavigate();

  const { isLoading, data } = useQuery(
    ["top_winner"],
    () => apiConnectorGet(endpoint.win_list_top),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const res = data?.data?.data || [];
  const dummyWinners = [
    { email: "anand**@gmail.com", win: 123.45 },
    { email: "joly**singh@gmail.com", win: 678.90 },
    { email: "Tanya******@gmail.com", win: 378.90 },
    { email: "Riyasing*****@gmail.com", win: 168.90 },
    { email: "jo**yyyy@gmail.com", win: 458.90 },
    { email: "bo**yadav@gmail.com", win: 988.90 },
    { email: "sa**bh@gmail.com", win: 101.12 },
  ];

  const winnersToDisplay = res.length === 0 ? dummyWinners : res;
  useEffect(() => {
    const itemHeight = 64;
    const totalItems = winnersToDisplay.length;
    const totalHeight = itemHeight * totalItems;

    const interval = setInterval(() => {
      setTranslateY((prev) => {
        if (Math.abs(prev) >= totalHeight) {
          return 0;
        }
        return prev - itemHeight;
      });
      // setDatas((prevData) => {
      //   const newRecord = prevData[0];
      //   return [...prevData.slice(1), newRecord];
      // });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const [value, setValue] = useState(1);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (!checkTokenValidity()) {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/"; // Redirect to login page
    }
  }, []);

  useQuery(
    ["profile"],
    () => {
      ProfileDataFunction().then((res) => {
        localStorage.setItem("First_recharge", res?.data?.data?.first_recharge);
      });
    },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const { data: banner } = useQuery(
    ["popup"],
    () => apiConnectorGet(endpoint.popup_get),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const popup_get_data = banner?.data?.data || [];
  useEffect(() => {
    Number(popup_get_data?.status) === 1
      ? setDialogOpen(true)
      : setDialogOpen(false);
  }, [banner?.data?.data]);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const imageSources = [
    "https://mui.com/static/images/avatar/2.jpg",
    "https://mui.com/static/images/avatar/3.jpg",
    profile3,
    "https://mui.com/static/images/avatar/4.jpg",
    profile1,
    "https://mui.com/static/images/avatar/1.jpg",
    profile2,
    "https://mui.com/static/images/avatar/5.jpg",
  ];

  const { data: wallet_amount } = useQuery(
    ["wallet_amount_amount"],
    () => apiConnectorGet(endpoint.get_balance),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const wallet_amount_data = wallet_amount?.data?.data || 0;

  const { data: jilli_data } = useQuery(
    ["jilli_record"],
    () => apiConnectorGet(endpoint.jili_api.game_list),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const alljiligames = jilli_data?.data || {};
  async function getGamnesbyID(id) {
    try {
      const api_url = await apiConnectorPost(endpoint.jili_api.game_urls, {
        payload: enCryptData({ game_id: id }),
      });
      // console.log(api_url);
      if (api_url?.data?.error === false) {
        window.open(api_url?.data?.gameUrl, "_self");
      } else {
        toast.error(api_url?.data?.msg);
      }
    } catch (error) {
      toast("Something went wrong", { id: 1 });
      console.error("Error fetching game data:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiConnectorGet(
        endpoint.jili_api.jili_to_main_api
      );
      if (response?.data?.msg === "Wallet Details get Successfully") {
        setTimeout(() => {
          client.refetchQueries("wallet_amount_amount");
        }, 2000);
      }
    };

    const timer = setTimeout(fetchData, 5000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [client]);

  return (
    <>
      <Layout header={false}>
        <Box className="fcsb header-new">
          <Box component={"img"} src={logo} className="logo"></Box>
          <Box className="fce">
            {/* <NavLink>Login </NavLink>
            <NavLink>Register</NavLink> */}
          </Box>
        </Box>
        <Box className="fcsb" px={1.5} py={1}>
          <Box
            component={"img"}
            src={L12}
            className="logo"
            sx={{ width: "49%" }}
          ></Box>
          <Box
            component={"img"}
            src={L11}
            className="logo"
            sx={{ width: "49%" }}
          ></Box>
        </Box>
        <CustomCircularProgress isLoading={isLoading} />
        <Swiper
          style={{ padding: "8px 12px 20px 12px", borderRadius: "8px" }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide style={{ borderRadius: "9px" }}>
            <Box component="img" src={banner1} sx={style.banner}></Box>
          </SwiperSlide>
          <SwiperSlide style={{ borderRadius: "9px" }}>
            <Box component="img" src={banner2} sx={style.banner}></Box>
          </SwiperSlide>
          <SwiperSlide style={{ borderRadius: "9px" }}>
            <Box component="img" src={banner3} sx={style.banner}></Box>
          </SwiperSlide>
          <SwiperSlide style={{ borderRadius: "9px" }}>
            <Box component="img" src={banner4} sx={style.banner}></Box>
          </SwiperSlide>
          <SwiperSlide style={{ borderRadius: "9px" }}>
            <Box component="img" src={banner5} sx={style.banner}></Box>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
        <div className="demo-notice-bar">
          <NoticeBar
            leftIcon={<VolumeO />}
            rightIcon={
              <Button
                type="primary"
                className="rv-button-p"
                size="small"
                onClick={() => navigate("/notification")}
              >
                Details
              </Button>
            }
          >
            <VantSwiper
              autoplay={3000}
              indicator={false}
              vertical
              className="notice-swipe"
            >
              <VantSwiper.Item>
                {" "}
                Welcome to join the Tahalkagame platform.{" "}
              </VantSwiper.Item>
              <VantSwiper.Item>
                {" "}
                We provide a brand new gaming ex{" "}
              </VantSwiper.Item>
              <VantSwiper.Item>
                {" "}
                Welcome to join the Tahalkagame platform.{" "}
              </VantSwiper.Item>
            </VantSwiper>
          </NoticeBar>
        </div>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "#08062A",
            p: 2,
            borderRadius: 2,
            maxWidth: 500,
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span style={{ fontSize: 14 }}>💰</span>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  fontFamily: "'Merriweather', serif",
                  fontSize: 14,
                }}
              >
                Wallet balance
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}
            >
              ₹{" "}
              {(
                Number(
                  Number(wallet_amount_data?.winning || 0) +
                  Number(wallet_amount_data?.wallet || 0)
                ) || 0
              )?.toFixed(2)}{" "}
              <RefreshRounded size={16} color="#fff" />
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}></Box>
          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Muibutton
              style={{
                backgroundImage: `url(${WithdrawBg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 14,
                px: 3,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                minWidth: 100,
                border: "none",
              }}
              onClick={() => navigate("/withdraw")}
            >
              Withdraw
            </Muibutton>

            <Muibutton
              style={{
                background: `url(${DepositBg}) no-repeat center`,
                border: "none",
                backgroundSize: "cover",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 14,
                px: 3,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
              }}
              onClick={() => navigate("/deposit")}
            >
              Deposit
            </Muibutton>
          </Box>
        </Box>
        <div className="demo-notice-bar">
          <NoticeBar
            rightIcon={
              <Button
                type="primary"
                className="rv-button-p"
                size="small"
                onClick={() => {
                  functionTOCopy(
                    `${front_end_domain}/register/?ref=${wallet_amount_data?.referral_code}`
                  );
                }}
              >
                Copy
              </Button>
            }
          >
            <p>
              {front_end_domain}/register/?ref=$
              {wallet_amount_data?.referral_code}{" "}
            </p>
          </NoticeBar>
        </div>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            padding: "4px 15px",
            mt: 1,
            width: "100%",
          }}
        >
          <NavLink onClick={() => handleChange(1)} style={{ width: "24%" }}>
            <Box
              className="gamecategory "
              sx={{
                backgroundImage:
                  value === 1
                    ? `url(${bgactive}) !important`
                    : `url(${bgdeactive}) !important`,
                borderRadius: value === 1 && "10px !important",
                backgroundSize:
                  value === 1 ? "100% 112% important" : "100% 100% !important",
              }}
            >
              <Box className="game-img" component="img" src={game1}></Box>
            </Box>
            <Typography variant="body1" color="initial" sx={style.gamecattext}>
              Lottery
            </Typography>
          </NavLink>
          <NavLink onClick={() => handleChange(2)} style={{ width: "24%" }}>
            <Box
              className="gamecategory"
              sx={{
                backgroundImage:
                  value === 2
                    ? `url(${bgactive}) !important`
                    : `url(${bgdeactive}) !important`,
                borderRadius: value === 2 && "10px !important",
                backgroundSize:
                  value === 2 ? "100% 112% important" : "100% 100% !important",
              }}
            >
              <Box component="img" src={game2}></Box>
            </Box>
            <Typography variant="body1" color="initial" sx={style.gamecattext}>
              Slots
            </Typography>
          </NavLink>
          <NavLink onClick={() => handleChange(3)} style={{ width: "24%" }}>
            <Box
              className="gamecategory"
              sx={{
                backgroundImage:
                  value === 3
                    ? `url(${bgactive}) !important`
                    : `url(${bgdeactive}) !important`,
                borderRadius: value === 3 && "10px !important",
                backgroundSize:
                  value === 3 ? "100% 112% important" : "100% 100% !important",
              }}
            >
              <Box component="img" src={game3}></Box>
            </Box>
            <Typography variant="body1" color="initial" sx={style.gamecattext}>
              Sports
            </Typography>
          </NavLink>
          <NavLink onClick={() => handleChange(4)} style={{ width: "24%" }}>
            <Box
              className="gamecategory"
              sx={{
                backgroundImage:
                  value === 4
                    ? `url(${bgactive}) !important`
                    : `url(${bgdeactive}) !important`,
                borderRadius: value === 4 && "10px !important",
                backgroundSize:
                  value === 4 ? "100% 112% important" : "100% 100% !important",
              }}
            >
              <Box component="img" src={game4}></Box>
            </Box>
            <Typography variant="body1" color="initial" sx={style.gamecattext}>
              Casino
            </Typography>
          </NavLink>
        </Stack>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            padding: "4px 15px",
          }}
        >
          <NavLink onClick={() => handleChange(5)} style={{ width: "24%" }}>
            <Box
              className="gamecategory"
              sx={{
                backgroundImage:
                  value === 5
                    ? `url(${bgactive}) !important`
                    : `url(${bgdeactive}) !important`,
                borderRadius: value === 5 && "10px !important",
                backgroundSize:
                  value === 5 ? "100% 112% important" : "100% 100% !important",
              }}
            >
              <Box component="img" src={game5}></Box>
            </Box>
            <Typography variant="body1" color="initial" sx={style.gamecattext}>
              Popular
            </Typography>
          </NavLink>
          <NavLink onClick={() => handleChange(6)} style={{ width: "24%" }}>
            <Box
              className="gamecategory"
              sx={{
                backgroundImage:
                  value === 6
                    ? `url(${bgactive}) !important`
                    : `url(${bgdeactive}) !important`,
                borderRadius: value === 6 && "10px !important",
                backgroundSize:
                  value === 6 ? "100% 112% important" : "100% 100% !important",
              }}
            >
              <Box component="img" src={game7}></Box>
            </Box>
            <Typography variant="body1" color="initial" sx={style.gamecattext}>
              Fishing
            </Typography>
          </NavLink>
          <NavLink onClick={() => handleChange(7)} style={{ width: "24%" }}>
            <Box
              className="gamecategory"
              sx={{
                backgroundImage:
                  value === 7
                    ? `url(${bgactive}) !important`
                    : `url(${bgdeactive}) !important`,
                borderRadius: value === 7 && "10px !important",
                backgroundSize:
                  value === 7 ? "100% 112% important" : "100% 100% !important",
              }}
            >
              <Box component="img" src={game6}></Box>
            </Box>
            <Typography variant="body1" color="initial" sx={style.gamecattext}>
              Mini games
            </Typography>
          </NavLink>
          <NavLink onClick={() => handleChange(8)} style={{ width: "24%" }}>
            <Box
              className="gamecategory"
              sx={{
                backgroundImage:
                  value === 8
                    ? `url(${bgactive}) !important`
                    : `url(${bgdeactive}) !important`,
                borderRadius: value === 8 && "10px !important",
                backgroundSize:
                  value === 8 ? "100% 112% important" : "100% 100% !important",
              }}
            >
              <Box component="img" src={game8}></Box>
            </Box>
            <Typography variant="body1" color="initial" sx={style.gamecattext}>
              PVC
            </Typography>
          </NavLink>
        </Stack>
        {value === 1 && <Lottery />}
        {value === 2 && (
          <Slots
            alljiligames={alljiligames?.slot}
            getGamnesbyID={getGamnesbyID}
          />
        )}
        {value === 3 && (
          <Sports
            alljiligames={alljiligames?.data}
            getGamnesbyID={getGamnesbyID}
          />
        )}
        {value === 4 && (
          <Casino
            alljiligames={alljiligames?.tableandcard}
            getGamnesbyID={getGamnesbyID}
          />
        )}
        {value === 5 && (
          <PVC
            alljiligames={alljiligames?.popular}
            getGamnesbyID={getGamnesbyID}
          />
        )}
        {value === 6 && (
          <Fishing
            alljiligames={alljiligames?.fish}
            getGamnesbyID={getGamnesbyID}
          />
        )}
        {value === 7 && (
          <MiniGames
            alljiligames={alljiligames?.crash}
            getGamnesbyID={getGamnesbyID}
          />
        )}
        {value === 8 && (
          <Populer
            alljiligames={alljiligames?.data}
            getGamnesbyID={getGamnesbyID}
          />
        )}
        <Box sx={{ px: 2 }}>
          <Stack direction={"row"} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                background: theme.palette.primary.main,
                width: "4px",
                height: "16px",
              }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "18px", fontWeight: 700, ml: 1, color: "white" }}
            >
              Winning information
            </Typography>
          </Stack>
          {/* <Box className="">
            {dummyWinners?.slice(5, 8)?.map((i, index) => {
              return (
                <Stack
                  key={index}
                  direction="row"
                  sx={style.winnerslider}
                  className=""
                >
                  <div className="-mt-5">
                    <Box
                      width={20}
                      height={20}
                      component={"img"}
                      src={crown2}
                      className="!relative top-3 right-2"
                    ></Box>
                    <Box
                      component={"img"}
                      src={imageSources[index]}
                      alt={`Profile ${index + 1}`}
                      width={30}
                      height={30}
                      sx={style.winnerprofile}
                    ></Box>
                  </div>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={style.winnername}
                  >
                    <p className="!flex !flex-col">
                      {i?.email
                        ? i.email?.split("@")[0].substring(0, 2) +
                          "**" +
                          (i.email?.split("@")[0].length > 2
                            ? i.email?.split("@")[0].substring(2, 4)
                            : "")
                        : "**"}
                    </p>
                  </Typography>
                  <Box sx={style.winnerbannerouter}>
                    <Box
                      height={45}
                      component={"img"}
                      src={winerbanner1}
                      sx={style.winnerbannerinner}
                    ></Box>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={style.winneramout || 0}
                    >
                      Receive ₹{Number(i?.win || 0)?.toFixed(2)}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={style.winnertitle}
                    >
                      Winning amount
                    </Typography>
                  </Box>
                </Stack>
              );
            })}
          </Box> */}
        </Box>

        <style>
          {`
          .swipe-list-transition {
            transition: transform 0.5s ease-in-out;
          }
          .swipe-list-no-transition {
            transition: none;
          }
        `}
        </style>
        <Box sx={swipeListStyle.swipeListContainer} className="win-info-box">
          <List
            className={
              Math.abs(translateY) >= 64 * res.length
                ? "swipe-list-no-transition"
                : "swipe-list-transition"
            }
            sx={{
              ...swipeListStyle.swipeListStyledList,
              transform: `translateY(${translateY}px)`,
            }}
          >
            {winnersToDisplay.map((item, index) => (
              <ListItem
                key={`${item.email}-${index}`}
                sx={swipeListStyle.swipeListStyledListItem}
              >
                <ListItemAvatar>
                  <Box
                    component="img"
                    src={game10}
                    sx={{
                      width: "60px ",
                      height: "35px",
                      borderRadius: "10px",
                      mr: 1,
                    }}
                  ></Box>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      color="white"
                      className="fce"
                      sx={{ fontSize: "13px", fontWeight: "400" }}
                    >
                      <Avatar
                        src={p1}
                        style={{
                          width: "25px",
                          height: "25px",
                          marginRight: "7px",
                        }}
                      />
                      {item?.email || "**"}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="body2"
                      className="fcs"
                      sx={swipeListStyle.swipeListWinningAmount}
                    >
                      Winning amount{" "}
                      <Typography
                        sx={{
                          ml: 1,
                          fontSize: "13px",
                          fontWeight: "500",
                          color: "#2FD4BC !important",
                        }}
                      >
                        {" "}
                        Receive ₹{Number(item?.win || 0)?.toFixed(2)}{" "}
                      </Typography>
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ py: 3 }}>
          <Stack direction={"row"} sx={{ alignItems: "center", px: 2 }}>
            <Box
              sx={{
                background: theme.palette.primary.main,
                width: "4px",
                height: "16px",
              }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: "18px", fontWeight: 700, ml: 1, color: "white" }}
            >
              Today's earnings chart
            </Typography>
          </Stack>
          <Box sx={swipeListStyle.swipeListContainer2} className="win-info-box">
            <Box sx={{ p: 1 }}>
              <Box sx={style.podiumbox}>
                <Stack direction="row" sx={style.podiumtextouterbox}>
                  <Box sx={style.winner2box}>
                    <Box
                      component={"img"}
                      src={crown2}
                      sx={style.winnercroun}
                    ></Box>
                    <Box
                      component={"img"}
                      src={profile1}
                      sx={style.winnerprofilepod}
                    ></Box>
                    <Box sx={style.winner1amt}>
                      <Typography variant="body1" color="initial">
                        {res?.[1]?.email
                          ? res?.[1]?.email?.split("@")?.[0]?.substring(0, 2) +
                          "**" +
                          (res?.[1]?.email?.split("@")?.[0]?.length > 2
                            ? res?.[1]?.email
                              ?.split("@")?.[0]
                              ?.substring(2, 4)
                            : "")
                          : "**"}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={style.winningamount}
                      >
                        ₹ {Number(res?.[1]?.win)?.toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "30%",
                      position: "absolute",
                      zIndex: 30,
                      top: "-1%",
                      left: "33.33%",
                      height: "100%",
                    }}
                  >
                    <Box
                      component={"img"}
                      src={crown1}
                      sx={style.winnercroun}
                    ></Box>
                    <Box
                      component={"img"}
                      src={profile2}
                      sx={style.winnerprofilepod}
                    ></Box>
                    <Box sx={style.winner2amt}>
                      <Typography variant="body1" color="initial">
                        {res?.[0]?.email
                          ? res?.[0]?.email?.split("@")?.[0]?.substring(0, 2) +
                          "**" +
                          (res?.[0]?.email?.split("@")?.[0]?.length > 2
                            ? res?.[0]?.email
                              ?.split("@")?.[0]
                              ?.substring(2, 4)
                            : "")
                          : "**"}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={style.winningamount}
                      >
                        ₹ {Number(res?.[0]?.win)?.toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "30%",
                      position: "absolute",
                      zIndex: 30,
                      top: "17%",
                      right: 0,
                      height: "100%",
                    }}
                  >
                    <Box
                      component={"img"}
                      src={crown3}
                      sx={style.winnercroun}
                    ></Box>
                    <Box
                      component={"img"}
                      src={profile3}
                      sx={style.winnerprofilepod}
                    ></Box>
                    <Box sx={style.winner1amt}>
                      <Typography variant="body1" color="initial">
                        {"**"}{" "}
                        {res?.[2]?.email
                          ? res?.[2]?.email?.split("@")?.[0]?.substring(0, 2) +
                          "**" +
                          (res?.[2]?.email?.split("@")?.[0]?.length > 2
                            ? res?.[2]?.email
                              ?.split("@")?.[0]
                              ?.substring(2, 4)
                            : "")
                          : "**"}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={style.winningamount}
                      >
                        ₹ {Number(res?.[2]?.win)?.toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
              <Box
                sx={{
                  maxWidth: 430,
                  mx: "auto",
                  padding: "16px 16px 0px 16px",
                  borderRadius: 2,
                }}
              >
                <List>
                  {res?.map((item) => (
                    <ListItem
                      key={item.rank}
                      sx={{
                        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {/* <Typography variant="h6" sx={{ color: "#fff", width: 30, fontSize: '15px', fontWeight: '400', }}>{item.rank}</Typography> */}
                      <ListItemAvatar>
                        <Avatar src={p4} sx={{ width: 40, height: 40 }} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#fff",
                              fontSize: "13px",
                              fontWeight: "400",
                            }}
                          >
                            {item?.email || "**"}
                          </Typography>
                        }
                      />

                      <Typography
                        variant="body1"
                        sx={{
                          color: "#00FFAA",
                          fontSize: "13px",
                          fontWeight: "400",
                        }}
                      >
                        Receive ₹ {Number(item?.win || 0)?.toFixed(2)}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
              {/* {res?.slice(3, 5)?.map((i, index) => {
                return (
                  <Stack key={index} direction="row" sx={style.winnerslider}>
                    <div className="-mt-5">
                      <Box
                        width={20}
                        height={20}
                        component={'img'}
                        src={crown1}
                        className="!relative top-3 right-2"
                      ></Box>
                      <Box
                        component={'img'}
                        src={imageSources[index]}
                        alt={`Profile ${index + 1}`}
                        width={30}
                        height={30}
                        sx={style.winnerprofile}
                      ></Box>
                    </div>
                    <Typography
                      variant="body1"
                      color="initial"
                      sx={style.winnername}
                    >
                      <p className="!flex !flex-col">
                        {i?.email
                          ? i.email?.split('@')[0].substring(0, 2) +
                          '**' +
                          (i.email?.split('@')[0].length > 2
                            ? i.email?.split('@')[0].substring(2, 4)
                            : '')
                          : '**'}
                      </p>
                    </Typography>
                    <Box sx={style.winnerbannerouter}>
                      <Box
                        height={45}
                        component={'img'}
                        src={winerbanner1}
                        sx={style.winnerbannerinner}
                      ></Box>
                    </Box>
                    <Box>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={style.winneramout || 0}
                      >
                        Receive ₹ {Number(i?.win || 0)?.toFixed(2)}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="initial"
                        sx={style.winnertitle}
                      >
                        Winning amount
                      </Typography>
                    </Box>
                  </Stack>
                );
              })} */}
            </Box>
          </Box>

          <Box sx={{ p: 3, borderRadius: 2, color: "#fff" }}>
            <Box
              component="img"
              src={logo}
              sx={{ height: "40px !important", mb: 2 }}
            ></Box>
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                display: "flex",
                alignItems: "start",
                fontSize: "11px",
                fontWeight: "400",
              }}
            >
              <span style={{ color: "#A0A0A0", marginRight: 8 }}>◆</span>
              The platform advocates fairness, justice, and openness. We mainly
              operate fair lottery, blockchain games, live casinos, and slot
              machine games.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                display: "flex",
                alignItems: "start",
                fontSize: "11px",
                fontWeight: "400",
              }}
            >
              <span style={{ color: "#A0A0A0", marginRight: 8 }}>◆</span>
              Tahalka Game works with more than 10,000 online live game dealers
              and slot games, all of which are verified fair games.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                display: "flex",
                alignItems: "start",
                fontSize: "11px",
                fontWeight: "400",
              }}
            >
              <span style={{ color: "#A0A0A0", marginRight: 8 }}>◆</span>
              Tahalka Game supports fast deposit and withdrawal, and looks
              forward to your visit.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#FFF",
                mt: 2,
                fontSize: "11px",
                fontWeight: "400",
              }}
            >
              <span style={{ color: "#AAA" }}>Gambling can be addictive,</span>{" "}
              <span style={{ color: "#FFF" }}>please play rationally.</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: "#FFF",
                fontSize: "11px",
                fontWeight: "400",
              }}
            >
              Tahalka Game only accepts customers above the age of 18.
            </Typography>
          </Box>
          {/* <div className='bottom-20 right-0 fixed  z-50'>
            <div className='flex flex-col items-center mb-2'>
              <img src={Agent} alt='' className='!h-16 w-16 rounded-full  cursor-pointer '
                onClick={() => window.open(`${support_app_url}`, "_blank")} />
              <p className='bg-white px-1 text-xs'>Support</p>

            </div>
            <div className='flex flex-col items-center'>
              <img src={Telegram} alt='' className='h-14 w-16 mr-2 bg-white rounded-full cursor-pointer'
                onClick={() => window.open(`${telegram_app_url}`, "_blank")} />
              <p className='text-xs bg-white px-1'>Telegram</p>

            </div>
          </div> */}
          <MyModal />

          {popup_get_data?.status === 1 && (
            <Dialog open={dialogOpen} onClose={handleDialogClose}>
              <Box
                component="img"
                src={popup_get_data?.longtext}
                className="!w-[300px]"
                alt=""
              />
              <div className="!flex justify-center cursor-pointer">
                <Close onClick={handleDialogClose} />
              </div>
            </Dialog>
          )}
        </Box>
      </Layout>
    </>
  );
}

export default Dashboard;
const style = {
  banner: { height: "180px !important", borderRadius: "8px !important" },
  gamecattext: {
    textAlign: "center",
    textDecoration: "none !important",
    fontSize: "11px",
    fontWeight: 500,
    mt: 1,
    color: "white !important",
  },
  winbox: {
    background: "#F4F5F8",
    borderRadius: "20px",
    height: "160px",
    marginBottom: "20px",
    position: "relative",
  },
  positiongame: { position: "absolute", top: "10px", left: "20px" },
  gameheading: { fontSize: "20px", fontWeight: 700, color: "white" },
  winnerslider: {
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0px 10px 5px",
    background: "#011341",
    borderRadius: "10px",
    my: 1.5,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    animation: "infinite moves",
  },
  winnerprofile: {
    borderRadius: "50%",
    objectPosition: "center",
    objectFit: "cover",
  },
  winnername: { fontSize: "12px", fontWeight: 400, mx: 1 },
  winnerbannerouter: {
    background: theme.palette.primary.main,
    width: "23%",
    borderRadius: "10px",
    objectPosition: "center",
  },
  winnerbannerinner: {
    width: "100%",
    borderRadius: "10px",
    objectPosition: "center",
    objectFit: "cover",
  },
  //
  winneramout: { fontSize: "12px", fontWeight: 600, marginLeft: 1 },
  winnertitle: { fontSize: "11px", fontWeight: 400, marginLeft: 1 },
  podiumbox: {
    backgroundImage: `url(${podium})`,
    width: "100%",
    height: "140px",
    marginTop: "30px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    position: "relative",
    zIndex: 10,
  },
  podiumtextouterbox: { width: "100%", height: "100%", position: "relative" },
  winner2box: {
    width: "30%",
    position: "absolute",
    zIndex: 30,
    top: "17%",
    left: 0,
    height: "100%",
  },
  winnerposition: {
    width: "70px",
    height: "50px",
    objectFit: "contain",
    position: "absolute",
    left: "21%",
    top: "14%",
  },
  winnerprofilepod: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    position: "absolute",
    left: "25%",
    top: "-11%",
  },
  winnercroun: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
    position: "absolute",
    left: "11%",
    top: "-25%",
    zIndex: 1000,
  },
  winner1amt: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: "75px",
    textAlign: "center",
    "&>p": { color: "white", fontWeight: 400, fontSize: "11px" },
  },
  winner2amt: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: "85px",
    textAlign: "center",
    "&>p": { color: "white", fontWeight: 400, fontSize: "11px" },
  },
  winningamount: {
    borderRadius: "10px",
  },
};
