import React from "react";
import Box from "@mui/material/Box";
import Telegram from "../../static/images/telegram.svg";
import Discord from "../../static/images/discord.svg";
import Twitter from "../../static/images/twitter.svg";
import Youtube from "../../static/images/youtube.svg";
import Github from "../../static/images/github.svg";
import Medium from "../../static/images/medium.svg";
import { styled } from "@mui/material/styles";

const SocialLogo = styled("img")({
  width: "36px",
  height: "36px",
  marginLeft: "10px",
  marginRight: "10px",
  cursor:"pointer"
});
const Social = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>
        <SocialLogo src={Telegram} alt="" />
        <SocialLogo src={Discord} alt="" />
        <SocialLogo src={Twitter} alt="" />
        <SocialLogo src={Youtube} alt="" />
        <SocialLogo src={Github} alt="" />
        <SocialLogo src={Medium} alt="" />
      </Box>
    </Box>
  );
};

export default Social;
