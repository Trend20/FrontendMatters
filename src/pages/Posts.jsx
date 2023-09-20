import Post from "../components/Post";
import {Link} from "react-router-dom";

const Posts = ({articles}) => {
  return (
    <div className="posts">
      {articles.map((post) => {
        return (
          <Link to={`/post/:${post.id}`}>
            <Post
                key={post.id}
                id={post.id}
                author={post.author}
                date={post.timestamp}
                title={post.title}
                description={post.description}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;
