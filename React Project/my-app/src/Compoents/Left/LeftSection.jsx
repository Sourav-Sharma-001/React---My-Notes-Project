import "./LeftSection.css";
import pocketNotes from "../../../Images/Pocket Notes-1.png";
import React, { useState } from "react";
import Notes from "./Notes/Notes";
import PopUP from "./PopUp/PopUP";

export default function LeftSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);  

  const openModal = () => setIsModalOpen(true);  

  const onClose = () => setIsModalOpen(false);

  return (
    <div className="left-sec">
      <div className="pocket-notes">
        <img src={pocketNotes} alt="Pocket Notes Logo" />
      </div>

      <div className="scroll-container">
        <Notes />
      </div>

      <button
        className="add-btn"
        aria-label="Add new group"
        onClick={openModal}
      >
        +
      </button>

      {isModalOpen && <PopUP onClose = {onClose} />}
    </div>
  );
}
