import React from "react";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { Select } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const { Option } = Select;
function Header() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <div className="header_wrapper">
        <div className="containerdev ">
          <div className="nav_wrapper">
            <div className="left_box">
              <ul className="qucik_link">
                <li>
                  <a href="https://all4u.market/wholesale/">Оптовая витрина</a>
                  <KeyboardArrowDownIcon />
                </li>
                <li className="retail_parent">
                  <a href="https://all4u.market/">Розничная витрина</a>
                  <KeyboardArrowDownIcon />
                  <ul className="retail_links">
                    <li>
                      <a href="https://all4u.market/newest-ru/">
                        <DevicesOutlinedIcon />
                        Каталог товаров
                      </a>
                    </li>
                    <li>
                      <a href="https://all4u.market/payment-and-shipping-ru/">
                        <AccountBalanceWalletOutlinedIcon />
                        Варианты оплаты и Доставка
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <TimerOutlinedIcon />
                        Рассрочка
                      </a>
                    </li>

                    <li>
                      <a href="https://all4u.market/exchange-and-return-ru/">
                        <VerifiedUserOutlinedIcon />
                        Гарантии и возврат
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Заявки на закупки</a>
                  <KeyboardArrowDownIcon />
                </li>
              </ul>
            </div>
            <div className="center_box">
              <Link href="/">
                <img src="../images/lightlogo.png" />
              </Link>
            </div>
            <div className="right_box">
              <ul className="qucik_link">
                <li className="phone_icon">
                  <PhoneEnabledOutlinedIcon />
                  <a href="tel: +998 71 230 38 83">+998 71 230 38 83 </a>
                </li>
                <Select
                  defaultValue="RU"
                  style={{
                    width: 70,
                  }}
                  onChange={handleChange}
                >
                  <Option value="ru">RU </Option>
                </Select>
                <li className="account_icon">
                  <AccountCircleOutlinedIcon />
                  <a href="https://all4u.market/profile-ru">Личный кабинет</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
