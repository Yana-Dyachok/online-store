import { useState } from 'react';

import './_promo-code.scss';

const PromoCode = () => {
    const [promoCode, setPromoCode] = useState('');

    const handleInputChange = (e) => {
      setPromoCode(e.target.value);
    };
  
    const handleApply = (e) => {
      e.preventDefault(); 
      console.log(promoCode);
    };

    return (
        <form
            className="full-cart__promo-code promo-code"
            onSubmit={handleApply}
        >
            <label className='promo-code__label' htmlFor="promo-code-input">Промокод:</label>
            <input
                className='promo-code__input'
                type="text"
                id="promo-code-input"
                placeholder="Введіть промокод"
                value={promoCode}
                onChange={handleInputChange}
            />
            <button
                className='promo-code__btn btn'
                type="submit" 
            >
                Застосувати
            </button>
        </form>
    );
};

export default PromoCode;
