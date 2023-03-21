import { useContext } from "react";
import { ServerContext } from "../../store/ServerContext";
import Channel from "./Channel";
import CurrentUserPanel from "./CurrentUserPanel";

type Props = {};

export default function ChannelList({}: Props) {
  const channelCtx = useContext(ServerContext);
  const server = channelCtx.servers[channelCtx.currentServer].channels
  const currentChannel = channelCtx.currentChannel

  const selectChannel = (number: number) => {
    channelCtx.setCurrentChannel(number)
  }

  return (
    <div className="bg-gray-800 w-60 shrink-0 h-full rounded-tl-xl flex flex-col justify-between">

      <div>
      {server.map((channel, idx )=> {
          return <Channel name={channel.name} key={idx} onClick={selectChannel} idx={idx} selected={currentChannel === idx}/>
      })}
      </div>
      <CurrentUserPanel />
    </div>
    
  );
}
