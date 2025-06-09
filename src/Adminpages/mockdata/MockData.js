import {
  ColorizeRounded,
  ContactSupportOutlined,
  DownhillSkiing, Games, HistoryEdu,
  LeaderboardSharp, LeakRemoveOutlined, LoginOutlined, LoginSharp,
  MonetizationOn, Money, People, PlayCircleFilledSharp, Report,
  ReportGmailerrorred, ReportOff, ReportProblem, RowingSharp,
  SelfImprovement, Transcribe, UpcomingSharp, WheelchairPickupOutlined
} from "@mui/icons-material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import LockResetIcon from "@mui/icons-material/LockReset";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
export const all_Data = [
  {
    id: 1,
    navLink: "/master",
    navItem: "Master",
    navIcon: (
      <span>
        <LeaderboardSharp color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },
  {
    id: 2,
    navLink: "/admindashboard",
    navItem: "Dashboard",
    navIcon: (
      <span>
        <DashboardCustomizeIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },
  {
    id: 12,
    navLink: "/dashboard",
    navItem: "User Panel",
    navIcon: (
      <span>
        <ViewCarouselIcon color="#15317E" fontSize="medium" />
      </span>
    ),
  },
  {
    id: 31,
    navLink: "/signUp",
    navItem: "Registration",
    navIcon: (
      <span>
        <LoginOutlined color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },
  {
    id: 2,
    navLink: "/player",
    navItem: "Player",
    navIcon: (
      <span>
        <SportsEsportsIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 2.2,
        navLink: "/player",
        navItem: "All Player",
        navIcon: (
          <span>
            <Diversity1Icon color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      // {
      //   id: 2.3,
      //   navLink: "/loginApproval",
      //   navItem: "LogIn Approval",
      //   navIcon: (
      //     <span>
      //       <LoginSharp color="#15317E" fontSize="medium" />
      //     </span>
      //   ),
      // },
    ],
  },
   

  {
    id: 6,
    navLink: "/selfdepositBonus",
    navItem: "Income",
    navIcon: (
      <span>
        <CardGiftcardIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [

      {
        id: 6.3,
        navLink: "/selfdepositBonus",
        navItem: " Deposit Base Salary",
        navIcon: (
          <span>
            <SelfImprovement color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 6.4,
        navLink: "/cashbackBonus",
        navItem: "50% Refund Bonus",
        navIcon: (
          <span>
            <RowingSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 6.2,
        navLink: "/welcomebonus",
        navItem: "Agent Referral Bonus",
        navIcon: (
          <span>
            <RowingSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 6.2,
        navLink: "/winningbonus",
        navItem: "Referral Bonus",
        navIcon: (
          <span>
            <RowingSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 6.7,
        navLink: "/levelBonus",
        navItem: "Daily Active Base Salary",
        navIcon: (
          <span>
            <LeakRemoveOutlined color="#15317E" fontSize="medium" />
          </span>
        ),
      },
     
      {
        id: 8.5,
        navLink: "/salarybonus",
        navItem: "Recharge Bonus For New Player",
        navIcon: (
          <span>
            <WheelchairPickupOutlined color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 8.5,
        navLink: "/weeklybonus",
        navItem: "Advertise Support",
        navIcon: (
          <span>
            <WheelchairPickupOutlined color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 8.6,
        navLink: "/teamreferal",
        navItem: "Trade Income",
        navIcon: (
          <span>
            <WheelchairPickupOutlined color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 6.1,
        navLink: "/companypromoter",
        navItem: "Daily Return Compunding Income",
        navIcon: (
          <span>
            <SelfImprovement color="#15317E" fontSize="medium" />
          </span>
        ),
      },
       {
        id: 8.5,
        navLink: "/giftBonus",
        navItem: "Gift Code Bonus",
        navIcon: (
          <span>
            <WheelchairPickupOutlined color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 8.6,
        navLink: "/vipbonus",
        navItem: "Vip Income",
        navIcon: (
          <span>
            <WheelchairPickupOutlined color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 8.6,
        navLink: "/self",
        navItem: "Self Recharge Bonus",
        navIcon: (
          <span>
            <WheelchairPickupOutlined color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  
  // {
  //   id: 38,
  //   navLink: "/set_bonus",
  //   navItem: "Set ZP Amount",
  //   navIcon: (
  //     <span>
  //       <BoltRounded color="#15317E" fontSize="medium" />
  //     </span>
  //   ),
  //   subcomponent: [],
  // },
  {
    id: 38,
    navLink: "/coupon",
    navItem: "Coupon",
    navIcon: (
      <span>
        <ContactSupportOutlined color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },
  {
    id: 38,
    navLink: "/usdt_withdraw_address",
    navItem: "USDT Withdraw",
    navIcon: (
      <span>
        <ContactSupportOutlined color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },
  {
    id: 8,
    navLink: "/fund",
    navItem: "Fund",
    navIcon: (
      <span>
        <Money color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 8.1,
        navLink: "/fund",
        navItem: "Credit Fund",
        navIcon: (
          <span>
            <MonetizationOn color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 8.5,
        navLink: "/debit_fund",
        navItem: "Debit Fund",
        navIcon: (
          <span>
            <MonetizationOn color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 8.2,
        navLink: "/fund/transfer-fund-history",
        navItem: "Credit Fund Transfer History",
        navIcon: (
          <span>
            <Transcribe color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 8.2,
        navLink: "/fund/debited-transfer-fund-history",
        navItem: "Debit Fund Transfer History",
        navIcon: (
          <span>
            <Transcribe color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      // {
      //   id: 8.2,
      //   navLink: "/fund/p2p-history",
      //   navItem: "P2P History",
      //   navIcon: (
      //     <span>
      //       <Transcribe color="#15317E" fontSize="medium" />
      //     </span>
      //   ),
      // },

    ],
  },
 
  {
    id: 2.3,
    navLink: "/upload",
    navItem: "Upload QR",
    navIcon: (
      <span>
        <LoginSharp color="#15317E" fontSize="medium" />
      </span>
    ),
  },

  {
    id: 11,
    navLink: "/color-prediction-30-sec",
    navItem: "Wingo",
    navIcon: (
      <span>
        <Games color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 11.0,
        navLink: "/color-prediction-30-sec",
        navItem: "Wingo 30 Sec",
        navIcon: (
          <span>
            <PlayCircleFilledSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 11.1,
        navLink: "/color-prediction-1-min",
        navItem: "Wingo 1 Min",
        navIcon: (
          <span>
            <PlayCircleFilledSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 11.2,
        navLink: "/color-prediction-2-min",
        navItem: "Wingo 2 Min",
        navIcon: (
          <span>
            <ColorizeRounded color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 11.3,
        navLink: "/color-prediction-3-min",
        navItem: "Wingo 3 Min",
        navIcon: (
          <span>
            <HistoryEdu color="#15317E" fontSize="medium" />
          </span>
        ),
      },

    ],
  },
  {
    id: 11,
    navLink: "/Trx-color-prediction-1-min",
    navItem: "TRX",
    navIcon: (
      <span>
        <Games color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 11.0,
        navLink: "/Trx-color-prediction-1-min",
        navItem: "TRX 1 Min",
        navIcon: (
          <span>
            <PlayCircleFilledSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 18,
    navLink: "/k3-color-prediction-1-min",
    navItem: "K3Lottery",
    navIcon: (
      <span>
        <Games color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 18.1,
        navLink: "/k3-color-prediction-1-min",
        navItem: "k3Lottery 1 Min",
        navIcon: (
          <span>
            <PlayCircleFilledSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 18.2,
        navLink: "/k3-color-prediction-2-min",
        navItem: "k3Lottery 2 Min",
        navIcon: (
          <span>
            <ColorizeRounded color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 18.3,
        navLink: "/k3-color-prediction-3-min",
        navItem: "k3Lottery 3 Min",
        navIcon: (
          <span>
            <HistoryEdu color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 18.4,
        navLink: "/k3-color-prediction-10-min",
        navItem: "k3Lottery 4 Min",
        navIcon: (
          <span>
            <HistoryEdu color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  // {
  //   id: 55,
  //   navLink: "/roulette_result",
  //   navItem: "Roulette",
  //   navIcon: (
  //     <span>
  //       <Ballot color="#15317E" fontSize="medium" />
  //     </span>
  //   ),
  //   subcomponent: [],
  // },
  // {
  //   id: 111,
  //   navLink: "/satta_desawar",
  //   navItem: "Satta Matka",
  //   navIcon: (
  //     <span>
  //       <Games color="#15317E" fontSize="medium" />
  //     </span>
  //   ),
  //   subcomponent: [
  //     {
  //       id: 111.1,
  //       navLink: "/satta_desawar",
  //       navItem: "Desawar",
  //       navIcon: (
  //         <span>
  //           <PlayCircleFilledSharp color="#15317E" fontSize="medium" />
  //         </span>
  //       ),
  //     },
  //     {
  //       id: 111.2,
  //       navLink: "/satta_gali",
  //       navItem: "Gali",
  //       navIcon: (
  //         <span>
  //           <ColorizeRounded color="#15317E" fontSize="medium" />
  //         </span>
  //       ),
  //     },
  //     {
  //       id: 111.3,
  //       navLink: "/satta_faridabad",
  //       navItem: "Faridabad",
  //       navIcon: (
  //         <span>
  //           <HistoryEdu color="#15317E" fontSize="medium" />
  //         </span>
  //       ),
  //     },
  //     {
  //       id: 111.4,
  //       navLink: "/satta_ghaziyabad",
  //       navItem: "Ghaziabad",
  //       navIcon: (
  //         <span>
  //           <HistoryEdu color="#15317E" fontSize="medium" />
  //         </span>
  //       ),
  //     },
  //   ],
  // },
  {
    id: 11,
    navLink: "/inr_Paying",
    navItem: "USDT",
    navIcon: (
      <span>
        <Games color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 11.1,
        navLink: "/inr_Paying",
        navItem: "USDT Paying",
        navIcon: (
          <span>
            <PlayCircleFilledSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 11.2,
        navLink: "/inr_Payout",
        navItem: "USDT Payout",
        navIcon: (
          <span>
            <ColorizeRounded color="#15317E" fontSize="medium" />
          </span>
        ),
      },

    ],
  },
  {
    id: 111,
    navLink: "/inr_Pending",
    navItem: "INR Manually",
    navIcon: (
      <span>
        <Games color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 111.1,
        navLink: "/inr_Pending",
        navItem: "Pending",
        navIcon: (
          <span>
            <PlayCircleFilledSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 111.4,
        navLink: "/inr_Approve",
        navItem: "Processing",
        navIcon: (
          <span>
            <ColorizeRounded color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 111.2,
        navLink: "/inr_Success",
        navItem: "Success",
        navIcon: (
          <span>
            <PlayCircleFilledSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 111.3,
        navLink: "/inr_reject",
        navItem: "Reject",
        navIcon: (
          <span>
            <ColorizeRounded color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  // {
  //   id: 11,
  //   navLink: "/zp_token",
  //   navItem: "Zp Token",
  //   navIcon: (
  //     <span>
  //       <Games color="#15317E" fontSize="medium" />
  //     </span>
  //   ),
  //   subcomponent: [
  //     {
  //       id: 11.1,
  //       navLink: "/zp_token",
  //       navItem: "Paying",
  //       navIcon: (
  //         <span>
  //           <PlayCircleFilledSharp color="#15317E" fontSize="medium" />
  //         </span>
  //       ),
  //     },
  //     {
  //       id: 11.2,
  //       navLink: "/zp_token_payout",
  //       navItem: "Payout",
  //       navIcon: (
  //         <span>
  //           <ColorizeRounded color="#15317E" fontSize="medium" />
  //         </span>
  //       ),
  //     },

  //   ],
  // },
  // {
  //   id: 11,
  //   navLink: "/bankdata",
  //   navItem: "Bank",
  //   navIcon: (
  //     <span>
  //       <Games color="#15317E" fontSize="medium" />
  //     </span>
  //   ),
  //   subcomponent: [
  //     {
  //       id: 111.1,
  //       navLink: "/bankdata",
  //       navItem: "Bank",
  //       navIcon: (
  //         <span>
  //           <PlayCircleFilledSharp color="#15317E" fontSize="medium" />
  //         </span>
  //       ),
  //     },
     
   

  //   ],
  // },
  {
    id: 22,
    navLink: "/upline_team",
    navItem: "Team",
    navIcon: (
      <span>
        <People color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 22.1,
        navLink: "/upline_team",
        navItem: "Upline Team",
        navIcon: (
          <span>
            <UpcomingSharp color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 22.2,
        navLink: "/down_team",
        navItem: "Downline Team",
        navIcon: (
          <span>
            <DownhillSkiing color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  {
    id: 13,
    navLink: "/aviator_report",
    navItem: "Report",
    navIcon: (
      <span>
        <Report color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [
      {
        id: 13.1,
        navLink: "/aviator_report",
        navItem: "Aviator Report",
        navIcon: (
          <span>
            <ReportProblem color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 13.2,
        navLink: "/wingo_report",
        navItem: "Wingo Report",
        navIcon: (
          <span>
            <ReportOff color="#15317E" fontSize="medium" />
          </span>
        ),
      },
      {
        id: 13.3,
        navLink: "/trx_report",
        navItem: "Trx Report",
        navIcon: (
          <span>
            <ReportGmailerrorred color="#15317E" fontSize="medium" />
          </span>
        ),
      },
    ],
  },
  // {
  //   id: 17,
  //   navLink: "/daybook_report",
  //   navItem: "DayBook Report",
  //   navIcon: (
  //     <span>
  //       <Book color="#15317E" fontSize="medium" />
  //     </span>
  //   ),
  // },
  // {
  //   id: 44,
  //   navLink: "/company_promoter",
  //   navItem: "Company Promoter",
  //   navIcon: (
  //     <span>
  //       <Compare color="#15317E" fontSize="medium" />
  //     </span>
  //   ),
  //   subcomponent: [],
  // },

  {
    id: 14,
    navLink: "/user_permission",
    navItem: "User Permission",
    navIcon: (
      <span>
        <AddToPhotosIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },
  {
    id: 8,
    navLink: "/change-password",
    navItem: "Change Password",
    navIcon: (
      <span>
        <LockResetIcon color="#15317E" fontSize="medium" />
      </span>
    ),
    subcomponent: [],
  },


];
