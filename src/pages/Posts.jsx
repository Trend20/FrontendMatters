import Post from "../components/Post";

const Posts = ({articles}) => {
  return (
    <div className="posts">
      {articles.map((post) => {
        return (
          <Post
            key={post.id}
            author={post.author}
            date={post.timestamp}
            title={post.title}
            description={post.description}
          />
        );
      })}
    </div>
  );
};

export default Posts;
