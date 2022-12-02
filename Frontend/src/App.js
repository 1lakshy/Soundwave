import react from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import ChatText from "./components/Chat/chatText";
import Check from "./pages/Check";
import Video from "./pages/Video";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/feed" element={<Feed/>}/>
  <Route path="/chat" element={<Chat/>}/>
  <Route path="/chat-text" element={<ChatText/>}/>
  <Route path="/check" element={<Check/>}/>
  <Route path="/video" element={<Video/>}/>
</Routes>
</BrowserRouter>



  );
}

export default App;






{/* <Feed/> */}

