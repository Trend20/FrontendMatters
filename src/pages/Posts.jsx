import React, {useEffect, useState} from "react";
import { posts } from "../data/posts";
import Post from "../components/Post";
import {useDispatch, useSelector} from "react-redux";
import {supabase} from "../lib/api";
import {populateArticles} from "../features/slices/articleSlices";

const Posts = () => {
  const {articles} = useSelector((store) => store.article);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  // fetch the articles and populate on array
  useEffect(() =>{
   const getArticles = async () =>{
     try {
        const {data: articles, error} = await supabase.from('articles').select('*').order('id',{ ascending: false })
       if (error) console.log("error", error);
       else setData(articles);
       dispatch(populateArticles(data));
       console.log(data)
     }catch (error){
       console.log(error);
     }
   };
   getArticles();
  },[])
  return (
    <div className="posts">
      {articles.map((post, index) => {
        return (
          <Post
            key={index}
            img={post.img}
            author={post.author}
            date={post.date}
            title={post.title}
            description={post.description}
          />
        );
      })}
    </div>
  );
};

export default Posts;
