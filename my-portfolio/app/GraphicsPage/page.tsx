"use client";
import Header from "../components/Header/Header";
import PictureGrid from "../components/Pictures/PictureGrid";
import { Typography, Box, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion"; // Import Framer Motion for animations

// Create a custom theme with Apple system fonts
const theme = createTheme({
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

// Animation variants for fading in and rising up
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function GraphicsPage() {
  const wuksaPictures = [
    {
      image: "/images/clubsWeek.png",
      alt: "24-25 Clubs Week Announcement",
      title: "Clubs Week Announcement",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/KDayTicket.png",
      alt: "Korea Day Ticket Prices",
      title: "Korea Day Tickets",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/KDay.png",
      alt: "Korea Day Announcement",
      title: "Korea Day Announcement",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/maskedSinger.png",
      alt: "Masked Singers Announcement",
      title: "Masked Singers Announcement",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/3v3Basketball.png",
      alt: "3V3 Basketball Tournament",
      title: "3V3 Basketball Tournament",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/lostLove.png",
      alt: "Lost Love Bar Night",
      title: "Lost Love Bar Night",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/fallRecruit.png",
      alt: "Fall Executive Recruitment",
      title: "Fall Executive Recruitment",
      type: "2023 / INSTAGRAM POST",
    },
    {
      image: "/images/froshTour.png",
      alt: "Frosh Tour",
      title: "Frosh Tour",
      type: "2023 / INSTAGRAM POST",
    },
    {
      image: "/images/springRecruit.png",
      alt: "Spring Executive Recruitment",
      title: "Spring Executive Recruitment",
      type: "2023 / INSTAGRAM POST",
    },
  ];

  const waiPictures = [
    {
      image: "/images/dataQuestFAQ.png",
      alt: "DataQuest FAQ",
      title: "DataQuest FAQ",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/dataQuestPartners.png",
      alt: "DataQuest Sponsors",
      title: "DataQuest Sponsors",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/ceepsWristbands.png",
      alt: "Ceeps Bar Night Wirstband",
      title: "Ceeps Bar Night Wirstbands",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/ceepsBarNight.png",
      alt: "Ceeps Bar Night",
      title: "Ceeps Bar Night",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/flagshipApplications.png",
      alt: "Flagship Director Applications",
      title: "Flagship Director Applications",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/headshots.png",
      alt: "AI Headshots",
      title: "AI Headshots",
      type: "2023 / INSTAGRAM POST",
    },
    {
      image: "/images/pabloInterview.png",
      alt: "Pablo Arredondo Interview",
      title: "Pablo Arredondo Interview",
      type: "2023 / INSTAGRAM POST",
    },
  ];

  const grcPictures = [
    {
      image: "/images/PLAnalystRecruit.png",
      alt: "PL & Analyst Recruitment",
      title: "PL & Analyst Recruitment",
      type: "2024 / INSTAGRAM POST",
    },
    {
      image: "/images/GRCAGM.png",
      alt: "GRC Annual General Meeting",
      title: "GRC Annual General Meeting",
      type: "2023 / INSTAGRAM POST",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box
        sx={{
          display: "flex",
          position: "relative", // Ensure content and sidebar are relative to the page
        }}
      >
        {/* Sticky Sidebar - Positioned outside the main content area */}
        <Box
          sx={{
            position: "fixed", // Sidebar remains fixed on the screen
            top: "50%",
            transform: "translateY(-50%)",
            left: "20px", // Positioned towards the left side of the screen
            padding: "20px",
            width: "200px",
            height: "fit-content",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link
              href="#wuksa"
              sx={{
                color: "#002366",
                fontWeight: "bold",
                textDecoration: "none",
                transition: "color 0.3s ease", // Smooth transition effect
                "&:hover": {
                  color: "#888", // Change color on hover
                  textDecoration: "underline", // Optional underline on hover
                },
              }}
            >
              WUKSA
            </Link>

            <Link
              href="#wai"
              sx={{
                color: "#002366",
                fontWeight: "bold",
                textDecoration: "none",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#888",
                  textDecoration: "underline",
                },
              }}
            >
              WAI
            </Link>

            <Link
              href="#grc"
              sx={{
                color: "#002366",
                fontWeight: "bold",
                textDecoration: "none",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#888",
                  textDecoration: "underline",
                },
              }}
            >
              GRC
            </Link>
          </Box>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: "1200px", // Max width for the content area
            margin: "0 auto", // Center the content horizontally
            padding: "20px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ marginTop: "50px", fontWeight: "bold", textTransform: "none", color: "#444" }}
          >
            Graphic Design Library
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textTransform: "none",
              color: "#888",
            }}
          >
            Designs made by Audrey throughout the years.
          </Typography>

          {/* WUKSA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant} // Use the animation variant
            viewport={{ once: true }} // Only animate once when in view
          >
            <Box id="wuksa">
              <Typography
                variant="h5"
                sx={{ color: "#444", marginTop: "60px", marginBottom: "30px", fontWeight: "bold" }}
              >
                Western University Korean Student Association
              </Typography>
              <PictureGrid pictures={wuksaPictures} />
            </Box>
          </motion.div>

          {/* WAI Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <Box id="wai">
              <Typography
                variant="h5"
                sx={{ color: "#444", marginTop: "100px", marginBottom: "30px", fontWeight: "bold" }}
              >
                Western Artificial Intelligence
              </Typography>
              <PictureGrid pictures={waiPictures} />
            </Box>
          </motion.div>

          {/* GRC Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariant}
            viewport={{ once: true }}
          >
            <Box id="grc">
              <Typography
                variant="h5"
                sx={{ color: "#444", marginTop: "100px", marginBottom: "30px", fontWeight: "bold" }}
              >
                Global Research & Consulting
              </Typography>
              <PictureGrid pictures={grcPictures} />
            </Box>
          </motion.div>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          width: "100%",
        }}
      >
        <Box sx={{ marginTop: "120px" }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}