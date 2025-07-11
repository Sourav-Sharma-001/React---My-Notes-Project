import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export default function ContextAPI({ children }) {
  const [groupList, setGroupList] = useState([]);
  const [groupMessages, setGroupMessages] = useState({});
  const [color, setColor] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedGroups = localStorage.getItem("groupList");
    const storedMessages = localStorage.getItem("groupMessages");

    if (storedGroups) {
      try {
        setGroupList(JSON.parse(storedGroups));
      } catch {}
    }

    if (storedMessages) {
      try {
        setGroupMessages(JSON.parse(storedMessages));
      } catch {}
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("groupList", JSON.stringify(groupList));
    }
  }, [groupList, loading]);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("groupMessages", JSON.stringify(groupMessages));
    }
  }, [groupMessages, loading]);

  const addGroup = (name, color) => {
    const trimmed = name.trim();
    const exists = groupList.some(
      (group) => group.name.toLowerCase() === trimmed.toLowerCase()
    );
    const wordCount = trimmed.split(" ").filter(Boolean).length;
  
    if (trimmed === "") return "Group name is required";
    if (exists) return "Group name already exists";
    if (wordCount > 2) return "Group name cannot have more than 2 words";
    if (trimmed.length > 14) return "Group name cannot exceed 14 characters";
    if (!color) return "Please select a background color";
  
    setGroupList(prev => [...prev, { name: trimmed, color }]);
    setGroupMessages(prev => ({ ...prev, [trimmed]: [] }));
    return true;
  };  

  const addMessageToGroup = (groupName, message) => {
    setGroupMessages((prev) => ({
      ...prev,
      [groupName]: [...(prev[groupName] || []), message],
    }));
  };

  const getInitials = (name) => {
    const words = name.trim().split(" ").filter(Boolean);
    return words.length === 1
      ? words[0][0].toUpperCase()
      : (words[0][0] + words[1][0]).toUpperCase();
  };

  const capitalizeWords = (name) => {
    return name
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <Context.Provider
      value={{
        groupList,
        addGroup,
        color,
        setColor,
        getInitials,
        capitalizeWords,
        selectedGroup,
        setSelectedGroup,
        groupMessages,
        setGroupMessages,
        addMessageToGroup,
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGroupContext = () => useContext(Context);
