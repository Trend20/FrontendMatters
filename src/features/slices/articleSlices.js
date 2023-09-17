import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create initial state for the articles
const initialState = {
  articles: [],
  title:'',
  description:'',
  author:'',
  coverImg:'',
  date:'',
  isLoaded: false,
  error: "",
};

// create slice
const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers:{
      addArticle: (state, action) =>{
        const { title, description, author, coverImg} = state;
        state.title = action.payload;
        state.description = action.payload;
        state.author = action.payload;
        state.coverImg = action.payload;
        state.date = action.payload;
      },
    deleteArticle: (state) =>{
      const { title, description, author, coverImg} = state;
      state.title = '';
      state.description ='';
      state.author ='';
      state.coverImg = '';
      state.date = '';
    }
  }
});

// async_thunk operations
const getArticles = createAsyncThunk();

export const {addArticle, deleteArticle} = articleSlice.actions;
export default articleSlice.reducer;
