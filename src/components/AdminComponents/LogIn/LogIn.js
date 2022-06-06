import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signInApi } from "../../../api/user.js";
import "./LogIn.scss";
import {
  emailValidation,
  minLengthValidation,
} from "../../../validations/FormValidations";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
  });

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const inputValidation = (e) => {
    const { type, name } = e.target;

    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }
    if (type === "password") {
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
    }
  };

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const emailVal = inputs.email;
    const passwordVal = inputs.password;

    if (!emailVal || !passwordVal) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
    } else {
      const result = await signInApi(inputs);
      console.log(result);
      if (!result.accessToken) {
        notification["error"]({
          message: "No se pudo hacer Log in",
        });
      } else {
        notification["success"]({
          message: result.message,
        });
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("refreshToken", result.refreshToken);

        navigate("/admin");
      }
    }
  };

  return (
    <Form className="login-form" onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="login-form__input"
          onChange={inputValidation}
          value={inputs.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login-form__input"
          onChange={inputValidation}
          value={inputs.password}
        />
      </Form.Item>

      <Button onClick={login} className="login-form__button">
        Log In
      </Button>
    </Form>
  );
}
