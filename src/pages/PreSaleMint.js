import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import SeedDaap from "../static/images/image-112.jpg";
const PreSaleMint = () => {
  const [nftVal, setNftVal] = useState(1);
  const nftValueHandler = (id) => {
    setNftVal(id)
  }
  return (
    <div>
      <Menu />
      <Box>
        <Box
          sx={{
            fontFamily: `Maven Pro, sans-serif`,
            fontStyle: `normal`,
            fontWeight: `700`,
            fontSize: `40px`,
            lineHeight: `24px`,
            textAlign: "center",
            textTransform: "uppercase",
            marginTop: "60px",
            paddingBottom: "60px",
            color: `#B9D43B`,
          }}
        >
          PRESALE <span style={{ color: "#FFFFFF" }}>MINT</span>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "transparent",
          borderRadius: "8px",
          border: `3px solid #00a65a`,
          boxShadow: `0px 0px 16px #00a65a`,
          paddingTop: "20px",
          paddingBottom: "14px",
          paddingX: "20px",
          maxWidth: "380px",
          marginX: "auto",
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
          <PercentageButton percent="2" />
          <PercentageButton percent="2.5" />
          <PercentageButton percent="3" />
          <PercentageButton percent="6" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignSelf: "center",
              marginRight:"10px"
            }}
          >
            {nftbtn.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    fontSize: "20px",
                    color: nftVal === item.btnId ? "#FFFFFF" : "#6D9D89",
                    fontWeight: "600",
                    paddingY: "12px",
                    paddingX: "14px",
                    marginX: "3px",
                    borderRadius:"4px",
                    backgroundColor: nftVal === item.btnId ? "#35A760" : "#023B17",
                    cursor:"pointer"
                  }}
                  onClick={() => nftValueHandler(item.btnId)}
                >
                  {item.btnId}
                </Box>
              );
            })}
          </Box>
          <Button title="MINT CLOVERYARD" color="#00a65a" />
        </Box>
        <Box>
          <Title
            sx={{
              textTransform: "none",
            }}
          >
            Whitelist Offer: {nftVal * 0.15} BNB / Mint{" "}
          </Title>
        </Box>
      </Box>
      <Box
        sx={{
          paddingTop: "80px",
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default PreSaleMint;

const PercentageButton = ({ percent }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#00a65a",
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

const nftbtn = [
  {
    btnId: 1,
  },
  {
    btnId: 2,
  },
];
