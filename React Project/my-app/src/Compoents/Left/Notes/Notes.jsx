import React from 'react';
import "./Notes.css";
import { useGroupContext } from '../../ContextAPI/ContextAPI';

export default function Notes() {
  const { groupList, getInitials, capitalizeWords, setSelectedGroup } = useGroupContext();  

  return (
    <>
      {groupList.map((group, index) => (
        <div
          className='notes-container'
          key={index}
          onClick={() => setSelectedGroup(group)}
        >
          <div
            className='initials'
            style={{ backgroundColor: group.color }}
          >
            {getInitials(group.name)}
          </div>
          <div className='heading'>{capitalizeWords(group.name)}</div>
        </div>
      ))}
    </>
  );
}
