import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import SeedDaap from "../static/images/image-112.jpg";
const VipMint = () => {
  return (
    <div>
      <Menu />
      <Box
        sx={{
          backgroundColor: "transparent",
          borderRadius: "8px",
          border: `3px solid #c1d117`,
          boxShadow: `0px 0px 16px #c1d117`,
          paddingTop: "20px",
          paddingBottom: "14px",
          paddingX: "20px",
          maxWidth: "380px",
          marginX: "auto",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "120px",
            height: "120px",
            marginX: "auto",
            marginBottom: "20px",
          }}
        >
          <img src={SeedDaap} alt="" />
        </Box>
        <Box>
          <Title>Seed$ daily rewards </Title>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <PercentageButton percent="4" />
          <PercentageButton percent="5" />
          <PercentageButton percent="6" />
          <PercentageButton percent="15" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          {/* <Box>
            <input placeholder="1" type="number" className="input-number" />
          </Box> */}
          <Button title="VIP MINT" color="#c1d117" />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default VipMint;

const PercentageButton = ({ percent }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#c1d117",
        paddingX: "10px",
        paddingY: "4px",
        color: "#FFFFFF",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "5px",
        marginX: "4px",
      }}
    >
      {percent}%
    </Box>
  );
};

const Button = ({ color, title }) => {
  return (
    <a
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "55px",
        color: color,
        border: `3px solid ${color}`,
        boxShadow: `0px 0px 18px ${color}`,
        borderRadius: "6px",
        fontSize: "20px",
        cursor: "pointer",
        textTransform: "uppercase",
        fontWeight: "700",
        fontFamily: `Maven Pro, sans-serif`,
        textDecoration: "none",
      }}
    >
      {title}
    </a>
  );
};

const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `18px`,
  lineHeight: `24px`,
  textAlign: "center",
  textTransform: "uppercase",
  paddingBottom: "10px",
  color: `#FFFFFF`,
});
const Input = styled("input")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `18px`,
  lineHeight: `24px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#FFFFFF`,
  maxWidth: "100px",
  height: "50px",
});
