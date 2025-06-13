import React from 'react';
import './Home.css';
import LeftSection from './Left/LeftSection';
import RightSection from './Right/RightSection';
import Chat from './Right/Chat/Chat';
import { useGroupContext } from './ContextAPI/ContextAPI';

export default function Home() {
  const { selectedGroup } = useGroupContext();

  return (
    <>
      <div className='section-container'>
        <LeftSection />
        {selectedGroup ? <Chat /> : <RightSection />}
      </div>
    </>
  );
}
