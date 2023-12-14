import { Link } from 'react-router-dom';
import './_footer.scss';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__information">
                    <div className="footer__column">
                        <h3 className="footer__name">Велосипеди</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link className="footer__link" to="/">
                                    Види велосипедів
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to="/">
                                    Каталог
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to="/">
                                    Акції
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to="/">
                                    Пошук
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer__name">Інформація</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link className="footer__link" to="/">
                                    Про нас
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to="/">
                                    Контакти
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer__name">Клієнтам</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <Link className="footer__link" to="/">
                                    Доставка
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to="/">
                                    Умови оплати
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to="/">
                                    Гарантія
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to="/">
                                    Повернення
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <address className="footer__column">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a
                                    className="footer__tel"
                                    href="tel:044 500 70 50"
                                >
                                    044 500 70 50
                                </a>
                                <p className="footer__details">
                                    Оформлення замовлення:
                                </p>
                                <p className="footer__details">9:00-21:00</p>
                            </li>
                            <li className="footer__item">
                                <a
                                    className="footer__tel"
                                    href="tel:044 500 80 60"
                                >
                                    044 500 80 60
                                </a>
                                <p className="footer__details">
                                    Служба підтримки:
                                </p>
                                <p className="footer__details">Цілодобово</p>
                            </li>
                        </ul>
                    </address>
                </div>
                <div className="footer__data">
                    <address className="footer__contacts contacts">
                        <ul className="contacts__list">
                            <li className="contacts__item">
                                <a
                                    className="contacts__link contacts__link--mail"
                                    href="#"
                                ></a>
                            </li>
                            <li className="contacts__item">
                                <a
                                    className="contacts__link contacts__link--facebook"
                                    href="#"
                                ></a>
                            </li>
                            <li className="contacts__item">
                                <a
                                    className="contacts__link contacts__link--instagram"
                                    href="#"
                                ></a>
                            </li>
                            <li className="contacts__item">
                                <a
                                    className="contacts__link contacts__link--telegram"
                                    href="#"
                                ></a>
                            </li>
                        </ul>
                    </address>
                    <div className="footer__cards payment-methods">
                        <ul className="payment-methods__list">
                            <li className="payment-methods__item">
                                <a
                                    className="payment-methods__link  payment-methods__link--google"
                                    href="#"
                                ></a>
                            </li>
                            <li className="payment-methods__item">
                                <a
                                    className="payment-methods__link payment-methods__link--apple"
                                    href="#"
                                ></a>
                            </li>
                            <li className="payment-methods__item">
                                <a
                                    className="payment-methods__link payment-methods__link--visa"
                                    href="#"
                                ></a>
                            </li>
                            <li className="payment-methods__item">
                                <a
                                    className="payment-methods__link payment-methods__link--master"
                                    href="#"
                                ></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a className="footer__copyright" href="#">
                    &copy;2023 BraveWheel
                </a>
            </div>
        </footer>
    );
};

export default Footer;
