import React, { useState, useRef, useEffect } from "react";
import HeaderTxt from "../__atoms/HeaderTxt";
import Cart from "../../assets/images/cart.png";
import ProfilePic from "../../assets/images/profile.jpg";
import Fourth from "../../assets/images/shoe4.png";
import DeleteIcon from "../../assets/images/delete.svg";

function Header({ count, setCount }) {
  const [display, setDisplay] = useState("none");
  const [display1, setDisplay1] = useState(null);
  const [display2, setDisplay2] = useState(null);

  const isVisible = useRef(null);

  function HandleDisplay() {
    if (display === "none") {
      setDisplay("flex");
    } else {
      setDisplay("none");
    }
  }

  function HandleDisplay1() {
    if (count === 0) {
      setDisplay1("flex");
      setDisplay2("none");
    } else {
      setDisplay1("none");
      setDisplay2("flex");
    }
  }

  useEffect(() => {
    function handleOutsideClick(e) {
      if (isVisible.current && !isVisible.current.contains(e.target)) {
        setDisplay("none");
      }
    }

    if (display === "flex") {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [display]);

  return (
    <>
      <header className="w-[80%] h-[100px] flex justify-start items-center relative border-b border-[#E4E9F2]">
        <h1 className="text-[#1D2026] text-2xl font-bold">sneakers</h1>

        <div className="flex gap-5 ml-9 justify-start items-center">
          <HeaderTxt txt="Collections" />
          <HeaderTxt txt="Men" />
          <HeaderTxt txt="Women" />
          <HeaderTxt txt="About" />
          <HeaderTxt txt="Contact" />
        </div>

        <div className="flex gap-5 justify-center items-center absolute top-7 right-0">
          <img
            onClick={() => {
              HandleDisplay();
              HandleDisplay1();
            }}
            className="w-[21.82px] h-[20px] cursor-pointer"
            src={Cart}
            alt="cart"
          />

          <img
            className="rounded-full w-[50px] h-[50px] border-2 border-[#FF7E1B] cursor-pointer"
            src={ProfilePic}
            alt="profile"
          />

          <div
            ref={isVisible}
            style={{
              display: display,
            }}
            className="w-[360px] h-[256px] flex-col justify-start items-center bg-white shadow-[0px_20px_50px_-20px_rgba(29,32,38,0.5)] absolute top-20 right-0 z-[9999] rounded-[10px]"
          >
            <div className="w-[100%] h-[50px] flex justify-start items-center pl-4 border-b border-[#E4E9F2]">
              <p className="text-[#1D2026] text-[16px] font-bold">cart</p>
            </div>

            <div
              style={{
                display: display1,
              }}
              className="flex w-full h-[50%] justify-center items-center"
            >
              <p>Your cart is empty</p>
            </div>

            <div
              style={{
                display: display2,
              }}
              className="flex w-[90%] h-[50%] gap-2 justify-start items-center relative"
            >
              <img
                className="w-[50px] h-[50px] rounded-[4px]"
                src={Fourth}
                alt="shoe"
              />

              <div className="flex flex-col gap-1.5">
                <p>Fall Limited Edition Sneakers</p>
                <div className="flex">
                  <p>$125.00 x {count}</p>
                  <p className="pl-2 font-bold">{`$${125 * count}`}</p>
                </div>

                <img
                  onClick={() => {
                    if (count !== 0) {
                      setCount(count - 1);
                      localStorage.setItem("count", JSON.stringify(count));
                    }
                  }}
                  className="w-[14px] h-[16px] absolute top-13 right-1 cursor-pointer"
                  src={DeleteIcon}
                  alt="delete"
                />
              </div>
            </div>

            <button
              onClick={() => {
                if (count !== 0) {
                  localStorage.setItem("count", JSON.stringify(count));
                  alert(`You Purchased ${count} shoes `);
                }
              }}
              className="bg-[#FF7E1B] rounded-[10px] w-[90%] h-[56px] text-white cursor-pointer hover:opacity-50"
            >
              Checkout
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
