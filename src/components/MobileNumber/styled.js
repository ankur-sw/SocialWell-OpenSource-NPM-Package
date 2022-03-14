import styled from "styled-components";

export const Container = styled.div`
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

export const TextInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0;
  align-items: center;
  min-width: 0;
`;

export const Icon = styled.div`
  flex: 0 0;
`;
