import React from "react";
import SeedDaap from "../../static/images/sedddAPP.svg";
import Farm from "../../static/images/farm.svg";
import Marketplace from "../../static/images/marketplace.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "../Button";

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
const Welcome = () => {
  return (
    <Box
      sx={{
        paddingY: "40px",
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
                    paddingY: "40px",
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
                      marginBottom: "140px",
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
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Welcome;

const data = [
  {
    picture: SeedDaap,
    title: "mint",
    buttonText: "My NFT",
    url: "/my-nft",
    color: "#c1d117",
  },
  {
    picture: Farm,
    title: "stake & earn",
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
