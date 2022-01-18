import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setCredentials } from "../../redux/contacts/auth/sliceCreator";

import s from "./AuthForm.module.css";

function AuthForm({ loginUser, error, registerUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    reset();
  }, [location]);

  const validateUser = () => {
    const validationEmailExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailCheck = validationEmailExp.test(String(email).toLowerCase());

    let passedValidation = true;

    if (email === "") {
      alert("Enter email");
      passedValidation = false;
    } else if (!emailCheck) {
      alert(
        "Invalid email address. Valid e-mail can contain only latin letters, numbers, @ and ."
      );
      passedValidation = false;
    }

    if (password === "") {
      alert("Enter password");
      passedValidation = false;
    } else if (password.length < 7) {
      alert("Password too short");
      passedValidation = false;
    }

    if (location.pathname === "/login") {
      return passedValidation;
    }

    if (name === "") {
      alert("Enter name");
      passedValidation = false;
    }

    return passedValidation;
  };

  function reset() {
    setName("");
    setEmail("");
    setPassword("");
  }

  function handleSubmitReg(e) {
    e.preventDefault();

    const validationResult = validateUser();

    if (validationResult === false) {
      return;
    } else {
      registerUser({ email, password, name })
        .then(({ data }) => dispatch(setCredentials(data)))
        .catch((r) => console.log(r));

      reset();
    }
  }

  function handleSubmitSignin(e) {
    e.preventDefault();

    const validationResult = validateUser();

    if (validationResult === false) {
      return;
    } else {
      loginUser({ email, password });
      // dispatch(userLogin({ email, password }));
      reset();
    }
  }

  return (
    <div className={s.formWrapper}>
      <h2>
        {location.pathname === "/login" ? "Sign in here" : "Register here"}
      </h2>
      <form
        onSubmit={
          location.pathname === "/login" ? handleSubmitSignin : handleSubmitReg
        }
      >
        {location.pathname === "/registration" && (
          <label className={s.label}>
            Name:
            <input
              type="text"
              name="name"
              className={s.input}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
          </label>
        )}
        <label className={s.label}>
          E-mail:
          <input
            autoComplete="on"
            type="email"
            name="number"
            className={s.input}
            title="E-mail"
            required
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
        </label>
        <label className={s.label}>
          Password:
          <input
            autoComplete="on"
            type="text"
            name="password"
            className={s.input}
            title="Password must be of at least 7 symbols"
            required
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        </label>
        <button type="submit" className={s.btn}>
          {location.pathname === "/login" ? "Sign in" : "Submit"}
        </button>
      </form>
      <div className={s.errorWrapper}>
        {error?.status === 400 && "User not found or password incorrect"}
        {error?.status === 401 && "Please authenticate"}
      </div>
    </div>
  );
}

export default AuthForm;
