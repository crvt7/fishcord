import { useContext } from "react";
import { UserContext } from "../../store/UserContext";

type Props = {
  icon: string;
  name: string;
  rank: string;
};

export default function User({ icon, name, rank }: Props) {
  const userCtx = useContext(UserContext);

  const changeUser = () => {
    userCtx.setCurrentUser({
      currentIcon: icon,
      currentName: name,
      currentRank: rank,
    });
  };

  return (
    <div onClick={() => changeUser()} className="w-auto flex items-center gap-3 hover:bg-gray-700 py-1 pl-2 ml-2 hover:cursor-pointer rounded-sm ">
      <div
        className={`w-8 h-8 shrink-0 rounded-2xl bg-orange-700 flex justify-center items-center select-none text-white font-bold icon ${rank}`}
      >
        {icon}
      </div>
      <div className={` overflow-hidden usertag ${rank}`}>
        {name}
      </div>
    </div>
  );
}
