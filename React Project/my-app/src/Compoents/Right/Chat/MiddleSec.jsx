import React from 'react';
import './MiddleSec.css';

export default function MiddleSec({ messages }) {
  return (
    <div className='middle-sec-container'>
      {messages.map((msg, idx) => (
        <div className='message-row right' key={idx}>
          <div className='message-bubble'>
            <div className='message-text'>{msg.text}</div>
            <div className='message-meta'>
              <div className='message-date'>{msg.date}</div>
              <div className="dot">&#8226;</div>
              <div className='message-time'>{msg.time}</div>
            </div>
          </div>
        </div> 
      ))}
    </div>
  );
}
