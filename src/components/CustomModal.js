import React from "react";
import { Modal, Fade } from "@mui/material";
import { Box } from "@mui/material";
const CustomModal = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            minWidth: "230px",
            width: "40%",
            background: "white",
            height: "100%",
          }}
        >
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
