import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import CustomButton from "/Users/audreyli/Documents/GitHub/my_portfolio/my-portfolio/app/MUI/Button.js"; // Import your custom button component

export default function Header() {
  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{ width: '1000px', margin: '0 auto', marginTop: "10px", backgroundColor: 'white', boxShadow: 'none' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left: Name */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textTransform: 'none' }} // Ensure text is not capitalized
        >
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Audrey Li
          </Link>
        </Typography>

        {/* Center: Navigation buttons using CustomButton */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexGrow: 2 }}>
          <Link href="/work" passHref>
            <CustomButton variantType="header" sx={{ textTransform: 'none' }}>Work</CustomButton>
          </Link>
          <Link href="/projects" passHref>
            <CustomButton variantType="header" sx={{ textTransform: 'none' }}>Projects</CustomButton>
          </Link>
          <Link href="/GraphicsPage" passHref>
            <CustomButton variantType="header" sx={{ textTransform: 'none' }}>Graphics</CustomButton>
          </Link>
          <Link href="/AboutMe" passHref>
            <CustomButton variantType="header" sx={{ textTransform: 'none' }}>About Me</CustomButton>
          </Link>
        </Box>

        {/* Right: "Let's Connect!" Button */}
        <Box sx={{ flexGrow: 1, textAlign: "right" }}>
        <Button 
            variant="contained" 
            sx={{ textTransform: 'none', backgroundColor: "#002366", borderRadius: "22px", paddingX: "20px", 
                '&:hover': {
                    backgroundColor: '#F8F8F8', // Light grey background
                    color: '#002366',
                },
             }} 
            href="https://www.linkedin.com/in/audreylii/" 
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // For security reasons when using target="_blank"
          >
            Let&apos;s Connect!
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}