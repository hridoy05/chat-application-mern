import React, { useEffect, useState } from "react";
import axios from "axios";
export const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("/api/chats");
    console.log(data);
    setChats(data.chats);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(chats);
  }, [chats]);
  return (
    <div>
      {chats &&
        chats.map((chat, index) => <div key={index}>{chat.chatName}</div>)}
    </div>
  );
};
