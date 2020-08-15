import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FlexSpace } from "./Flex";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  @media(max-width: 769px) {
    justify-content: center;
  }
  height: 60px;
  padding-left: 32px;
  padding-right: 32px;
  box-shadow: 0px 4px 4px #bbc6c0;
  z-index: 1;
  position: relative;
`;

const NavbarTitle = styled.span`
  font-size: 2.2rem;
  color: ${props => {
    if (props.color === "black") {
      return "#34433A;";
    } else if (props.color === "gray") {
      return "#587263;";
    }
  }};
`;

const iconStyle = {
  paddingRight: "16px",
  color: "#587263",
  fontSize: "3.1rem"
};

export default function Navbar() {
  return (
    <NavbarWrapper>
      <FontAwesomeIcon icon={faLanguage} style={iconStyle} />
      <NavbarTitle color="black">Bombas</NavbarTitle>
      <NavbarTitle color="gray">Translator</NavbarTitle>
      <FlexSpace />
      <a href="https://github.com/Mensix/BombasTranslator" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} style={iconStyle} />
      </a>
    </NavbarWrapper>
  );
}
