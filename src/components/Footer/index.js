import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Logo from "../../static/images/Anim.-Logo-Header-_-Footer-CS(1).gif";
import Grid from "@mui/material/Grid";
const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `500`,
  fontSize: `13px`,
  lineHeight: `19px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#FFFFFF`,
  display: "block",
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
    <Box sx={{
      position:"absolute",
      left:"0",
      right:"0",
      bottom:"20px"
    }}>
      <Container maxWidth="xl">
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "200px",
              }}
            >
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "30px",
                }}
              >
                <Title>
                  ©2022 Copyright
                  <a
                    href="https://clover-seeds.com/"
                    target="_blank"
                    style={{ color: "#fff" }}
                  >
                    {" "}
                    CLOVER SEEDS.COM
                  </a>{" "}
                </Title>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
                marginTop: "20px",
                "@media (max-width: 1140px)": {
                  marginTop: "20px",
                },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#0f231a",
                  paddingTop: "8px",
                  paddingBottom: "10px",
                  paddingX: "20px",

                  borderRadius: "5px",
                  "@media (max-width: 1140px)": {
                    paddingX: "10px",
                  },
                }}
              >
                <EnsureText>
                  Ensure you are at{" "}
                  <a href="https://clover-seeds.com/" target="_blank">
                    https://app.clover-seeds.com
                  </a>
                </EnsureText>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
