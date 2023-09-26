import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const SinglePost = ({match}) => {
    const {articles} = useSelector((store) => store.article);
    const {title} = useParams();
    const post = articles.find((article) => article.title === title);
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
