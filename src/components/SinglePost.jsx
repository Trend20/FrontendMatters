import { React } from "react";
const SinglePost = () => {
  return (
    <>
      <div className="single-post">
        <div className="single-post">
          <div className="cover-image">
            <img src="/images/blog1.jpg" alt="post" />
          </div>
          <div className="post-de">
            <div className="post-title">
              <h1>Redux Toolkit</h1>
            </div>
            <div className="post-description">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam odit officiis nisi quod magnam eligendi sunt repellat
                deleniti architecto sed.
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
