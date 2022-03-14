import { InputContainer } from "./styled";
import styled from "styled-components";

export const MobileNumber = ({
  country = "India",
  value,
  label = "Mobile Number",
  type,
  placeholder = "Enter your mobile number",
  validators,
}) => {
  const Container = styled.div`
    font-family: "Arial";
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid;
    border-radius: 5px;
    &:hover {
      box-shadow: 1px 1px 1px thistle;
    }
  `;

  const InputContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1 0;
    align-items: center;
    min-width: 0;
  `;

  return (
    <Container>
      <InputContainer>
        <h1>Hello</h1>
      </InputContainer>
    </Container>
  );
};
