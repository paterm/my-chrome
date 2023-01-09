import { DialogTitle,  IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import React from 'react'

export interface DialogTitleProps {
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle: React.FC<DialogTitleProps> = ({
  children,
  onClose,
  ...other
}) => (
  <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
    {children}
    {onClose ? (
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
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

export default BootstrapDialogTitle
