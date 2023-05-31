import React, { useRef } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import OutsideClick from "./HandleOutsideClick";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Select } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
const { Option } = Select;
export const MobileHeader = () => {
  const boxRef = useRef(null);
  const inputRef = useRef(null);
  const boxOutsideClick = OutsideClick(boxRef);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  if (boxOutsideClick) {
    inputRef.current.checked = false;
  }

  const clickHandler = () => {
    inputRef.current.checked = false;
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navbar_container + " " + style.container}>
        <input type="checkbox" ref={inputRef} />
        <div className={style.hamburger_lines}>
          <span className={style.line + " " + style.line1}></span>
          <span className={style.line + " " + style.line2}></span>
          <span className={style.line + " " + style.line3}></span>
        </div>
        <div className={style.account}>
          <p>
            <a href="">
              <AccountCircleOutlinedIcon />
            </a>
          </p>
        </div>
        <div className={style.navbar__select}></div>
        <ul className={style.menu_items}>
          <div className={style.change_lang}>
            <Select
              defaultValue="RU"
              style={{
                width: 70,
              }}
              onChange={handleChange}
            >
              <Option value="ru">RU </Option>
              <Option value="uz">UZ </Option>
              <Option value="en">EN </Option>
            </Select>
          </div>
          <li>
            <Link
              className={(navData) =>
                navData.isActive ? style.item__active : style.item__inactive
              }
              href="/"
              onClick={clickHandler}
            >
              Оптовая витрина
            </Link>
          </li>
          <li>
            <Link
              className={(navData) =>
                navData.isActive ? style.item__active : style.item__inactive
              }
              href="/about"
              onClick={clickHandler}
            >
              Розничная витрина
            </Link>
          </li>
          <li>
            <Link
              className={(navData) =>
                navData.isActive ? style.item__active : style.item__inactive
              }
              href="/services"
              onClick={clickHandler}
            >
              Заявки на закупки
            </Link>
          </li>
          <li className={style.phone_number}>
            <a href="tel: +998 71 230 38 83"> +998 71 230 38 83</a>
          </li>
          <li className={style.navbar__selectLG}></li>
          <li></li>
        </ul>

        <Link href="/">
          <img src="images/LOGO.svg" alt="" className={style.logo} />
        </Link>
      </div>
    </nav>
  );
};
