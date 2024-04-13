import React from "react";
import "../Ui/Strip.css";
import Strip from "../../Assets/Images/Strip.svg"

export default function strip() {
  return (
    <>  
        <div className="container-strip">
            <img src={Strip} alt="Strip Eduphiser" />
        </div>
    </>
  );
}
