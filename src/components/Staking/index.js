import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Menu from "../Menu";
import Footer from "../Footer";
import Header from "./Header";

const Staking = () => {
  return (
    <div>
      <Menu title="Home" />
      <Container maxWidth="xl">
        <Header />
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
