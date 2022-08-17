import React, { useState } from "react";
import { Box, InputBase, useTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getSessionData } from "../../utils/getSessionData";

export default function Homepage() {
  const theme = useTheme();
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const onTextChange = (e) => {
    const { value } = e.target;
    if (value.trim()) {
      sessionStorage.setItem("profileName", value.toLowerCase());
      setName(value.toLowerCase());
    }
  };

  const navigateToMessages = () => {
    if (name) {
      navigate("/messages", { replace: true });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigateToMessages();
    }
  };

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
