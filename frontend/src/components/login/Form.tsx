import { Box, Button, IconButton, Stack } from "@mui/material";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useState } from "react";
import useLogin from "@/hooks/useLogin";
import { Link } from "react-router-dom";
import { TextFieldWithFormik, LabelPrimary } from "formik-mui-inputs";
const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { mutateAsync: login } = useLogin();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: object().shape({
      username: string().required("Username is required"),
      password: string().required("Password is required"),
    }),
    onSubmit(values) {
      login(values);
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

        <Box
          component={Link}
          to="/signup"
          alignSelf="flex-end"
          color="grey.500"
          fontSize={15}
          sx={{ textDecoration: "none" }}
        >
          Don't have an account?
        </Box>
      </Stack>
      <Button type="submit" sx={{ p: 1.5 }}>
        Continue
      </Button>
    </Stack>
  );
};

export default Form;
