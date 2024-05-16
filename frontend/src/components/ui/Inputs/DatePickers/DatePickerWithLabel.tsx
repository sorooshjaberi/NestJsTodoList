import React, { ComponentProps, memo } from "react";
import CustomDatePicker from "./CustomDatePicker";
import { BoxProps, Box } from "@mui/material";
import LabelPrimary from "../Labels/LabelPrimary";

type Props = ComponentProps<typeof CustomDatePicker> & {
  label?: string;
  labelProps?: ComponentProps<typeof LabelPrimary>;
  containerProps?: BoxProps;
  enableInternalLable?: boolean;
};

const DatePickerWithLabel = (props: Props) => {
  const {
    label,
    labelProps,
    containerProps,
    enableInternalLable,
    ...datePickerProps
  } = props;

  return (
    <Box {...containerProps}>
      {label && !enableInternalLable && (
        <LabelPrimary required={datePickerProps.required} {...labelProps}>{label}</LabelPrimary>
      )}
      <CustomDatePicker
        label={enableInternalLable ? label : undefined}
        {...datePickerProps}
      />
    </Box>
  );
};

export default memo(DatePickerWithLabel);
