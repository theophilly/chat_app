import React from "react";
import { Box, InputBase, useTheme, Button } from "@mui/material";
import { useHomeActions } from "../../hooks/useHomeActions";

export default function Homepage() {
  const theme = useTheme();

  const {
    onTextChange,
    navigateToMessages,
    handleKeyDown,
    name,
  } = useHomeActions();

  return (
    <Box
      sx={{
        ...theme.typography.flex,
        px: "100px",
        height: "100vh",
        "@media (max-width: 500px)": {
          px: "10px",
        },
      }}
    >
      <InputBase
        onKeyDown={handleKeyDown}
        data-testid="home-button"
        onChange={onTextChange}
        sx={{
          flex: 1,
          background: "#EAEAEA",
          borderRadius: "10px",
          border: "none",
          pl: "15px",
          height: "50px",
          width: "100%",
        }}
        placeholder="please enter your name"
      />
      <Button
        onClick={navigateToMessages}
        disableElevation
        sx={{ width: "100px", height: "50px", ml: "10px" }}
        variant="contained"
      >
        Enter
      </Button>
    </Box>
  );
}
