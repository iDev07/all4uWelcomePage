import React from "react";
const usd = 12157;
export const ProductCard = ({ product }) => {
  return (
    <div className="product_wrap" key={product.id}>
      {/* <a href=""> */}
      <div className="prod_image">
        <img src={product.main_pair.detailed.image_path} />
      </div>
      <div className="prod_status">
        <div className="top_wrap">
          <p>
            <CheckCircleOutlinedIcon /> В наличи
          </p>
          <p>Узбекистан</p>
        </div>
      </div>
      <div className="prod_price">
        <div>
          <h2>
            {product.price * usd} <span>UZS</span>
          </h2>
          <h4>
            {" "}
            <span>1</span>
            <span>UZS</span>
          </h4>
        </div>
        <div className="discount">2%</div>
      </div>
      <div className="prod_about">
        <div>
          <h4>{product.product}</h4>
          <p></p>
        </div>
      </div>
      {/* </a> */}
    </div>
  );
};
