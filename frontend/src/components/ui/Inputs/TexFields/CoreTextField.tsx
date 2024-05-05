import styled from "@emotion/styled";
import { TextField, TextFieldProps, useTheme } from "@mui/material";
import { memo, useMemo } from "react";
import LoadingAdornment from "../Labels/LoadingAdornment";
import {} from "react-number-format";
import NotAffectedRtl from "@/components/ui/NotAffectedRtl";

type Props = TextFieldProps & {
  notAffectedRtl?: boolean;
  loading?: boolean;
  seperateThousands?: boolean;
};
export type CoreTextFieldProps = Props;

const CoreTextField = (props: Props) => {
  const { notAffectedRtl, seperateThousands, ...textFieldProps } = props;
  const theme = useTheme();
  const CustomTextFieldStyled = useMemo(() => {
    return styled(TextField)`
      & .MuiInputBase-root {
        height: 3rem;
        border-radius: 0.5rem;
        padding: 0;
        background-color: ${theme.palette.background.default};
        font-size: 0.75rem;
      }

      & .MuiInputBase-input {
        padding-inline: 1rem !important;
      }

      & .MuiInputAdornment-root {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      & .MuiOutlinedInput-root {
        &:hover fieldset {
          border-color: revert;
        }
      }
    `;
  }, [theme.palette]);
  let textField = (
    <CustomTextFieldStyled
      {...textFieldProps}
      {...{
        InputProps: {
          ...textFieldProps?.InputProps,
          startAdornment: (
            <>
              {textFieldProps.loading && <LoadingAdornment />}
              {textFieldProps?.InputProps?.startAdornment}
            </>
          ),
        },
      }}
    />
  );

  if (notAffectedRtl) {
    textField = <NotAffectedRtl>{textField}</NotAffectedRtl>;
  }
  return textField;
};

export default memo(CoreTextField);
