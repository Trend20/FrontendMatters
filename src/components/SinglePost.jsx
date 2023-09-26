import {useEffect, useState} from "react";
import {supabase} from "../lib/api";

const SinglePost = ({match}) => {
    const [data, setData] = useState([]);
    const title = match.params.title;
    const {data: articles, error} = supabase.from('articles').select('*');
    useEffect(() =>{
        const {data: articles, error} = supabase.from('articles').select('*');
        setData(articles);
        console.log(articles);
    },[])
    const post = data.find((article) => article.title === title);
  return (
          <div className="single-post">
            <div className="post-de">
              <div className="post-title">
                <h1>{post.title}</h1>
              </div>
              <div className="post-description">
                <p>
                  {post.description}
                </p>
              </div>
              <div className="post-timestamp">
                <p>{post.timestamp}</p>
              </div>
            </div>
          </div>
  );
};

export default SinglePost;
