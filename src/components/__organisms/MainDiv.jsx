import React, { useState, useEffect } from "react";
import Header from "../__molecules/Header";
import Content from "../__molecules/Content";

function MainDiv() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div className="w-[100%] h-full flex flex-col items-center">
      <Header count={count} setCount={setCount} />
      <Content count={count} setCount={setCount} />
    </div>
  );
}

export default MainDiv;
