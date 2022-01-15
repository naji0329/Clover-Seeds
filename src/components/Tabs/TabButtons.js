import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
const TabButtons = ({ buttons, changeTab, activeTab }) => {
  console.log(activeTab == "STACK - 6", "activeTabactiveTab");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "50px",
      }}
    >
      <MainTitle>MY LAND</MainTitle>
      <Box>
        <Box sx={{ display: "flex" }}>
          {buttons.map((button) => {
            return (
              <button
                className={button === activeTab ? "active" : ""}
                onClick={() => changeTab(button)}
              >
                {button}
              </button>
            );
          })}
          {
            (activeTab == "STACK - 6" ? (
              <LandsButton title="SELECT ALL LANDS" />
            ) : (
              <LandsButton title="STAKE SELECTED NFT" />
            ))
          }
        </Box>
      </Box>
      <Box sx={{}}></Box>
    </Box>
  );
};

export default TabButtons;

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

const LandsButton = ({ title }) => {
  return (
    <Box
      sx={{
        marginLeft: "40px",
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
        {title}
      </a>
    </Box>
  );
};
