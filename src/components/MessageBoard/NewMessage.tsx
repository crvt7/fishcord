import React, { useContext, useRef } from "react";
import { ServerContext } from "../../store/ServerContext";
import { UserContext } from "../../store/UserContext";
import {ReactComponent as AddFileIcon} from '../../assets/AddFile.svg'

type Props = {};

export default function NewMessage({}: Props) {
  const messagesCtx = useContext(ServerContext);
  const userCtx = useContext(UserContext)
  const inputRef: any = useRef(""); // no clue how to avoid 'any' here without some weird useEffect things, TypeScript keeps yelling at me :(

  const sendMessage = (e: React.FormEvent) => {

    e.preventDefault();
    if (!inputRef.current.value){
      return
    }
    let rawTime = new Date()
    let utcTime = rawTime.getTime()
    messagesCtx.addMessage(
      {
        user: userCtx.currentUser.currentName,
        time: utcTime,
        text: inputRef.current.value,
      },
      messagesCtx.currentChannel
    );
    inputRef.current.value = ""
  };

  return (
    <div className="w-full h-16 bg-gray-700 flex items-end pb-5">
      <div className="bg-gray-600 w-14 grid place-content-center h-10 rounded-l-lg ml-2"><AddFileIcon className="hover:brightness-150 hover:cursor-pointer"/></div>
      <form className="w-full mr-4" onSubmit={(e) => sendMessage(e)}>
        <input
          ref={inputRef}
          className=" p-2 w-full  rounded-r-lg bg-gray-600 focus:outline-none  text-gray-50"
          placeholder={`Message #${messagesCtx.servers[messagesCtx.currentServer].channels[messagesCtx.currentChannel].name}`}
        />
        <input className="fixed scale-0" type="submit" />
      </form>
    </div>
  );
}
