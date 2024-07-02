import styled from "styled-components";

type TextType = {
  size?: string;
  weight?: string;
  header?: boolean;
  flex?: boolean;
};

const Text = styled.h1<TextType>`
  font-size: ${(props) => props.size || "14px"};
  font-weight: ${(props) => props.weight || "400"};
  ${(props) =>
    props.header &&
    `border-bottom: 2px solid #000000;
    padding-bottom: 0.8rem;
    `};

  ${(props) =>
    props.flex &&
    `
    display: flex;
    justify-content: space-between;
    align-items: center;
    `}
`;

export const Title = (props: any) => {
  return <Text {...props} />;
};
