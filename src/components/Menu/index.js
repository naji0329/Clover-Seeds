import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Logo from "../../static/images/Anim.-Logo-Header-_-Footer-CS(1).gif";
import WalletIcon from "../../static/images/Picto-wallet.svg";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
const Menu = ({ title }) => {
  console.log(title, "HomeTitle")
  return (
    <Box>
      <Box
        sx={{
          display: "none",
          "@media (max-width: 850px)": {
            display: "block",
          },
        }}
      >
        <MobileMenu />
      </Box>
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "block",
          "@media (max-width: 850px)": {
            display: "none",
          },
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
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </Box>
            {
              (title !== undefined && title !== null  ? (
                <Box
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                  }}
                >
                  <Link to="/">
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
                      {title}
                    </Box>
                  </Link>
                </Box>
              ) : null)
            }
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
                  marginTop:"15px"
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
                    CONNECT WALLET
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Menu;
