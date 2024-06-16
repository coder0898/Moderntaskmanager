import React from "react";

const SectionHead = ({ headTitle }) => {
  return (
    <>
      <h2>
        {headTitle && headTitle === "Todo" ? (
          <span>
            <i className="fa-solid fa-bullseye"></i>
          </span>
        ) : headTitle === "Working" ? (
          <span id="list">
            <i className="fa-solid fa-list-check"></i>
          </span>
        ) : (
          <span id="check">
            <i className="fa-solid fa-circle-check"></i>
          </span>
        )}
        {headTitle}
      </h2>
    </>
  );
};

export default SectionHead;
