"use client";
import React from 'react';
import { Box, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <Box 
      sx={{ 
        width: "100%", // Full width of the screen
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", // Text on the left, icons on the right
        padding: "20px", 
        marginTop: "40px", 
      }}
    >
      {/* Text */}
      <Typography variant="body1" sx={{ color: "#888" }}>
        Made with ❤️, by Audrey
      </Typography>

      {/* Social Media Links */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <IconButton
          href="https://www.linkedin.com/in/audreylii"
          target="_blank"
          sx={{
            "&:hover": {
              backgroundColor: "transparent", // No background on hover
              "& .MuiSvgIcon-root": {
                color: "#002366", // Change icon color on hover
              },
            },
          }}
        >
          <LinkedInIcon sx={{ color: "#888" }} />
        </IconButton>

        <IconButton
          href="https://github.com/audreyyli"
          target="_blank"
          sx={{
            "&:hover": {
              backgroundColor: "transparent", // No background on hover
              "& .MuiSvgIcon-root": {
                color: "#002366", // Change icon color on hover
              },
            },
          }}
        >
          <GitHubIcon sx={{ color: "#888" }} />
        </IconButton>

        <IconButton
          href="mailto:li.audrey04@gmail.com"
          sx={{
            "&:hover": {
              backgroundColor: "transparent", // No background on hover
              "& .MuiSvgIcon-root": {
                color: "#002366", // Change icon color on hover
              },
            },
          }}
        >
          <MailIcon sx={{ color: "#888" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;