import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create initial state for the articles
const initialState = {
  articles: [],
  article: {},
  isLoaded: false,
  error: "",
};

// create slice
const articleSlice = createSlice({
  name: "articles",
  initialState,
});

// async_thunk operations
const getArticles = createAsyncThunk();
