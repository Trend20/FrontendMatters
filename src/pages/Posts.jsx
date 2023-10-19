import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Post from "../components/Post";

const Posts = () => {
  const { articles } = useSelector((store) => store.article);
  return (
    <div className="posts">
      {articles.map((post) => {
        return (
          <Link to={`/posts/${post.id}`} key={post.id}>
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
