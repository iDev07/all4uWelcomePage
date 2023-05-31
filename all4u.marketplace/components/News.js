import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function News() {
  return (
    <div className="News">
      <div className="containerdev">
        <div className="intro">
          <h1>Только полезные новости</h1>
          <p>
            <a href="">
              <span>Смотреть все новости</span> <ArrowForwardIcon />
            </a>
          </p>
        </div>
        <div className="news_wrapper">
          <div className="mycol">
            <img src="images/image.png" />
            <div className="about">
              <h4>ALL4U провели презентацию новых функций</h4>
              <p>
                Краткий текст о новости. Например, краткое описание того, что
                прочитаем в ней.
              </p>
              <button className="read_more">
                <a href="">Читать далее..</a>
              </button>
            </div>
          </div>
          <div className="mycol">
            <img src="images/image.png" />
            <div className="about">
              <h4>ALL4U провели презентацию новых функций</h4>
              <p>
                Краткий текст о новости. Например, краткое описание того, что
                прочитаем в ней.
              </p>
              <button className="read_more">
                <a href="">Читать далее..</a>
              </button>
            </div>
          </div>
          <div className="mycol">
            <img src="images/image.png" />
            <div className="about">
              <h4>ALL4U провели презентацию новых функций</h4>
              <p>
                Краткий текст о новости. Например, краткое описание того, что
                прочитаем в ней.
              </p>
              <button className="read_more">
                <a href="">Читать далее..</a>
              </button>
            </div>
          </div>
          <div className="mycol">
            <img src="images/image.png" />
            <div className="about">
              <h4>ALL4U провели презентацию новых функций</h4>
              <p>
                Краткий текст о новости. Например, краткое описание того, что
                прочитаем в ней.
              </p>
              <button className="read_more">
                <a href="">Читать далее..</a>
              </button>
            </div>
          </div>
          <div className="mycol">
            <img src="images/image.png" />
            <div className="about">
              <h4>ALL4U провели презентацию новых функций</h4>
              <p>
                Краткий текст о новости. Например, краткое описание того, что
                прочитаем в ней.
              </p>
              <button className="read_more">
                <a href="">Читать далее..</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
