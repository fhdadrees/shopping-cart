import React from 'react'

const Reducer = (state, action) => {
    if (action.type === 'REMOVE_ITEM') {
        return {
            ...state,
            items: state.items.filter((item) => {
                return item.id !== action.payload;
            }),
        };
    }
    if (action.type === 'CLEAR_CART'){
        return {
            ...state,
            items: []
        }
    }
    if (action.type === 'INCREMENT'){
        let updatedAmount = state.items.map((item)=> {
            if(item.id === action.payload){
                return {...item, quantity: item.quantity + 1}
            }
            return item;
        })
        return {...state, items: updatedAmount};
    }
    if (action.type === 'DECREMENT'){
        let updatedAmount = state.items.map((item)=> {
            if(item.id === action.payload && item.quantity > 1){
                return {...item, quantity: item.quantity - 1}
            }
            return item;
        })
        return {...state, items: updatedAmount};
    }

    if (action.type === 'GET_TOTAL') {
        let totalItems = 0;
        let totalAmount = 0;
      state.items.map((item)=> {
        totalItems += item.quantity;   
        totalAmount += item.quantity*item.price
      })
      return {...state, totalItems, totalAmount }
    }

    return state;
}

export default Reducer