import "./PopUp.css";
import React, { useState } from 'react';
import { useGroupContext } from "../../ContextAPI/ContextAPI";

export default function PopUP({ onClose }) {
  const { addGroup, color, setColor } = useGroupContext();
  const [inputValue, setInputValue] = useState("");

  const handleCreateBtn = () => {
    if (inputValue.trim() !== "" && color) {
      addGroup(inputValue, color);
      setColor("");
      onClose();
    }
  };

  const handleClick = (e) => {
    if (e.target.classList.contains("modal-container")) {
      onClose();
    }
  };

  const handleColor = (pickedColor) => {
    setColor(pickedColor);
  };

  const colors = ["red", "purple", "green", "blue", "blueviolet", "brown"];

  return (
    <div className="modal-container" onClick={handleClick}>
      <div className="modal-box">
        <h3>Create New group</h3>

        <div className="group-name-sec">
          <div>Group Name</div>
          <input
            placeholder="Enter group name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className="color-sec">
          <div>Choose colour</div>
          <div className="contains-color">
            {colors.map((clr, idx) => (
              <div
                key={idx}
                onClick={() => handleColor(clr)}
                className={color === clr ? "selected" : ""}
                style={{ backgroundColor: clr }}
              ></div>
            ))}
          </div>
        </div>

        <button className="create-btn" onClick={handleCreateBtn}>
          Create
        </button>
      </div>
    </div>
  );
}
