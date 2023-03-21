import { useContext } from "react";
import { ServerContext } from "../../store/ServerContext";
import Message from "./Message";
import MessageConcurrent from "./MessageConcurrent";
import NewMessage from "./NewMessage";

type Props = {};

export default function MessageBoard({}: Props) {
  const messagesCtx = useContext(ServerContext);
  const server = messagesCtx.currentServer;
  const channel = messagesCtx.currentChannel;
  let previousSender = "";
  const messageList = messagesCtx.servers[server].channels[channel].messages;

  return (
    <div className="bg-gray-700 w-full h-full flex flex-col">
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
    </div>
  );
}
