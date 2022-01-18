import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import AnimLogo from "../../static/images/Anim.-Logo-Solo-Main-Image-Site-CS.gif";
const Roadmap = () => {
  return (
    <div>
      <Box
        sx={{
          paddingY: "60px",
        }}
      >
        <Title className="gradienttext">Roadmap</Title>
      </Box>
    </div>
  );
};

export default Roadmap;

const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `40px`,
  lineHeight: `48px`,
  textAlign: "center",

});

const Paragraph = styled("h1")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `28px`,
  lineHeight: `56px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#b9e7d6`,
});
