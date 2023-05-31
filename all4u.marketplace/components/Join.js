import React from "react";

function Join() {
  return (
    <div className="Join">
      <div className="join_wrapper">
        <div className="containerdev howstart">
          <div className="left">
            <div>
              <h1>Станьте партнером ALL4U сегодня!</h1>
              <p>
                Регистрация займет 1 минуту, всё остальное - мы возьмем на себя!
              </p>
            </div>
          </div>
          <div className="right">
            <div className="form_wrapper">
              <h2>Зарегистрируйте вашу компанию на площадке!</h2>
              <form>
                <div className="required_fileds">
                  <p>
                    {" "}
                    E-mail <span>*</span>{" "}
                  </p>
                  <input type="email" placeholder="vip@qwerty.uz" required />
                </div>
                <div className="required_fileds">
                  <p>
                    Парол <span>*</span>
                  </p>{" "}
                  <input type="password" placeholder="" required />
                </div>
                <div className="cases">
                  <p>
                    <input type="checkbox" /> Запомнить меня
                  </p>
                  <p>
                    <a href="">Забыли пароль?</a>
                  </p>
                </div>
                <p className="submit_form">
                  <input type="submit" value="Создать аккаунт компании" />
                </p>
                <div className="another_types">
                  <p>Вход при помощи аккаунта в соцсетях</p>
                  <div className="types">
                    <a href="">
                      <img src="images/Google.png" />
                    </a>
                    <a href="">
                      {" "}
                      <img src="images/Facebook.png" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
