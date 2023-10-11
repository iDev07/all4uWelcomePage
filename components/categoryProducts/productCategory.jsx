import axios from "axios";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ProductCard } from "../productCard/ProductCard";

export const ProductCategory = ({
  category_id,
  limit,
  lang_id,
  category_name,
}) => {
  const [products, setProducts] = useState([]);
  const usd = 12200;
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/categories/${category_id}/products?limit=${limit}&storefront=14&get_frontend_urls=true&sort_order=desc&status=a&features=&lang_id=${lang_id}&options=`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          },
        }
      )
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="Wholesale">
      <div className="containerdev">
        <div className="intro">
          <h1>{category_name}</h1>
        </div>
        <div className="retail_products">
          <div className="retail_prod_wrapper">
            <Swiper
              spaceBetween={5}
              slidesPerView={5}
              slidesPerGroup={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loopFillGroupWithBlank={true}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
