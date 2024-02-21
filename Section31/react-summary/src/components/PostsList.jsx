import React, { useEffect, useState } from 'react'
import classes from './PostsList.module.css';
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";


function PostsList({ isPosting, onStopPosting }) {
    // const [enteredBody, setEnteredBody] = useState('');

    // const [enteredAuthor, setEnteredAuthor] = useState("");

    // // const [modalIsVisible, setModalIsVisible] = useState(true);

    // function bodyChangeHandler(event) {
    //     setEnteredBody(event.target.value);
    // }

    // function authorChangeHandler(event) {
    //     setEnteredAuthor(event.target.value);
    // }

    // function hideModalHandler() {
    //     setModalIsVisible(false);
    // }

    // await fetch("http://localhost:8080/posts").then(response => response.json()).then(data => {
    //     setPosts(data.posts);
    // });

    const [posts, setPosts] = useState([]);

    const [isFetching, setIsFetching] = useState(false);

    // Backend - call the data
    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("http://localhost:8080/posts");
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-type": "application/json"
            },
        });

        setPosts((existingPost) => [postData, ...existingPost]);
    }


    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal>
            )}

            {!isFetching && posts.length > 0 && (
                <ul ul className={classes.posts}>
                    {/* <Post author={enteredAuthor} body={enteredBody} /> */}

                    {posts.map((post) => (
                        <Post
                            key={post.body}
                            author={post.author}
                            body={post.body}
                        />
                    ))}

                    {/* <Post author="Jeff Hwang 2" body="Check out the full course! 2" />
        <Post author="Jeff Hwang 1" body="Check out the full course! 1" /> */}
                </ul >
            )}

            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h2>There are no posts yet.</h2>
                    <p>Please add new post</p>
                </div>
            )}

            {isFetching && <p>Loading posts...</p>}
        </>
    );
}

export default PostsList;