import React from "react";
import CLOVERFIELD from "../../static/images/GIF CLOVERFIELD.gif";
import CLOVERYARD from "../../static/images/GIF CLOVERYARD.gif";
import CLOVERPOT from "../../static/images/GIF CLOVERPOT.gif";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ProgresModal from "../Modals/ProgresModal";
import WinModal from "../Modals/WinModal";


const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `18px`,
  lineHeight: `24px`,
  textAlign: "center",
  textTransform: "uppercase",
  paddingBottom: "10px",
  color: `#FFFFFF`,
});

const Cards = () => {
  // Progress Modal Handlers
  const [openProgressModal, setOpen] = React.useState(false);
  const handleProgressModal = () => {
    setOpen(true);
  };
  const progressCloseModal = () => {
    setOpen(false);
    handleClickWinModal();
  };

  // WinModal Modal Handlers
  const [openWinModal, setopenWinModal] = React.useState(false);
  const handleClickWinModal = () => {
    setopenWinModal(true);
  };

  const handleCloseWinModal = () => {
    setopenWinModal(false);
  };

  return (
    <Box
      sx={{
        paddingY: "40px",
      }}
    >
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: "8px",
                  border: `3px solid ${item.color}`,
                  boxShadow: `0px 0px 16px ${item.color}`,
                  paddingTop: "20px",
                  paddingBottom: "14px",
                  paddingX: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "120px",
                    height: "120px",
                    marginX: "auto",
                    marginBottom: "20px",
                  }}
                >
                  <img src={item.picture} alt="" />
                </Box>
                <Box>
                  <Title>{item.title} </Title>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "40px",
                  }}
                >
                  <PercentageButton
                    color={item.color}
                    percent={item.percentA}
                  />
                  <PercentageButton
                    color={item.color}
                    percent={item.percentB}
                  />
                  <PercentageButton
                    color={item.color}
                    percent={item.percentC}
                  />
                  <PercentageButton
                    color={item.color}
                    percent={item.percentD}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    title={item.buttonText}
                    color={item.color}
                    handleProgressModal={handleProgressModal}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: `Maven Pro, sans-serif`,
                    fontStyle: `normal`,
                    fontWeight: `700`,
                    fontSize: `18px`,
                    lineHeight: `24px`,
                    textAlign: "center",
                    textTransform: "uppercase",
                    paddingTop: "20px",
                    color: `#FFFFFF`,
                  }}
                >
                  {item.price} SEED$
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <ProgresModal
        openProgressModal={openProgressModal}
        progressCloseModal={progressCloseModal}
      />
      <WinModal
        openWinModal={openWinModal}
        handleCloseWinModal={handleCloseWinModal}
      />
    </Box>
  );
};

export default Cards;

const data = [
  {
    picture: CLOVERFIELD,
    title: "Seed$ daily rewards",
    buttonText: "Mint Cloverfield",
    price: "10,000",
    color: "#c1d117",
    percentA: "4",
    percentB: "5",
    percentC: "6",
    percentD: "15",
  },
  {
    picture: CLOVERYARD,
    title: "Seed$ daily rewards",
    buttonText: "Mint Cloveryard",
    price: "1,000",
    color: "#00a65a",
    percentA: "2",
    percentB: "2.5",
    percentC: "3",
    percentD: "6",
  },
  {
    picture: CLOVERPOT,
    title: "Seed$ daily rewards",
    buttonText: "Mint CLOVERPOT",
    price: "100",
    color: "#3c6f66",
    percentA: "1",
    percentB: "1.5",
    percentC: "2",
    percentD: "4",
  },
];

const PercentageButton = ({ color, percent }) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        paddingX: "10px",
        paddingY: "4px",
        color: "#FFFFFF",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "5px",
        marginX: "4px",
      }}
    >
      {percent}%
    </Box>
  );
};

const Button = ({ color, title, handleProgressModal }) => {
  return (
    <a
      onClick={handleProgressModal}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "55px",
        color: color,
        border: `3px solid ${color}`,
        boxShadow: `0px 0px 18px ${color}`,
        borderRadius: "6px",
        fontSize: "20px",
        cursor: "pointer",
        textTransform: "uppercase",
        fontWeight: "700",
        fontFamily: `Maven Pro, sans-serif`,
        textDecoration: "none",
      }}
    >
      {title}
    </a>
  );
};
