import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SeedDaap from "../../static/images/image-112.jpg";
import winy from "../../static/images/win.png";
import flwr from "../../static/images/flwr.png";
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

const FLowrImage = styled("img")({});
const WinModal = ({ openWinModal, handleCloseWinModal }) => {
  return (
    <div>
      <BootstrapDialog
        onClose={handleCloseWinModal}
        aria-labelledby="customized-dialog-title"
        open={openWinModal}
        fullWidth={true}
        maxWidth="sm"
      >
        <BootstrapDialogTitle
          onClose={handleCloseWinModal}
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
              marginTop: "30px",
              marginBottom: "40px",
            }}
          >
            <FLowrImage
              src={SeedDaap}
              alt=""
              sx={{
                maxWidth: "280px",
                borderRadius: "8px",
                border: `3px solid #c1d117`,
                boxShadow: `0px 0px 16px #c1d117`,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginY: "30px",
            }}
          >
            <FLowrImage
              src={winy}
              alt=""
              sx={{
                maxWidth: "350px",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "60px",
              left: "70px",
            }}
          >
            <FLowrImage
              src={flwr}
              alt=""
              sx={{
                maxWidth: "70px",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "230px",
              left: "60px",
            }}
          >
            <FLowrImage
              src={flwr}
              alt=""
              sx={{
                maxWidth: "50px",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "60px",
              right: "70px",
            }}
          >
            <FLowrImage
              src={flwr}
              alt=""
              sx={{
                maxWidth: "70px",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "230px",
              right: "60px",
            }}
          >
            <FLowrImage
              src={flwr}
              alt=""
              sx={{
                maxWidth: "50px",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "70px",
              left: "70px",
            }}
          >
            <FLowrImage
              src={flwr}
              alt=""
              sx={{
                maxWidth: "35px",
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "70px",
              right: "70px",
            }}
          >
            <FLowrImage
              src={flwr}
              alt=""
              sx={{
                maxWidth: "35px",
              }}
            />
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default WinModal;
