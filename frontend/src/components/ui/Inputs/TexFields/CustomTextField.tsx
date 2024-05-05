import { TextFieldProps } from "@mui/material";
import { memo } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import CoreTextField from "./CoreTextField";

type Props = TextFieldProps & {
  notAffectedRtl?: boolean;
  loading?: boolean;
  seperateThousands?: boolean;
  numericFormatProps?: NumericFormatProps;
};

const CustomTextField = (props: Props) => {
  const {
    notAffectedRtl,
    seperateThousands,
    numericFormatProps,
    ...textFieldProps
  } = props;
  if (seperateThousands) {
    return (
      <NumericFormat
        {...(textFieldProps as any)}
        {...numericFormatProps}
        customInput={CoreTextField}
        notAffectedRtl={notAffectedRtl}
        thousandSeparator
        onValueChange={(values) => {
          props.onChange?.({
            target: {
              value: values.value,
              name: props.name,
            },
          } as any);
        }}
        onChange={() => {}}
      />
    );
  }
  return <CoreTextField notAffectedRtl={notAffectedRtl} {...textFieldProps} />;
};

export default memo(CustomTextField);
