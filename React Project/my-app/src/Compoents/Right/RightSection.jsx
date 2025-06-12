import React from 'react'
import './RightSection.css'
import removeBG from "../../../Images/removeBG.png"
import pocketNotes from "../../../Images/Pocket Notes.png"
import message from "../../../Images/message.png"
import endToEnd from "../../../Images/ETEE.png"

export default function RightSection() {
  return (
    <>
      <div className='right-sec'>
        <div className='container'>
          <div>
            <img src={removeBG}/>
          </div>
          <div>
            <img src={pocketNotes}/>
          </div>
          <div>
            <img src={message}/>
          </div>
        </div>
        <div className='etee'>
          <img src={endToEnd}/>
        </div>                
      </div>
    </>
  )
}
