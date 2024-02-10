import { Box } from "@mui/material";

import AllCards from "./content/AllCards";

const ContentArea = () => {
  return (
    <Box flex={4} p={2}>
      <AllCards />
    </Box>
  );
};

export default ContentArea;
