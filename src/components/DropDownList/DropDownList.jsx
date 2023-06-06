import styled from "@emotion/styled";
import { useState } from "react";

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  position: relative;
`;

const StyledButton = styled.button`
  cursor: pointer;
  display: block;
  height: 40px;
  width: 100%;
  font-size: 18px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  border-radius: 18px;
  border-bottom-left-radius: ${(props) => (props.showList ? "0" : "18px")};
  border-bottom-right-radius: ${(props) => (props.showList ? "0" : "18px")};
  margin-top: ${(props) => props.theme.padding.xs};
  padding: ${(props) => props.theme.padding.s};
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutral.a};
  &:focus {
    border-color: ${(props) => props.theme.colors.focus};
  }
`;

const StyledDropDownListItem = styled.li`
  padding: ${(props) => props.theme.padding.xs} 0;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral.c};
  cursor: pointer;
  &:last-child {
    border: none;
  }
  &:hover {
    color: ${(props) => props.theme.colors.focus};
  }
`;

const StyledDropDownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 1;
  border: 1px solid ${(props) => props.theme.colors.neutral.a};
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top: none;
  margin: 0;
  padding: 0 ${(props) => props.theme.padding.m};
  list-style: none;
`;

/* eslint-disable react/prop-types */
export const DropDownList = ({ title, options }) => {
  const [showList, setShowList] = useState(false);

  return (
    <StyledLabel>
      {title}
      <StyledButton showList={showList} onClick={() => setShowList(!showList)}>
        <div>Select</div>

        <div>
          <span>{showList ? "▲" : "▼"}</span>
        </div>
      </StyledButton>

      {showList && (
        <StyledDropDownList>
          {options.map((option) => (
            <StyledDropDownListItem key={option.value}>
              {" "}
              {option.text}
            </StyledDropDownListItem>
          ))}
        </StyledDropDownList>
      )}
    </StyledLabel>
  );
};
