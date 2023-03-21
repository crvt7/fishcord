import Linkify from "linkify-react";

type User = {
  name: string;
  ranks: string[];
  icon: string;
};

type Props = {
  text: string;
  user: User;
  time: number;
};

export default function MessageConcurrent({ text, time }: Props) {

  let formattedTime = new Date(time)
  let freedomTime = formattedTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  if (freedomTime[0] === " "){
    freedomTime = freedomTime.replace(" ", "")
  }
  return (
    <div className="w-full group hover:bg-[#343d4d] flex pl-2 py-0.5  items-stretch">
      <div className="w-14 text-xs flex items-center text-transparent group-hover:text-gray-400">{freedomTime}</div>
      <div className="text-gray-200 pr-4 break-all">
        {<Linkify>{text}</Linkify>}
      </div>
    </div>
  );
}
