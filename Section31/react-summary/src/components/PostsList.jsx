import React from 'react'
import classes from './PostsList.module.css';
import Post from "./Post";


const PostsList = () => {
    return (
        <ul className={classes.posts}>
            <Post author="Jeff" body="React.js is awesome!" />
            <Post author="Hwang" body="Check out the full course!" />
        </ul>
    );
}

export default PostsList;