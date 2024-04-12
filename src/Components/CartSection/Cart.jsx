import React from "react";
import { useSelector } from "react-redux";
import { decrement, increment, remove } from "../../ReduxData/CartSlice";
import { useDispatch } from "react-redux";

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
              <li className="ml-36">Total price</li>
            </ul>
            {productDetail.map((item) => {
              let updatePrice = Math.floor(item.price * item.quantity);
              return (
                <div className="w-[95%] h-28 bg-gray-300 ml-6 mt-3 mb-4 flex items-center ">
                  <img
                    src={`/assets/Image/${item?.image}`}
                    className="w-24 h-24 object-cover ml-4"
                    alt=""
                  />
                  <div className="w-48 ml-5">
                    <h1>{item.title}</h1>
                  </div>
                  <div className="flex w-32  justify-evenly items-center ml-[100px]">
                    <button
                      onClick={() => inc(item.id)}
                      className="border border-gray-500 w-10 h-10 text-2xl"
                    >
                      +
                    </button>
                    <h1>{item?.quantity}</h1>
                    <button
                      onClick={() => dec(item.id)}
                      className="border border-gray-500 w-10 h-10 text-2xl"
                    >
                      -
                    </button>
                  </div>
                  <div className="w-20 flex   ml-28">
                    <h1 className="ml-1">$ {updatePrice}</h1>
                  </div>
                  <svg
                    onClick={() => RemoveCart(item.id)}
                    className="ml-20 cursor-pointer "
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#080808"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </div>
              );
            })}
            <h1 className="text-xl ml-[570px] mb-5">
              Total Price:{finalTotal}
            </h1>
          </div>
          <div className="bg-[#212121] w-1/3 h-full"></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
