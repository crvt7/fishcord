import React, { useContext } from "react";
import { UserContext } from "../../store/UserContext";
import UserIconBar from "./UserIconBar";

type Props = {};

export default function CurrentUserPanel({}: Props) {
  const userCtx = useContext(UserContext);
  return (
    <div className="flex items-center py-3 pl-1 bg-slate-900 justify-between relative z-50 ">
      <div className="flex items-center gap-1 hover:bg-gray-700 p-1 rounded-sm w-fit">
        <p
          className={`w-8 h-8 shrink-0 rounded-2xl flex justify-center items-center select-none text-white font-bold icon ${userCtx.currentUser.currentRank}`}
        >
          {userCtx.currentUser.currentIcon}
        </p>
        <div
          className={`shrink whitespace-nowrap text-gray-100 font-bold text-xs group`}
        >
          <p className=" overflow-hidden overflow-ellipsis w-24">
            {userCtx.currentUser.currentName}
          </p>
          <p className=" iconTooltip font-normal group-hover:scale-100 bottom-10 left-8 ">
            {userCtx.currentUser.currentName}
          </p>
        </div>
      </div>
      <UserIconBar />
    </div>
  );
}
