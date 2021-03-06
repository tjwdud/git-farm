/* eslint-disable */
import styled from "styled-components";

export const Text = styled.div`
  color: ${(props) => props.theme.lightGray};
  line-height: 18px;
  font-size: ${(props) => (props.big ? "16px" : "12px")};
  margin-left: 5px;
`;
