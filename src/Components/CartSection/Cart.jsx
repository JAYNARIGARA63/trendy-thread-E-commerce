import React from 'react'

const Cart = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-11/12 h-4/5 flex items-center justify-center gap-2'>
        <div className='bg-gray-200 w-2/3 h-full'>
          <h1 className='text-3xl ml-10 mt-5'>Shopping Cart</h1>
          <ul className='flex mt-4'> 
            <li className='ml-10 '>Product</li>
            <li className='ml-96'>Quantity</li>
            <li className='ml-56'>Total price</li>
          </ul>
          <div className='w-11/12 h-36 bg-red-400 ml-6 mt-3'>

          </div>
         
        </div>
        <div className='bg-[#212121] w-1/3 h-full'></div>
      </div>
    </div>
  )
}

export default Cart
