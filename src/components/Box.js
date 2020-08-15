import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { FlexSpace, FlexContainer } from "./Flex";

const BoxWrapper = styled.div`
  position: absolute;
  top: 140px;
  width: 80%;
  @media (max-width: 769px) {
    width: 100%;
    left: 0%;
    margin-left: 0%;
    top: 60px;
  }
  left: 50%;
  margin-left: -40%;
`;

const BoxNav = styled.div`
  height: 46px;
  background: #ffffff;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  @media (max-width: 769px) {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  z-index: 1;
  border: 1px solid #a8b6ae;
  display: flex;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
`;

const BoxNavOption = styled.span`
  font-size: 1.8rem;
  color: #92a499;
`;

const BoxContainer = styled.textarea.attrs(props => ({
  disabled: props.right,
  placeholder: props.left && "Wpisz tekst..."
}))`
  border: none;
  height: 300px;
  background: #ffffff;
  ${props =>
    props.right &&
    css`
      background-color: #dce2df;
      border-bottom-right-radius: 24px;
    `}
  ${props =>
    props.left &&
    css`
      border-bottom-left-radius: 24px;
      border-left: 1px solid #a8b6ae;
    `};
  border-bottom: 1px solid #a8b6ae;
  border-right: 1px solid #a8b6ae;
  width: 50%;
  @media (max-width: 769px) {
    ${props => props.left && "border-bottom-left-radius: 0;"};
    ${props =>
      props.right &&
      css`
        border-bottom-right-radius: 0;
        background: #2571a7;
        color: #f9faf9;
      `}
    height: calc((100vh - 108px) / 2);
    width: auto;
    box-sizing: border-box;
  }
  resize: none;
  word-wrap: break-word;
  &:focus {
    box-shadow: none;
    outline: none;
  }
  padding: 32px;
  font-size: 22px;
  &::placeholder {
    color: #92a499;
  }
  box-shadow: 0px 4px 4px #bbc6c0;
`;

export default function Box() {
  const [dictionary, setDictionary] = useState([]);
  const [res, setRes] = useState({ input: "", output: "" });

  const handleInputChange = e => {
    setRes({
      input: e.target.value,
      output: e.target.value
        .split(" ")
        .map(
          x =>
            dictionary[x] ||
            x
              .replace("i", "j")
              .replace("ą", "q")
              .replace("y", "")
        )
        .join(" ")
        .toUpperCase()
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("dictionary.json");
      setDictionary(result.data);
    };
    fetchData();
  }, []);

  return (
    <BoxWrapper>
      <BoxNav>
        <BoxNavOption>POLSKI</BoxNavOption>
        <FlexSpace />
        <BoxNavOption>BOMBASKI</BoxNavOption>
      </BoxNav>
      <FlexContainer>
        <BoxContainer
          value={res.input}
          onChange={handleInputChange}
          left
        ></BoxContainer>
        <BoxContainer value={res.output} right></BoxContainer>
      </FlexContainer>
    </BoxWrapper>
  );
}
