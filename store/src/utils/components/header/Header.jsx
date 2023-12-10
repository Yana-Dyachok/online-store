import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './_header.scss';
import logo from '../../../assets/icons/logo.svg';
const Header = () => {
    return (
        <header className="header">
            <div className="header__inner container">
                <Link href="#">
                    <img
                        className="logo"
                        src={logo}
                        alt="logo"
                        width="172"
                        height="87"
                    />
                </Link>
                <nav className="nav">
                    <ul className="nav__list">
                        <NavLink className="nav__item">
                            <a className="nav__link" href="#">
                                Каталог
                            </a>
                        </NavLink>
                        <NavLink className="nav__item">
                            <a className="nav__link" href="#">
                                Акції
                            </a>
                        </NavLink>
                        <NavLink className="nav__item">
                            <a className="nav__link" href="#">
                                Підтримка
                            </a>
                        </NavLink>
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
