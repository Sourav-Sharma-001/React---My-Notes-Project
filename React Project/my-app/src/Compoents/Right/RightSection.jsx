import React from "react";
import "./RightSection.css";
import removeBG from "../../../Images/removeBG.png";
import pocketNotes from "../../../Images/Pocket Notes.png";
import message from "../../../Images/message.png";
import endToEnd from "../../../Images/ETEE.png";
import { MdLock } from "react-icons/md";

export default function RightSection() {
  return (
    <>
      <div className="right-sec">
        <div className="container">
          <div>
            <img className="remove-bg" src={removeBG} />
          </div>
          <div>
            <img className="pocket-notes-R" src={pocketNotes} />
          </div>
          <div>
            <img className="message" src={message} />
          </div>
        </div>
        <div className="etee">
          <MdLock />
          <img src={endToEnd} />
        </div>
      </div>
    </>
  );
}
