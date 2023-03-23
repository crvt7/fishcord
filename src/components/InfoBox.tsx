import { useContext } from "react";
import { ReactComponent as FishIcon } from "../assets/Fish1.svg";
import { UserContext } from "../store/UserContext";

export default function InfoBox({}) {
  const userCtx = useContext(UserContext);

  return (
    <div
      onClick={() => userCtx.setSeenInfo(!userCtx.seenInfo)}
      className="absolute left-[25%] w-[1000px] h-[500px] bg-gray-900 text-white rounded-3xl z-50 flex flex-col items-center shadow-2xl"
    >
      <FishIcon className="scale-150" />
      <h1 className="mb-12 text-4xl font-bold">WELCOME TO FISHCORD</h1>
      <div className="font-bold text-2xl px-4 text-justify">
        <p>
          This project is an attempt to copy Discord's server UI and{" "}
          <span className="font-extrabold underline">some</span> of it's
          functionalities
        </p>
        <br />
        <p>
          I made it in an effort to get comfortable with using Tailwind CSS and
          Figma
        </p>
        <br />
        <p>
          This has no back-end implementation wahtsoever, it's only a design
          mockup
        </p>
        <br />
        <p>
          You can click on any user from the list to become that user, changing
          servers reverts you to the default profile
        </p>
      </div>
      <div
        onClick={() => userCtx.setSeenInfo(!userCtx.seenInfo)}
        className="mt-10 py-5 px-7 rounded-xl hover:bg-gray-600 font-bold text-3xl flex justify-center bg-black"
      >
        CLOSE
      </div>
    </div>
  );
}
