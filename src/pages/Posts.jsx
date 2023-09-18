import Post from "../components/Post";

const Posts = ({articles}) => {
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
