import styled from "styled-components";

type StyledButtonType = {
  width?: string;
  height?: string;
  fontSize?: string;
  margin?: string;
};

const StyledButton = styled.button<StyledButtonType>`
  margin: ${(props) => props.margin || "auto"};
  width: ${(props) => props.width || "250px"};
  height: ${(props) => props.height || "65px"};
  background: #553f9a;
  color: #fff;
  font-size: ${(props) => props.fontSize || "25px"};
  font-wieght: 500;
  border-radius: 8px;
  cursor: pointer;
`;

export const Button = (props: any) => {
  return <StyledButton {...props} />;
};
