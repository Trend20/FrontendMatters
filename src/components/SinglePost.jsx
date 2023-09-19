import {useState} from "react";

const SinglePost = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [timestamp, setTimestamp] = useState('')

  return (
          <div className="single-post">
            <div className="post-de">
              <div className="post-title">
                <h1>{title}</h1>
              </div>
              <div className="post-description">
                <p>
                  {description}
                </p>
              </div>
              <div className="post-timestamp">
                <p>{timestamp}</p>
              </div>
            </div>
          </div>
  );
};

export default SinglePost;
