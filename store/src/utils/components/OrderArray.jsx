import React, { createContext, useContext, useState } from 'react';

const OrderArrayContext = createContext();

export const OrderArrayProvider = ({ children }) => {
  const [orderArray, setOrderArray] = useState([]);

  return (
    <OrderArrayContext.Provider value={{ orderArray, setOrderArray }}>
      {children}
    </OrderArrayContext.Provider>
  );
};

export const useOrderArray = () => {
  const context = useContext(OrderArrayContext);
  if (!context) {
    throw new Error('useOrderArray must be used within a OrderArrayProvider');
  }
  return context;
};