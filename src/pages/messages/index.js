import React, { useState } from 'react';
import { Grid, Paper, Avatar, Typography, useTheme, InputBase, Box, styled, Badge } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from 'react-redux';

import Message from './Message';


const StyledBadge = styled(Badge)(({ theme, active }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""'
        }
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0
        }
    }
}));

export default function MessagesScreen() {
    const dispatch = useDispatch()
    const theme = useTheme();
    const [message, setMessage] = useState("")

const onTextChange = (e) => {
    setMessage(e.target.value)
}

const onSubmit = () => {
dispatch({type: "ADD_MESSAGE", payload: {
    message, name: "kolade"
}})
}

    return (


            <Box sx={{minHeight: "100vh",  overflow: "hidden"}}>  
<Grid container >

              
<Grid xs={12} item>
    <Paper sx={{ minHeight: "100vh", maxHeight: '100%', display: "flex", flexDirection: "column",   position: "fixed",
                top: 0,
                width: "100%" }}>
        <Paper
            elevation={0}
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '20px',
                height: 'max-content',
                borderBottom: '1px solid #C4C4C4'
            }}
        >
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                <Avatar sx={{ width: 65, height: 65 }} alt="Remy Sharp" src="./LD Logo-adeyemi.png" />
            </StyledBadge>
            <Typography sx={{ ...theme.typography.heading, fontWeight: '700', ml: '15px' }}> Julius Iyela </Typography>
        </Paper>

        <Box
            component="div"
            className="customscroll"
            style={{
                paddingLeft: '16px',
                paddingRight: '16px',
                scrollbarWidth: '5px',
                marginBottom: "75px"
            
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end !important', flexDirection: 'column' }}>
              <Message />
                <Message />
                <Message />
                <Message owner />
                <Message owner />
                <Message />
                <Message owner /> 
            </Box>
        </Box>
        <Paper
            elevation={0}
            sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                padding: '0 30px',
               
                borderTop: '1px solid #C4C4C4',
                height: '70px',
                maxHeight: '70px',
                position: "fixed",
                bottom: 0,
                width: "100%"
            }}
        >
            <InputBase
            onChange={onTextChange}
                sx={{
                    flex: 1,
                    background: '#EAEAEA',
                    borderRadius: '10px',
                    border: 'none',
                    pl: '15px',
                    mr: '15px',
                    height: '50px',
                  
                }}
                placeholder="Type your message"
            />
            
            <Avatar onClick={onSubmit} sx={{ bgcolor: theme.palette.primary.main, cursor: "pointer" }}>
                <SendIcon fontSize="small" />
            </Avatar>
        </Paper>
    </Paper>
</Grid>

</Grid>

</Box>
       
    );
}
