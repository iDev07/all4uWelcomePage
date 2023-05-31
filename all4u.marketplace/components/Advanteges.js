import React from "react";

function Advanteges() {
  return (
    <div className="Advanteges">
      <div className="containerdev">
        <div className="intro">
          <h1>Почему мы будем полезны вашему бинесу?!</h1>
          <p>
            Вы загружаете товары, а мы предоставим интернет- витрину, маркетинг,
            логистику, расчетно- кассовое обслуживание и клиентский сервис.
          </p>
        </div>
        <div className="advantages_wrapper">
          <div className="mycol">
            <div className="left">
              <img src="images/adv1.png" />
            </div>
            <div className="right">
              <h1>+10 000</h1>
              <p>Новых товаров каждую неделю из 18 стран</p>
            </div>
          </div>
          <div className="mycol">
            <div className="left">
              <img src="images/adv2.png" />
            </div>
            <div className="right">
              <h1>+1000</h1>
              <p>Обращений в день для продавцов от клиентов</p>
            </div>
          </div>
          <div className="mycol">
            <div className="left">
              <img src="images/adv3.png" />
            </div>
            <div className="right">
              <h1>+15 000</h1>
              <p>Заказов в неделю совершают наши клиенты</p>
            </div>
          </div>
          <div className="mycol">
            <div className="left">
              <img src="images/adv4.png" />
            </div>
            <div className="right">
              <h1>+200</h1>
              <p>Доставляем заказов в день </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advanteges;
