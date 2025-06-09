// import { Box, Typography } from '@mui/material';
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import AccountIcon from "../../../assets/images/acc.png";
// import AccountActiveIcon from "../../../assets/images/accactive.png";
// import ActivityIcon from "../../../assets/images/acti.png";
// import ActivityActiveIcon from "../../../assets/images/actiactive.png";
// import HomeIcon from "../../../assets/images/hom.png";
// import PromoIcon from "../../../assets/images/promo.png";
// import PromoActiveIcon from "../../../assets/images/promoactive.png";
// import WalletIcon from "../../../assets/images/wall.png";
// import WalletActiveIcon from "../../../assets/images/wallactive.png";

// function Footer() {
//   const [nav, setNav] = useState(1);
//   const navigation = (value) => {
//     setNav(value);
//   };

//   const [value, setValue] = useState("home");
//   return (
//     <Box
//       sx={{
//         position: "fixed",
//         bottom: 0,
//         left: "50%",
//         transform: "translateX(-50%)",
//         width: "100%",
//         maxWidth: "430px",
//         background: "#05012B",
//         display: "flex",
//         justifyContent: "space-around",
//         padding: "10px 0",
//         borderTop: '1px solid #224ba26b',
//         zIndex: 1000,
//       }}
//     >
//       {/* Promotion */}
//       <Box component={NavLink} to="/promotion" onClick={() => setValue("promo")} sx={{ width: '20%', display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer" }}>
//         <Box className="fcfdc" sx={{ position: 'relative', width: '100%', height: '60px', }}>
//           <img src={value === "promo" ? PromoActiveIcon : PromoIcon} alt="Promotion" style={{ width: value === "promo" ? '36px' : '20px', height: value === "promo" ? '76%' : '', }} />
//           <Typography sx={{ fontSize: 12, color: value === "promo" ? '#00ecbe' : '#6f80a4', position: 'absolute', bottom: '34%', }}>Promotion</Typography>
//         </Box>
//       </Box>
//       <Box component={NavLink} to="/activity" onClick={() => setValue("activity")} sx={{ width: '20%', display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer" }}>
//         <Box className="fcfdc" sx={{ position: 'relative', width: '100%', height: '60px', }}>
//           <img src={value === "activity" ? ActivityActiveIcon : ActivityIcon} alt="Promotion" style={{ width: value === "activity" ? '36px' : '20px', height: value === "activity" ? '76%' : '', }} />
//           <Typography sx={{ fontSize: 12, color: value === "activity" ? '#00ecbe' : '#6f80a4', position: 'absolute', bottom: '34%', }}>Activity</Typography>
//         </Box>
//       </Box>
//       <Box className="fccc" component={NavLink} to="/dashboard" onClick={() => setValue("home")} sx={{ width: '20%', }}>
//         <img src={HomeIcon} alt="Home" style={{ width: '65px', position: 'absolute', top: '-15%', }} />
//       </Box>
//       <Box component={NavLink} to="/wallet" onClick={() => setValue("wallet")} sx={{ width: '20%', display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer" }}>
//         <Box className="fcfdc" sx={{ position: 'relative', width: '100%', height: '60px', }}>
//           <img src={value === "wallet" ? WalletActiveIcon : WalletIcon} alt="Promotion" style={{ width: value === "wallet" ? '36px' : '20px', height: value === "wallet" ? '76%' : '', }} />
//           <Typography sx={{ fontSize: 12, color: value === "wallet" ? '#00ecbe' : '#6f80a4', position: 'absolute', bottom: '34%', }}>Wallet</Typography>
//         </Box>
//       </Box>
//       <Box component={NavLink} to="/account" onClick={() => setValue("account")} sx={{ width: '20%', display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer" }}>
//         <Box className="fcfdc" sx={{ position: 'relative', width: '100%', height: '60px', }}>
//           <img src={value === "account" ? AccountActiveIcon : AccountIcon} alt="Promotion" style={{ width: value === "account" ? '36px' : '20px', height: value === "account" ? '76%' : '', }} />
//           <Typography sx={{ fontSize: 12, color: value === "account" ? '#00ecbe' : '#6f80a4', position: 'absolute', bottom: '34%', }}>Wallet</Typography>
//         </Box>
//       </Box>
//     </Box>

//   );
// }

// export default Footer;

import { Box, Typography } from '@mui/material';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import AccountIcon from "../../../assets/images/acc.png";
import AccountActiveIcon from "../../../assets/images/accactive.png";
import ActivityIcon from "../../../assets/images/acti.png";
import ActivityActiveIcon from "../../../assets/images/actiactive.png";
import HomeIcon from "../../../assets/images/hom.png";
import PromoIcon from "../../../assets/images/promo.png";
import PromoActiveIcon from "../../../assets/images/promoactive.png";
import WalletIcon from "../../../assets/images/wall.png";
import WalletActiveIcon from "../../../assets/images/wallactive.png";

function Footer() {
  const location = useLocation(); // Get the current route path

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "430px",
        background: "#05012B",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0",
        borderTop: '1px solid #224ba26b',
        zIndex: 1000,
      }}
    >
      {/* Promotion */}
      <NavLink to="/promotion" style={{ width: '20%' }}>
        <Box className="fcfdc" sx={{ position: 'relative', width: '100%', height: '60px', textAlign: "center" }}>
          <img src={location.pathname === "/promotion" ? PromoActiveIcon : PromoIcon} alt="Promotion"
            style={{ width: location.pathname === "/promotion" ? '36px' : '20px', height: location.pathname === "/promotion" ? '76%' : '' }} />
          <Typography sx={{ fontSize: 12, color: location.pathname === "/promotion" ? '#00ecbe' : '#6f80a4', position: 'absolute', bottom: '34%', }}>Promotion</Typography>
        </Box>
      </NavLink>

      {/* Activity */}
      <NavLink to="/activity" style={{ width: '20%' }}>
        <Box className="fcfdc" sx={{ position: 'relative', width: '100%', height: '60px', textAlign: "center" }}>
          <img src={location.pathname === "/activity" ? ActivityActiveIcon : ActivityIcon} alt="Activity"
            style={{ width: location.pathname === "/activity" ? '36px' : '20px', height: location.pathname === "/activity" ? '76%' : '' }} />
          <Typography sx={{ fontSize: 12, color: location.pathname === "/activity" ? '#00ecbe' : '#6f80a4', position: 'absolute', bottom: '34%', }}>Activity</Typography>
        </Box>
      </NavLink>

      {/* Home (Centered and Highlighted) */}
      <NavLink to="/dashboard" style={{ width: '20%', textAlign: "center", display: 'flex', justifyContent: 'center' }}>
        <img src={HomeIcon} alt="Home" style={{ width: '65px', position: 'absolute', top: '-15%' }} />
      </NavLink>

      {/* Wallet */}
      <NavLink to="/wallet" style={{ width: '20%' }}>
        <Box className="fcfdc" sx={{ position: 'relative', width: '100%', height: '60px', textAlign: "center" }}>
          <img src={location.pathname === "/wallet" ? WalletActiveIcon : WalletIcon} alt="Wallet"
            style={{ width: location.pathname === "/wallet" ? '36px' : '20px', height: location.pathname === "/wallet" ? '76%' : '' }} />
          <Typography sx={{ fontSize: 12, color: location.pathname === "/wallet" ? '#00ecbe' : '#6f80a4', position: 'absolute', bottom: '34%', }}>Wallet</Typography>
        </Box>
      </NavLink>

      {/* Account */}
      <NavLink to="/account" style={{ width: '20%' }}>
        <Box className="fcfdc" sx={{ position: 'relative', width: '100%', height: '60px', textAlign: "center" }}>
          <img src={location.pathname === "/account" ? AccountActiveIcon : AccountIcon} alt="Account"
            style={{ width: location.pathname === "/account" ? '36px' : '20px', height: location.pathname === "/account" ? '76%' : '' }} />
          <Typography sx={{ fontSize: 12, color: location.pathname === "/account" ? '#00ecbe' : '#6f80a4', position: 'absolute', bottom: '34%', }}>Account</Typography>
        </Box>
      </NavLink>
    </Box>
  );
}

export default Footer;
