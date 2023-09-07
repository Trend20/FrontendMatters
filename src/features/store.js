import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./articles/articleSlices";

const store = configureStore({
  reducer: {
    article: articleSlice
  },
});

export default store;
