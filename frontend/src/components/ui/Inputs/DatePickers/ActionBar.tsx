import { Button, Stack, Typography } from "@mui/material";
import {
  PickersActionBarAction,
  PickersActionBarProps,
} from "@mui/x-date-pickers";
import React, { ReactNode } from "react";
import { CustomDatePickerProps } from "./CustomDatePicker";

type Props = PickersActionBarProps & {
  datePickerProps: CustomDatePickerProps;
  onClose: () => void;
};

const ActionBar = ({ datePickerProps, onClose, ...props }: Props) => {
  const componentsMapper: Record<
    PickersActionBarAction,
    { content: ReactNode; onClick(): void }
  > = {
    clear: {
      content: "پاک کردن",
      onClick: () => {
        datePickerProps?.onChange?.(null, {
          validationError: null,
        });
        onClose();
      },
    },
    accept: {
      content: "تایید",
      onClick: props.onAccept,
    },
    cancel: {
      content: "لغو",
      onClick: props.onCancel,
    },
    today: {
      content: "امروز",
      onClick: props.onSetToday,
    },
  };
  if (!props.actions?.length) {
    return null;
  }
  return (
    <Stack direction="row" p={2} className={props.className}>
      {props.actions?.map((actionName) => (
        <Button
          onClick={componentsMapper[actionName].onClick}
          sx={{ minWidth: 70 }}
        >
          <Typography>{componentsMapper[actionName].content}</Typography>
        </Button>
      ))}
    </Stack>
  );
};

export default ActionBar;
