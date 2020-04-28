import React from "react";

import Post from 'components/UI/Post/Post';

import styles from './Feed.module.css';

import * as data from "./Feed.test.json"

const feed = () => {
    let posts = [];

    // posts = fetch('./Feed.test.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         return data.posts;
    //     })
    // .catch(err => console.error(err));

    posts = data.posts;

    return (
        <div className={styles.content}>
            {
                posts.map(post => (
                    <div className={styles.posts}>
                        <Post
                            key={post.id}
                            post={post}
                        />
                    </div>
                ))
            }</div>
    );
}

export default feed;