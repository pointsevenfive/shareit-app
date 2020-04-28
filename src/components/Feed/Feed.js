import React, { useState } from "react";

import Post from "components/UI/Post/Post";
import MessageModal from "components/UI/Modal/MessageModal";

import styles from "./Feed.module.css";

// TODO: remove temporary import
import * as data from "./Feed.test.json";

const Feed = () => {

  const [showModal, setModalShow] = useState(false);
  
  let posts = [];

  // posts = fetch('https://your-url-here')
  //     .then(res => res.json())
  //     .then(data => {
  //         console.log(data);
  //         return data.posts;
  //     })
  // .catch(err => console.error(err));

  posts = data.posts;

  return (
    <div className={styles.content}>
      <MessageModal show={showModal} onHide={() => setModalShow(false)}/>
      {posts.map((post) => (
        <div className={styles.posts}>
          <Post key={post.id} post={post} showModal={() => setModalShow(true)}/>
        </div>
      ))}
    </div>
  );
};

export default Feed;
