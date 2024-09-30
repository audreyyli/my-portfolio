import React from 'react';
import { Grid, Box, Typography, Card, CardMedia, Chip } from '@mui/material';
import Link from 'next/link';

const Projects = ({ image, title, company, time, link, skills }) => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))',
        gap: '15px',
        justifyContent: 'left',
      }}
    >
      {/* Wrap the entire card with Link */}
      <Link href={link} passHref>
        <Card
          sx={{
            position: 'relative', // Enables absolute positioning for the image
            width: '565px',
            height: 'auto',
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            padding: '0px',
            overflow: 'hidden',
            marginTop: '10px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
            '&:hover': {
              transform: 'translateY(-5px)', // Move the card upwards without affecting layout
              boxShadow: '0 5px 20px rgba(0, 35, 102, 0.2)', // Add a subtle shadow on hover
              //border: "2px solid rgba(0, 35, 102, 0.7)", // Apply border on hover
            },
            '&:hover .project-image': {
              transform: 'scale(1.04)', // Scale image when the card is hovered
            },
          }}
        >
          {/* Project Image */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '300px', // Fixed height for the image container
              overflow: 'hidden', // Ensure the image doesn't overflow
            }}
          >
            <CardMedia
              component="img"
              className="project-image" // Add a class to the image
              src={image}
              alt={title}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: "transform 0.3s ease-in-out", // Apply scaling smoothly
                willChange: 'transform', // Improve performance during hover
              }}
            />
          </Box>

          {/* Content Box */}
          <Box 
            sx={{ 
              width: '100%', 
              textAlign: 'left', 
              padding: '20px', 
              position: 'relative', 
              zIndex: 2,
            }}
          >
            {/* Project Title */}
            <Typography
              variant="h5"
              component="p"
              sx={{ fontWeight: 600, marginBottom: '5px', color: "#444" }}
            >
              {title}
            </Typography>

            {/* Company Name */}
            <Typography
              variant="body2"
              component="p"
              sx={{
                fontStyle: 'italic',
                fontWeight: 500,
                color: '#888',
              }}
            >
              {company}
            </Typography>

            {/* Time Period */}
            <Typography
              variant="body2"
              sx={{ marginBottom: '12px', color: "#888" }}
            >
              {time}
            </Typography>

            {/* Skills Used */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    border: '1px solid rgba(0, 35, 102, 0.5)',
                    color: 'rgba(0, 35, 102, 0.7)',
                    fontWeight: 'bold',
                    backgroundColor: 'transparent',
                  }}
                />
              ))}
            </Box>
          </Box>
        </Card>
      </Link>
    </Grid>
  );
};

export default Projects;