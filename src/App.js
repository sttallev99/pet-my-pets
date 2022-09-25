import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import MyPet from "./components/MyPet/MyPet";
import Footer from "./components/Footer/Footer";
import * as authService from './services/authService';

function App() {
  const [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ''});

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user
    });
  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username
    });
  }


  return (
    <div className="App">
      <Header {...userInfo}/>
      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login onLogin={onLogin}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/myPet" element={<MyPet />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
