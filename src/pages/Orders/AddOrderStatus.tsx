import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ResponseOrderStatus } from "../../store/models/orders";
import { Button, TextField } from "@mui/material";
import {
  useAddOrderStatusMutation,
  useGetOrderStatusQuery,
  useUpdateOrderStatusMutation,
} from "../../store/api/orders";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  id?: number;
  name?: string;
};

export function AddOrderStatus({ setOpen, type, id, name }: Props) {
  const { data } = useGetOrderStatusQuery();
  const [addStatus, result] = useAddOrderStatusMutation();
  const [updateStatus, resultUpdate] = useUpdateOrderStatusMutation();
  const { handleSubmit, register } = useForm<Omit<ResponseOrderStatus, "id">>({
    defaultValues: {
      status: name || "",
    },
  });
  const btnSubmitAdd: SubmitHandler<Omit<ResponseOrderStatus, "id">> = async (
    data
  ) =>
    await addStatus(data)
      .unwrap()
      .then((response) => {
        toast.success(`${response.status} успешно добавлен!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => setOpen(false), 2000);
      })
      .catch((error) =>
        toast.error(`${error.data.detail}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  const btnSumbitUpdate: SubmitHandler<
    Omit<ResponseOrderStatus, "id">
  > = async (data) => 
    await updateStatus({
      data,
      id,
    })
      .unwrap()
      .then((response) => {
        toast.success(`${response.status} успешно изменен!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => setOpen(false), 2000);
      })
      .catch((error) =>
        toast.error(`${error.data.detail}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  const [age, setAge] = React.useState(
    data?.find((status) => status.id === id)?.status || ""
  );

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <form
      onSubmit={
        type === "Add"
          ? handleSubmit(btnSubmitAdd)
          : handleSubmit(btnSumbitUpdate)
      }
      className="w-full h-[100px] flex flex-col items-center justify-between"
    >
      {type === "Add" ? (
        <TextField {...register("status")} label="Названия статуса" />
      ) : (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Статус заказа</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Статус заказа"
              {...register('status')}
              // onChange={handleChange}
              // name={register('status').name}
            >
              {data?.map((status) => (
                <MenuItem value={status.status} key={status.id}>
                  {status.status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}
      <Button
        type="submit"
        variant="contained"
        color="success"
        disabled={result.isLoading || resultUpdate.isLoading}
        className="mt-3"
      >
        {type === 'Add' ? 'Создать':'Обновить'}
      </Button>
    </form>
  );
}
