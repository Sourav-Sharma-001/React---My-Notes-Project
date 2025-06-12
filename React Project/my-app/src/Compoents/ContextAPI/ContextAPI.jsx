import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export default function ContextAPI({ children }) {
  const [groupList, setGroupList] = useState([]);
  const [color, setColor] = useState("");

  const addGroup = (name, color) => {
    setGroupList(prev => [...prev, { name, color }]);
  };

  const getInitials = (name) => {
    const words = name.trim().split(" ").filter(Boolean);
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  const capitalizeWords = (name) => {
    return name
      .trim()
      .split(" ")
      .filter(Boolean)
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <Context.Provider value={{
      groupList,
      addGroup,
      color,
      setColor,
      getInitials,
      capitalizeWords
    }}>
      {children}
    </Context.Provider>
  );
}

export const useGroupContext = () => useContext(Context);
