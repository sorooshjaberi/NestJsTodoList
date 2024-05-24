import NavItem from "@/components/layout/Navbar/NavItem";
import HStack, { HStackProps } from "@/components/ui/HStack";
import { get, map } from "lodash";
import { ReactNode, useEffect, useMemo, useState } from "react";

type Route = {
  route: string;
  label: ReactNode;
};

type Props = HStackProps;

const Navbar = (props: Props) => {
  const [showNavbar, setShowNavbar] = useState(true);

  const routes: Route[] = useMemo(
    () => [
      {
        label: "Home",
        route: "/",
      },
      {
        label: "Login",
        route: "/login",
      },
      {
        label: "Signup",
        route: "/signup",
      },
    ],
    []
  );

  useEffect(() => {
    const scrollContainer = document.getElementById(
      "virtual_container"
    ) as HTMLDivElement;

    if (scrollContainer) {
      let lastScrollTop = scrollContainer.scrollTop;

      scrollContainer.addEventListener("scroll", (event) => {
        const currentScrollTop = get(event, ["target", "scrollTop"]) as number;

        const scrollChange = currentScrollTop - lastScrollTop;

        setShowNavbar(scrollChange > 0);

        lastScrollTop = currentScrollTop;
      });
    }
  }, []);

  return (
    <HStack
      bgcolor="white"
      position="sticky"
      alignItems="center"
      top={showNavbar ? "0" : "-100px"}
      gap={2}
      px={2}
      py={1}
      sx={{
        transition: ".3s all ease",
      }}
      {...props}
    >
      {map(routes, ({ label, route }, index) => {
        return (
          <NavItem to={route} key={index}>
            {label}
          </NavItem>
        );
      })}
    </HStack>
  );
};

export default Navbar;
