import { Typography, TypographyProps } from "@mui/material";
import clsx from "clsx";
import RequiredAstrics from "./RequiredAstrics";

type Props = TypographyProps<"label"> & {
  required?: boolean;
};

const LabelPrimary = (props: Props) => {
  const { required } = props;
  return (
    <Typography
      variant="h6"
      component="label"
      fontSize={".9rem"}
      {...props}
      className={clsx(
        "!mb-1 inline-block cursor-pointer select-none",
        props?.className,
      )}
    >
      {props.children}
      {required && <RequiredAstrics />}
    </Typography>
  );
};

export default LabelPrimary;
