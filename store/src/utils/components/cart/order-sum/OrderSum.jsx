import { useState, useEffect } from 'react';

import './_order-sum.scss';

const OrderSum = ({totalSum}) => {
    const [discount, setDiscount] = useState(0);
    return (// таблицею чи чимось іншим?
      <table className="full-cart__sum order-sum">
        <tbody>
          <tr>
            <td className='order-sum__name' >Знижка:</td>
            <td className='order-sum__discount'>{discount}грн</td>
          </tr>
          <tr>
            <td className='order-sum__name'>Разом:</td>
            <td className='order-sum__total'>{totalSum}грн</td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default OrderSum;