import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import  BootstrapDialogTitle  from './BootstarpDialog';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


type Props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    id?: number,
    username?:string
    children?:React.ReactNode
}



export default function CustomizedDialogs({open,setOpen,id,username,children}:Props) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
              open={open}
                >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal
        </BootstrapDialogTitle>
        <DialogContent dividers>

            {children}
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
