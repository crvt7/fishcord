import ChannelList from "./Channel/ChannelList";
import MessageBoard from "./MessageBoard/MessageBoard";
import UserList from "./RightPanel/UserList";

type Props = {};

export default function ServerView({}: Props) {

  return (
    <div className="bg-gray-800 overflow-hidden absolute m-0 left-20 top-12 h-[calc(100%-3rem)] w-[calc(100%-5rem)] z-0 flex">
      <ChannelList />
      <MessageBoard />
      <UserList />
    </div>
  );
}
