import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import pancakeLogo from "../../static/images/PancakeSwap.svg";
import poocoin from "../../static/images/poocoin.svg";

const MainTitle = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `800`,
  fontSize: `48px`,
  lineHeight: `48px`,
  textTransform: "uppercase",
  color: `#FFFFFF`,
  paddingTop: "40px",
  "@media (max-width: 768px)": {
    fontSize: `32px`,
    lineHeight: `40px`,
    paddingBottom: "30px",
  },
});
const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `24px`,
  lineHeight: `32px`,
  textAlign: "center",
  textTransform: "uppercase",
  paddingBottom: "40px",
  color: `#FFFFFF`,
  "@media (max-width: 768px)": {
    fontSize: `18px`,
    lineHeight: `24px`,
  },
});
const Icon = styled("img")({
  width: "28px",
  height: "28px",
});
const ButtonText = styled("span")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `20px`,
  lineHeight: `28px`,
  textAlign: "center",
  textTransform: "capitalize",
  color: `#10241b;`,
  paddingLeft: "10px",
});
const Header = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <MainTitle>MY NFT</MainTitle>
        <Box
          sx={{
            paddingBottom: "30px",
            width: "100%",
          }}
        >
          <Title>BUY SEED$ ON</Title>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              "@media (max-width: 768px)": {
                flexDirection: "column",
                justifyContent: "center",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                "@media (max-width: 540px)": {
                  flexDirection: "column",
                  width: "100%",
                },
              }}
            >
              <Button title="Pancakeswap" icon={pancakeLogo} />
              <Box
                sx={{
                  fontFamily: `Maven Pro, sans-serif`,
                  fontStyle: `normal`,
                  fontWeight: `700`,
                  fontSize: `26px`,
                  lineHeight: `34px`,
                  textAlign: "center",
                  textTransform: "uppercase",
                  color: `#FFFFFF`,
                  paddingTop: "12px",
                  marginX: "20px",
                  "@media (max-width: 540px)": {
                    paddingBottom: "12px",
                  },
                }}
              >
                OR
              </Box>
              <Button title="Poocoin" icon={poocoin} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;

const Button = ({ title, icon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#b5d449",
        width: "260px",
        paddingY: "18px",
        borderRadius: "10px",
        cursor: "pointer",
        "@media (max-width: 540px)": {
          width: "100%",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignSelf: "center",
        }}
      >
        <Icon src={icon} alt="" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignSelf: "center",
        }}
      >
        <ButtonText>{title}</ButtonText>
      </Box>
    </Box>
  );
};
