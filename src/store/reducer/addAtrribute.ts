import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";
import { Variant } from "../models/attributes";
type State = {
  count: number;
  variants: Variant[];
};
const initialState: State = {
  count: 0,
  variants: [],
};

export const attributes = createSlice({
  name: "addAttribute",
  initialState,
  reducers: {
    increase: (state) => {
      state.count += 1;
      state.variants.push({ value: "" });
    },
    decrease: (state, action: PayloadAction<number>) => {
      state.variants.splice(action.payload, 1);
      if (state.count < 0) {
        state.count = 0;
      } else {
        state.count -= 1;
      }
    },
    reset: (state) => {
      state.count = 0;
      state.variants = [];
    },
  },
});

export const { increase, decrease, reset } = attributes.actions;
export const stateAttribute = (state: RootState) => state.stateAttribute;
