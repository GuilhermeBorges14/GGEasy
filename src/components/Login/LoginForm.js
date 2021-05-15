import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../General/Button";
import Input from "../General/Input";
import { UserContext } from "../../UserContext";
import Error from "../Helpers/Error";
import style from "./LoginForm.module.css";
import styleBtn from "../General/Button.module.css";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function login(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animationLeft">
      <h1 className="title">Login</h1>
      <form className={style.form} onSubmit={login}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Error error={error} />
      </form>
      <Link className={style.lostpass} to="/login/perdeuasenha">
        Perdeu a senha?
      </Link>
      <div className={style.register}>
        <h2 className={style.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui uma conta? Cadastre-se no site</p>
        <Link className={styleBtn.button} to="/login/cadastrar">
          Cadastrar
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
