"use client";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box, Typography, Card, CardMedia } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

export default function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Add the header component */}
      <Header />
      
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1000px', // Adjust width as needed
          margin: '0 auto',
          padding: '40px',
          minHeight: '80vh', // Ensure the content takes enough space before footer
        }}
      >
        {/* Left: Image Section */}
        <Card
          sx={{
            width: '2000px', // Adjust image size as needed
            height: 'auto',
            boxShadow: 'none', // Remove card shadow
            borderRadius: '16px', // Rounded corners for the image
            overflow: 'hidden',
            marginRight: '40px', // Space between the image and text
          }}
        >
          <CardMedia
            component="img"
            image="/images/Headshot.png" // Path to your headshot
            alt="Audrey's Headshot"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </Card>

        {/* Right: Text Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#444', marginBottom: '16px' }}>
            A Little Bit About Me
          </Typography>

          <Typography variant="body1" sx={{ color: '#666', lineHeight: '1.6' }}>
            By day, I study Computer Science & Business Administration at the Univeristy of Western & Ivey School of Business. By night, I immerse myself in the world of design and technology, crafting thoughtful, user-centered solutions. 
            I'm currently on the lookout for a Summer 2025 internship where I can collaborate with a passionate team and explore new ways to connect people through design.
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', lineHeight: '1.6', marginTop: "20px" }}>
            What I love about UX is its versatility — it's the story behind every great product and the reason things just make sense to users. From ideation to development, I love being part of the entire process.
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', lineHeight: '1.6', marginTop: "20px" }}>
          I believe great design happens at the intersection of empathy, creativity, and strategy. For me, it’s about more than just pixels on a screen; it’s about solving real problems and building products that make a difference.
          I’m constantly learning and inspired by how design can shape the way we interact with the world, and I’m eager to continue pushing the boundaries of what’s possible.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: "20px",
          marginLeft: "50px",
          maxWidth: "1000px",
          margin: "0 auto",
          borderLeft: "4px solid #D9E6FF",
          backgroundColor: "rgba(217, 230, 255, 0.2)",
          paddingY: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "25px",
            paddingLeft: "20px",
            color: "#888",
          }}
        >
          Currently...
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "20px",
            paddingLeft: "20px",
            color: "#666",
          }}
        >
          developing a website @ Two Small Men
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "20px",
            paddingLeft: "20px",
            color: "#666",
          }}
        >
          making silly reels @ WesternU KSA
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "20px",
            paddingLeft: "20px",
            color: "#666",
          }}
        >
          munching on good food and partying with friends
        </Typography>
      </Box>

      {/* Add the footer component */}
      <Box
        sx={{
          maxWidth: "1000px",
          margin: "auto",
          width: "100%",
        }}
      >
        <Footer />
      </Box>
    </ThemeProvider>
  );
}