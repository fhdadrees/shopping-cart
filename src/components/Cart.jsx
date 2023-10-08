'use client'

import React, { createContext, useEffect, useReducer } from 'react';
import { Products } from './Products';
import ContextCart from './ContextCart';
import Reducer from './Reducer';
export const Context = createContext();


const initialState = {
  items: Products,
  totalAmount: 0,
  totalItems: 0,
}

const Cart = () => {

  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });

  }, [state.items])

  const removeItem = (id) => {
    return dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    })
  }

  const clearCart = () => {
    return dispatch({
      type: 'CLEAR_CART'
    })
  }

  const increment = (id) => {
    return dispatch({
      type: 'INCREMENT',
      payload: id
    })
  }

  const decrement = (id) => {
    return dispatch({
      type: 'DECREMENT',
      payload: id
    })
  }

  return (
    <Context.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>
      <ContextCart />
    </Context.Provider>
  );
}

export default Cart