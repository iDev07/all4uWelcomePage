import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button, Select } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import axios from "axios";
import { Dropdown, Space } from "antd";

const { Option } = Select;

function Header() {
  const [categories, setCategories] = useState([]);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://turbomarket.uz"
        >
          Retail marketplace
        </a>
      ),
    },
  ];
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

  return (
    <div>
      <div className="header_wrapper">
        <div className="containerdev ">
          <div className="nav_wrapper">
            <div className="logo">
              <div className="logo_wrapper">
                <Link href={"/"}>
                  <Image
                    src={"/images/lightlogo.png"}
                    width={150}
                    height={80}
                    alt="Turbo Market logo"
                  />
                </Link>
              </div>
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
