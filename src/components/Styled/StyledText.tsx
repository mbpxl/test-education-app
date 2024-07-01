import styled from "styled-components";

type TextType = {
  size?: string;
  weight?: string;
};

const Text = styled.h1<TextType>`
  font-size: ${(props) => props.size || "14px"};
  font-weight: ${(props) => props.weight || "400"};
`;

export const Title = (props: any) => {
  return <Text {...props} />;
};
