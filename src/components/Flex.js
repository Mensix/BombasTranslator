import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${props => props.alignItems || "auto"};
  flex-direction: column;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const FlexSpace = styled.div`
  flex-grow: 1;
`;

export const FlexColumn = styled.div`
  flex-basis: ${props =>
    props.flexBasis ? `${(props.flexBasis / 12) * 100}%` : "auto"};
`;
