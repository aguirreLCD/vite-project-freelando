import styled from "@emotion/styled";

export const Footer = styled.footer`
  background: ${(props) => props.theme.colors.primary.a};
  padding: ${(props) => props.theme.padding.xl};
  color: ${(props) => props.theme.colors.white};
`;
