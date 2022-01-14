import React from "react";
import SeedDaap from "../../static/images/image-112.jpg";
import Farm from "../../static/images/image-110.jpg";
import Marketplace from "../../static/images/image-111.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import reward from "../../static/images/imageedit_1_5731477485.png";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

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

const MinTitle = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `30px`,
  lineHeight: `38px`,
  textAlign: "center",
  textTransform: "uppercase",
  paddingBottom: "20px",
  color: `#FFFFFF`,
});
const LuckyImage = styled("img")({
  width: "300px",
});

const Cards = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
                    handleClickOpen={handleClickOpen}
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
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="sm"
      >
        <BootstrapDialogTitle
          onClose={handleClose}
          sx={{
            backgroundColor: "#10241b",
          }}
        />
        <DialogContent
          sx={{
            backgroundColor: "#10241b",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginY: "30px",
            }}
          >
            <LuckyImage src={reward} alt="" />
          </Box>
          <MinTitle>Mint In Progress...</MinTitle>
        </DialogContent>
      </BootstrapDialog>
    </Box>
  );
};

export default Cards;

const data = [
  {
    picture: SeedDaap,
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
    picture: Farm,
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
    picture: Marketplace,
    title: "Seed$ daily rewards",
    buttonText: "Mint Cloverport",
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

const Button = ({ color, title, handleClickOpen }) => {
  return (
    <a
      onClick={handleClickOpen}
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
