import React from "react";
import { useDispatch } from "react-redux";
import { maxPrice, minPrice } from "../../store/api/search/searchSlice";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { TextField, Typography } from "@mui/material";
import useDebounce from "../../store/hook/debounce";

type Props = {
  setTypeFilter: React.Dispatch<
    React.SetStateAction<"category" | "price" | "attributes" | " ">
  >;
  type: "category" | "price" | "attributes" | " ";
};
const minDistance = 100;
function valuetext(value: number) {
  return `${value}`;
}
export const AdvancedBtnsPrice = (props: Props) => {
  const [value1, setValue1] = React.useState<number[]>([2000, 37000]);
  const dispatch = useDispatch();
  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    props.setTypeFilter("price");
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  dispatch(minPrice(useDebounce<number>(value1[0], 3000)));
  dispatch(maxPrice(useDebounce<number>(value1[1], 3000)));
  return (
    <div className="flex flex-col">
      <Typography variant="h6">Цена</Typography>
      <div className="flex flex-col justify-between py-2">
        <TextField
          //   type="number"
          label="Мин"
          defaultValue={value1[0] + " $"}
          value={value1[0] + " $"}
        />
        <TextField
          sx={{
            margin: "10px 0",
          }}
          //   type="number"
          label="Макс"
          defaultValue={value1[1] + " $"}
          value={value1[1] + " $"}
        />
      </div>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
          min={1000}
          max={50000}
          step={500}
        />
      </Box>
    </div>
  );
};
