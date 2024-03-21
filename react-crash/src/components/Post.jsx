import classes from "./Post.module.css";
import { Link } from "react-router-dom";

function Post(props) {
  const author = props.author;
  const body = props.body;
  return (
    <li className={classes.post}>
      <Link to={props.id}>
        <p className={classes.author}>{author}</p>
        <p>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
