import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
const Button = ({ title, backgroundColor, url }) => {
  return (
    <Box>
      <Link
        to={url}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          width: "100%",
          height:"55px",
          color: "#FFFFFF",
          backgroundColor: backgroundColor,
          borderRadius: "6px",
          fontSize: "28px",
          cursor: "pointer",
          textTransform: "uppercase",
          fontWeight: "700",
          fontFamily: `Maven Pro, sans-serif`,
          textDecoration: "none",
        }}
      >
        {title}
      </Link>
    </Box>
  );
};

export default Button;
