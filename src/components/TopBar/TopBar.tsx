import React, { useContext } from "react";
import { ServerContext } from "../../store/ServerContext";
import ChannelInfoBar from "./ChannelInfoBar";
import IconBar from "./IconBar";

type Props = {};

export default function ({}: Props) {
  const serverCtx = useContext(ServerContext);
  const server = serverCtx.currentServer;
  const channel = serverCtx.currentChannel;
  return (
    <div className="overflow-hidden h-12 absolute left-20 rounded-tl-xl flex items-center bg-gray-700 w-[calc(100%-5rem)] border-b-[1px] border-b-slate-900">
      <div className="text-gray-300 h-full w-60 shrink-0 font-bold pl-4 flex items-center bg-gray-800 rounded-tl-xl">
        {serverCtx.servers[serverCtx.currentServer].name}
      </div>
      <ChannelInfoBar
        name={serverCtx.servers[server].channels[channel].name}
        description={serverCtx.servers[server].channels[channel].description}
      />
      <IconBar />
    </div>
  );
}
