import styled from "styled-components";

export const InputWrapper = styled.input.attrs((props) => ({
  type: "number",
  placeholder: props.placeholder,
}))`
  background-color: #f2f2f2;
  width: 295px;
  border: none;
  border-radius: 10px;
  height: 35px;
  color: ${(props) => props.theme.darkGray};
  padding-left: 15px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #87898e;
    font-size: 12px;
  }
`;