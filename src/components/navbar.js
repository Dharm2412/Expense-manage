import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(date);
  }, []);

  return (
    <div>
      <span className="navbar-text ml-auto">{currentDate}</span>
    </div>
  );
};

export default Navbar;
