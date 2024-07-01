import styled from "styled-components";

const StyledButton = styled.button`
  margin: auto;
  width: 250px;
  height: 65px;
  background: #553f9a;
  color: #fff;
  font-size: 25px;
  font-wieght: 500;
  border-radius: 8px;
  cursor: pointer;
`;

export const Button = (props: any) => {
  return <StyledButton {...props} />;
};
