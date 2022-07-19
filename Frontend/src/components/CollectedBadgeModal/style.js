/* eslint-disable */
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    margin-top: 20px;
    width: 60px;
    margin-bottom: 20px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 35px;
  p {
    color: ${(props) => props.theme.lightGray};
    font-size: 18px;
    line-height: 25px;
  }

  & > :nth-child(4) {
    font-size: 15px;

    margin: 15px 0;
    text-align: center;
  }
`;

export const ModalDescription = styled.div`
  color: ${(props) => props.theme.lightGray};
  font-size: 15px;
  font-color: red;
`;
