import styled from "@emotion/styled";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: ${(props) => props.theme.padding.xs};
  margin-bottom: ${(props) => props.theme.padding.s};
  background: ${(props) => props.theme.colors.white};
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.neutral.a};
  border-radius: ${(props) => props.theme.padding.s};
  height: 40px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 17px;
`;

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

/* eslint-disable react/prop-types */
export const InputText = ({ label }) => {
  return (
    <StyledLabel>
      {label}
      <StyledInput />
    </StyledLabel>
  );
};
