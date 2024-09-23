"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "/Users/audreyli/Documents/GitHub/my_portfolio/my-portfolio/app/components/Header/Header.js";
import Aside from "/Users/audreyli/Documents/GitHub/my_portfolio/my-portfolio/app/components/Projects/Aside.js";
import { Typography, Box, IconButton } from "@mui/material";
import React from "react";
import Footer from "/Users/audreyli/Documents/GitHub/my_portfolio/my-portfolio/app/components/Footer/Footer.js";

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
        <Box
          sx={{
            textAlign: "left",
            marginTop: "40px",
            padding: "20px 0",
          }}
        >
          {/* Introduction Text */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textTransform: "none", color: "#444" }}
          >
            👋 Hi there! I'm Audrey Li!
          </Typography>

          {/* Wrapping Simple and Bubbly in a Hoverable Container */}
          <Box
            sx={{
              display: "inline-block",
              position: "relative",
              "&:hover .bubble": {
                opacity: 1, // Show bubbles on hover
                animationPlayState: "running", // Start animation on hover
              },
            }}
          >
            {/* Bubble Elements */}
            <Box
              className="bubble"
              sx={{
                position: "absolute",
                bottom: "40px",
                left: "68%", // Positioned to the right
                width: "100px",
                height: "100px",
                background: "radial-gradient(circle at 30% 30%, rgba(115, 194, 251, 0.5), rgba(0, 35, 102, 0.3))", // Transparent gradient
                borderRadius: "50%",
                animation: "bubble1 3s infinite ease-in-out",
                animationPlayState: "paused", // Animation paused by default
                boxShadow:
                  "10px 10px 30px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.2)", // Softer 3D box shadow
                transform: "translateX(-50%)",
                opacity: 0, // Hidden by default
              }}
            />
            <Box
              className="bubble"
              sx={{
                position: "absolute",
                bottom: "-40px",
                left: "67%", // Positioned to the right
                width: "150px",
                height: "150px",
                background: "radial-gradient(circle at 30% 30%, rgba(21, 96, 189, 0.5), rgba(0, 35, 102, 0.3))", // Transparent gradient
                borderRadius: "50%",
                animation: "bubble2 4s infinite ease-in-out",
                animationPlayState: "paused", // Animation paused by default
                boxShadow:
                  "15px 15px 40px rgba(0, 0, 0, 0.15), -15px -15px 25px rgba(255, 255, 255, 0.2)", // Softer 3D box shadow
                transform: "translateX(-50%)",
                opacity: 0, // Hidden by default
              }}
            />
            <Box
              className="bubble"
              sx={{
                position: "absolute",
                bottom: "-20px",
                left: "80%", // Positioned to the right
                width: "120px",
                height: "120px",
                background: "radial-gradient(circle at 30% 30%, rgba(115, 194, 251, 0.5), rgba(15, 82, 186, 0.3))", // Transparent gradient
                borderRadius: "50%",
                animation: "bubble3 2.5s infinite ease-in-out",
                animationPlayState: "paused", // Animation paused by default
                boxShadow:
                  "12px 12px 35px rgba(0, 0, 0, 0.15), -12px -12px 20px rgba(255, 255, 255, 0.2)", // Softer 3D box shadow
                transform: "translateX(-50%)",
                opacity: 0, // Hidden by default
              }}
            />
            <Box
              className="bubble"
              sx={{
                position: "absolute",
                bottom: "-50px",
                left: "65%", // Positioned to the right
                width: "80px",
                height: "80px",
                background: "radial-gradient(circle at 30% 30%, rgba(21, 96, 189, 0.5), rgba(15, 82, 186, 0.3))", // Transparent gradient
                borderRadius: "50%",
                animation: "bubble4 3.5s infinite ease-in-out",
                animationPlayState: "paused", // Animation paused by default
                boxShadow:
                  "8px 8px 25px rgba(0, 0, 0, 0.15), -8px -8px 15px rgba(255, 255, 255, 0.2)", // Softer 3D box shadow
                transform: "translateX(-50%)",
                opacity: 0, // Hidden by default
              }}
            />
            {/* Two More Bubbles */}
            <Box
              className="bubble"
              sx={{
                position: "absolute",
                bottom: "-60px",
                left: "60%", // Positioned to the right
                width: "90px",
                height: "90px",
                background: "radial-gradient(circle at 30% 30%, rgba(115, 194, 251, 0.5), rgba(0, 35, 102, 0.3))", // Transparent gradient
                borderRadius: "50%",
                animation: "bubble5 3.8s infinite ease-in-out",
                animationPlayState: "paused", // Animation paused by default
                boxShadow:
                  "9px 9px 30px rgba(0, 0, 0, 0.15), -9px -9px 18px rgba(255, 255, 255, 0.2)", // Softer 3D box shadow
                transform: "translateX(-50%)",
                opacity: 0, // Hidden by default
              }}
            />
            <Box
              className="bubble"
              sx={{
                position: "absolute",
                bottom: "-70px",
                left: "62%", // Positioned to the right
                width: "110px",
                height: "110px",
                background: "radial-gradient(circle at 30% 30%, rgba(21, 96, 189, 0.5), rgba(15, 82, 186, 0.3))", // Transparent gradient
                borderRadius: "50%",
                animation: "bubble6 3.2s infinite ease-in-out",
                animationPlayState: "paused", // Animation paused by default
                boxShadow:
                  "10px 10px 35px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.2)", // Softer 3D box shadow
                transform: "translateX(-50%)",
                opacity: 0, // Hidden by default
              }}
            />

            {/* Main Text */}
            <Typography
              variant="h1"
              sx={{
                fontSize: "185px",
                fontWeight: "bold",
                textTransform: "none",
                color: "#444",
                display: "inline-block",
                marginRight: "10px",
              }}
            >
              Simple,
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: "185px",
                fontWeight: "bold",
                textTransform: "none",
                color: "#444",
                display: "inline-block",
              }}
            >
              Bubbly.
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontSize: "20px",
              textTransform: "none",
              color: "#666",
              marginTop: "20px",
            }}
          >
            That's my approach to design. I'm a product designer & developer
            with a deep passion for creating user-centered solutions that bridge
            aesthetics and functionality.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textTransform: "none",
              color: "#444",
              fontWeight: "bold",
              marginTop: "180px",
              textAlign: "center",
            }}
          >
            My Recent Works
          </Typography>

          <Aside
          image="/images/TSM.png"
          title="Simplifying Your Moving Quote Journey"
          company="Two Small Men with Big Hearts"
          description="As a Junior Developer, I designed, developed, and implemented a new quoting system that streamlined the estimation process. The solution delivered fast and accurate quotes, significantly simplifying the quoting experience for users."
          link="/project1"
          flip={false}
          width="620px"
          height="310px"
          marginTop= "80px"
          />

          <Aside
          image="/images/EpiPlan.png"
          title="A Companion for Dietary Restrictions"
          company=""
          description="Along with another designer, we designed EpiPlan, a mobile app to help individuals with dietary restrictions navigate food choices. Through user research, I identified key pain points and improved the app's functionality to address challenges like understanding food labels and finding suitable dining options."
          link="/project1"
          flip={true}
          width="450px"
          height="450px"
          marginTop="200px"
          />

          <Aside
          image="/images/WUKSA.png"
          title="Crafting a Bold New Identity"
          company="WesternU Korean Student Association"
          description="As the Head of Marketing, I initiated a redesign of the organization's brand aesthetic, ensuring a fresh and modern look that aligned with both the team's vision and our sponsors' expectations. This involved collaborating closely with stakeholders to create a cohesive brand identity that resonated across all platforms."
          link="/project1"
          flip={false}
          width="600px"
          height="300px"
          marginTop= "200px"
          />
        </Box>
        <Box>
          <Footer />
        </Box>

      </Box>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes bubble1 {
          0% {
            transform: translateY(0) translateX(0) scale(0);
          }
          50% {
            transform: translateY(-150px) translateX(20px) scale(0.8);
          }
          100% {
            transform: translateY(-300px) translateX(-20px) scale(0);
          }
        }

        @keyframes bubble2 {
          0% {
            transform: translateY(0) translateX(0) scale(0);
          }
          50% {
            transform: translateY(-120px) translateX(30px) scale(0.9);
          }
           100% {
            transform: translateY(-300px) translateX(-30px) scale(0);
          }
        }

        @keyframes bubble3 {
          0% {
            transform: translateY(0) translateX(0) scale(0);
          }
          50% {
            transform: translateY(-200px) translateX(-20px) scale(0.9);
          }
          100% {
            transform: translateY(-300px) translateX(-40px) scale(0);
          }
        }

        @keyframes bubble4 {
          0% {
            transform: translateY(0) translateX(0) scale(0);
          }
          50% {
            transform: translateY(-180px) translateX(40px) scale(0.9);
          }
          100% {
            transform: translateY(-280px) translateX(-40px) scale(0);
          }
        }

        @keyframes bubble5 {
          0% {
            transform: translateY(0) translateX(0) scale(0);
          }
          50% {
            transform: translateY(-100px) translateX(50px) scale(0.9);
          }
          100% {
            transform: translateY(-300px) translateX(-50px) scale(0);
          }
        }

        @keyframes bubble6 {
          0% {
            transform: translateY(0) translateX(0) scale(0);
          }
          50% {
            transform: translateY(-130px) translateX(60px) scale(0.9);
          }
          100% {
            transform: translateY(-300px) translateX(-60px) scale(0);
          }
        }
      `}</style>
    </ThemeProvider>
  );
}

export default MyApp;