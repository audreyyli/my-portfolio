import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import CustomButton from "/Users/audreyli/Documents/GitHub/my_portfolio/my-portfolio/app/MUI/Button.js"; // Import your custom button component

export default function Header() {
  const [hovered, setHovered] = useState(false); // State to manage hover effect

  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{ width: '1200px', margin: '0 auto', marginTop: "10px", backgroundColor: 'white', boxShadow: 'none' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left: Logo */}
        <Box
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }} // Ensure proper alignment of the logo
          onMouseEnter={() => setHovered(true)} // Trigger hover state
          onMouseLeave={() => setHovered(false)} // Remove hover state
        >
          <Link href="/" passHref>
            <Box
              component="img"
              src={hovered ? "/images/logoHover.png" : "/images/logo.png"} // Switch images based on hover state
              alt="Logo"
              sx={{ width: '60px', height: 'auto', cursor: 'pointer' }} // Adjust the width as needed
            />
          </Link>
        </Box>

        {/* Center: Navigation buttons using CustomButton */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexGrow: 2 }}>
          <Link href="/WorkPage" passHref>
            <CustomButton variantType="header" sx={{ textTransform: 'none' }}>Work</CustomButton>
          </Link>
          <Link href="/ProjectsPage" passHref>
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
            sx={{ 
              fontSize: "18px",
              textTransform: 'none', 
              backgroundColor: "#002366", 
              borderRadius: "22px", 
              paddingX: "20px", 
              boxShadow: "none",
              '&:hover': {
                backgroundColor: 'rgba(0, 35, 102, 0.7)',
                color: '#fff',
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
              },
            }} 
            href="https://www.linkedin.com/in/audreylii/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Let&apos;s Connect!
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}