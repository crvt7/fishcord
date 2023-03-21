import { createContext, useState } from "react";

type User = {
  currentName: string;
  currentRank: string;
  currentIcon: string;
};

type UserContextObject = {
  currentUser: User;
  setCurrentUser: (user: User) => void
  setSeenInfo: (val: boolean) => void
  seenInfo: boolean
};

export const UserContext = createContext<UserContextObject>({
  currentUser: {
    currentName: "Fishcord Admin",
    currentRank: "Admin",
    currentIcon: "🐟",
  },
  setCurrentUser: () => {},
  seenInfo: false,
  setSeenInfo: () => {}
});

interface Props {
  children: React.ReactNode;
}

export default function UserContextProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User>({
    currentName: "Fishcord Admin",
    currentRank: "Admin",
    currentIcon: "🐟",
  });
  const [seenInfo, setSeenInfo] = useState(false)

  const contextValue: UserContextObject = {
    currentUser,
    setCurrentUser,
    seenInfo,
    setSeenInfo
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
