import { useContext } from "react";
import { ServerContext } from "../store/ServerContext";
import NavbarItem from "./NavbarItem";
import { ReactComponent as SvelteIcon } from "../assets/svelte.svg";
import { ReactComponent as AngularIcon } from "../assets/angular.svg";
import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as VueIcon } from "../assets/vue.svg";
import DashboardButton from "./DashboardButton";
import { UserContext } from "../store/UserContext";
import InfoBox from "./InfoBox";

const icons = [SvelteIcon, VueIcon, ReactIcon, AngularIcon];

export default function Navbar() {
  const serverCtx = useContext(ServerContext);
  const userCtx = useContext(UserContext);
  const changeServer = (number: number) => {
    serverCtx.setCurrentServer(number);
    serverCtx.setCurrentChannel(0);
    userCtx.setCurrentUser({
      currentName: "Fishcord Admin",
      currentIcon: "🐟",
      currentRank: "Admin",
    });
  };

  return (
    <div className="m-0 shadow-lg bg-gray-900 fixed top-0 w-16 p-1 mx-1 left-0 z-50 h-full flex flex-col items-center justify-start">
      <p className="text-gray-200 font-bold">Fishcord</p>
      <DashboardButton />
      <div className="w-10 h-px bg-slate-400" />
      {serverCtx.servers.map((server, idx) => {
        return (
          <NavbarItem
            key={idx}
            Icon={icons[idx]}
            tooltipText={server.name}
            onClick={changeServer}
            idx={idx}
            selected={serverCtx.currentServer === idx}
          />
        );
      })}
    </div>
  );
}
