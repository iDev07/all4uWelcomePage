import React, { useState, useEffect } from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import axios from "axios";
function Wholesale() {
  //

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://all4u.market/api/products?limit=4&storefront=14&get_frontend_urls=true&sort_order=desc",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer aGFzYW5iZWsuZWxtdXJvZG92QGdtYWlsLmNvbTpOcDMySzFBbm5uMzIxOFM4UzM4MFQwUmM3VDdtVDE2Nw==",
          },
        }
      )
      .then((response) => {
        // Process the response data
        setProducts.response.data;
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  //

  //
  //
  return (
    <div className="Wholesale">
      <div className="containerdev">
        <div className="intro">
          <h1>Оптовый маркетплейс</h1>
          <p>20 000 + разновидностей товаров для оптовой поставки</p>
        </div>
        <div className="retail_products">
          <div className="retail_prod_wrapper">
            {products.map((products) => (
              <div className="product_wrap" key={products.product_id}>
                <a href="">
                  <div className="prod_image">
                    <img src="https://all4u.market/images/thumbnails/550/450/detailed/26/44_ije7-ds.jpg" />
                  </div>
                  <div className="prod_status">
                    <div className="top_wrap">
                      <p>
                        <CheckCircleOutlinedIcon /> В наличии
                      </p>
                      <p>Узбекистан</p>
                    </div>
                  </div>
                  <div className="prod_price">
                    <div>
                      <h2>
                        {products.products_id} <span>UZS</span>
                      </h2>
                      <h4>
                        {" "}
                        <s>13 111 111</s>
                        <span>UZS</span>
                      </h4>
                    </div>
                    <div className="discount">2%</div>
                  </div>
                  <div className="prod_about">
                    <div>
                      <h4>Samsung S22 Ultra 256GB </h4>
                      <p>Bsxzxbzsxmzbsnxm bzmxzsnbxm zbsAXAXAXXA cawawcx </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}

            {/* <div className="product_wrap">
              <a href="">
                <div className="prod_image">
                  <img src="https://all4u.market/images/thumbnails/550/450/detailed/26/44_ije7-ds.jpg.jpg" />
                </div>
                <div className="prod_status">
                  <div className="top_wrap">
                    <p>
                      <CheckCircleOutlinedIcon /> В наличии
                    </p>
                    <p>Узбекистан</p>
                  </div>
                </div>
                <div className="prod_price">
                  <div>
                    <h2>
                      13 111 111 <span>UZS</span>
                    </h2>
                    <h4>
                      {" "}
                      <s>13 111 111</s>
                      <span>UZS</span>
                    </h4>
                  </div>
                  <div className="discount">2%</div>
                </div>
                <div className="prod_about">
                  <div>
                    <h4>Samsung S22 Ultra 256GB </h4>
                    <p>Bsxzxbzsxmzbsnxm bzmxzsnbxm zbsAXAXAXXA cawawcx </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="product_wrap">
              <a href="">
                <div className="prod_image">
                  <img src="https://all4u.market/images/thumbnails/550/450/detailed/26/44_ije7-ds.jpg.jpg" />
                </div>
                <div className="prod_status">
                  <div className="top_wrap">
                    <p>
                      <CheckCircleOutlinedIcon /> В наличии
                    </p>
                    <p>Узбекистан</p>
                  </div>
                </div>
                <div className="prod_price">
                  <div>
                    <h2>
                      13 111 111 <span>UZS</span>
                    </h2>
                    <h4>
                      {" "}
                      <s>13 111 111</s>
                      <span>UZS</span>
                    </h4>
                  </div>
                  <div className="discount">2%</div>
                </div>
                <div className="prod_about">
                  <div>
                    <h4>Samsung S22 Ultra 256GB </h4>
                    <p>Bsxzxbzsxmzbsnxm bzmxzsnbxm zbsAXAXAXXA cawawcx </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="product_wrap">
              <a href="">
                <div className="prod_image">
                  <img src="https://all4u.market/images/thumbnails/550/450/detailed/26/44_ije7-ds.jpg.jpg" />
                </div>
                <div className="prod_status">
                  <div className="top_wrap">
                    <p>
                      <CheckCircleOutlinedIcon /> В наличии
                    </p>
                    <p>Узбекистан</p>
                  </div>
                </div>
                <div className="prod_price">
                  <div>
                    <h2>
                      13 111 111 <span>UZS</span>
                    </h2>
                    <h4>
                      {" "}
                      <s>13 111 111</s>
                      <span>UZS</span>
                    </h4>
                  </div>
                  <div className="discount">2%</div>
                </div>
                <div className="prod_about">
                  <div>
                    <h4>Samsung S22 Ultra 256GB </h4>
                    <p>Bsxzxbzsxmzbsnxm bzmxzsnbxm zbsAXAXAXXA cawawcx </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="product_wrap">
              <a href="">
                <div className="prod_image">
                  <img src="https://all4u.market/images/thumbnails/550/450/detailed/26/44_ije7-ds.jpg.jpg" />
                </div>
                <div className="prod_status">
                  <div className="top_wrap">
                    <p>
                      <CheckCircleOutlinedIcon /> В наличии
                    </p>
                    <p>Узбекистан</p>
                  </div>
                </div>
                <div className="prod_price">
                  <div>
                    <h2>
                      13 111 111 <span>UZS</span>
                    </h2>
                    <h4>
                      {" "}
                      <s>13 111 111</s>
                      <span>UZS</span>
                    </h4>
                  </div>
                  <div className="discount">2%</div>
                </div>
                <div className="prod_about">
                  <div>
                    <h4>Samsung S22 Ultra 256GB </h4>
                    <p>Bsxzxbzsxmzbsnxm bzmxzsnbxm zbsAXAXAXXA cawawcx </p>
                  </div>
                </div>
              </a>
            </div> */}
          </div>
          <a href="" className="click_retail product_wrap">
            <div>
              <h2> See Wholesale marketplace</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Wholesale;
