import classes from "./Post.module.css";


// const names = ["Jeff", "Hwang"];

function Post({ author, body }) {
    // const chosenName = Math.random() > 0.5 ? names[0] : names[1];

    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
            {/* <p className={classes.author}>Jeff Hwang</p> */}
            {/* <p className={classes.text}> {chosenName}</p> */}
        </li>
    );
}

export default Post;
