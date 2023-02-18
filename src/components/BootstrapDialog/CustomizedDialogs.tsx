import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import Typography from '@mui/material/Typography';
import  BootstrapDialogTitle  from './BootstarpDialog';
import { ChangeFormPerson } from '../../pages/Cabinet/PersonalData/ChangeFormPerson';
import {NewCategory} from "../../pages/Category";

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
}



export default function CustomizedDialogs({open,setOpen,id,username}:Props) {

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
              open={open}
            //   sx={{
            //       width:
            //   }}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {username !== 'category'
              ? username + ' change'
              : 'Add category'}
        </BootstrapDialogTitle>
        <DialogContent dividers>
            {username !== 'category'
                ?<ChangeFormPerson open={ open} setOpen={setOpen} id={id} />
                :<NewCategory open={open} setOpen={setOpen}/>
            }

        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
