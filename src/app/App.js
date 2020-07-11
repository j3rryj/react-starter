import React from "react";
import { useStateValue } from "../state";
import styled from "styled-components";

const StyledAppContainer = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: ${props => props.theme.colors.base.red};
`;

const App = () => {
  const [{ account }] = useStateValue();
  const { name } = account;
  return <StyledAppContainer>Hello {name}!</StyledAppContainer>;
};

export default App;
