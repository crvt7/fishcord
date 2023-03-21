import { ReactComponent as Mic } from "../../assets/Mic.svg";
import { ReactComponent as MicOff } from "../../assets/MicOff.svg";
import { ReactComponent as Headphones } from "../../assets/Headphones.svg";
import { ReactComponent as HeadphonesOff } from "../../assets/HeadphonesOff.svg";
import { ReactComponent as Settings } from "../../assets/Settings.svg";
import { useState } from "react";

type Props = {};

export default function UserIconBar({}: Props) {
  const [mic, setMic] = useState(true);
  const [selfMuted, setSelfMuted] = useState(false);
  const [heads, setHeads] = useState(true);

  return (
    <div className="flex mr-2 items-center">
      <div
        onClick={() => {
          setMic(!mic), setSelfMuted(!selfMuted), setHeads(true);
        }}
        className=" hover:cursor-pointer group relative hover:bg-gray-700 py-1 rounded-sm"
      >
        <p className="group-hover:scale-100 iconTooltip bottom-8 -right-4 ">
          {mic ? "Mute" : "Unmute"}
        </p>
        {mic ? <Mic width={"2rem"} /> : <MicOff width={"2rem"} />}
      </div>
      <div
        onClick={() => {
          setHeads(!heads);
          if (!selfMuted) {
            setMic(!mic);
          }
        }}
        className=" hover:cursor-pointer group relative hover:bg-gray-700 py-1 rounded-sm"
      >
        <p className="group-hover:scale-100 iconTooltip bottom-8 -right-6 ">
          {heads ? "Deafen" : "Undeafen"}
        </p>
        {heads ? (
          <Headphones width={"2rem"} />
        ) : (
          <HeadphonesOff width={"2rem"} />
        )}
      </div>
      <div className=" hover:cursor-pointer group relative hover:bg-gray-700 py-1 rounded-sm">
        <p className="group-hover:scale-100 iconTooltip bottom-8 -right-6">
          Settings
        </p>
        <Settings width={"2rem"} />
      </div>
    </div>
  );
}
