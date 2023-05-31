import React, { useEffect, useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  return {
    props: {
      data: res,
    },
  };
};

function SmallServices() {
  return (
    <div className="SmallServices">
      <div className="small_wrapper containerdev">
        {/* <div className="mycol">
          <h1>{data.name}</h1>
        </div> */}
        <div className="mycol">
          <img src="images/image1.png" />
          <p>Международная логистика</p>
        </div>
        <div className="mycol">
          <img src="images/image2.png" />
          <p>Торговая гарантия</p>
        </div>
        <div className="mycol">
          <img src="images/image3.png" />
          <p>Мониторинг производства</p>
        </div>
        <div className="mycol">
          <img src="images/image4.png" />
          <p>Таможенное декларирование</p>
        </div>
        <div className="mycol">
          <img src="images/image5.png" />
          <p>Сертификация (все виды)</p>
        </div>
      </div>
    </div>
  );
}

export default SmallServices;
