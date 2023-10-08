import React, {useContext} from 'react';
import Image from 'next/image';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { Context } from './Cart';


const Items = ({description, title, price, img, quantity, id}) => {

  const { removeItem } = useContext(Context)
  const { increment } = useContext(Context)
  const { decrement } = useContext(Context)


  let totalPrice = price * quantity;
  
  return (
    <>
      <div className='grid grid-flow-col grid-cols-9 items-center justify-items-center gap-2 border-b-2 py-4'>
        <div className='rounded-lg overflow-hidden col-span-2'>
          <Image className='' src={img} width={150} height={150} />
        </div>
        <div className='leading-6 col-span-2 justify-self-start text-sm md:text-base'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className='flex justify-center items-center col-span-2'>
          <FaMinus className='cursor-pointer hover:text-blue-600 w-2 h-2 lg:w-4 lg:h-4' onClick={() => decrement(id)}/>
          <span className='px-4 lg:px-8 lg:py-1 mx-2 md:mx-4 border-2 text-xs md:text-sm'>{quantity}</span>
          <FaPlus className='cursor-pointer hover:text-blue-600 w-2 h-2 lg:w-4 lg:h-4' onClick={() => increment(id)}/>
        </div>
        <div className='col-span-2'>
          <span className='text-xs md:text-sm'>Rs: {totalPrice}</span>
        </div>
        <div>
          <BsTrash className='cursor-pointer text-red-600 hover:text-red-900 col-span-1 w-4 h-4 md:w-5 md:h-5' onClick={() => removeItem(id)}/>
        </div>
      </div>

    </>
  )
}

export default Items