'use client'

import React, { useContext } from 'react'

import { BsArrowLeft, BsFillCartFill } from 'react-icons/bs';
import { Scrollbars } from 'react-custom-scrollbars-2'
import Items from './Items';
import { Context } from './Cart';

const ContextCart = () => {

  const { items } = useContext(Context)
  const { clearCart } = useContext(Context)
  const { totalItems } = useContext(Context)
  const { totalAmount } = useContext(Context)

  if (items.length === 0) {
    return (
      <div className='mx-8 sm:mx-14 md:mx-28 lg:mx-48 text-sm md:text-base'>
        <header className='py-6 pr-3 flex justify-between items-center border-b-2 border-gray-400'>
          <div className='flex gap-4 items-center cursor-pointer'><BsArrowLeft size={30} /><h3>Back to shopping</h3></div>
          <div className='cursor-pointer relative'><BsFillCartFill size={30} className='text-black' /><div className='flex items-center justify-center rounded-full bg-sky-300 absolute top-[-10px] right-[-10px] w-6 h-6 z-10'><span className='text-sm text-center'>{totalItems}</span></div></div>
        </header>
        <section className=" leading-10 capitalize min-w-[500px] text-sm lg:text-base ">
          <div className='flex justify-between items-end mb-4 mt-6'>
            <div className="">
              <h1 className='font-bold text-xl tracking-wide'>Shopping Cart</h1>
              <p className='text-md'>You currenty have no item in your cart</p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className='sm:mx-14 md:mx-28 lg:mx-48 text-sm md:text-basen'>
      <header className='py-6 pr-3 flex justify-between items-center border-b-2 border-gray-400 overflow-hidden'>
        <div className='flex gap-4 items-center cursor-pointer'><BsArrowLeft size={30} /><h3>Back to shopping</h3></div>
        <div className='cursor-pointer relative'><BsFillCartFill size={30} className='text-black' /><div className='flex items-center justify-center rounded-full bg-sky-300 absolute top-[-10px] right-[-10px] w-6 h-6 z-10'><span className='text-sm text-center'>{totalItems}</span></div></div>
      </header>
      <section className=" leading-10 capitalize text-sm lg:text-base ">
        <div className='flex justify-between items-end mb-4 mt-6'>
          <div className="">
            <h1 className='font-bold text-xl tracking-wide'>Shopping Cart</h1>
            <p className='text-md'>You have <span className='font-bold'>{totalItems}</span> items in your cart</p>
          </div>
          <div>
            <button className='bg-red-600 hover:bg-red-800 px-4 rounded-md text-gray-200' onClick={clearCart}>Clear Cart</button>
          </div>
        </div>

        <div id='border' className='bg-[#f2f2f6] rounded-md shadow-md w-full h-[60vh] py-2'>

          <Scrollbars universal={true}>
            {
              items.map((item) => {
                return <Items key={item.id} {...item} />
              })
            }

          </Scrollbars>
        </div>

        <div className=' flex justify-end items-end gap-3 my-4'>
          <p>Total:{totalAmount} <span className='font-black'>{}</span></p>
          <button className='bg-blue-600 hover:bg-blue-900 px-5 rounded-md float-right text-gray-200'>Checkout</button>
        </div>

      </section>
    </div>
  )
}

export default ContextCart