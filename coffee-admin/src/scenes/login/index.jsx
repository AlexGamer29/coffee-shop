import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./index.css";
import axios from "axios";

export default function LoginForm() {
  const history = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onhandleSubmit = async (data, e) => {
    try {
      const payload = {
        email: data.email,
        password: data.password,
      };
      const response = await axios.post(
        "http://localhost:8000/api/login",
        payload
      );
      const accessToken = response?.data?.token;
      if (accessToken) {
        localStorage.setItem("access-token", accessToken);
        history("/products");
      }
    } catch (error) {}
  };

  useEffect(() => {}, []);
  return (
    <>
      <div id="login__form__container">
        <div id="form__container">
          <div id="form__container__wrap">
            <form onSubmit={handleSubmit(onhandleSubmit)}>
              <div id="form__header" className="form__item">
                <h1 id="form__header-primary">Sign in to TodoList</h1>
              </div>
              <div id="form__email" className="form__item">
                <h3 id="form__email-title" className="form__field-title">
                  Email
                </h3>
                <input
                  id="form__email-input"
                  className="form__input"
                  placeholder="Email"
                  type="email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <span className="form__error">This field is required</span>
                )}
                {errors?.email?.type === "pattern" && (
                  <span className="form__error">Use a valid email address</span>
                )}
              </div>
              <div id="form__password" className="form__item">
                <h3 id="form__password-title" className="form__field-title">
                  Password
                </h3>
                <div id="form__password-container">
                  <div id="form__password__sub-container">
                    <div id="form__password__input-container">
                      <span id="form__password__input">
                        <input
                          id="form__password-input"
                          className="form__input"
                          placeholder="Password"
                          type={"password"}
                          name="password"
                          {...register("password", {
                            required: true,
                            minLength: 8,
                            maxLength: 30,
                          })}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                {errors?.password?.type === "required" && (
                  <span className="form__error">This field is required</span>
                )}
                {errors?.password?.type === "minLength" && (
                  <span className="form__error">
                    Password length minimum is 8 characters
                  </span>
                )}
                {errors?.password?.type === "maxLength" && (
                  <span className="form__error">
                    Password length maximum is 30 characters
                  </span>
                )}
              </div>
              <div id="form__forgot-password" className="form__item">
                <Link to="/forgot-password">
                  <span>Forgot password?</span>
                </Link>
              </div>
              <div id="form__login-btn" className="form__item">
                <button id="signin" type="submit">
                  Sign in
                </button>
              </div>
              <div id="form__to-signup">
                <span>
                  Don't have an account? <Link to="/sign-up">Sign up now</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
