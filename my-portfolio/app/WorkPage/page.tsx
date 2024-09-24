"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Work from "../components/Work/Work";
import { Typography, Box } from "@mui/material";
import React from "react";

// Create a custom theme with Apple system fonts
const theme = createTheme({
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

function MyApp({}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* Page Wrapper with max-width 1000px and centered content */}
      <Box
        sx={{
          maxWidth: "1000px", // Restrict the page to 1000px width
          margin: "0 auto", // Center the content horizontally
          padding: "20px", // Optional padding
        }}
      >

            <Typography
                variant="h2"
                sx={{ marginTop: "50px", fontWeight: "bold", textTransform: "none", color: "#444" }}
            >
                Work Experience
            </Typography>
            <Typography
                variant="h6"
                sx={{
                textTransform: "none",
                color: "#888",
                }}
            >
                Work experience made by Audrey throughout the years.
            </Typography>

          <Work
          image="/images/TSMFeature.png"
          title="Junior Developer"
          company="Two Small Men with Big Hearts"
          link="/project1"
          time="June 2023 - Present"
          skills={["Web development", "SEO", "Figma", "React", "Next.js"]}
          flip={false}
          width="570px"
          height="350px"
          marginTop= "80px"
          />

          <Work
          image="/images/bubbliFeature.png"
          title="Owner/Founder"
          company="bubbli"
          link="/project1"
          time="May 2022 - Present"
          skills={["Web development", "SEO", "Figma", "React", "Next.js", "Social Media Management"]}
          flip={true}
          width="570px"
          height="350px"
          marginTop="120px"
          />
          <Box>
            <Footer />
        </Box>
        </Box>
    </ThemeProvider>
  );
}

export default MyApp;