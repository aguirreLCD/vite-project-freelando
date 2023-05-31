/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  margin: 1rem;
  padding: ${(props) => props.theme.padding.l};
  background: ${(props) => props.theme.colors.secondary.a};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.primary.a};
  border-radius: ${(props) => props.theme.padding.s};
`;

export const Card = ({ children }) => {
  return <StyledDiv> {children} </StyledDiv>;
};
