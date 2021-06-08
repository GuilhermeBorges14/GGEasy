import React from "react";
import { Navigate, Route, Routes } from "react-router";
import LoginForm from "./LoginForm";
import LoginRegister from "./LoginRegister";
import LoginLostPassword from "./LoginLostPassword";
import LoginResetPassword from "./LoginResetPassword";
import { UserContext } from "../../UserContext";
import style from "./Login.module.css";
import { ReactComponent as LogoLogin } from "../../assets/LogoLogin.svg";
import NotFound from "../General/NotFound";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/minhaconta" />;

  return (
    <section className={style.container}>
      <div className={style.loginbg}>
        <LogoLogin className={style.logologin} />
        <h1 className={style.title}>GGEASY</h1>
      </div>
      <div>
        <div className={style.forms}>
          <Routes>
            <Route path="/" element={<LoginForm />}></Route>
            <Route path="/cadastrar" element={<LoginRegister />}></Route>
            <Route path="/perdeuasenha" element={<LoginLostPassword />}></Route>
            <Route path="/resetar" element={<LoginResetPassword />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default Login;
