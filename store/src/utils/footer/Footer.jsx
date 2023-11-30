import React, { Component } from 'react';
import mail from '../../../src/assets/icons/gmail.svg';
import facebook from '../../../src/assets/icons/facebook.svg';
import instagram from '../../../src/assets/icons/instagram.svg';
import telegram from '../../../src/assets/icons/telegram.svg';
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
                        <a className="footer__copy-right" href="#">
                            &copy;2023 BraveWheel
                        </a>
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
                                            width="30"
                                            height="30"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </address>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
