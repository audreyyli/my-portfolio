"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "/Users/audreyli/Documents/GitHub/my_portfolio/my-portfolio/app/components/Header/Header.js";
import Aside from "/Users/audreyli/Documents/GitHub/my_portfolio/my-portfolio/app/components/Projects/Aside.js";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Footer from "/Users/audreyli/Documents/GitHub/my_portfolio/my-portfolio/app/components/Footer/Footer.js";

// Create a custom theme with Apple system fonts
const theme = createTheme({
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function MyApp({}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {/* Main section to take full viewport height */}
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start-left",
            textAlign: "start-left",
            marginTop: "-55px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textTransform: "none", color: "#444" }}
          >
            👋 Hi there! I&apos;m Audrey Li!
          </Typography>

          <Box
            sx={{
              display: "inline-block",
              position: "relative",
              "&:hover .bubble": {
                opacity: 1,
                animationPlayState: "running",
              },
            }}
          >
            <Box
              className="bubble"
              sx={{
                position: "absolute",
                bottom: "80px",
                left: "50%",
                width: "100px",
                height: "100px",
                background:
                  "radial-gradient(circle at 30% 30%, rgba(115, 194, 251, 0.5), rgba(0, 35, 102, 0.3))",
                borderRadius: "50%",
                animation: "bubble1 3s infinite ease-in-out",
                animationPlayState: "paused",
                boxShadow:
                  "10px 10px 30px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.2)",
                transform: "translateX(-50%)",
                opacity: 0,
              }}
            />
            <Box
              className="bubble"
              sx={{
                position: "absolute",
                bottom: "0px",
                left: "57%",
                width: "150px",
                height: "150px",
                background: "radial-gradient(circle at 30% 30%, rgba(21, 96, 189, 0.5), rgba(0, 35, 102, 0.3))",
                borderRadius: "50%",
                animation: "bubble2 4s infinite ease-in-out",
                animationPlayState: "paused",
                boxShadow:
                  "15px 15px 40px rgba(0, 0, 0, 0.15), -15px -15px 25px rgba(255, 255, 255, 0.2)",
                transform: "translateX(-50%)",
                opacity: 0,
              }}
            />
            <Box
              className="bubble"
              sx={{
                position: "absolute",
                bottom: "20px",
                left: "65%",
                width: "120px",
                height: "120px",
                background: "radial-gradient(circle at 30% 30%, rgba(115, 194, 251, 0.5), rgba(15, 82, 186, 0.3))",
                borderRadius: "50%",
                animation: "bubble3 2.5s infinite ease-in-out",
                animationPlayState: "paused",
                boxShadow:
                  "12px 12px 35px rgba(0, 0, 0, 0.15), -12px -12px 20px rgba(255, 255, 255, 0.2)",
                transform: "translateX(-50%)",
                opacity: 0,
              }}
            />
            <Box
              className="bubble"
              sx={{
                position: "absolute",
                bottom: "-10px",
                left: "55%",
                width: "80px",
                height: "80px",
                background: "radial-gradient(circle at 30% 30%, rgba(21, 96, 189, 0.5), rgba(15, 82, 186, 0.3))",
                borderRadius: "50%",
                animation: "bubble4 3.5s infinite ease-in-out",
                animationPlayState: "paused",
                boxShadow:
                  "8px 8px 25px rgba(0, 0, 0, 0.15), -8px -8px 15px rgba(255, 255, 255, 0.2)",
                transform: "translateX(-50%)",
                opacity: 0,
              }}
            />
            <Box
              className="bubble"
              sx={{
                position: "absolute",
                bottom: "-20px",
                left: "50%",
                width: "90px",
                height: "90px",
                background: "radial-gradient(circle at 30% 30%, rgba(115, 194, 251, 0.5), rgba(0, 35, 102, 0.3))",
                borderRadius: "50%",
                animation: "bubble5 3.8s infinite ease-in-out",
                animationPlayState: "paused",
                boxShadow:
                  "9px 9px 30px rgba(0, 0, 0, 0.15), -9px -9px 18px rgba(255, 255, 255, 0.2)",
                transform: "translateX(-50%)",
                opacity: 0,
              }}
            />
            <Box
              className="bubble"
              sx={{
                position: "absolute",
                bottom: "-30px",
                left: "52%",
                width: "110px",
                height: "110px",
                background: "radial-gradient(circle at 30% 30%, rgba(21, 96, 189, 0.5), rgba(15, 82, 186, 0.3))",
                borderRadius: "50%",
                animation: "bubble6 3.2s infinite ease-in-out",
                animationPlayState: "paused",
                boxShadow:
                  "10px 10px 35px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.2)",
                transform: "translateX(-50%)",
                opacity: 0,
              }}
            />

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
              That&apos;s my approach to design. I&apos;m a product designer & developer
              with a deep passion for creating user-centered solutions that bridge
              aesthetics and functionality.
            </Typography>
          </Box>

          {/* Other content */}
          <Typography
            variant="h4"
            sx={{
              textTransform: "none",
              color: "#444",
              fontWeight: "bold",
              marginTop: "100px",
              textAlign: "center",
            }}
          >
            My Recent Works
          </Typography>

          {/* Use motion divs for your projects */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <Aside
              image="/images/TSM.png"
              blurImage="/images/TSMBlur.png"
              title="Simplifying Your Moving Quote Journey"
              company="Two Small Men with Big Hearts"
              description="A streamlined quoting system enhancing estimation accuracy and user experience for scalable efficiency."
              link="/Construction"
              flip={false}
              width="700px"
              height="700px"
              marginTop="80px"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <Aside
              image="/images/EpiPlan.png"
              blurImage="/images/epiPlanBlur.png"
              title="A Companion for Dietary Restrictions"
              company="EpiPlan"
              description="A mobile app empowering individuals with dietary restrictions to easily navigate food choices and find suitable options through intuitive, research-driven solutions."
              link="/Construction"
              flip={true}
              width="700px"
              height="700px"
              marginTop="100px"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <Aside
              image="/images/WUKSA.png"
              blurImage="/images/wuksaBlur.png"
              title="Crafting a Bold New Identity"
              company="WesternU Korean Student Association"
              description="Re-envisioning WUKSA's brand to bring a fresh, modern identity across all platforms."
              link="/Construction"
              flip={false}
              width="550px"
              height="550px"
              marginTop="100px"
            />
          </motion.div>
          <Box sx={{ marginTop: "120px",}}>
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