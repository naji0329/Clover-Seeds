import React from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& > firstChild": {
    marginLeft: "0",
  },
});
const Title = styled("span")({
  fontSize: "12px",
  fontWeight: "700",
  marginTop: "5px",
  color: "#C1D117",
});

const DigitContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  padding: "0",
});
const SingleDigit = styled("span")({
  position: "relative",
  display: "flex",
  flex: "0 1 25%",
  padding: "0",
  fontSize: "26px",
  fontWeight: "600",
  backgroundColor: "#10241B",
  border: "1px solid #C1D117",
  padding: "2px 4px",
   margin:"0px 4px",
  color: "white",
  minWidth:"35px",
  textAlign:"center",
  justifyContent:"center"

});

export default function Digit({ value, title }) {
  const leftDigit = value >= 10 ? value.toString()[0] : "0";
  const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
  return (
    <Container>
      <DigitContainer>
        <SingleDigit>{leftDigit}</SingleDigit>
        <SingleDigit>{rightDigit}</SingleDigit>
      </DigitContainer>
      <Title>{title}</Title>
    </Container>
  );
}
