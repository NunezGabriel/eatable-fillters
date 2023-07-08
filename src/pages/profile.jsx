import styled from "@emotion/styled";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { StyledButton } from "../components/button";
import { InputContainer, Label } from "../components/input";
import { useAuth } from "../context/auth-context";
import { typography } from "../styles/typography";
import "../components/styles.css";

const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  gap: 2rem;
`;

const StyledFormik = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  min-width: 258px;
  margin-bottom: 25px;
  padding: 30px;
  background-color: white;
  border-radius: 20px
`;

const InputPersonalInfo = styled(Field)`
  padding: 0.5rem;
  ${typography.size.m};
  border: 0;
  border-bottom: 2px solid #FA4A0C;
  background: transparent;
  outline: none;
`;

const TextBold = styled.p`
  ${typography.weigth.semibold}
`;

function ProfilePage() {
  const { setTitle } = useOutletContext();
  const { user, update } = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    name: user.name || "",
    email: user.email,
    phone: user.phone || "",
    address: user.address || "",
  };

  useEffect(() => {
    setTitle("My Profile");
  }, [setTitle]);

  function validate(values) {
    const errors = {};
    if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid format";
    }
    return errors;
  }
  async function onSubmit(data) {
    try {
      update(data);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <ContainerProfile>
      <TextBold>Update personal details</TextBold>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {() => (
          <StyledFormik>
            <InputContainer>
              <Label>Name</Label>
              <InputPersonalInfo type="text" name="name" value={"your name"}/>
            </InputContainer>
            <InputContainer>
              <Label>Email</Label>
              <InputPersonalInfo type="email" name="email" />
              <ErrorMessage name="email" component="p" className="error"/>
            </InputContainer>
            <InputContainer>
              <Label>Phone</Label>
              <InputPersonalInfo type="text" name="phone" value={"your phone"}/>
            </InputContainer>
            <InputContainer>
              <Label>Address</Label>
              <InputPersonalInfo type="text" name="address" value={"fondo de vikini c-12"}/>
            </InputContainer>
            <StyledButton type="submit">Update</StyledButton>
          </StyledFormik>
        )}
      </Formik>
    </ContainerProfile>
  );
}

export default ProfilePage;
