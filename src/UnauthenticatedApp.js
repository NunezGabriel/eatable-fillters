import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import HeaderNav from "./components/header-nav";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";

const ContainerLogin = styled.div`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

function UnauthenticatedApp() {
  return (
    <ContainerLogin>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </ContainerLogin>
  );
}

export default UnauthenticatedApp;
