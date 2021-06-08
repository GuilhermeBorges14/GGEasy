import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NotFound from "./components/General/NotFound";
import Header from "./components/Header";
import ProtectedRoute from "./components/Helpers/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Photo from "./components/Photo/Photo";
import User from "./components/User/User";
import UserProfile from "./components/User/UserProfile";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <div className="stars2"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="minhaconta/*" element={<User />} />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
