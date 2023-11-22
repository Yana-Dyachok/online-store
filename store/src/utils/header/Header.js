import React, { Component } from 'react';
import logo from '../../../src/assets/icons/logo.svg';
const Header = () => {
    return (
        <header className="header">
            <a href="#">
                <img
                    className="logo"
                    src={logo}
                    alt="logo"
                    width="172"
                    height="87"
                />
            </a>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            Каталог
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            Акції
                        </a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#">
                            Служба підтримки
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="header__search"></div>
            <div className="header__cart"></div>
        </header>
    );
};

export default Header;
