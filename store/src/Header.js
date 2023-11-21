import React, { Component } from "react";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <img
          className="logo"
          src="./logo.png"
          alt="logo"
          width="172"
          height="87"
        />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__item__link" href="">
                Каталог
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__item__link" href="">
                Акції
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__item__link" href="">
                Служба підтримки
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__icons">
          <CiSearch />
          <LuShoppingCart />
        </div>
      </div>
      <div className="header__bike-constructor">
        <div className="header__text">
          <h1 className="header__text__title">Розкрий свій шлях</h1>
          <h2 className="header__text__subtitle">
            Підбери велосипед, який створенний для твоїх досягнень!{" "}
          </h2>
          <button className="header__choosing-btn">Підібрати</button>
        </div>
        <div className="header__img-block">
          <img src="./bike-header.jpg" alt="bike" width="966.81" height="854" />
        </div>
      </div>
    </header>
  );
};

export default Header;
