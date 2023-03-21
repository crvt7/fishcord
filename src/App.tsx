import Navbar from "./components/Navbar";
import ServerView from "./components/ServerView";
import TopBar from "./components/TopBar/TopBar";
import ServerContextProvider from "./store/ServerContext";
import UserContextProvider from "./store/UserContext";

function App() {
  return (
    <ServerContextProvider>
      <UserContextProvider>
        <div className="App h-full w-screen bg-gray-900">
          <Navbar />
          <TopBar />
          <ServerView />
        </div>
      </UserContextProvider>
    </ServerContextProvider>
  );
}

export default App;
