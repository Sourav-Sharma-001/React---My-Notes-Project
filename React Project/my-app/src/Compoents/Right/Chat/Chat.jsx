import React, { useState } from 'react';
import "./Chat.css";
import { IoSendSharp } from "react-icons/io5";
import MiddleSec from './middleSec';


export default function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        text: inputValue,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toLocaleDateString(),
      };
      setMessages(prev => [...prev, newMessage]);
      setInputValue("");
    }
  };

  return (
    <div className='chat-container'>
      <div className='chat-header'>
        <div className='chat-initials'>MN</div>
        <div className='chat-heading'>My Notes</div>
      </div>

      <div className='chat-middle-sec'>
        <MiddleSec messages={messages}/>
      </div>

      <div className='textarea-sec'>
        <textarea 
          placeholder='Write notes here...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSend}><IoSendSharp size={40} /></button>
      </div>        
    </div>
  );
}
