import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Button from "./button";
import Input from "./input";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 258px;
`;

export default function SignupForm() {
  const { signup } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    signup(form).catch((error) => {
      console.log(error.message);
      const newErrors = JSON.parse(error.message);
      setErrors({ ...errors, ...newErrors });
    });
  }

  function handleFormChange(event) {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        id="email"
        label="Email adress"
        type="email"
        placeholder="example@mail.com"
        value={form.email}
        onChange={handleFormChange}
        error={errors.email.toString()}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="******"
        value={form.password}
        onChange={handleFormChange}
        error={errors.password.toString()}
      />
      <Button fullWidth type="submit">
        Sign-up
      </Button>
    </StyledForm>
  );
}
