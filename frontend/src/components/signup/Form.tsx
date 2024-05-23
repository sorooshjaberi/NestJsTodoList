import { LabelPrimary, TextFieldWithFormik } from "formik-mui-inputs";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useFormik } from "formik";
import { object, ref, string } from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "@/hooks/useSignup";
import { pick } from "lodash";
import { SignupPayload } from "@/models/auth";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { mutateAsync: signup } = useSignup();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      repeatPassword: "",
    },
    validationSchema: object().shape({
      username: string().required("Username is required"),
      password: string().required("Password is required"),
      email: string().email().required("Email is required"),
      repeatPassword: string()
        .oneOf([ref("password")], "Passwords must match")
        .required("Repeat your password"),
    }),
    onSubmit(values) {
      const signupExtractedValues = pick(
        values,
        "email",
        "username",
        "password"
      ) as SignupPayload;

      signup(signupExtractedValues);
    },
  });
  return (
    <Stack width="100%" gap={5} component="form" onSubmit={formik.handleSubmit}>
      <Stack gap={2}>
        <TextFieldWithFormik
          label={
            <LabelPrimary component="label" htmlFor="username">
              Username
            </LabelPrimary>
          }
          formik={formik}
          name="username"
          id="username"
        />

        <TextFieldWithFormik
          label={
            <LabelPrimary component="label" htmlFor="email">
              Email
            </LabelPrimary>
          }
          formik={formik}
          name="email"
          id="email"
        />

        <TextFieldWithFormik
          label={
            <LabelPrimary component="label" htmlFor="password">
              Password
            </LabelPrimary>
          }
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VscEye /> : <VscEyeClosed />}
              </IconButton>
            ),
          }}
          type={showPassword ? "text" : "password"}
          formik={formik}
          name="password"
          id="password"
        />

        <TextFieldWithFormik
          label={
            <LabelPrimary component="label" htmlFor="repeatPassword">
              Repeat Password
            </LabelPrimary>
          }
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VscEye /> : <VscEyeClosed />}
              </IconButton>
            ),
          }}
          type={showPassword ? "text" : "password"}
          formik={formik}
          name="repeatPassword"
          id="repeatPassword"
        />

        <Box
          component={Link}
          to="/login"
          alignSelf="flex-end"
          color="grey.500"
          fontSize={15}
          sx={{ textDecoration: "none" }}
        >
          Already have an account?
        </Box>
      </Stack>
      <Button type="submit" sx={{ p: 1.5 }}>
        Continue
      </Button>
    </Stack>
  );
};

export default Form;
