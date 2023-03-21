import Linkify from 'linkify-react';

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

export default function Message({ text, user, time }: Props) {

    let formattedTime = new Date(time)
    let freedomTime = formattedTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    let finalTime = `${formattedTime.getDate()}/${formattedTime.getMonth()+1}/${formattedTime.getFullYear()} at ${freedomTime}`

  return (
    <div className="w-full hover:bg-[#343d4d] flex pl-4 py-0.5  items-stretch">
      <div className=" flex flex-col items-center pr-2">
        <div
          className={`w-10 h-10 font-bold text-lg text-white rounded-3xl icon ${user.ranks[0]} 
                      flex justify-center items-center mt-1 select-none hover:cursor-pointer`}
        >
          {user.icon}
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex gap-2 items-center">
          <p
            className={`hover:cursor-pointer brightness-150 hover:underline usertag ${user.ranks[0]}`}
          >
            {user.name}
          </p>
          <p className="text-gray-400 text-xs">{finalTime}</p>
        </div>
        <div className="text-gray-200 pr-4 break-all">{
          <Linkify >
            {text}
          </Linkify>
        }</div>
      </div>
    </div>
  );
}
