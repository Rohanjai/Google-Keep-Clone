import React from "react";
import { Box } from "@mui/material";
import ErrorContent from "./ErrorContent";
const ErrorPage = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <ErrorContent />
      </Box>
    </Box>
  );
};

export default ErrorPage;
