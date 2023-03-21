import React from "react";
import { useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { Button, Divider, Typography } from "@mui/material";
import CustomizedDialogs from "../../../components/BootstrapDialog/CustomizedDialogs";
import Reviews from "../../../components/Reviews/Reviews";

export function ProductAtrr() {
  const { state } = useLocation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <div className=" w-[50%] min-h-[300px]">
      <Paper elevation={3} className="py-2 px-3">
        <div className="flex justify-between">
          <Typography variant="subtitle1">Названия устройства</Typography>
          <Typography variant="h6">{state.name}</Typography>
        </div>
        <Divider />
        <div className="flex justify-between mt-2">
          <Typography variant="subtitle1">Описание</Typography>
          <Typography variant="h6">{state.description}</Typography>
        </div>
        <Divider />
        <div className="flex justify-between mt-2">
          <Typography variant="subtitle1">Цена</Typography>
          <Typography variant="h6">{state.price}</Typography>
        </div>
        <Divider />
        <div className="flex justify-between mt-2">
          <Typography variant="subtitle1">Количество</Typography>
          <Typography variant="h6">{state.quantity}</Typography>
        </div>
        <Divider />
        <div className="py-2">
          <Button onClick={handleOpen} color="info" variant="contained">
            Оценить продукт
          </Button>
        </div>
      </Paper>
      <CustomizedDialogs open={open} setOpen={setOpen}>
        <Reviews {...state} />
      </CustomizedDialogs>
    </div>
  );
}
