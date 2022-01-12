import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Logo from "../../static/images/web-logo.svg";
import WalletIcon from "../../static/images/Picto-wallet.svg";
import "./styles.css";
import Social from "../Social";
import Welcome from "../Welcome";
import Footer from "../Footer";
const Header = () => {
  return (
    <Box className="wrapper">
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: " space-between",
              paddingY: "32px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "300px",
              }}
            >
              <img src={Logo} alt="" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignSelf: "center",
              }}
            >
              <Box
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  fontFamily: "Azonix",
                  paddingTop: "15px",
                  paddingBottom: "11px",
                  borderRadius: "4px",
                  paddingX: "20px",
                  width: "200px",
                  textAlign: "center",
                  border: `2px solid #00B951`,
                  cursor: "pointer",
                }}
              >
                HOME
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignSelf: "center",
                  backgroundColor: "#00AF5D",
                  paddingX: "20px",
                  paddingY: "10px",
                  borderRadius: "4px",
                  border: `2px solid #bcc722`,
                  boxShadow: `0px 0px 7px #bcc722`,
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    width: "30px",
                  }}
                >
                  <img src={WalletIcon} alt="" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                  }}
                >
                  <Box
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      textTransform: "uppercase",
                      fontFamily: "Azonix",
                      paddingTop: "8px",
                      paddingLeft: "15px",
                    }}
                  >
                    Join Discord
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="lg">
          <Welcome />
          <Box
            sx={{
              marginTop: "20px",
              paddingBottom: "30px",
            }}
          >
            <Social />
          </Box>
        </Container>
        <Box
          sx={{
            paddingY:"40px"
          }}
        >
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

const links = [
  {
    title: "EarnMoney",
  },
  {
    title: "RoadMap",
  },
  {
    title: "FAQ",
  },
];
