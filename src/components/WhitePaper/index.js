import React from "react";
import Menu from "../Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";




const WhitePaper = () => {
  return (
    <div>
      <Menu title="Home" />
      <Container maxWidth="lg">
        <Box sx={{
            paddingY:"40px"
        }}>
          <Title className="gradienttext">Blockchain FARMERS</Title>
          <Subtitle>Welcome to clover seed$</Subtitle>
        </Box>
      </Container>
    </div>
  );
};

export default WhitePaper;



const Title = styled("h1")({
    fontFamily: `Maven Pro, sans-serif`,
    fontStyle: `normal`,
    fontWeight: `700`,
    fontSize: `72px`,
    lineHeight: `80px`,
    textAlign: "center",
    textTransform: "uppercase",
    color: `#FFFFFF`,
  });
  const Subtitle = styled("h1")({
    fontFamily: `Maven Pro, sans-serif`,
    fontStyle: `normal`,
    fontWeight: `700`,
    fontSize: `72px`,
    lineHeight: `80px`,
    textAlign: "center",
    textTransform: "uppercase",
    color: `#FFFFFF`,
  });