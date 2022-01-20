import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Menu from "../Menu";
import Footer from "../Footer";
import Header from "./Header";
import Cards from "./Cards";
const Mint = () => {
  return (
    <div>
      <Menu title="Home"/>
      <Container maxWidth="xl">
        <Header />
        <Cards />
      </Container>
      <Box
        sx={{
          paddingTop: "140px",
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default Mint;
