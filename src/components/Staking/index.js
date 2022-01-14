import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Menu from "../Menu";
import Footer from "../Footer";
import Header from "./Header";
import Land from "./Land";
const Staking = () => {
  return (
    <div>
      <Menu title="Home" />
      <Container maxWidth="lg">
        <Header />
        <Land />
      </Container>
      <Box
        sx={{
          paddingY: "40px",
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default Staking;
