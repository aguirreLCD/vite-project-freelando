/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const StyledPrimaryButton = styled.button`
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

  padding-top: ${(props) => props.theme.padding.xs};
  padding-bottom: ${(props) => props.theme.padding.xs};
  padding-right: ${(props) => props.theme.padding.s};
  padding-left: ${(props) => props.theme.padding.s};
`;

const StyledSecondaryButton = styled.button`
  color: ${(props) => props.theme.colors.primary.b};
  background: #f8f8fd;

  border: 2px solid ${(props) => props.theme.colors.primary.b};
  border-radius: ${(props) => props.theme.padding.s};

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
  padding-top: ${(props) => props.theme.padding.xs};
  padding-bottom: ${(props) => props.theme.padding.xs};
  padding-right: ${(props) => props.theme.padding.s};
  padding-left: ${(props) => props.theme.padding.s};
`;

export const Button = ({ children, btnType = "primary" }) => {
  if (btnType === "primary") {
    return <StyledPrimaryButton>{children}</StyledPrimaryButton>;
  }
  return <StyledSecondaryButton>{children}</StyledSecondaryButton>;
};

//  btnState = "default", "hover, "
