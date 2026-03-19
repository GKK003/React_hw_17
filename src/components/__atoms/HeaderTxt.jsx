import React from "react";

function HeaderTxt(props) {
  return (
    <>
      <p className="text-[15px] h-[100px]  flex items-center text-[#69707D] font-normal  hover:border-b-4 border-[#FF7E1B] hover:font-bold cursor-pointer">
        {props.txt}
      </p>
    </>
  );
}

export default HeaderTxt;
