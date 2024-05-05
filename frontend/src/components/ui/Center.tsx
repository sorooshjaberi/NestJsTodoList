import { Stack, StackProps } from "@mui/material";

type Props = StackProps;

const Center = (props: Props) => {
  return <Stack justifyContent="center" alignItems="center" {...props} />;
};

export default Center;
