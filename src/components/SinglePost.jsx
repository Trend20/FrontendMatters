import {React} from 'react'
const SinglePost = () =>{
  return(
    <div className="single-post">
      <div className="cover-image">
        <img src="/public/images/blog1.jpg" alt="coverimage" />
      </div>
      <div className="post-de">
        <div className="post-title">
          <h1>Redux Toolkit Refresher</h1>
        </div>
        <div className="post-description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt quis tempore ipsam. Perspiciatis, rem!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt quis tempore ipsam. Perspiciatis, rem!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt quis tempore ipsam. Perspiciatis, rem!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt quis tempore ipsam. Perspiciatis, rem!</p>
        </div>
        <div className="post-timestamp">
          <p>12 Dec 2022</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePost;