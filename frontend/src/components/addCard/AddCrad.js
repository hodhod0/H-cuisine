import React from "react";
import "./AddCard.css";

const AddCrad = (props) => {
  return (props.trigger)? (
    <div className="popup">
      <div className="popup-inner">
        <h1>hbdscbsjdch</h1>
        <button className="close-btn">close</button>
        {props.children}
      </div>
    </div>
  ) : "";   
};

export default AddCrad;
