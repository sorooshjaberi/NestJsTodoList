import { FormikProps } from "formik";

import { ComponentProps, memo } from "react";
import TextFieldWithLabel from "./TextFieldWithLabel";
// import { WithRequired } from "models/utilTypes";
import { WithRequired } from "@/models/utilTypes";

const CustomTextFieldWithFormik = (
  props: WithRequired<ComponentProps<typeof TextFieldWithLabel>, "name"> & {
    formik: FormikProps<any>;
  }
) => {
  const { formik, ...textFieldProps } = props;
  const name = textFieldProps.name;

  const {
    value = textFieldProps.value,
    error,
    touched,
  } = formik.getFieldMeta(name);

  const isTouchedAndError = !!(touched && error);

  return (
    <TextFieldWithLabel
      error={isTouchedAndError}
      helperText={isTouchedAndError && <>{error}</>}
      value={value}
      {...textFieldProps}
      onChange={(event) => {
        formik.handleChange(event);
        props.onChange?.(event);
      }}
      onBlur={(event) => {
        formik.handleBlur(event);
        props.onBlur?.(event);
      }}
    />
  );
};
export default memo(CustomTextFieldWithFormik);
