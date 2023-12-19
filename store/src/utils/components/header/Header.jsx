import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import OpenedCart from '../cart/OpenedCart';
import { useOrderArray } from '../OrderArray';

import './_header.scss';
import logo from '../../../assets/icons/logo.svg';

const Header = () => {
    const { orderArray, setOrderArray } = useOrderArray();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleToggleCart = () => {
        setIsCartOpen(!isCartOpen);
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
                        onClick={handleToggleCart}
                    >
                        {orderArray.length > 0 ? (
                            <div className="actions__count-order">
                                {orderArray.length}
                            </div>
                        ) : null}
                    </button>
                </div>
                {isCartOpen && (
                    <OpenedCart handleToggleCart={handleToggleCart} />
                )}
            </div>
        </header>
    );
};

export default Header;
