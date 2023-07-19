import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.number} {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div clssName="post__btns">
        <MyButton>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
