import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigate = useNavigate();
  //  navigate to home page after 10 seconds
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }, [navigate]);
  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Thanks for your message!</h1>
    </div>
  );
};

export default Thanks;
