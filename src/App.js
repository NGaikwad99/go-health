import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from './Inbox.jsx';
import Profile from './Profile.jsx';
import Home from './Home.jsx';
import Menu from './Menu.jsx';
import Chat from './Chat.jsx';

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/askollama" element={<Chat />} />
      </Routes>
      <Menu />
    </BrowserRouter>

    
  </div>
}

export default App;
