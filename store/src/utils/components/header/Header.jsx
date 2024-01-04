import { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

import { useOrderArray } from '../OrderArray';

import './_header.scss';
import logo from '../../../assets/icons/logo.svg';

const Header = () => {
    const { orderArray, setOrderArray } = useOrderArray();
    const getAllQuantity = () => {
        return orderArray.reduce((sum, order) => sum + (order.amount||1), 0);
    };
    const navigate = useNavigate();
 
    const handleOpenCart = () => {
        navigate('/cart');
    };

    return (
        <header className="header">
            <div className="header__inner container">
                <Link to="/">
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
                        <li className="nav__item">
                            <NavLink className="nav__link" href="#">
                                Каталог
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" href="#">
                                Акції
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink className="nav__link" href="#">
                                Підтримка
                            </NavLink>
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
                        onClick={handleOpenCart}
                    >
                        {orderArray.length > 0 ? (
                            <span className="actions__count-order">
                                {getAllQuantity()}
                            </span>
                        ) : null}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
