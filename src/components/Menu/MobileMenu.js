import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import WalletIcon from "../../static/images/Picto-wallet.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../static/images/web-logo.svg";
import { Link } from "react-router-dom";
const MobileMenu = () => {
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, backgroundColor: "#0d1f19", height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "200px",
          marginX: "auto",
          paddingY: "40px",
        }}
      >
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignSelf: "center",
          marginTop: "50px",
          marginBottom: "20px",
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
              width: "100%",
              marginX: "10px",
              textAlign: "center",
              border: `2px solid #00B951`,
              cursor: "pointer",
            }}
          >
            HOME
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignSelf: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignSelf: "center",
            backgroundColor: "#00AF5D",
            paddingX: "15px",
            paddingY: "15px",
            marginX: "10px",
            borderRadius: "4px",
            width: "100%",
            border: `2px solid #bcc722`,
            boxShadow: `0px 0px 7px #bcc722`,
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignSelf: "center",
              width: "25px",
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
                fontSize: "14px",
                textTransform: "uppercase",
                fontFamily: "Azonix",
                paddingTop: "8px",
                paddingLeft: "13px",
              }}
            >
              CONNECT WALLET
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <div>
        <React.Fragment>
          <Box
            sx={{
              display: "flex",
              justifyContent: " space-between",
              paddingY: "32px",
              paddingX: "15px",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "230px",
              }}
            >
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </Box>
            <Box
              onClick={toggleDrawer("left", true)}
              sx={{
                display: "flex",
                alignSelf: "center",
                cursor: "pointer",
              }}
            >
              <MenuIcon
                sx={{
                  width: "30px",
                  height: "30px",
                  color: "#FFFFFF",
                }}
              />
            </Box>
          </Box>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    </div>
  );
};

export default MobileMenu;
