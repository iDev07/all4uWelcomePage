import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <div className="containerdev">
        <div className="footer_wrapper">
          <div className="subscribe_mail">
            <h3>Хотите узнавать о новинках раньше всех?</h3>
            <p>
              Оставьте нам свой email и мы будем оповещать вас только о самых
              горячих и выгодных предложениях
            </p>
            <form>
              <p className="mail_filed">
                <input type="email" required placeholder="Введите Ваш email" />
              </p>
              <p className="agreements">
                <input type="checkbox" />Я согласен с правилами и условиями
                сервиса
              </p>
              <p className="subscribe_button">
                <input type="submit" value="Подписаться на новинки" />
              </p>
            </form>
          </div>
          <div className="mycol">
            <div>
              <h3>Как покупать</h3>
              <ul>
                <li>
                  <a href="">Методы оплаты</a>
                </li>
                <li>
                  <a href="">Методы доставки</a>
                </li>
                <li>
                  <a href="">Детали заказа</a>
                </li>
                <li>
                  <a href="">Регионы доставки</a>
                </li>
                <li>
                  <a href="">Условия возвратов</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mycol">
            <div>
              <h3>Как продавать</h3>
              <ul>
                <li>
                  <a href="">Как стать продавцом</a>
                </li>
                <li>
                  <a href="">Документация</a>
                </li>
                <li>
                  <a href="">Условия и правила</a>
                </li>
                <li>
                  <a href="">Конфиденциальность</a>
                </li>
                <li>
                  <a href="">Методы оплаты</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mycol">
            <div>
              <h3>Наши услуги</h3>
              <ul>
                <li>
                  <a href="">Торговая гарантия</a>
                </li>
                <li>
                  <a href="">Бизнес-идентификация</a>
                </li>
                <li>
                  <a href="">Логистическая компания</a>
                </li>
                <li>
                  <a href="">Сертификация</a>
                </li>
                <li>
                  <a href="">Декларирование</a>
                </li>
                <li>
                  <a href="">Аккредиитив</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mycol">
            <div>
              <h3>О маркетплейсе</h3>
              <ul>
                <li>
                  <a href="">Миссия проекта</a>
                </li>
                <li>
                  <a href="">Руководство проекта</a>
                </li>
                <li>
                  <a href="">Достижения</a>
                </li>
                <li>
                  <a href="">Команда</a>
                </li>
                <li>
                  <a href="">Методы оплаты</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="company">
            <h4>© 2022 ALL4U.market</h4>
          </div>
          <div className="socials">
            <ul>
              <li>
                <a href="">
                  <img src="images/facebook_icon.png" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="images/instagram.png" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="images/youtube.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
