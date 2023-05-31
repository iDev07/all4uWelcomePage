import React from "react";
import { Select } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Fade from "react-reveal/Fade";

const { Option } = Select;

function HomeMain() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="HomeMain">
      <div className="homemain_wrapper">
        <div className="child_wrapper">
          <Fade bottom>
            <div className="search_product">
              <div className="entrance">
                <h1>Торговая площадка стран СНГ и Европы</h1>
                <p>
                  Поиск поставщиков и товаров по странам СНГ и Европы,
                  безопасная и удобная система Заявок на оптовые закупки{" "}
                </p>
              </div>
              <div className="search_form">
                <form
                  action="https://all4u.market/"
                  name="search_form"
                  method="post"
                >
                  <div className="form_wrap">
                    <div className="mycol_input">
                      <input placeholder="Виноград" />
                    </div>
                    <div className="how_purpose">
                      <Select
                        defaultValue="Поиск по запускам"
                        onChange={handleChange}
                      >
                        <Option value="null">Поиск по запускам</Option>
                      </Select>
                    </div>
                    <div className="which_countries">
                      <Select defaultValue="Узбекистан" onChange={handleChange}>
                        <Option value="null">Узбекистан</Option>
                        <Option value="null2">Армения</Option>
                        <Option value="null3">Россия</Option>
                        <Option value="null4">Казахстан</Option>
                        <Option value="null5">Киргизия</Option>
                        <Option value="null6">Таджикистан</Option>
                        <Option value="null7">Турменистан</Option>
                      </Select>
                    </div>
                    <div className="submit_form">
                      <input type="submit" value="Найти" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
