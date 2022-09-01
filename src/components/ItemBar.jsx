import React from "react";

const ItemBar = () => {
  return (
    <div className="item_wrapper">
      <div className="item_main">
        <div className="item_main_item">
          <button type="button" className="view_btn">
            View
          </button>
          <div className="item">
            <div className="item_title">Cost</div>
            <div className="item_text">₪ 24.48</div>
          </div>
          <div className="item">
            <div className="item_title">Date & time</div>
            <div className="item_text">21.03.2021 16:12</div>
          </div>
          <div className="item">
            <div className="item_title">Items</div>
            <div className="item_text">
              1 X Better PK Flower (T20/C4); <br /> 2 X Canndoc Ultra Sour Oil
              (T20/C4)
            </div>
          </div>
          <div className="item">
            <div className="item_title">Delivery or pickup</div>
            <div className="item_text">Pick up from store</div>
          </div>
          <div className="item">
            <div className="item_title">Payment method</div>
            <div className="item_text">Paid upon recive</div>
          </div>
        </div>
        <div className="status_btn">
          <label htmlFor="status_btn_id">Pending</label>
          <button
            id="status_btn_id"
            className="status_btn_pending"
            type="button"
          ></button>
        </div>
      </div>
    </div>
  );
};
export default ItemBar;
