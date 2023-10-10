import axios from "axios";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { ProductCard } from "./productCard/ProductCard";
function Wholesale() {
  const [products, setProducts] = useState([]);
  const usd = 12100;
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/stores/609/products?limit=20&storefront=14&get_frontend_urls=true&sort_order=desc&status=a&features=&lang_id=ru&options=`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
          },
        }
      )
      .then((response) => {
        // Process the response data
        setProducts(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  // return (
  //   <div>
  //     {products.map((productArray, index) => (
  //       <div key={index}>
  //         <h2>Product Array {index + 1}</h2>
  //         {productArray.map((product) => (
  //           <div key={product.id}>
  //             <h3>{product.title}</h3>
  //             <p>{product.description}</p>
  //           </div>
  //         ))}
  //       </div>
  //     ))}
  //   </div>
  // );

  // const productList = products.map((data) => (
  //   <div className="product_wrap" key={data.product_id}>
  //     <a href="">
  //       <div className="prod_image">
  //         <img src="https://all4u.market/images/thumbnails/550/450/detailed/26/44_ije7-ds.jpg.jpg" />
  //       </div>
  //       <div className="prod_status">
  //         <div className="top_wrap">
  //           <p>
  //             <CheckCircleOutlinedIcon /> В наличии
  //           </p>
  //           <p>Узбекистан</p>
  //         </div>
  //       </div>
  //       <div className="prod_price">
  //         <div>
  //           <h2>
  //             13 111 111 <span>UZS</span>
  //           </h2>
  //           <h4>
  //             {" "}
  //             <s>13 111 111</s>
  //             <span>UZS</span>
  //           </h4>
  //         </div>
  //         <div className="discount">2%</div>
  //       </div>
  //       <div className="prod_about">
  //         <div>
  //           <h4>Samsung S22 Ultra 256GB </h4>
  //           <p>Bsxzxbzsxmzbsnxm bzmxzsnbxm zbsAXAXAXXA cawawcx </p>
  //         </div>
  //       </div>
  //     </a>
  //   </div>
  // ));

  return (
    <div className="Wholesale">
      <div className="containerdev">
        <div className="intro">
          <h1>Оптовый маркетплейс</h1>
          <p>20 000 + разновидностей товаров для оптовой поставки</p>
        </div>
        <div className="retail_products">
          <div className="retail_prod_wrapper">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
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
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {products.map((product, index) => (
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
}

export default Wholesale;
