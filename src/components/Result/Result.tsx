import { data } from "../../data/data";
import { Button } from "../Styled/StyledButton";
import { Title } from "../Styled/StyledText";

export const Result = (props: { scrore: number; reset: () => void }) => {
  return (
    <div className="">
      <Title size={"20px"} style={{ marginBottom: "30px" }}>
        You scored {props.scrore} out of {data.length}
      </Title>
      <Button onClick={props.reset}>Reset</Button>
    </div>
  );
};
