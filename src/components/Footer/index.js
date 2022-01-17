import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `500`,
  fontSize: `13px`,
  lineHeight: `19px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#FFFFFF`,
});
const EnsureText = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `12px`,
  lineHeight: `22px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#FFFFFF`,
  "& > a": {
    color: `#B3E200`,
    paddingLeft: "5px",
  },
});
const Footer = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Title>
              ©2022 Copyright 
              <a
                href="https://clover-seeds.com/"
                target="_blank"
                style={{ color: "#fff" }}
              >
                 {" "}CLOVER SEEDS.FINANCIAL
              </a>{" "}
            </Title>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "-24px",
              "@media (max-width: 1140px)": {
                marginTop: "20px",
                justifyContent: "center",
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#0f231a",
                paddingTop: "5px",
                paddingBottom: "10px",
                paddingX: "20px",
                display: "flex",
                alignSelf: "center",
                borderRadius: "5px",
                "@media (max-width: 1140px)": {
                  paddingX: "10px",
                },
              }}
            >
              <EnsureText>
                Ensure you are at{" "}
                <a href="https://clover-seeds.com/" target="_blank">
                  https://app.clover-seeds.financial
                </a>
              </EnsureText>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
