import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
const StyledInput = styled.input`
  padding: 0.5rem;
  ${typography.size.m};
  border: 0;
  border-bottom: 2px solid gray;
  background: transparent;
  outline: 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

export const Label = styled.p`
  ${typography.size.caption}
  ${typography.weigth.semibold}
  color: ${colors.gray};
`;

const Error = styled.p`
  color: orange;
  padding-left: 1rem;
`;

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  error,
  ...rest
}) {
  name ||= id;

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {error && <Error size="sm">{error}</Error>}
    </InputContainer>
  );
}

export default Input;
