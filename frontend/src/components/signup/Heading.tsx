import HStack from "@/components/ui/HStack";
import { Stack, Typography } from "@mui/material";

const Heading = () => {
  return (
    <Stack>
      <HStack gap={1} fontSize={24}>
        Welcome to
        <Typography component="span" fontSize={24} fontWeight={800}>
          TO DO
        </Typography>
        list
      </HStack>
      <Typography color="grey">
        Let a to-do list be your guid to success
      </Typography>
    </Stack>
  );
};

export default Heading;
