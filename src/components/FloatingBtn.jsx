import React from "react";

const FloatingBtn = ({ onClick }) => {
  return (
    <>
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "blue",
          color: "white",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        ↑
      </button>
      ;
    </>
  );
};

export default FloatingBtn;
