import { BsCart3 } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { appData } from "../store/slices/appSlice";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import {
  emptyCart,
  quantityDecrease,
  quantityIncrease,
} from "../store/slices/cartSlice";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Cart = () => {
  const { cart } = useAppSelector(appData);

  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const [isPaid, setIsPaid] = useState(false);

  const [isClearAll, setIsClearAll] = useState(false);

  const getSubTotalPrice = (price: number, quantity: number) => {
    return price * quantity;
  };

  const getCartTotalPrice = (cart: any) => {
    const totalPrice = cart.reduce((prev: any, curr: any) => {
      return (prev += curr.subtotal);
    }, 0);
    return totalPrice;
  };

  return (
    <div className="relative">
      {/* background */}
      <div
        onClick={() => setOpen(!open)}
        className={`${
          open ? "w-full h-screen fixed top-0 z-40 opacity-40" : "hidden"
        }`}
      ></div>
      {open ? (
        <div className="flex justify-center items-center">
          {isPaid ? (
            <div
              className={`fixed bottom-12 rounded-lg z-50 bg-background transition-all duration-500 p-[1.8rem] h-[40%] w-[60%] md:w-[40%] lg:w-[25%] ${
                open ? "scale-100" : "scale-0"
              } `}
            >
              <div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => {
                      setIsPaid(false);
                      setOpen(false);
                    }}
                    className="p-[0.5rem] bg-tartiary absolute -bottom-4 rounded-lg"
                  >
                    <RxCross2 className="text-white" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center h-full">
                <IoCheckmarkCircleSharp className=" text-8xl text-success" />
                <div className="font-bold mt-[0.8rem] pb-[1rem]">
                  Payment Success!
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`fixed bottom-12 rounded-lg z-50 bg-background transition-all duration-500 p-[1.8rem] ${
                open ? "scale-100 h-[70%]" : "scale-0"
              } ${isClearAll ? "w-[25%]" : ""} `}
            >
              {isClearAll ? (
                <div className="h-[60%] flex justify-center items-center">
                  <div className="font-bold text-lg">
                    There is no selected cards
                  </div>
                </div>
              ) : (
                <div className="h-[60%] overflow-y-scroll scrollbar-hide">
                  {cart.items.map((ele: any) => {
                    if (ele.item.cardmarket && ele.item.cardmarket.prices) {
                      return (
                        <div key={ele.item.id} className="flex">
                          <div className="flex space-x-10 items-center mb-[1.5rem]">
                            {/* Left */}
                            <div className="flex">
                              <img
                                className="h-[6rem]"
                                src={ele.item.images.large}
                                alt={ele.item.name}
                              />
                              {/* Middle */}
                              <div className="ml-[1.5rem] mr-[0.3rem]">
                                <h1 className="font-bold text-lg">
                                  {ele.item.name}
                                </h1>
                                <span className="font-bold mr-1 text-sm">
                                  ${ele.item.cardmarket.prices.trendPrice}
                                </span>
                                <span className="text-sm text-gray-500">
                                  per card
                                </span>
                                <p className="mt-5">
                                  <span className="text-tartiary font-bold">
                                    2
                                  </span>
                                  <span className="text-gray-400">
                                    {" "}
                                    cards left
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div>
                              <div className="flex">
                                <p className="mr-[0.3rem] text-secondary font-bold text-xl mt-[0.5rem]">
                                  {ele.quantity}
                                </p>
                                <div className="flex flex-col text-secondary">
                                  <button>
                                    <IoIosArrowUp
                                      onClick={() => {
                                        dispatch(quantityIncrease(ele));
                                      }}
                                    />
                                  </button>
                                  <button>
                                    {ele.quantity > 1 ? (
                                      <IoIosArrowDown
                                        onClick={() =>
                                          dispatch(quantityDecrease(ele))
                                        }
                                      />
                                    ) : (
                                      <RxCross2 className="text-tartiary" />
                                    )}
                                  </button>
                                </div>
                              </div>
                              <div className="mt-[1rem]">
                                <span className="text-sm">price</span>
                                <p className="text-secondary font-bold">
                                  $
                                  {getSubTotalPrice(
                                    ele.item.cardmarket.prices.trendPrice,
                                    ele.quantity
                                  ).toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Right */}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    dispatch(emptyCart());
                    setIsClearAll(true);
                  }}
                  className="w-fit"
                >
                  <span className="text-sm text-gray-500">Clear all</span>
                  <div className="w-full h-[0.1rem] bg-gray-500"></div>
                </button>
              </div>
              <div className="w-[70%] mx-auto mt-[1.5rem]">
                <div className="flex justify-between">
                  <p className="font-bold text-md">Total cards</p>
                  <span className="text-tartiary font-bold">
                    {cart.items.length}
                  </span>
                </div>
                <div className="flex justify-between mt-[0.3rem]">
                  <p className="font-bold text-lg">Total price</p>
                  <span className="text-tartiary font-bold">
                    ${getCartTotalPrice(cart.items).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="flex justify-center mt-[1rem]">
                <button
                  disabled={isClearAll}
                  onClick={() => {
                    if (!isClearAll) {
                      setIsPaid(true);
                      dispatch(emptyCart());
                    }
                  }}
                  className={`py-[0.5rem] px-[3.5rem] rounded-3xl bg-secondary text-white disabled:bg-blue-400`}
                >
                  Pay now
                </button>
              </div>
              <div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => {
                      setOpen(false);
                      setIsClearAll(false);
                    }}
                    className="p-[0.5rem] bg-tartiary absolute -bottom-4 rounded-lg"
                  >
                    <RxCross2 className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* cross icon */}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="fixed bottom-10 text-white">
            <button
              onClick={() => {
                if (cart.items.length) {
                  setOpen(true);
                }
              }}
              className="relative px-[1rem] py-[0.6rem] bg-secondary flex items-center rounded-xl"
            >
              <span className="bg-tartiary rounded-full px-[0.6rem] py-[0.2rem] absolute -left-3 -top-2 text-sm">
                {cart.items.length}
              </span>
              <BsCart3 className="text-lg mr-[0.6rem]" />
              <span className="text-sm">View Cart</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
