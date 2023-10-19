import { useContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import SinglePost from "./components/SinglePost";
import AddPost from "./components/AddPost";
import { useDispatch } from "react-redux";
import { supabase } from "./lib/api";
import { populateArticles } from "./features/slices/articleSlices";
import Footer from "./components/Footer";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  // fetch the articles and populate on array
  useEffect(() => {
    const getArticles = async () => {
      try {
        const { data: articles, error } = await supabase
          .from("articles")
          .select("*")
          .order("id", { ascending: false });
        if (error) console.log("error", error);
        else setData([...data, articles]);
        dispatch(populateArticles(articles));
        console.log(articles);
      } catch (error) {
        console.log(error);
      }
    };
    getArticles();
  }, []);
  return (
    <BrowserRouter>
      <div className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Posts />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/addPost" element={<AddPost />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
