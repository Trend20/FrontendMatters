import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./slices/articleSlices";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    article: articleSlice,
    user: userSlice,
  },
});

export default store;
