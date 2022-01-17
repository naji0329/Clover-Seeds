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
  cursor: "pointer",
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
        {socialLinks.map((item, index) => {
          return (
            <a href={item.url} target="_blank" key={index}>
              <SocialLogo src={item.icon} alt="" />
            </a>
          );
        })}
      </Box>
    </Box>
  );
};

export default Social;

const socialLinks = [
  {
    icon: Telegram,
    url: "https://t.me/CloverSeedsOfficial",
  },
  {
    icon: Discord,
    url: "https://discord.gg/cloverseedsbsc",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/CloverSeedsBSC",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/channel/UCwEynYNCIe69WSMj0qimPgg",
  },
  {
    icon: Github,
    url: "https://clover-seed.gitbook.io/informations/",
  },
  {
    icon: Medium,
    url: "https://clover-seeds.medium.com/",
  },
];
