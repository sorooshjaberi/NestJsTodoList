import { Stack, StackProps } from "@mui/material";

type Props = StackProps;
export type HStackProps = Props;

const HStack = (props: Props) => {
  return <Stack direction="row" {...props} />;
};

export default HStack;
