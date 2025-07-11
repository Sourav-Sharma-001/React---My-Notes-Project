import React, { useState, useEffect } from "react";
import "./Chat.css";
import { IoSendSharp } from "react-icons/io5";
import MiddleSec from "./middleSec";
import { useGroupContext } from "../../ContextAPI/ContextAPI";

export default function Chat() {
  const { selectedGroup, groupMessages, setGroupMessages } = useGroupContext();
  const [inputValue, setInputValue] = useState("");

  const currentGroupName = selectedGroup?.name;
  const messages = groupMessages[currentGroupName] || [];

  const handleSend = () => {
    if (inputValue.trim() !== "" && currentGroupName) {
      const newMessage = {
        text: inputValue,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        date: new Date().toLocaleDateString(),
      };

      setGroupMessages((prev) => ({
        ...prev,
        [currentGroupName]: [...(prev[currentGroupName] || []), newMessage],
      }));

      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    setInputValue("");
  }, [selectedGroup]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div
          className="chat-initials"
          style={{ backgroundColor: selectedGroup?.color || "blue" }}
        >
          {selectedGroup?.name
            ?.trim()
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase()}
        </div>
        <div className="chat-heading">
          {selectedGroup?.name
            ?.trim()
            .split(" ")
            .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(" ")}
        </div>
      </div>

      <div className="chat-middle-sec">
        <MiddleSec messages={messages} />
      </div>

      <div className="textarea-sec">
        <textarea
          placeholder="Write notes here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSend} disabled={inputValue.trim() === ""}>
          <IoSendSharp size={40} />
        </button>
      </div>
    </div>
  );
}
