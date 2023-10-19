import { configureStore } from "@reduxjs/toolkit";
import activeButtonReducer from "./boilerplate/activeButtonSlice";

export default configureStore({
  reducer: {
    activeButton: activeButtonReducer,
  },
});
