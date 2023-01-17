import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";

export const Dashboard = () => {
  return (
    <Box>
      <Box display="flex" justifyContent={'space-between'} alignItems={"center"}>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};
