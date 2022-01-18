import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import reward from "../../static/images/Mint in progress.gif";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
  width: "480px",
});
const FLowrImage = styled("img")({});
const ProgresModal = ({
  progressCloseModal,
  openProgressModal,
}) => {
  return (
    <div>
      <BootstrapDialog
        onClose={progressCloseModal}
        aria-labelledby="customized-dialog-title"
        open={openProgressModal}
        fullWidth={true}
        maxWidth="sm"
      >
        <BootstrapDialogTitle
          onClose={progressCloseModal}
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
    </div>
  );
};

export default ProgresModal;
