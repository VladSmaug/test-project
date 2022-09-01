import React from "react";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar_item_left">
        <a href="#">{"קתנתהל".split("").reverse().join("")}</a>
      </div>
      <div className="topbar_item_right">
        <h4>ID: </h4>
        <a href="#">{"רוזח".split("").reverse().join("")}</a>
      </div>
    </div>
  );
};

export default TopBar;
