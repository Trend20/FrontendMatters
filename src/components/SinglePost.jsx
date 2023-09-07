import {useState} from "react";
const SinglePost = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postDesc, setPostDesc] = useState('');
  const [postItem, setPostItem] = useState({});
  return (
    <>
      <div className="single-post">
        <div className="single-post">
          <div className="cover-image">
            <img src="/images/blog1.jpg" alt="post" />
          </div>
          <div className="post-de">
            <div className="post-title">
              <h1>{postTitle}</h1>
            </div>
            <div className="post-description">
              <p>
                {postDesc}
              </p>
            </div>
            <div className="post-timestamp">
              <p>{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
