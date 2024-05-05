import { styled, useTheme } from "@mui/material";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import { ComponentProps, memo, useMemo, useState } from "react";
import CustomTextField from "../TexFields/CustomTextField";
import MemoizedLocalizationProvider from "./lib/MemoizedLocalizationProvider";
import ActionBar from "./ActionBar";

type Props = DatePickerProps<any> & {
  textFieldProps?: ComponentProps<typeof CustomTextField>;
  name?: ComponentProps<typeof CustomTextField>["name"];
  required?: boolean;
};
export type CustomDatePickerProps = Props;

const CustomDatePicker = (props: Props) => {
  const { textFieldProps, name, ...datePickerProps } = props;
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const StyledDatePicker = useMemo(
    () => styled(DatePicker)`
      display: block;
      & .MuiInputBase-root {
        width: 100%;
        height: 3rem !important;
        border-radius: 0.5rem;
        background-color: ${theme.palette.background.default};
        font-size: 0.75rem;
        padding-inline-start: 0;
      }

      & .MuiInputBase-input {
        padding-inline: 1.5rem !important;
      }

      & .MuiOutlinedInput-root {
        &:hover fieldset {
          border-color: revert;
        }
      }
    `,
    [theme],
  ) as typeof DatePicker;

  const StyledTextField = useMemo(
    () => styled(CustomTextField)`
      & .MuiInputBase-root {
        padding: 14px;
      }
    `,
    [],
  );

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  return (
    <MemoizedLocalizationProvider>
      <StyledDatePicker
        open={open}
        ///@ts-ignore
        setOpen={setOpen}
        onOpen={onOpen}
        onClose={onClose}
        {...datePickerProps}
        slotProps={{
          textField: {
            name,
            required: datePickerProps.required,
            placeholder: "انتخاب تاریخ",
            ...textFieldProps,
          },
          inputAdornment: {
            onClick: () => open && setOpen((prev) => !prev),
            ...datePickerProps.slotProps?.inputAdornment,
          },
          ...datePickerProps.slotProps,
        }}
        slots={{
          textField: StyledTextField,
          actionBar: (props) => (
            <ActionBar {...{ onClose, datePickerProps, ...props }} />
          ),
          ...datePickerProps.slots,
        }}
      />
    </MemoizedLocalizationProvider>
  );
};

export default memo(CustomDatePicker);
