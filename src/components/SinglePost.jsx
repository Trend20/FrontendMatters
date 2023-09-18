import {useState} from "react";
import {useSelector} from "react-redux";
const SinglePost = ({selectedItem}) => {
  return (
    <>
      {
          selectedItem &&  <div className="single-post">
          <div className="single-post">
            <div className="post-de">
              <div className="post-title">
                <h1>{selectedItem.title}</h1>
              </div>
              <div className="post-description">
                <p>
                  {selectedItem.description}
                </p>
              </div>
              <div className="post-timestamp">
                <p>{selectedItem.timestamp}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default SinglePost;
