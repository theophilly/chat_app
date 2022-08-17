import React from "react";
import { Avatar, Typography, useTheme, Box } from "@mui/material";

export default function Message({ owner = false, message, name }) {
  const theme = useTheme();
  return (
    <>
      {!owner && (
        <Box
          sx={{ ...theme.typography.column, width: "max-content", mt: "10px" }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Avatar
              alt={name}
              sx={{ width: 35, height: 35, mr: "10px", mb: "3px" }}
            />
            <Typography
              sx={{
                bgcolor: "#CEE9FF",
                padding: "15px",
                borderRadius: "10px",
                width: "500px",
              }}
            >
              {message}
            </Typography>
          </Box>
          <Typography sx={{ textAlign: "end", fontSize: "0.7rem" }}>
            {name}
          </Typography>
        </Box>
      )}

      {owner && (
        <Box
          sx={{
            ...theme.typography.column,
            alignItems: "flex-end",
            mt: "10px",
          }}
        >
          <Box sx={{ width: "500px" }}>
            <Typography
              sx={{
                bgcolor: "#D6D6D6",
                padding: "15px",
                borderRadius: "10px",
                width: "500px",
              }}
            >
              {message}
            </Typography>

            <Typography sx={{ textAlign: "end", fontSize: "0.7rem" }}>
              {name}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
