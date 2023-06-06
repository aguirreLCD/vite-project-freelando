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

  color: ${(props) =>
    props.focusOnOption ? props.theme.colors.focus : "inherit"};

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
  font-size: 0.9rem;
`;

/* eslint-disable react/prop-types */
export const DropDownList = ({ title, options }) => {
  const [showList, setShowList] = useState(false);

  const [currentOption, setCurrentOption] = useState(null);

  const [selectedOption, setSelectedOption] = useState(null);

  const keyboardEventHandler = (event) => {
    setShowList(true);

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();

        setCurrentOption((previousOption) => {
          if (previousOption == null) {
            return 0;
          }

          return (previousOption += 1);
        });

        break;

      case "ArrowUp":
        event.preventDefault();

        setCurrentOption((previousOption) => {
          if (!previousOption) {
            return 0;
          }

          return (previousOption -= 1);
        });

        break;

      case "Enter":
        event.preventDefault();
        setCurrentOption(null);
        setShowList(false);
        setSelectedOption(options[currentOption]);
        break;

      default:
        break;
    }
  };

  return (
    <StyledLabel>
      {title}
      <StyledButton
        showList={showList}
        onClick={() => setShowList(!showList)}
        onKeyDown={keyboardEventHandler}
      >
        <div>{selectedOption ? selectedOption.text : "Select"}</div>

        <div>
          <span>{showList ? "▲" : "▼"}</span>
        </div>
      </StyledButton>

      {showList && (
        <StyledDropDownList>
          {options.map((option, index) => (
            <StyledDropDownListItem
              key={option.value}
              focusOnOption={index === currentOption}
              onClick={() => setSelectedOption(option)}
            >
              {" "}
              {option.text}
            </StyledDropDownListItem>
          ))}
        </StyledDropDownList>
      )}
    </StyledLabel>
  );
};
