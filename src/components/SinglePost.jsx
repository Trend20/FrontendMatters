import {useState, useEffect} from "react";
import {supabase} from "../lib/api";
import {useParams} from "react-router-dom";

const SinglePost = () => {
  const [post, setPost] = useState(null)
  const [articleTitle, setArticleTitle] = useState(null);
  const [articleDescription, setArticleDescription] = useState(null);
  const [articleTimestamp, setArticleTimestamp] = useState(null);
  const {id} = useParams();
  useEffect(() =>{
      const fetchPost = () =>{
        const {article, error} = supabase.from('articles').select(`title, description, timestamp`).eq('id', id).single()
        console.log(article);
       if(error){
         console.error(error);
       }else{
         // setArticleTitle(article.title)
         // setArticleDescription(article.description)
         // setArticleTimestamp(article.timestamp)
       }
      }
      fetchPost();
      console.log(id);
  },[])


  return (
          <div className="single-post">
            {/*<div className="post-de">*/}
            {/*  <div className="post-title">*/}
            {/*    <h1>{articleTitle}</h1>*/}
            {/*  </div>*/}
            {/*  <div className="post-description">*/}
            {/*    <p>*/}
            {/*      {articleDescription}*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*  <div className="post-timestamp">*/}
            {/*    <p>{articleTimestamp}</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
  );
};

export default SinglePost;
