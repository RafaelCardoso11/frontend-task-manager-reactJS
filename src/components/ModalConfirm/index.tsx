import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { props } from "./interfaces/props";

export const ModalConfirm: React.FC<props> = ({
  open,
  setOpen,
  title,
  body,
  btnConfirmText = "Confirmar",
  btnCancelText = "Cancelar",
  handleConfirm,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{body}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {btnCancelText}
          </Button>
          <Button onClick={handleConfirm}>{btnConfirmText}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
