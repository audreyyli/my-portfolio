"use client";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box, Typography, Card, CardMedia, Link } from '@mui/material';
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
          maxWidth: '1200px', // Adjust width as needed
          margin: '0 auto',
          padding: '40px',
          minHeight: '80vh', // Ensure the content takes enough space before footer
        }}
      >
        {/* Left: Image Section */}
        <Card
          sx={{
            width: '2800px', // Adjust image size as needed
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
            A Little Bit About Me...
          </Typography>

          <Typography variant="body1" sx={{ fontSize: "18px", marginTop: "20px", color: '#666', lineHeight: '1.6' }}>
            By day, I study Computer Science & Business Administration at the Univeristy of Western & Ivey School of Business. By night, I immerse myself in the world of design and technology, crafting thoughtful, user-centered solutions. 
            I&apos;m currently on the lookout for a Summer 2025 internship where I can collaborate with a passionate team and explore new ways to connect people through design.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "18px", color: '#666', lineHeight: '1.6', marginTop: "20px" }}>
            What I love about UX is its versatility — it&apos;s the story behind every great product and the reason things just make sense to users. From ideation to development, I love being part of the entire process.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "18px", color: '#666', lineHeight: '1.6', marginTop: "20px" }}>
          I believe great design happens at the intersection of empathy, creativity, and strategy. For me, it&apos;s about more than just pixels on a screen; it&apos;s about solving real problems and building products that make a difference.
          I&apos;m constantly learning and inspired by how design can shape the way we interact with the world, and I&apos;m eager to continue pushing the boundaries of what&apos;s possible.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex", // Use flexbox to align image and text side by side
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
          marginLeft: "50px",
          maxWidth: "1160px",
          margin: "0 auto",
          borderLeft: "4px solid #D9E6FF",
          backgroundColor: "rgba(217, 230, 255, 0.2)",
          paddingY: "20px",
        }}
      >
        {/* Left: Currently Text Section */}
        <Box
          sx={{
            flex: 1, // Take up available space
            paddingLeft: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "45px",
              color: "#444",
            }}
          >
            Currently...
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "28px",
              marginTop: "30px",
              color: "#888",
            }}
          >
            👩‍💻 developing a website at{' '}
            <Link href="https://www.twosmallmen.com" target="_blank" sx={{ color: "#002366", textDecoration: "underline", "&:hover": { textDecoration: "underline", color: 'rgba(0, 35, 102, 0.7)' } }}>
              Two Small Men
            </Link>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "28px",
              color: "#888",
            }}
          >
            💃 making silly reels at{' '}
            <Link href="https://www.instagram.com/western_ksa/" target="_blank" sx={{ color: "#002366", textDecoration: "underline", "&:hover": { textDecoration: "underline", color: 'rgba(0, 35, 102, 0.7)' } }}>
              WesternU KSA
            </Link>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "28px",
              color: "#888",
            }}
          >
            🍔 munching on good food and partying with friends
          </Typography>
        </Box>

        {/* Right: Me Image Section */}
        <Card
          sx={{
            width: '470px', // Adjust size of the image
            height: 'auto',
            overflow: 'hidden',
            backgroundColor: "transparent",
            boxShadow: "none",
            paddingRight: "10px",
          }}
        >
          <CardMedia
            component="img"
            image="/images/Me.png"
            alt="Audrey"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </Card>
      </Box>

      {/* Add the footer component */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          width: "100%",
          marginTop: "120px",
        }}
      >
        <Footer />
      </Box>
    </ThemeProvider>
  );
}