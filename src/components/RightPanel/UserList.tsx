import { useContext } from "react";
import { ServerContext } from "../../store/ServerContext";
import User from "./User";

type Props = {};

export default function UserList({}: Props) {
  const messagesCtx = useContext(ServerContext);
  const userList = messagesCtx.servers[messagesCtx.currentServer].users;

  const admins = userList.filter((user) => user.ranks[0] === "Admin");
  const moderators = userList.filter((user) => user.ranks[0] === "mod");
  const users = userList.filter((user) => user.ranks[0] === "user");

  return (
    <div className="bg-gray-800 h-full w-60 shrink-0 flex flex-col">
      <div className="overflow-y-scroll">
        <div className="text-gray-400 font-bold text-xs pl-2 my-2">
          ADMIN - {admins.length}
        </div>
          {admins.map((user, i) => {
            return (
              <User
                key={i}
                icon={user.icon}
                name={user.name}
                rank={user.ranks[0]}
              />
            );
          })}
        {moderators.length > 0 && <div className="text-gray-400 font-bold text-xs pl-2 my-2">
          MODERATOR - {moderators.length}
        </div>}
        {moderators.map((user, i) => {
          return (
            <User
              key={i}
              icon={user.icon}
              name={user.name}
              rank={user.ranks[0]}
            />
          );
        })}
        <div className="text-gray-400 font-bold text-xs pl-2 my-2">
          USER - {users.length}
        </div>
        {users.map((user, i) => {
          return (
            <User
              key={i}
              icon={user.icon}
              name={user.name}
              rank={user.ranks[0]}
            />
          );
        })}
      </div>
    </div>
  );
}
