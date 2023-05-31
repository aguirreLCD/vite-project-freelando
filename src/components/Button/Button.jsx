/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const StyledPrimaryButton = styled.button`
  padding: ${(props) => props.theme.padding.xs},
    ${(props) => props.theme.padding.s};
  background: ${(props) => props.theme.colors.primary.b};
  border-radius: ${(props) => props.theme.padding.s};
  color: ${(props) => props.theme.colors.white};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border: none;

  &:hover {
    background: ${(props) => props.theme.colors.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.colors.dark.d};
  }
`;

const StyledSecondaryButton = styled.button`
  color: ${(props) => props.theme.colors.primary.b};
  background: transparent;

  border: 2px solid ${(props) => props.theme.colors.primary.b};
  border-radius: ${(props) => props.theme.padding.s};
  padding: ${(props) => props.theme.padding.xs},
    ${(props) => props.theme.padding.s};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    border-color: ${(props) => props.theme.colors.dark.b};
    color: ${(props) => props.theme.colors.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.colors.focus};
  }
`;

export const Button = ({
  children,
  btnType = "primary",
  btnState = "default",
}) => {
  if (btnType === "primary" && btnState === "default") {
    return <StyledPrimaryButton>{children}</StyledPrimaryButton>;
  }
  return <StyledSecondaryButton>{children}</StyledSecondaryButton>;
};
