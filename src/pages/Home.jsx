import React, {useEffect, useState} from "react";
import Hero from "../components/Hero";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";
import Posts from "./Posts";
import {useDispatch, useSelector} from "react-redux";
import Empty from "../components/Empty";
import {supabase} from "../lib/api";
import {populateArticles} from "../features/slices/articleSlices";

const Home = () => {
    const {articles} = useSelector((store) => store.article);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    // fetch the articles and populate on array
    useEffect(() =>{
        const getArticles = async () =>{
            try {
                const {data: articles, error} = await supabase.from('articles').select('*').order('id',{ ascending: false })
                if (error) console.log("error", error);
                else setData([...data, articles]);
                dispatch(populateArticles(articles));
                console.log(data)
            }catch (error){
                console.log(error);
            }
        };
        getArticles();
    },[])
  return (
    <div>
      <Hero />
        {
            articles.length === 0 ? <Empty /> : <Posts articles={articles} />
        }
        {
            articles.length > 6 &&  <ReadMore />
        }
      <Footer />
    </div>
  );
};

export default Home;
