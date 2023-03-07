import "./App.css";
import Top from "./pages/Top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BroadbandView from "./pages/BroadbandView";
import MobileView from "./pages/MobileView";
import MobRecharge from "./pages/MobRecharge";
import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <div>
      <Top></Top>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/brview" element={<BroadbandView />} />
        <Route path="/mbview" element={<MobileView />} />
        <Route path="/mbrec" element={<MobRecharge />} />
      </Routes>
    </div>
  );
}

export default App;
