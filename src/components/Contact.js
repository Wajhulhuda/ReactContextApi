import React, { useContext } from "react";
import myContext from "./context";

const Contact = () => {
  const { isDark } = useContext(myContext);
  return (
    <div
      className="p-5"
      style={{
        backgroundColor: `${isDark ? "black" : "white"}`,
        color: `${isDark ? "lightgreen" : "black"}`,
      }}
    >
      <h1>You can mail me help@geekster.in</h1>
    </div>
  );
};

export default Contact;
