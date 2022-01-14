import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
const MainTitle = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `800`,
  fontSize: `48px`,
  lineHeight: `48px`,
  textTransform: "uppercase",
  color: `#FFFFFF`,

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

  color: `#FFFFFF`,
  "@media (max-width: 768px)": {
    fontSize: `18px`,
    lineHeight: `24px`,
  },
});
const Header = () => {
  return (
    <Box
      sx={{
        paddingY: "40px",
      }}
    >
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={12} sm={3} md={4}>
          <MainTitle>MY LAND</MainTitle>
        </Grid>
        <Grid item xs={12} sm={9} md={8}>
          <Box
            sx={{
              display: "flex",
              "@media (max-width: 520px)": {
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignSelf: "center",
                "@media (max-width: 520px)": {
                  marginBottom: "30px",
                },
              }}
            >
              <Title
                sx={{
                  borderRight: "3px solid #FFFFFF",
                  paddingRight: "20px",
                }}
              >
                STAKE - 6
              </Title>
              <Title
                sx={{
                  paddingLeft: "20px",
                }}
              >
                UNSTAKE - 0
              </Title>
            </Box>
            <Box
              sx={{
                marginLeft: "20px",
                "@media (max-width: 520px)": {
                  marginLeft: "0px",
                },
              }}
            >
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",

                  textAlign: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "55px",
                  color: "#0d1f19",
                  backgroundColor: "#c1d117",
                  border: `3px solid #c1d117`,
                  boxShadow: `0px 0px 18px #c1d117`,
                  borderRadius: "6px",
                  fontSize: "18px",
                  cursor: "pointer",
                  padding: "0px 20px",  
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontFamily: `Maven Pro, sans-serif`,
                  textDecoration: "none",
                }}
              >
                SELECT ALL LANDS
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
