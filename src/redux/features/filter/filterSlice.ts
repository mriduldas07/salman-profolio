import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
  category: string;
}

const initialState: IState = {
  category: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    categoryAdd: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    categoryRemove: (state) => {
      state.category = "";
    },
  },
});

export default filterSlice.reducer;
export const { categoryAdd, categoryRemove } = filterSlice.actions;
