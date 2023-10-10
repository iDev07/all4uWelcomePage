import React, { useEffect, useState } from "react";
import Link from "next/link";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button, Select } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import axios from "axios";

const { Option } = Select;

function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://turbomarket.uz/api/categories?lang_code=ru&status=a", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer aGFzYW5iZWsuZWxtdXJvZG92QGdtYWlsLmNvbTpOcDMySzFBbm5uMzIxOFM4UzM4MFQwUmM3VDdtVDE2Nw==",
        },
      })
      .then((response) => {
        setCategories(response.data.categories);
        console.log(response.data.categories);
      });
  }, []);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <div className="header_wrapper">
        <div className="containerdev ">
          <div className="nav_wrapper">
            <div className="left_box">
              <div className="logo_box">
                <Link href="/">
                  <img width={200} src="../images/lightlogo.png" />
                </Link>
              </div>
              <div className="main_navigations">
                <div className="catalogBtn">
                  <Button>Catalog</Button>
                </div>
                <div className="switch_showcase"></div>
              </div>
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
          <div className="categories">
            <ul>
              {categories.map((category) => (
                <li>
                  <a href={category.category_id}>
                    <span>{category.category_id}</span>
                    <span> {category.category}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
