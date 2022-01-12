import React from "react";
import Box from "@mui/material/Box";
const Button = ({ title, backgroundColor }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          color:"#FFFFFF",
          backgroundColor: backgroundColor,
          borderRadius: "6px",
          paddingY: "16px",
          fontSize: "28px",
          cursor:"pointer",
          textTransform: "uppercase",
          fontWeight: "800",
          fontFamily: `Maven Pro, sans-serif`,
        }}
      >
        <a>{title}</a>
      </Box>
    </Box>
  );
};

export default Button;
