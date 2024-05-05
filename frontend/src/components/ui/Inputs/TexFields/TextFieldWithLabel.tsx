import { Box, BoxProps } from "@mui/material";
import { ComponentProps, ReactNode, memo } from "react";
import CustomTextField from "./CustomTextField";
import LabelPrimary from "../Labels/LabelPrimary";

type Props = {
  label?: ReactNode;
  labelProps?: ComponentProps<typeof LabelPrimary>;
  containerProps?: BoxProps;
  enableInternalLable?: boolean;
} & Omit<ComponentProps<typeof CustomTextField>, "label">;
const TextFieldWithLabel = (props: Props) => {
  const {
    label,
    labelProps,
    containerProps,
    enableInternalLable,
    ...textFieldProps
  } = props;

  return (
    <Box {...containerProps}>
      {label && !enableInternalLable && (
        <LabelPrimary required={textFieldProps.required} htmlFor={textFieldProps.name} {...labelProps}>
          {label}
        </LabelPrimary>
      )}
      <CustomTextField
        fullWidth
        {...textFieldProps}
        label={enableInternalLable ? label : undefined}
      />
    </Box>
  );
};
export default memo(TextFieldWithLabel);
