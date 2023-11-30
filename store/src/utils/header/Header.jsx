import React, { Component } from 'react';
import logo from '../../../src/assets/icons/logo.svg';
const Header = () => {
    return (
        <header className="header">
            <div className="container">
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
                                Підтримка
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="header__actions actions">
                    <button
                        className="actions__btn actions__btn--search"
                        type="button"
                    ></button>
                    <button
                        className="actions__btn actions__btn--cart"
                        type="button"
                    ></button>
                </div>
            </div>
        </header>
    );
};

export default Header;
