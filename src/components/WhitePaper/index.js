import React from "react";
import Menu from "../Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import AnimLogo from "../../static/images/Anim.-Logo-Solo-Main-Image-Site-CS.gif";
const WhitePaper = () => {
  return (
    <div>
      <Menu title="Home" />
      <Container maxWidth="lg">
        <Box
          sx={{
            paddingY: "60px",
          }}
        >
          <Title className="gradienttext">Blockchain FARMERS</Title>
          <Subtitle>
            <span style={{ color: "#b9e7d6" }}>Welcome to</span> clover seed$
          </Subtitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AnimLogoImage src={AnimLogo} alt="" />
          </Box>
          <Paragraph>Water & harvest clovers to get rewards!</Paragraph>
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
  fontSize: `48px`,
  lineHeight: `56px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#b2d349`,
  marginBottom:"20px"
});
const AnimLogoImage = styled("img")({
    maxWidth:"200px",
    margin:"auto"
  });
  const Paragraph = styled("h1")({
  
    fontStyle: `normal`,
    fontWeight: `700`,
    fontSize: `28px`,
    lineHeight: `56px`,
    textAlign: "center",
    textTransform: "uppercase",
    color: `#b9e7d6`,
    marginBottom:"20px"
  });