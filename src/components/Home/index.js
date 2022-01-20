import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Social from "../Social";
import Welcome from "./Welcome";
import Footer from "../Footer";
import Menu from "../Menu";

const Home = () => {
  return (
    <Box>
      <Menu />
      <Box>
        <Container maxWidth="xl">
          <Welcome />
          <Box
            sx={{
              marginTop: "20px",
              paddingBottom: "30px",
            }}
          >
            <Social />
          </Box>
        </Container>
        <Box
          sx={{
            paddingY: "40px",
          }}
        >
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
