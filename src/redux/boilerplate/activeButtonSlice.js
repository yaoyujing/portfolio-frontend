import { createSlice } from "@reduxjs/toolkit";

export const activeButtonSlice = createSlice({
  name: "activeButton",
  initialState: {
    value: "home",
  },
  reducers: {
    setActiveButton: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveButton } = activeButtonSlice.actions;

export default activeButtonSlice.reducer;
