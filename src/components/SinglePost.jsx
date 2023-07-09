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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                voluptate dolores illum delectus, quam nobis ipsam, sunt earum
                itaque repellendus voluptas, velit quas veniam fuga ad rerum at
                vero consequuntur ut expedita quae. Suscipit sapiente in fugiat
                esse exercitationem quam possimus odit, facilis modi, ullam iste
                inventore, excepturi porro maxime amet a voluptatum molestias.
                Delectus voluptatum, reprehenderit atque minus quia ea vitae ab
                aperiam autem mollitia quis a sapiente quas laudantium iusto
                enim expedita! Sequi nobis ex explicabo eveniet architecto autem
                aliquam similique neque laboriosam id suscipit facilis hic
                fugiat molestiae vero, error voluptatem maxime culpa tempore
                assumenda, ipsam vitae!
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
