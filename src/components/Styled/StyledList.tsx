import styled from "styled-components";

const StyledList = styled.ul`
  li {
    display: flex;
    align-items: center;
    height: 70px;
    padding-left: 15px;
    border: 1px solid #686868;
    border-radius: 8px;
    margin-bottom: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const List = (props: any) => {
  return <StyledList {...props} />;
};
