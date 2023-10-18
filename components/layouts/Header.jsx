import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import NearMeIcon from "@mui/icons-material/NearMe";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Select, Input } from "antd";
import "antd/dist/antd.css";

function Header() {
  const [categories, setCategories] = useState([]);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleChangeServices = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    axios
      .get("https://turbomarket.uz/api/categories/", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer aGFzYW5iZWsuZWxtdXJvZG92QGdtYWlsLmNvbTpOcDMySzFBbm5uMzIxOFM4UzM4MFQwUmM3VDdtVDE2Nw==",
        },
      })
      .then((response) => {
        setCategories(response.data.categories);
      });
  }, []);
  const parentCategories = categories.filter(
    (parentCategory) => parentCategory.parent_id == 0
  );
  console.log(parentCategories);
  const { Search } = Input;
  return (
    <div>
      <div className="header_wrapper">
        <div className="containerdev ">
          <div className="nav_wrapper">
            <div className="logo">
              <div className="logo_wrapper">
                <Link href={"/"}>
                  <Image
                    src={"/logo/logo.svg"}
                    width={150}
                    height={50}
                    alt="Turbo Market logo"
                  />
                </Link>
              </div>
            </div>
            <div className="categories_btn">
              <button>Categories</button>
            </div>
            <div className="switch_showcase">
              <Select
                defaultValue={"Wholesale storefront"}
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "wholesale",
                    label: <Link href={"/"}>Wholesale store</Link>,
                  },
                ]}
              ></Select>
            </div>
            <div className="trading_sercvices">
              <Select
                defaultValue={"TRADING SERVICES"}
                style={{
                  width: 120,
                }}
                onChange={handleChangeServices}
                options={[
                  {
                    value: "logoitics",
                    label: <Link href={"/"}>Logistic services</Link>,
                  },
                  {
                    value: "assurance",
                    label: <Link href={"/"}>Trade Assurance</Link>,
                  },
                  {
                    value: "certfication",
                    label: <Link href={"/"}>Certification</Link>,
                  },
                  {
                    value: "declaration",
                    label: <Link href={"/"}>Declaration</Link>,
                  },
                  {
                    value: "letter",
                    label: <Link href={"/"}>Letter of Credit</Link>,
                  },
                ]}
              ></Select>
            </div>
            <div className="business_services">
              <Select
                defaultValue={"BUSINESS SERVICES"}
                style={{
                  width: 120,
                }}
                onChange={handleChangeServices}
                options={[
                  {
                    value: "tourism",
                    label: <Link href={"/"}>Working tourism</Link>,
                  },
                  {
                    value: "investing",
                    label: <Link href={"/"}>Investing</Link>,
                  },
                ]}
              ></Select>
            </div>
            <div className="search">
              <div className="search_wrapper">
                <form>
                  <input type="text" placeholder="Search..." />
                  <button type="submit">Search</button>
                </form>
              </div>
            </div>
            <div className="language">
              <div className="language_wrapper">
                <Select
                  defaultValue={"RU"}
                  style={{
                    width: 60,
                  }}
                  onChange={handleChangeServices}
                  options={[
                    {
                      value: "en",
                      label: "EN",
                    },
                    {
                      value: "ru",
                      label: "RU",
                    },
                    {
                      value: "uz",
                      label: "UZ",
                    },
                  ]}
                ></Select>
              </div>
            </div>
            <div className="location">
              <div className="location_wrapper">
                <p>
                  <NearMeIcon />
                  Your city
                </p>
              </div>
            </div>
            <div className="currency">
              <div className="language_wrapper">
                <Select
                  defaultValue={"UZS"}
                  style={{
                    width: 60,
                  }}
                  onChange={handleChangeServices}
                  options={[
                    {
                      value: "uzs",
                      label: "(UZS)",
                    },
                    {
                      value: "rub",
                      label: "(RUB)",
                    },
                    {
                      value: "usd",
                      label: "(USD)",
                    },
                    {
                      value: "eur",
                      label: "(EUR)",
                    },
                  ]}
                ></Select>
              </div>
            </div>
            <div className="wishlist">
              <Link href={"/wishlist"}>
                <FavoriteBorderOutlinedIcon />
              </Link>
            </div>
            <div className="account">
              <Link href={"/account"}>
                <AccountCircleIcon />
              </Link>
            </div>
            <div className="cart">
              <Link href={"/cart"}>
                <ShoppingCartIcon />
              </Link>
            </div>
            <div className="categories">
              <ul>
                {parentCategories.map((category) => (
                  <li key={category.category_id}>
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
    </div>
  );
}

export default Header;
