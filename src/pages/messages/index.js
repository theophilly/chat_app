import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  useTheme,
  InputBase,
  Box,
  styled,
  Badge,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Message from "./Message";
import { getSessionData } from "../../utils/getSessionData";

const scrollToBottom = () => {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function MessagesScreen() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [message, setMessage] = useState("");
  const state = useSelector((state) => state.messagesReducer);

  useEffect(() => {
    scrollToBottom();
  }, []);

  const profileName = getSessionData("profileName");

  if (!profileName) {
    return <Navigate to="/" />;
  }

  const onTextChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = () => {
    if (!message.trim()) {
      return;
    }

    dispatch({
      type: "ADD_MESSAGE",
      payload: {
        message,
        name: profileName,
      },
    });
    setMessage("");
    scrollToBottom();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <Box
      sx={{
        paddingTop: "105px",
        paddingBottom: "200px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          height: "max-content",
          borderBottom: "1px solid #C4C4C4",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 2,
        }}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            sx={{ width: 65, height: 65 }}
            alt="Remy Sharp"
            src="./nature.jpg"
          />
        </StyledBadge>
        <Typography
          sx={{
            ...theme.typography.heading,
            fontWeight: "700",
            ml: "15px",
          }}
        >
          {profileName}
        </Typography>
      </Paper>

      <Box
        component="div"
        className="customscroll"
        style={{
          paddingLeft: "16px",
          paddingRight: "16px",
          scrollbarWidth: "5px",
          overflowY: "scroll",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end !important",
            flexDirection: "column",
          }}
        >
          {state.map((item) => (
            <Message owner={profileName === item.name} chat={item} />
          ))}
        </Box>
      </Box>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "0 30px",
          borderTop: "1px solid #C4C4C4",
          height: "70px",
          maxHeight: "70px",
          alignSelf: "flex-end",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <InputBase
          onKeyDown={handleKeyDown}
          value={message}
          onChange={onTextChange}
          sx={{
            flex: 1,
            background: "#EAEAEA",
            borderRadius: "10px",
            border: "none",
            pl: "15px",
            mr: "15px",
            height: "50px",
          }}
          placeholder="Type your message"
        />

        <Avatar
          onClick={onSubmit}
          sx={{ bgcolor: theme.palette.primary.main, cursor: "pointer" }}
        >
          <SendIcon fontSize="small" />
        </Avatar>
      </Paper>
    </Box>
  );
}
