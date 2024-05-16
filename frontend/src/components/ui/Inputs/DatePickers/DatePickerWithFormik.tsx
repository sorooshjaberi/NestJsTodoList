import React, { ComponentProps, memo } from "react";
import DatePickerWithLabel from "./DatePickerWithLabel";
import { FormikProps } from "formik";
import { WithRequired } from "models/utilTypes";
import moment from "jalali-moment";
import { isNull } from "lodash";

type Props = WithRequired<
  ComponentProps<typeof DatePickerWithLabel>,
  "name"
> & {
  formik: FormikProps<any>;
  onInputChange?(value: number | null): void;
};

const DatePickerWithFormik = (props: Props) => {
  const { formik, onInputChange, ...datePickerProps } = props;
  const name = datePickerProps.name;
  const { value, error, touched } = formik.getFieldMeta(name);
  const { setValue } = formik.getFieldHelpers(name);
  const isTouchedAndError = !!(error && touched);
  let dateValue = value;
  if (typeof value === "string") {
    if (new Date(value).toString() !== "Invalid Date") {
      dateValue = new Date(value);
    } else if (value.match(/^\d+$/)) {
      dateValue = +value;
    }
  }
  return (
    <DatePickerWithLabel
      onChange={(value: Date | null) => {
        if (isNull(value)) {
          setValue(null);
          onInputChange?.(null);
        } else {
          const convertedToNumber = moment(value).valueOf();
          setValue(convertedToNumber);
          onInputChange?.(convertedToNumber);
        }
      }}
      value={dateValue}
      {...datePickerProps}
      textFieldProps={{
        ...datePickerProps.textFieldProps,
        error: isTouchedAndError,
        helperText: isTouchedAndError && <>{error}</>,
        onBlur: (e) => {
          formik.handleBlur(e);
        },
      }}
    />
  );
};

export default memo(DatePickerWithFormik);
