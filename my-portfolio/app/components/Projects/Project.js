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
        gap: '25px',
        justifyContent: 'left',
      }}
    >
      {/* Wrap the entire card with Link */}
      <Link href={link} passHref>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '470px',
            height: 'auto',
            backgroundColor: '#fff', // Lighter background like in the Graphics card
            borderRadius: '15px', // Rounded corners for the card itself
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Soft shadow effect
            padding: '0px',
            overflow: 'hidden', // Ensures the image doesn't overflow out of the card
            marginTop: "40px",
            cursor: 'pointer', // Makes it clear the entire card is clickable
            textDecoration: 'none',
            '&:hover': {
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)', // Slightly bigger shadow on hover
            },
          }}
        >
          {/* Project Image */}
          <CardMedia
            component="img"
            src={image}
            alt={title}
            sx={{
              width: '100%', // Take up the full width of the card
              height: '100%', // Take up the entire top part of the card
              objectFit: 'cover', // Cover the entire area
              marginBottom: '0px', // No margin
              borderRadius: '0px', // Remove the border radius for the image
            }}
          />

          <Box sx={{ width: '100%', textAlign: 'left', padding: '20px' }}>
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