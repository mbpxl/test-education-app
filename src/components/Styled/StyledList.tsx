import styled from "styled-components";

type TypeStyledListItem = {
  correct: boolean | null;
  checkAns?: (ans: any) => void;
};

const StyledList = styled.ul``;

const StyledListItem = styled.li<TypeStyledListItem>`
  display: flex;
  align-items: center;
  height: 70px;
  padding-left: 15px;
  border: 1px solid #686868;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 20px;
  cursor: pointer;

  ${(props) =>
    props.correct &&
    `
    background-color: #dffff2;
    border-color: #00d397;
    `};
  ${(props) =>
    !props.correct &&
    `
    background-color: #FFEBEB;
    border-color: #FF4A4A;
    `};

  ${(props) =>
    props.correct === null &&
    `
    background-color: transparent;
    border-color: #686868;
    `};
`;

export const List = (props: any) => {
  return <StyledList {...props} />;
};

export const ListItem = (props: any) => {
  return <StyledListItem {...props} />;
};
