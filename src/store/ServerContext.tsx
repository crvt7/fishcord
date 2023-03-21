import React, { useState } from "react";
import { createContext } from "react";
import mockData from "../assets/mockData.json";

type User = {
  name: string;
  ranks: string[];
  icon: string;
};

type Channel = {
  messages: Message[];
  name: string;
  description: string;
};

type Message = {
  user: User;
  time: number;
  text: string;
};

interface Server {
  name: string;
  users: User[];
  channels: Channel[];
}

type ServerContextObject = {
  servers: Server[];
  addMessage: (message: Message, channel: number) => void;
  currentServer: number;
  currentChannel: number;
  setCurrentServer: (number: number) => void,
  setCurrentChannel: (number: number) => void
};

export const ServerContext = createContext<ServerContextObject>({
  servers: [],
  addMessage: () => {},
  currentServer: 0,
  currentChannel: 0,
  setCurrentServer: () => {},
  setCurrentChannel: () => {}
});

interface Props {
  children: React.ReactNode;
}

export default function ServerContextProvider({ children }: Props) {
  const [servers, setServers] = useState(mockData);
  const [currentServerID, setCurrentServerID] = useState(0);
  const [currentChannelID, setcurrentChannelID] = useState(0);

  const addMessage = (message: Message, channel: number) => {
    const newData = servers;
    newData[currentServerID].channels[channel].messages.push(message);
    setServers([...newData]);
  };

  const ContextValue: ServerContextObject = {
    servers: servers,
    addMessage,
    currentServer: currentServerID,
    currentChannel: currentChannelID,
    setCurrentServer: setCurrentServerID,
    setCurrentChannel: setcurrentChannelID
  };
  return (
    <ServerContext.Provider value={ContextValue}>
      {children}
    </ServerContext.Provider>
  );
}
