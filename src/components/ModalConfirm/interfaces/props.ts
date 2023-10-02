export interface props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  body: string;
  btnConfirmText?: string;
  btnCancelText?: string;
  handleConfirm: () => void;
}
