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
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-11/12 h-4/5 flex items-center justify-center gap-2">
          <div className="h-auto bg-gray-200 w-2/3 ">
            <h1 className="text-3xl ml-10 mt-5">Shopping Cart</h1>
            <ul className="flex mt-4">
              <li className="ml-10 ">Product</li>
              <li className="ml-96">Quantity</li>
              <li className="ml-[167px]">Price</li>
            </ul>
            {productDetail.map((item) => {
              let updatePrice = Math.floor(item.price * item.quantity);
              return (
                <div className="w-[95%] h-28 bg-gray-300 ml-6 mt-3 mb-4 flex items-center p-4 rounded-lg shadow-md">
                  <img
                    src={`/assets/Image/${item?.image}`}
                    className="w-24 h-24 object-cover ml-4 rounded-lg"
                    alt=""
                  />
                  <div className="w-48 ml-5">
                    <h1 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h1>
                  </div>
                  <div className="flex w-32 justify-evenly items-center ml-[100px]">
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
                  <div className="w-20 flex ml-28">
                    <h1 className="text-lg font-semibold text-gray-800 ml-1">
                      $ {updatePrice}
                    </h1>
                  </div>
                  <svg
                    onClick={() => RemoveCart(item.id)}
                    className="ml-20 cursor-pointer text-gray-700 hover:text-red-500 transition-colors duration-200 transform hover:scale-105"
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
            <h1 className="text-xl ml-[590px] mb-5">
              Total Price: $ {finalTotal}
            </h1>
          </div>
          <div className="bg-[#212121] w-1/3 h-full p-6 rounded-lg shadow-lg">
            <div className="flex w-auto m-auto gap-2">
              <MoveLeft className="text-white" />
              <h1 className="text-white">check out:</h1>
            </div>
            <h1 className="text-4xl text-white font-bold mb-6 mt-5">
              Payment info
            </h1>
            <form className="space-y-4">
              <div className="flex space-x-4 mt-10">
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
