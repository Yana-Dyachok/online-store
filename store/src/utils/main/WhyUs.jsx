const WhyUs = () => {
        return (
            <section className="why-us">
                <div className="container">
                    <h2 className="why-us__title titles">Чому обирають нас?</h2>
                    <div className="why-us__wrapper">
                        <ul className="why-us__column benefits">
                            <li className="benefits__item benefits__item--one">
                                <h3 className="benefits__name">
                                    Відправка в той же день.
                                </h3>
                                <p className="benefits__text">
                                    При замовленні до 17:00 відправимо сьогодні.
                                </p>
                            </li>
                            <li className="benefits__item benefits__item--second">
                                <h3 className="benefits__name">
                                    Безкоштовна доставка.
                                </h3>
                                <p className="benefits__text">
                                    Замовлення від 15 000 грн доставляються
                                    безкоштовно .
                                </p>
                            </li>
                            <li className="benefits__item benefits__item--three">
                                <h3 className="benefits__name">Знижка -10%.</h3>
                                <p className="benefits__text">
                                    Ви отримаєте знижку - 10% на наступне
                                    замовлення.
                                </p>
                            </li>
                        </ul>
                        <div className="why-us__img"></div>
                        <ul className="why-us__column benefits">
                            <li className="benefits__item benefits__item--four">
                                <h3 className="benefits__name">
                                    Служба підтримки 24/7.
                                </h3>
                                <p className="benefits__text">
                                    Наші консультанти завжди раді вам допомогти.
                                </p>
                            </li>
                            <li className="benefits__item benefits__item--five">
                                <h3 className="benefits__name">Повернення.</h3>
                                <p className="benefits__text">
                                    Ви можете повернути ваше замовлення протягом
                                    30 днів.
                                </p>
                            </li>
                            <li className="benefits__item benefits__item--six">
                                <h3 className="benefits__name">Гарантія.</h3>
                                <p className="benefits__text">
                                    Отримай рік гарантії на наші велосипеди.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
}

export default WhyUs;
