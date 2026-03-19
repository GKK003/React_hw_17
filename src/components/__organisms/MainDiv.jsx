import React, { useState } from "react";
import Header from "../__molecules/Header";
import Content from "../__molecules/Content";

function MainDiv(props) {
  const [count, setCount] = useState(() => {
    return JSON.parse(localStorage.getItem("count")) || 0;
  });

  return (
    <>
      <div className="w-[100%] h-full flex flex-col items-center">
        <Header count={count} setCount={setCount} />
        <Content count={count} setCount={setCount} />
      </div>
    </>
  );
}

export default MainDiv;
