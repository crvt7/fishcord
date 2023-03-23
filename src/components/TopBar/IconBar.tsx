import { ReactComponent as ThreadsIcon } from "../../assets/Threads.svg";
import { ReactComponent as BellIcon } from "../../assets/Bell.svg";
import { ReactComponent as BellOffIcon } from "../../assets/BellOff.svg";
import { ReactComponent as PinIcon } from "../../assets/Pin.svg";
import { ReactComponent as MembersIcon } from "../../assets/Members.svg";
import { ReactComponent as HelpIcon } from "../../assets/Help.svg";
import { ReactComponent as InboxIcon } from "../../assets/Inbox.svg";
import { useState } from "react";
import Search from "./Search";

type Props = {};

export default function IconBar({}: Props) {
  const [notifs, setNotifs] = useState(true);

  return (
    <div className="flex gap-4 mr-4 sm:hidden lg:flex shrink-0 z-10">
      <div className="hover:cursor-pointer group relative">
        <p className="group-hover:scale-100 iconTooltip top-6 -right-6">
          Threads
        </p>
        <ThreadsIcon width={"2rem"} />
      </div>
      <div
        onClick={() => setNotifs(!notifs)}
        className=" hover:cursor-pointer group relative"
      >
        <p className="group-hover:scale-100 iconTooltip top-6 -right-10">
          Notifications
        </p>
        {notifs ? <BellIcon width={"2rem"} /> : <BellOffIcon width={"2rem"} />}
      </div>
      <div className=" hover:cursor-pointer group relative">
        <p className=" group-hover:scale-100 iconTooltip top-6 -right-12">
          Pinned messages
        </p>
        <PinIcon width={"2rem"} />
      </div>
      <div className=" hover:cursor-pointer group relative">
        <p className="group-hover:scale-100 iconTooltip top-6 -right-8">
          Members
        </p>
        <MembersIcon width={"2rem"} />
      </div>
      <Search />
      <div className=" hover:cursor-pointer group relative">
        <p className="group-hover:scale-100 iconTooltip top-6 -right-4">
          Inbox
        </p>
        <InboxIcon width={"2rem"} />
      </div>
      <div className=" hover:cursor-pointer group relative">
        <p className="group-hover:scale-100 iconTooltip top-6 right-0">Help</p>
        <HelpIcon width={"2rem"} />
      </div>
    </div>
  );
}
