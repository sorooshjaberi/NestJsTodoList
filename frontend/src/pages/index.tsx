import useTodos from "@/hooks/useTodos";
import { Stack, Typography } from "@mui/material";
import { map } from "lodash";

const Home = () => {
  const { data } = useTodos();
  return (
    <>
      {map(data?.data, ({ title, description }) => (
        <Stack>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
        </Stack>
      ))}
    </>
  );
};

export default Home;
