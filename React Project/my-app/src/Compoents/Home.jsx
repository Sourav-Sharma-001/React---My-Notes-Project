import React, { useState, useEffect } from 'react';
import './Home.css';
import LeftSection from './Left/LeftSection';
import RightSection from './Right/RightSection';
import Chat from './Right/Chat/Chat';
import { useGroupContext } from './ContextAPI/ContextAPI';

export default function Home() {
  const { selectedGroup } = useGroupContext();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='section-container'>
      {isMobile ? (
        selectedGroup ? <Chat /> : <LeftSection />
      ) : (
        <>
          <LeftSection />
          {selectedGroup ? <Chat /> : <RightSection />}
        </>
      )}
    </div>
  );
}
