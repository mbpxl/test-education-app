import styled from "styled-components";

const StyledProgressBar = styled.div`
  margin: auto;
  font-size: 15px;
`;

export const ProgressBar = (props: any) => {
  return <StyledProgressBar {...props} />;
};
