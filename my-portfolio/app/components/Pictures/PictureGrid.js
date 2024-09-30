// components/PictureGrid.js
import React from 'react';
import { Grid, Box, Typography, Card, CardMedia } from '@mui/material';

const PictureGrid = ({ pictures }) => {
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
      {pictures.map((pic, index) => (
        <Card
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '570px',
            height: 'auto',
            backgroundColor: '#F8F8F8',
            borderRadius: '25px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
          }}
        >
          <CardMedia
            component="img"
            src={pic.image}
            alt={pic.alt}
            sx={{
              width: 'calc(100% - 10px)',
              height: 'auto',
              marginBottom: '10px',
              borderRadius: '18px',
            }}
          />
          <Box sx={{ width: '100%', textAlign: 'left' }}>
            <Typography
              variant="h5"
              component="p"
              sx={{ fontWeight: 600, marginBottom: '5px', color: "#444" }}
            >
              {pic.title}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                fontStyle: 'italic',
                fontWeight: 500,
                color: '#888',
              }}
            >
              {pic.type}
            </Typography>
          </Box>
        </Card>
      ))}
    </Grid>
  );
};

export default PictureGrid;