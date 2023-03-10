import React from "react";
import "./index.scss";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section className="login">
        <Header />
        <form className="login__form">
          <h1>Acesse com seu login ou cadastre-se!</h1>
          <h2>você pode entrar com o seu CPF</h2>
          <div className="login__input">
            <label htmlFor="name">Digite seu CPF:</label>
            <input
              type="text"
              placeholder="Nome completo"
              id="name"
              className="login__input-name"
            />

            <label htmlFor="passoword">Senha:</label>
            <input type="passoword" id="passoword" placeholder="***********" />
          </div>  
          <button type="submit">
            <Link to={"/home"}>Entrar</Link>
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
