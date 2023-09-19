import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create initial state for the articles
const initialState = {
  articles: [],
  title:'',
  description:'',
  author:'',
  isLoaded: false,
  error: "",
};

// create slice
const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers:{
      addArticle: (state, action) =>{
        state.title = action.payload;
        state.description = action.payload;
        state.author = action.payload;
      },
    deleteArticle: (state) =>{
      const { title, description, author, coverImg} = state;
      state.title = '';
      state.description ='';
      state.author ='';
    },
    setInputValue : (state, action) =>{
        const { field, value} = action.payload;
        state[field] = value;
    },
    clearInputValue : (state) =>{
      state.title = ''
      state.description = ''
      state.author = ''
    },
    populateArticles: (state, action) =>{
        state.articles = action.payload;
    }
  }
});

// async_thunk operations
const getArticles = createAsyncThunk();

export const {addArticle, deleteArticle, setInputValue, clearInputValue, populateArticles} = articleSlice.actions;
export default articleSlice.reducer;
