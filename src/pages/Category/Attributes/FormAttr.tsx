import React from "react";
import { useAppDispatch, useAppSlector } from "../../../utils/hook";
import {
  increase,
  reset as resetAttr,
} from "../../../store/reducer/addAtrribute";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAddAttributeMutation } from "../../../store/api/attributes";
import { RootAttr } from "../../../store/models/attributes";
import { Button, TextField } from "@mui/material";
import { AddAttrVariant } from "./AddAttrVariant";
import { toast } from "react-toastify";
type Props = {
  id?: number;
  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function FormAttr({ id, setOpen }: Props) {
  const attrState = useAppSlector((state) => state.stateAttribute);
  const dispatch = useAppDispatch();
  const [add, result] = useAddAttributeMutation();
  const { handleSubmit, formState, register, reset, setValue } =
    useForm<RootAttr>({
      defaultValues: {
        attribute: {
          category_id: id,
          attribute_name: "",
        },
        variants: attrState.variants,
      },
    });
  const formSubmit: SubmitHandler<RootAttr> = async (data) =>
    await add(data)
      .then((response) => {
        toast.success("Успешно!", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setOpen(false);
        reset();
      })
      .catch((e) =>
        toast.error("Ошибка", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      );
  const handleReset = () => {
    dispatch(resetAttr());
    reset();
  };
  return (
    <form className="flex flex-col h-full" onSubmit={handleSubmit(formSubmit)}>
      <div className="flex flex-col py-2">
        <TextField
          type="text"
          {...register("attribute.attribute_name")}
          label="Название аттрибута"
        />
        {attrState.variants.map((variant, index) => (
          <AddAttrVariant
            value={variant.value}
            id={index}
            setValue={setValue}
            ref={register(`variants.${index}.value`).ref}
            key={index}
          />
        ))}
        <Button onClick={() => dispatch(increase())}>Добавить вариант</Button>
      </div>
      <div className="flex items-center justify-between">
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ marginTop: "auto" }}
          disabled={result.isLoading}
        >
          Сохранить
        </Button>
        <Button variant="contained" color="error" onClick={handleReset}>
          Очистить
        </Button>
      </div>
    </form>
  );
}
