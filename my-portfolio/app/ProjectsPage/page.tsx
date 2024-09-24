"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Project"
import { Typography, Box, Grid } from "@mui/material";
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
                Project Library
            </Typography>
            <Typography
                variant="h6"
                sx={{
                textTransform: "none",
                color: "#888",
                }}
            >
                All projects made by Audrey throughout the years.
            </Typography>

            {/* Grid Layout for Projects */}
            <Grid container spacing={3} sx={{ marginTop: "30px" }}>
              {/* Project 1 */}
              <Grid item xs={12} sm={6} md={6}>
                <Projects
                  image="/images/TSMHeader.png"
                  title="Junior Developer"
                  company="Two Small Men with Big Hearts"
                  link="/project1"
                  time="June 2023 - Present"
                  skills={["Web development", "SEO", "Figma", "React", "Next.js"]}
                />
              </Grid>

              {/* Project 2 */}
              <Grid item xs={12} sm={6} md={6}>
                <Projects
                  image="/images/EpiPlanHeader.png"
                  title="Owner/Founder"
                  company="bubbli"
                  link="/project1"
                  time="May 2022 - Present"
                  skills={["Web development", "SEO", "Figma", "React", "Next.js"]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Projects
                  image="/images/WUKSAHeader.png"
                  title="Owner/Founder"
                  company="bubbli"
                  link="/project1"
                  time="May 2022 - Present"
                  skills={["Web development", "SEO", "Figma", "React", "Next.js"]}
                />
              </Grid>
            </Grid>
            
            {/* Footer */}
            <Box>
              <Footer />
            </Box>
        </Box>
    </ThemeProvider>
  );
}

export default MyApp;