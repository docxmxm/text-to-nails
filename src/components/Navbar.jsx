import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
          <EmojiNatureIcon sx={{ display: { xs: 'block', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'block', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.2rem',
              color: 'inherit',
              fontSize:'1rem',
              textDecoration: 'none',
            }}
          >
           Text To Nails
          </Typography>

       
        {/* <Pets sx={{ display: { xs: "block", sm: "none" } }} /> */}
      </StyledToolbar>
   
    </AppBar>
  );
};

export default Navbar;
