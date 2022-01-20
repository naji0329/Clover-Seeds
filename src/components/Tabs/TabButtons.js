import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Timer from "../../Timer";
const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "50px",
        "@media (max-width: 890px)": {
          flexDirection: "column",
          justifyContent: "center",
        },
      }}
    >
      <MainTitle>MY LAND</MainTitle>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            "@media (max-width: 1170px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              "@media (max-width: 1170px)": {
                maxWidth: "300px",
                marginX: "auto",
                marginBottom: "30px",
              },
            }}
          >
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
          </Box>
          {activeTab == `STAKE - 6` ? (
            <LandsButton title="SELECT ALL LANDS" />
          ) : (
            <LandsButton title="STAKE SELECTED NFT" />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          "@media (max-width: 890px)": {
            marginTop: "40px",
          },
        }}
      >
        <Timer />
      </Box>
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

  "@media (max-width: 960px)": {
    fontSize: `32px`,
    lineHeight: `40px`,
    paddingBottom: "30px",
  },
});

const LandsButton = ({ title }) => {
  return (
    <Box
      sx={{
        marginLeft: "40px",
        "@media (max-width: 560px)": {
          marginLeft: "0px",
          maxWidth: "250px",
          marginX: "auto",
        },
      }}
    >
      <Box
        sx={{
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
          "@media (max-width: 610px)": {
            fontSize: "16px",
            padding: "0px 15px",
          },
        }}
      >
        {title}
      </Box>
    </Box>
  );
};
