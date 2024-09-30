import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import Link from 'next/link';

const Aside = ({ image, blurImage, title, company, description, link, flip, width, height, marginTop }) => {
  return (
    <Card 
      sx={{ 
        display: 'flex', 
        flexDirection: flip ? 'row-reverse' : 'row', // Conditionally flip layout
        alignItems: 'center', 
        justifyContent: 'flex-start',
        boxShadow: 'none',
        border: 'none',
        marginTop: marginTop,
        position: 'relative', // Relative position for absolute children
        overflow: 'hidden' // Ensure nothing exceeds card boundaries
      }}
    >
      <Link href={link} passHref>
        <Box 
          component="a" // Make the entire Box clickable as a link
          sx={{ 
            position: 'relative', 
            width: width, // Use width from props
            height: height, // Use height from props
            '&:hover .blurImage': { // Target the blur image on hover
              opacity: 1, // Show blur image
              transform: "scale(1.25)",
            },
            '&:hover .mainImage': { // Target the main image on hover
              transform: "scale(1.04)", // Slight scale effect
            },
            textDecoration: 'none' // Remove underline from link
          }}
        >
          {/* Container for both images */}
          <Box 
            sx={{
              position: 'relative',
              width: width,
              height: height,
            }}
          >
            {/* Blur Image */}
            <CardMedia
              component="img"
              className="blurImage"
              sx={{ 
                position: 'absolute', // Make it absolutely positioned
                top: 0, // Align to the top
                left: 0, // Align to the left
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'blur(8px)', // Apply blur effect
                opacity: 0, // Initially hidden
                transition: 'opacity 0.3s ease-in-out', // Smooth transition for hover
                zIndex: 1 // Behind the main image
              }}
              image={blurImage}
              alt="Blurred Background"
            />

            {/* Main Image */}
            <CardMedia
              component="img"
              className="mainImage"
              sx={{ 
                position: 'absolute', // Same absolute positioning
                top: 0,
                left: 0,
                width: width, // Set width from props
                height: height, // Set height from props
                objectFit: 'cover', 
                transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out", // Smooth scale and fade
                zIndex: 2 // On top of blur image
              }}
              image={image}
              alt={title}
            />
          </Box>
        </Box>
      </Link>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px', textAlign: 'left' }}>
        <CardContent>
          <Typography variant="h3" component="div" sx={{ marginBottom: '15px', lineHeight: "45px", color: "#444" }}>
            {title}
          </Typography>
          <Typography variant="h4" component="div" sx={{ fontSize: "20px", marginBottom: '10px', color: "#666" }}>
            {company}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "16px", marginBottom: '12px', color: "#888" }}>
            {description}
          </Typography>

          <Link href={link} passHref>
            <Button 
              variant="contained"
              sx={{ 
                fontSize: "16px", 
                textTransform: 'none', 
                backgroundColor: "#002366", 
                borderRadius: "22px", 
                paddingX: "30px", 
                position: "relative",
                boxShadow: "none",
                transition: 'padding 0.3s ease', // Smooth padding transition
                '&:hover': {
                  backgroundColor: 'rgba(0, 35, 102, 0.7)', // Light grey background
                  color: '#fff',
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
                  paddingRight: '50px', // Increase padding to make space for arrow
                  '& .arrow': { 
                    opacity: 1, // Make arrow visible
                    transform: 'translateX(1px)', // Move the arrow to the right
                    transition: 'transform 0.3s ease-in-out', // Smooth transition for movement
                  },
                },
              }}
            >
              View Project
              <Box
                component="span"
                className="arrow"
                sx={{
                  opacity: 0, // Initially hidden
                  position: "absolute",
                  right: 16, // Position on the right side inside the button
                  display: "inline-block",
                  paddingRight: "10px",
                  transition: 'opacity 0.3s ease, transform 0.3s ease', // Smooth transition for appearance and movement
                }}
              >
                »
              </Box>
            </Button>
          </Link>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Aside;