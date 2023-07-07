import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet, NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { AiOutlineLeft, AiFillHome } from "react-icons/ai";
import { LayoutStyles, Header, ItemsNav, Title } from "./styles";

const Layout = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <LayoutStyles>
      {title || title === "" ? (
        <Header>
          <AiOutlineLeft
            style={{ position: "absolute", fontSize: 25 }}
            onClick={handleBack}
          />
          <Title>{title}</Title>
        </Header>
      ) : null}
      <Outlet context={{ setTitle }} />
      <nav>
        <ItemsNav>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <AiFillHome style={{ fontSize: 30 }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              <FiUser style={{ fontSize: 30 }} />
            </NavLink>
          </li>
        </ItemsNav>
      </nav>
    </LayoutStyles>
  );
};

export default Layout;
