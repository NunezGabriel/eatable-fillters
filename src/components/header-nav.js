import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import Logo from "../assets/logo-eatable.png";

import { NavLink } from "react-router-dom";

const CardLogin = styled.div`
  width: 100%;
  height: 382px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 30px;
`;

const LogoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageLogo = styled.img`
  margin: auto;
  display: block;
  margin-top: 100px;
`;

const TextDecorated = styled.p`
  margin-top: 1rem;
  ${typography.size.caption}
  ${typography.weigth.semibold}
  color: ${colors.orange};
`;

const CustomButton = styled.button`
  height: 40px;
  width: 134px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  ${typography.size.m}
  ${typography.weigth.semibold};
  margin-bottom: 0.25rem;
`;

const LinkNavigate = styled.div`
  display: flex;
  gap: 5rem;
`;

// function handleButtonClick(event) {
//   event.preventDefault();
//   setShowLogin(event.target.textContent === "Login");
// }

const HeaderNav = () => {
  return (
    <CardLogin>
      <LogoCard>
        <ImageLogo src={Logo} alt="logo" />
        <TextDecorated>Food for Everyone</TextDecorated>
      </LogoCard>
      <LinkNavigate>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "button-active" : "")}
        >
          <CustomButton>Login</CustomButton>
        </NavLink>

        <NavLink
          to="/signup"
          className={({ isActive }) => (isActive ? "button-active" : "")}
        >
          <CustomButton>Signup</CustomButton>
        </NavLink>
      </LinkNavigate>
    </CardLogin>
  );
};

export default HeaderNav;
