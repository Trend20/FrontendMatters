import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/api";

const SinglePost = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getArticleById = async (articleId) => {
      try {
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .eq("id", articleId)
          .single();
        if (error) console.log("error", error);
        else setArticle(data);
      } catch (error) {
        console.log(error);
      }
    };
    getArticleById(id);
  }, [id]);
  console.log(article);
  return (
    <div className="single-post">
      <div className="post-de">
        <div className="post-title">
          <h1>{article.title}</h1>
        </div>
        <div className="post-description">
          <p>{article.description}</p>
        </div>
        <div className="post-timestamp">
          <p>{article.timestamp}</p>m
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
