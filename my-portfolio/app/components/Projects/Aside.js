import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import Link from 'next/link';

const Aside = ({ image, title, company, description, link, flip, width, height, marginTop }) => {
  return (
    <Card 
      sx={{ 
        display: 'flex', 
        flexDirection: flip ? 'row-reverse' : 'row', // Conditionally flip layout
        alignItems: 'center', 
        justifyContent: 'flex-start',
        boxShadow: 'none',
        border: 'none',
        marginTop: marginTop
      }}
    >
      <CardMedia
        component="img"
        sx={{ 
          width: width, 
          height: height, 
          objectFit: 'cover', 
          margin: '0 auto'
        }}
        image={image}
        alt={title}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px', textAlign: 'left' }}>
        <CardContent>
          <Typography variant="h4" component="div" sx={{ marginBottom: '8px', lineHeight: "30px", color: "#444" }}>
            {title}
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginBottom: '8px', color: "#666" }}>
            {company}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '12px', color: "#888" }}>
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
                transition: 'padding 0.3s ease', // Smooth padding transition
                '&:hover': {
                  backgroundColor: '#F8F8F8', // Light grey background
                  color: '#002366',
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