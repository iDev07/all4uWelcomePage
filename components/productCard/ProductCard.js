import Image from "next/image";
import Link from "next/link";
import React from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
const usd = 12157;
export const ProductCard = ({ product }) => {
  const formattedPrice = (product.price * usd).toLocaleString("uz-UZ", {
    style: "currency",
    currency: "UZS",
  });

  return (
    <div className="product_wrap" key={product.id}>
      <div className="prod_image">
        <Image
          src={product.main_pair.detailed.image_path}
          width={400}
          height={350}
          alt={product.main_pair.detailed.image_path}
        />
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
            <p> {formattedPrice}</p> <span>UZS</span>
          </h2>
          <h4> </h4>
        </div>
        <div className="discount">2%</div>
      </div>
      <div className="prod_about">
        <div>
          <h3>
            <Link href={product.url}>{product.product}</Link>
          </h3>
          <p></p>
        </div>
      </div>
      {/* </a> */}
    </div>
  );
};
