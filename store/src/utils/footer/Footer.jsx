import React, { Component } from 'react';
import mail from '../../../src/assets/icons/gmail.svg';
import facebook from '../../../src/assets/icons/facebook.svg';
import instagram from '../../../src/assets/icons/instagram.svg';
import telegram from '../../../src/assets/icons/telegram.svg';
import googlePay from '../../../src/assets/icons/google-pay.svg';
import applePay from '../../../src/assets/icons/apple-pay.svg';
import visa from '../../../src/assets/icons/visa.svg';
import masterCard from '../../../src/assets/icons/master-card.svg';
export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__information">
                        <div className="footer__column">
                            <h3 className="footer__name">Велосипеди</h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a className="footer__link" href="">
                                        Види велосипедів
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href=""></a>
                                    Каталог
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="">
                                        Акції
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href=""></a>
                                    Пошук
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <h3 className="footer__name">Інформація</h3>
                            <ul className="footer__link">
                                <li className="footer__item">
                                    <a className="footer__link" href="">
                                        Про нас
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href=""></a>
                                    Контактиг
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <h3 className="footer__name">Клієнтам</h3>
                            <ul className="footer__link">
                                <li className="footer__item">
                                    <a className="footer__link" href="">
                                        Доставка
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href=""></a>
                                    Умови оплати
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href="">
                                        Гарантія
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link" href=""></a>
                                    Повернення
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__data">
                        <address className="footer__contacts contacts">
                            <ul className="contacts__list">
                                <li className="contacts__item">
                                    <a className="contacts__link" href="#">
                                        <img
                                            src={mail}
                                            alt="mail"
                                            width="30"
                                            height="30"
                                        />
                                    </a>
                                </li>
                                <li className="contacts__item">
                                    <a className="contacts__link" href="#">
                                        <img
                                            src={facebook}
                                            alt="facebook"
                                            width="30"
                                            height="30"
                                        />
                                    </a>
                                </li>
                                <li className="contacts__item">
                                    <a className="contacts__link" href="#">
                                        <img
                                            src={instagram}
                                            alt="instagram"
                                            width="30"
                                            height="30"
                                        />
                                    </a>
                                </li>
                                <li className="contacts__item">
                                    <a className="contacts__link" href="#">
                                        <img
                                            src={telegram}
                                            alt="telegram"
                                            width="75"
                                            height="30"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </address>
                        <div className="footer__cards cards">
                            <ul className="cards__list">
                                <li className="cards__item">
                                    <a className="cards__link" href="#">
                                        <img
                                            src={googlePay}
                                            alt="google-pay"
                                            width="75"
                                            height="30"
                                        />
                                    </a>
                                </li>
                                <li className="cards__item">
                                    <a className="cards__link" href="#">
                                        <img
                                            src={applePay}
                                            alt="apple-pay"
                                            width="75"
                                            height="30"
                                        />
                                    </a>
                                </li>
                                <li className="cards__item">
                                    <a className="cards__link" href="#">
                                        <img
                                            src={visa}
                                            alt="visa"
                                            width="75"
                                            height="30"
                                        />
                                    </a>
                                </li>
                                <li className="cards__item">
                                    <a className="cards__link" href="#">
                                        <img
                                            src={masterCard}
                                            alt="master-card"
                                            width="30"
                                            height="30"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <a className="footer__copy-right" href="#">
                            &copy;2023 BraveWheel
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;
