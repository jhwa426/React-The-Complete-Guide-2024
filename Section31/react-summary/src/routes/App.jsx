// import Post from './components/Post';
import PostsList from "../components/PostsList";
import MainHeader from "../components/MainHeader";
import React, { useState } from 'react'

function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function showModalHandler() {
        setModalIsVisible(true);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    return (
        <>

            <MainHeader onCreatePost={showModalHandler} />
            <main>
                {/* <Post
                author="Author Area"
                body="Post Area"
            /> */}

                <PostsList
                    isPosting={modalIsVisible}
                    onStopPosting={hideModalHandler}
                />
            </main>
        </>
    );
}

export default App;
