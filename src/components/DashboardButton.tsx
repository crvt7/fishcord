import { useContext } from "react";
import { ReactComponent as FishIcon } from "../assets/Fish1.svg";
import { UserContext } from "../store/UserContext";

export default function DashboardButton() {
  const userCtx = useContext(UserContext)

  return (
    <div className="flex items-center group z-50">
      <div onClick={() => userCtx.setSeenInfo(!userCtx.seenInfo)} className="navbar-item">
        <FishIcon />
      </div>
      <p className="tooltip group-hover:scale-100">Fishcord info</p>
    </div>
  );
}
