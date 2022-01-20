import React from "react";
import SeedDaap from "../../static/images/sedddAPP.svg";
import Farm from "../../static/images/farm.svg";
import Marketplace from "../../static/images/marketplace.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "../Button";
import { Link } from "react-router-dom";
const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `48px`,
  lineHeight: `56px`,
  textAlign: "center",
  textTransform: "uppercase",
  paddingBottom: "40px",
  color: `#FFFFFF`,
  "& > span": {
    color: `#B3E200`,
  },
  "@media (max-width: 768px)": {
    fontSize: `32px`,
    lineHeight: `40px`,
  },
});
const TipText = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `18px`,
  lineHeight: `24px`,
  textAlign: "center",
  textTransform: "uppercase",
  paddingTop: "15px",
});
const WhitePaperBtn = styled("a")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `22px`,
  lineHeight: `26px`,
  textAlign: "center",
  textTransform: "uppercase",
  border: "2px solid #00a65a",
  color: `#FFFFFF`,
  backgroundColor: "transparent",
  padding: "12px 40px",
  display: "block",
  borderRadius: "8px",
  cursor: "pointer",
});
const Welcome = () => {
  return (
    <Box
      sx={{
        paddingTop: "40px",
        paddingBottom: "70px",
        paddingX:"30px"
      }}
    >
      <Title>
        Welcome to <span>CLOVER SEED$</span>
      </Title>
      <Box>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
          {data.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: "transparent",
                    borderRadius: "8px",
                    border: `3px solid ${item.color}`,
                    boxShadow: `0px 0px 16px ${item.color}`,
                    paddingTop: "90px",
                    paddingBottom: "30px",
                    paddingX: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      maxWidth: "120px",
                      height: "120px",
                      marginX: "auto",
                      marginBottom: "100px",
                      "@media (max-width: 600px)": {
                        marginBottom: "60px",
                      },
                    }}
                  >
                    <img src={item.picture} alt="" />
                  </Box>
                  <Box>
                    <Button
                      title={item.buttonText}
                      backgroundColor={item.color}
                      url={item.url}
                    />
                    <TipText
                      sx={{
                        color: item.color,
                        height: "20px",
                      }}
                    >
                      {item.title}
                    </TipText>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <Link to="/whitepaper">
            <WhitePaperBtn>WHITEPAPER</WhitePaperBtn>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;

const data = [
  {
    picture: SeedDaap,
    title: "(mint)",
    buttonText: "My NFT",
    url: "/my-nft",
    color: "#c1d117",
  },
  {
    picture: Farm,
    title: "(stake & earn)",
    buttonText: "My LAND",
    url: "/my-land",
    color: "#00a65a",
  },
  {
    picture: Marketplace,
    title: "",
    buttonText: "Marketplace",
    url: "/marketplace",
    color: "#3c6f66",
  },
];
