import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./slices/articleSlices";

const store = configureStore({
  reducer: {
    article: articleSlice
  },
});

export default store;
