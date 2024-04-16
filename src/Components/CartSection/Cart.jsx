import React from "react";
import { useSelector } from "react-redux";
import { decrement, increment, remove } from "../../ReduxData/CartSlice";
import { useDispatch } from "react-redux";
import { MoveLeft } from "lucide-react";

const Cart = () => {
  let productDetail = useSelector((state) => state.cart);
  let updateTotal = productDetail.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  let finalTotal = Math.floor(updateTotal);
  let dispatch = useDispatch();

  const RemoveCart = (item) => {
    dispatch(remove(item));
  };

  const inc = (item) => {
    dispatch(increment(item));
  };

  const dec = (item) => {
    dispatch(decrement(item));
  };
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center mb-20">
        <div className="md:w-11/12 md:h-4/5 md:flex md:items-center md:justify-center md:gap-2 sm:w-full sm:h-full sm:flex sm:flex-col sm:justify-center sm:items-center w-full flex flex-col justify-center items-center">
          <div className="h-auto bg-gray-200 md:w-2/3 sm:w-full sm:mt-10 mt-10 w-full">
            <h1 className="text-3xl md:ml-10 md:mt-10 pl-5 pt-5">
              Shopping Cart
            </h1>
            <ul className="flex mt-4">
              <li className="md:ml-10 sm:ml-12 ml-8">Product</li>
              <li className="md:ml-96 sm:ml-[305px] ml-20 ">Quantity</li>
              <li className="md:ml-[167px] sm:ml-20 ml-12">Price</li>
            </ul>
            {productDetail.map((item) => {
              let updatePrice = Math.floor(item.price * item.quantity);
              return (
                <div
                  className="md:w-[95%] md:h-28 md:ml-6  sm:w-[95%] sm:h-28 sm:ml-6  bg-gray-300 flex items-center p-4 rounded-lg shadow-md mb-4 mt-3
                w-[97%] ml-1
                "
                >
                  <img
                    src={`/assets/Image/${item?.image}`}
                    className="w-24 h-24 object-cover md:ml-4 rounded-lg"
                    alt=""
                  />
                  <div className="w-48 md:ml-5 sm:ml-2 ml-1 hidden md:list-item sm:list-item md:list-none sm:list-none">
                    <h1 className="text-lg font-semibold text-gray-800 ">
                      {item.title}
                    </h1>
                  </div>
                  <div className="flex w-32 justify-evenly items-center md:ml-[100px]  sm:ml-10 ml-5">
                    <button
                      onClick={() => inc(item.id)}
                      className="rounded-lg border border-gray-500 w-10 h-10 text-2xl font-bold text-gray-700 hover:bg-gray-200 transition-colors duration-200 transform hover:scale-105"
                    >
                      +
                    </button>
                    <h1 className="text-lg font-semibold text-gray-800">
                      {item?.quantity}
                    </h1>
                    <button
                      onClick={() => dec(item.id)}
                      className="rounded-lg border border-gray-500 w-10 h-10 text-2xl font-bold text-gray-700 hover:bg-gray-200 transition-colors duration-200 transform hover:scale-105"
                    >
                      -
                    </button>
                  </div>
                  <div className="w-14 md:ml-28 sm:ml-10 ml-5">
                    <h1 className="text-lg font-semibold text-gray-800">
                      $ {updatePrice}
                    </h1>
                  </div>
                  <svg
                    onClick={() => RemoveCart(item.id)}
                    className="md:ml-20 cursor-pointer text-gray-700 hover:text-red-500 transition-colors duration-200 transform hover:scale-105"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </div>
              );
            })}
            <h1 className="text-xl md:ml-[590px] sm:ml-[437px] mb-5 ml-[170px]">
              Total Price: $ {finalTotal}
            </h1>
          </div>
          <div className="bg-[#212121] md:w-1/3 md:h-full md:p-6 rounded-lg shadow-lg sm:w-4/5 sm:mb-10 sm:mt-10 my-10 w-11/12">
            <div className="flex w-auto m-auto gap-2 sm:ml-5 sm:mt-5 ml-5 mt-5">
              <MoveLeft className="text-white" />
              <h1 className="text-white">check out:</h1>
            </div>
            <h1 className="text-4xl text-white font-bold md:mb-6 md:mt-5 sm:ml-5 ml-5 ">
              Payment info
            </h1>
            <form className="space-y-4">
              <div className="flex space-x-4 mt-10 ">
                <button
                  type="button"
                  className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  Credit Card
                </button>
                <button
                  type="button"
                  className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  Debit Card
                </button>
              </div>
              <div>
                <label htmlFor="name" className="block text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 bg-gray-800 text-white border-2 border-gray-700 rounded"
                  required
                  placeholder="John Does"
                />
              </div>
              <div>
                <label htmlFor="cardNumber" className="block text-white">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full p-2 bg-gray-800 text-white border-2 border-gray-700 rounded"
                  required
                  placeholder="0000 0000 0000 "
                />
              </div>
              <div className="flex space-x-4">
                <div>
                  <label htmlFor="expiryDate" className="block text-white">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    className="w-full p-2 bg-gray-800 text-white border-2 border-gray-700 rounded"
                    required
                    placeholder="00/0000"
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-white">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="w-full p-2 bg-gray-800 text-white border-2 border-gray-700 rounded"
                    required
                    placeholder="000"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition-colors duration-200"
              >
                Confirm and Pay ${finalTotal}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
