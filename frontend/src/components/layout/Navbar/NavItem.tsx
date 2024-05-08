import { Typography, TypographyProps } from "@mui/material";
import { Link, LinkProps, useLocation } from "react-router-dom";

type Props = TypographyProps & LinkProps;

const NavItem = (props: Props) => {
  const { pathname } = useLocation();

  const isActive = pathname === props.to;

  return (
    <Typography
      color={isActive ? "primary" : "grey"}
      component={Link}
      fontSize={18}
      {...props}
      sx={{ textDecoration: "none", ...props.sx }}
    />
  );
};

export default NavItem;
