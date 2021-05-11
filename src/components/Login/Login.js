import React from "react";
import { Route, Routes } from "react-router";
import LoginForm from "./LoginForm";
import LoginRegister from "./LoginRegister";
import LoginLostPassword from "./LoginLostPassword";
import LoginResetPassword from "./LoginResetPassword";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/cadastrar" element={<LoginRegister />}></Route>
        <Route path="/perdeuasenha" element={<LoginLostPassword />}></Route>
        <Route path="/resetar" element={<LoginResetPassword />}></Route>
      </Routes>
    </div>
  );
};

export default Login;
