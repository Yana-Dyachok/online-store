import React, { Component } from 'react'
import mail from '../../../src/assets/icons/gmail.svg';
import facebook from '../../../src/assets/icons/facebook.svg';
import instagram from '../../../src/assets/icons/instagram.svg';
import telegram from '../../../src/assets/icons/telegram.svg';
export class Footer extends Component {
  render() {
    return (
        // може id для footer?
      <footer className='footer'> 
        <div className='footer__information'>
            <div className='information__item bike-info '>
                <h3 className='bike-info__title'>Велосипеди</h3>
                <ul className='bike-info__list'> 
                    <li className='bike-info__item' ><a className='bike-info__link' href="">Види велосипедів</a></li>
                    <li className='bike-info__item'><a className='bike-info__link'  href=""></a>Каталог</li>
                    <li className='bike-info__item'><a className='bike-info__link' href="">Акції</a></li>
                    <li className='bike-info__item'><a className='bike-info__link' href=""></a>Пошук</li>
                </ul>
            </div>
            <div className='information__item about-info'>
                <h3 className='about-info__title'>Інформація</h3>
                <ul className='about-info__list'> 
                    <li className='about-info__item' ><a className='about-info__link' href="">Про нас</a></li>
                    <li className='about-info__item'><a className='about-info__link'  href=""></a>Контактиг</li>
                </ul>
            </div>
            <div className='information__item customers-info'>
                <h3 className='customers-info__title'>Клієнтам</h3>
                <ul className='customers-info__list'> 
                    <li className='customersinfo__item' ><a className='customers-info__link' href="">Доставка</a></li>
                    <li className='customers-info__item'><a className='customers-info__link'  href=""></a>Умови оплати</li>
                    <li className='customers-info__item'><a className='customers-info__link' href="">Гарантія</a></li>
                    <li className='customers-info__item'><a className='customers-info__link' href=""></a>Повернення</li>
                </ul>
            </div>
        </div>
        <div className='footer__contacts'>
            {/* не зрозуміло що це, може ©2023 BraveWheel? */}
            <a href="#">@2023 BraveWheel</a> 
            <ul className='contacts__list'>
                <li  className='contacts__item'><a  className='contacts__link mail-icon' href="#"><img src={mail} alt="mail" width='30' height='30'/></a></li>
                <li  className='contacts__item'><a className='contacts__link facebook-icon' href="#"><img src={facebook} alt="facebook" width='30' height='30'/></a></li>
                <li  className='contacts__item'><a className='contacts__link instagram-icon' href="#"><img src={instagram} alt="instagram" width='30' height='30'/></a></li>
                <li  className='contacts__item'><a className='contacts__link telegram-icon'href="#"><img src={telegram} alt="telegram" width='30' height='30'/></a></li>
            </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
