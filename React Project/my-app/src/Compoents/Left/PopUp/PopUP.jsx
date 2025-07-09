import "./PopUp.css";
import React, { useState, useRef } from 'react';
import { useGroupContext } from "../../ContextAPI/ContextAPI";

export default function PopUP({ onClose }) {
  const { addGroup, color, setColor } = useGroupContext();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleCreateBtn = () => {
    const trimmed = inputValue.trim();
    const words = trimmed.split(" ").filter(Boolean);

    if (words.length === 0 || words.length > 2 || trimmed.length < 2) {
      alert("Group name must be 1 or 2 words, and at least 2 characters.");
      return;
    }

    if (!color) {
      alert("Please choose color.");
      return;
    }

    const success = addGroup(trimmed, color);
    if (!success) {
      alert("Group name already exists!");
      return;
    }

    setColor("");
    onClose();
  };

  const handleClick = (e) => {
    if (e.target.classList.contains("modal-container")) {
      onClose();
    }
  };

  const handleColor = (pickedColor) => {
    setColor(pickedColor);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const colors = ["red", "purple", "green", "blue", "blueviolet", "brown"];

  return (
    <div className="modal-container" onClick={handleClick}>
      <div className="modal-box">
        <h3>Create New group</h3>

        <div className="group-name-sec">
          <div>Group Name</div>
          <input
            ref={inputRef}
            placeholder="Enter group name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleCreateBtn();
            }}
          />
        </div>

        <div className="color-sec">
          <div className="choose-color-text">Choose colour</div>
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
