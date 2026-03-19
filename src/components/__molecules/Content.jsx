import React, { useState } from "react";
import ProductGallery from "../ProductGallery";
import CartWhite from "../../assets/images/cartwhite.png";

function Content({ count, setCount }) {
  const [value, setValue] = useState(0);

  return (
    <div className="w-[80%] mt-8 mr-7">
      <div className="flex w-full justify-start items-center gap-16">
        <ProductGallery />

        <div className="w-[455px] flex flex-col justify-start items-start gap-5">
          <p className="text-[#FF7E1B] text-[13px] font-bold">
            Sneaker Company
          </p>

          <h1 className="text-[#1D2026] text-[44px] tracking-[0px] font-bold leading-[48px]">
            Fall Limited Edition Sneakers
          </h1>

          <p className="text-[#69707D] text-[16px] leading-[26px] tracking-normal">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <p className="text-[#1D2026] text-[28px] tracking-[0px] font-bold leading-[100%]">
                $125.00
              </p>

              <div className="bg-[#FFEEE2] px-1.5 py-0.5 flex justify-center items-center text-[16px] text-[#FF7E1B] rounded-[6px]">
                50%
              </div>
            </div>

            <p className="line-through text-[#B6BCC8] text-[16px] leading-7">
              $250.00
            </p>
          </div>

          <div className="flex gap-1.5 justify-start items-center w-full">
            <div className="bg-[#F6F8FD] w-[157px] h-[56px] rounded-[10px] flex justify-between px-4 items-center">
              <p
                className="text-[#FF7E1B] text-[30px] font-bold cursor-pointer"
                onClick={() => {
                  if (count !== 0) {
                    setCount(count - 1);
                  }
                }}
              >
                -
              </p>

              <p className="text-[16px] pt-1 text-[#1D2026]">{count}</p>

              <p
                className="text-[#FF7E1B] text-[30px] font-bold pb-0.5 cursor-pointer"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </p>
            </div>

            <div className="w-full bg-[#FF7E1B] h-[56px] gap-2.5 flex justify-center items-center rounded-[10px] cursor-pointer hover:opacity-50">
              <img className="w-[17px] h-[16px]" src={CartWhite} alt="cart" />
              <p className="text-white text-[16px]">Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
