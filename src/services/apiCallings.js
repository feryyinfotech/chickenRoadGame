import axios from 'axios';
import toast from 'react-hot-toast';
import { endpoint, aviatordomain } from './urls';
import { deCryptData } from '../shared/secret';
import CryptoJS from 'crypto-js';
import { apiConnectorGet } from './apiconnector';
import VantToast from '../shared/toast/Toast';

export const storeCookies = () => {
  let expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 1 * 60 * 60 * 1000); // 2 hours in milliseconds
  // expirationDate.setTime(expirationDate.getTime() + 60*1000); // 2 hours in milliseconds
  document.cookie = `token=anandtoken; expires=${expirationDate.toUTCString()}; path=/`;
};
const login_data =
  (localStorage.getItem('user_id') &&
    CryptoJS.AES.decrypt(localStorage.getItem('user_id'), 'anand')?.toString(
      CryptoJS.enc.Utf8
    )) ||
  null;
// const login_data_ = localStorage.getItem("aviator_data");
// const first_rechange =
//   aviator_login_data && JSON.parse(aviator_login_data)?.first_recharge;
const user_id = login_data && JSON.parse(login_data)?.UserID;
export function checkTokenValidity() {
  const cookies = document?.cookie?.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]?.split('=');
    if (cookie[0] === 'token') {
      const tokenExpiration = new Date(cookie[1]);
      if (tokenExpiration < new Date()) {
        // Token has expired
        return false;
      }
      return true;
    }
  }
  // Token not found
  return false;
}

export const logOutFunction = async () => {
  try {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/'; // Redirect to login page
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};

export const MyHistoryFn = async (gid) => {
  const id = deCryptData(localStorage.getItem('user_id'));
  try {
    const response = await axios.get(
      `${endpoint.my_history}?userid=${id}&limit=0&gameid=${gid}`
    );
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const getBalanceFunction = async (setBalance) => {
  try {
    const reqBody = {
      userid: localStorage.getItem('user_id'),
    };
    const response = await axios.post(`${endpoint.get_balance}`, reqBody);
    setBalance(response?.data?.earning);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};

export const registrationBonusFn = async (type) => {
  try {
    const reqBody = {
      profile_id: deCryptData(localStorage.getItem('user_id')),
      type: type,
    };
    const response = await axios.post(endpoint.registration_bonus, reqBody);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const BankDetailsFUnction = async () => {
  try {
    const reqBody = {
      user_id: deCryptData(localStorage.getItem('user_id')),
    };
    const response = await axios.post(endpoint.view_bank_details, reqBody);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const FundTransferHistoryFn = async () => {
  try {
    const reqBody = {
      userid: deCryptData(localStorage.getItem('user_id')),
    };
    const response = await axios.post(endpoint.fund_transfer_history, reqBody);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const FundReciveHistoryFn = async () => {
  try {
    const reqBody = {
      userid: deCryptData(localStorage.getItem('user_id')),
    };
    const response = await axios.post(endpoint.fund_recieve, reqBody);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};

export const bankListFuncton = async () => {
  try {
    const response = await axios.get(endpoint.bank);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const UPIDetailsFUnction = async () => {
  try {
    const reqBody = {
      user_id: deCryptData(localStorage.getItem('user_id')),
    };
    const response = await axios.post(endpoint.view_upi_details, reqBody);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const USDTAddress = async () => {
  try {
    const reqBody = {
      userid: deCryptData(localStorage.getItem('user_id')),
    };
    const response = await axios.post(endpoint.view_usdt_address, reqBody);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const upiListFuncton = async () => {
  try {
    const response = await axios.get(endpoint.bank);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const Promotionfunction = async () => {
  const reqBody = {
    userid: deCryptData(localStorage.getItem('user_id')),
  };
  try {
    const response = await axios.post(endpoint.info_promotion, reqBody);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const TeamsubFunction = async () => {
  const reqBody = {
    userid: deCryptData(localStorage.getItem('user_id')),
  };
  try {
    const response = await axios.post(endpoint.team_info, reqBody);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const TeamFunction = async () => {
  try {
    const reqBody = {
      user_id: deCryptData(localStorage.getItem('user_id')),
    };
    const response = await axios.post(endpoint.team_report, reqBody);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const TeamDatafunction = async () => {
  try {
    const response = await axios.get(endpoint.team_data);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const ProfileDataFunction = async () => {
  try {
    const reqBody = {
      user_id: localStorage.getItem('user_id'),
    };
    const response = await apiConnectorGet(endpoint.profile_function, reqBody);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const GetTopFn = async () => {
  try {
    const response = await axios.get(endpoint.node_api.get_top_users);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};

export const walletamountAviator = async () => {
  try {
    const response = await axios.post(
      `${aviatordomain}/api/v1/get-wallet-amount-by-id`,
      { id: user_id }
    );
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};

export const returnWinningAmount = (number, amount, result) => {
  let percent = 3;
  const amount_after_3_percent = amount * ((100 - percent) / 100);
  // means number par bet lgi hai aur number hi result show huaa hai
  if (
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]?.includes(result) &&
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]?.includes(number) &&
    result === number
  )
    return Number(amount_after_3_percent * 9).toFixed(2);
  // means green bet result is 1,3,7,9 ===> green aa gya
  if (number === 11 && [1, 3, 7, 9]?.includes(result))
    return Number(amount_after_3_percent * 2)?.toFixed(2);
  // means green lgaya aur result 5 return huaa to as it is amount return kra dena hai..
  if (number === 11 && [5]?.includes(result))
    return Number(amount_after_3_percent)?.toFixed(2);
  // means red lgaya aur result 2,4,6,8 ==> red aa gya
  if (number === 13 && [2, 4, 6, 8]?.includes(result))
    return Number(amount_after_3_percent * 2)?.toFixed(2);
  // means green lgaya aur result 5 return huaa to as it is amount return kra dena hai..
  if (number === 13 && [0]?.includes(result))
    return Number(amount_after_3_percent)?.toFixed(2);
  // suppose that voilet ==> 12 par lgaya aur result 0,5 me se koi aaya joki dono voilet se match kar rhe hai
  if (number === 12 && [0, 5]?.includes(result))
    return Number(amount_after_3_percent * 2.5)?.toFixed(2);
  // agar big par lgata means 15 and result comes form 5,6,7,8
  if (number === 15 && [5, 6, 7, 8, 9]?.includes(result))
    return Number(amount_after_3_percent * 2)?.toFixed(2);
  // agar small par means 14 lgaya hai to
  if (number === 14 && [0, 1, 2, 3, 4]?.includes(result))
    return Number(amount_after_3_percent * 2)?.toFixed(2);
  return null;
};

export const showRank = (num) => {
  if (Number(num) === 1) return 'Gold Club';
  else if (Number(num) === 2) return 'Diamond Club';
  else if (Number(num) === 3) return 'Crown Club';
  else if (Number(num) === 4) return 'Ambassador Club';
  else if (Number(num) === 5) return 'Director Club';
};

export const k3_HistoryFn = async (gid) => {
  try {
    const reqBody = {
      userid: localStorage.getItem('user_id'),
      gameid: gid,
    };
    const response = await axios.post(`${endpoint.k3_my_history}`, reqBody);
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};
export const yesterdayFn = async () => {
  try {
    const response = await axios.get(
      `${endpoint.yesterday_income}?userid=${user_id}`
    );
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};

export const VipIncomeFnMonthly = async () => {
  //
  try {
    const response = await axios.get(
      `${endpoint.vip_income_monthly}?user_id=${user_id}`
    );
    return response;
  } catch (e) {
    VantToast(e?.message, 'f');
    console.log(e);
  }
};