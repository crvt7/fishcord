import { useContext } from "react";
import { ServerContext } from "../../store/ServerContext";
import { UserContext } from "../../store/UserContext";
import InfoBox from "../InfoBox";
import Message from "./Message";
import MessageConcurrent from "./MessageConcurrent";
import NewMessage from "./NewMessage";

type Props = {};

export default function MessageBoard({}: Props) {
  const serverCtx = useContext(ServerContext);
  const userCtx = useContext(UserContext);
  const server = serverCtx.currentServer;
  const channel = serverCtx.currentChannel;
  let previousSender = "";
  const messageList = serverCtx.servers[server].channels[channel].messages;

  return (
    <div className="bg-gray-700 h-full grow flex flex-col">
      <div className="overflow-y-scroll  mr-1 mt-1 grow">
        <div className="w-full bg-gray-700 flex  flex-col justify-end min-h-full">
          {messageList.map((msg, idx) => {
            if (previousSender === msg.user.name) {
              return (
                <MessageConcurrent
                  key={idx}
                  text={msg.text}
                  user={msg.user}
                  time={msg.time}
                />
              );
            }
            previousSender = msg.user.name;

            return (
              <Message
                key={idx}
                text={msg.text}
                user={msg.user}
                time={msg.time}
              />
            );
          })}
        </div>
      </div>
      <NewMessage />
      {!userCtx.seenInfo && <InfoBox />}
    </div>
  );
}
