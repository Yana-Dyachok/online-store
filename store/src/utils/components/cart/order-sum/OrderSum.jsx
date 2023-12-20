import { useState, useEffect } from 'react';

import './_order-sum.scss';

const OrderSum = ({totalSum, totalDiscount}) => {
    return (// таблицею чи чимось іншим?
      <table className="full-cart__sum order-sum">
        <tbody>
          <tr>
            <td className='order-sum__name' >Знижка:</td>
            <td className='order-sum__value order-sum__value--discount'>{totalDiscount}грн</td>
          </tr>
          <tr>
            <td className='order-sum__name'>Разом:</td>
            <td className='order-sum__value order-sum__value--total'>{totalSum}грн</td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default OrderSum;