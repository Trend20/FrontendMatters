import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/api";
import Loader from "./Loader";

const SinglePost = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
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
        else setArticle({ ...article, data });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getArticleById(id);
  }, [id]);
  console.log("article here", article);
  const { title, description, timestamp, author } = article.data;
  return (
    <div className="single-post">
      {loading ? (
        <Loader />
      ) : (
        <div className="post-details">
          <div className="post-title">
            <h1>{title}</h1>
          </div>
          <div className="post-description">
            <p>{description}</p>
          </div>
          <div className="post-author">
            <p>{author}</p>
          </div>
          <div className="post-timestamp">
            <p>{timestamp}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
