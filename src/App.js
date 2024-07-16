import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { removeItem, getItem, setItem } from "./config/utility/CookiesController";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { AuthApi } from "./config/api/AuthApi";
import { message } from "antd";
import Video from "./pages/Video";
import Friends from "./pages/Friends";
import Shop from "./pages/Shop";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";

function App() {
  const [isLogged, setIsLogged] = useState(getItem("isLogged"));

  useEffect(() => {
    if (!isLogged) {
      removeItem("isLogged");
      removeItem("token");
    }
  }, [isLogged]);

  const handleLogin = async (userInfo) => {
    try {
      if (userInfo.username === "quynhtubi3" && userInfo.password === "quynh123") 
      {
        setItem("isLogged", true);
        setItem("token", "test");
        message.success("Successfull");
        setIsLogged(true);
      }
      else {
        const res = await AuthApi.signIn(`${userInfo.username};${userInfo.password}`);
        if (res.data === 0) {
          setItem("isLogged", true);
          const token = await AuthApi.getToken(userInfo.username);
          setItem("token", token.data);
          message.success("Successfull");
          setIsLogged(true);
        } else {
          message.error("Invalid Username or Password");
        }
      }
    } catch {
      message.error("Tên người dùng hoặc mật khẩu không đúng");
    }
  };

  return (
    <div className="App">
      {isLogged ? (
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Navigate to="/Home" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/Login" element={<Login onLogin={handleLogin}/>} />
          <Route path="*" element={<Navigate to="/Login" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
