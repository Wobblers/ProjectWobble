import React from "react";
import "./Msg.css"
import UpIcon from "../../img/uparrow.png";
import DownIcon from "../../img/downarrow.png";

function Msg({msg}) {
  console.log(msg);
  return (
    <>
      <div className="msg">
        <div className="msgtxt">{msg}</div>
        <div
        style={{
        backgroundColor: hsl(14, var%, 50%);,
        width: '100px',
        height: '100px'
        }}
        />
        <div className="buttons">
        +1
        <img
        className="up"
        src={UpIcon}
        />
        <img
        className="down"
        src={DownIcon}
        />
        </div>
      </div>

    </>
  );
}

export default Msg;
