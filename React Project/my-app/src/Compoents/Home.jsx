import React from 'react'
import './Home.css'
import LeftSection from './Left/LeftSection'
import RightSection from './Right/RightSection'
import Chat from './Right/Chat/Chat'



export default function Home() {
  return (
    <>
      <div className='section-container'>
        <LeftSection />
        <Chat />
      </div>
    </>
  )
}
