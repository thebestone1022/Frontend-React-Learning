import React, { Component } from "react";

// 无状态组件
function PostItem(props) {

    const handleclick = () => {
        props.onVote(props.post.id);
    };
    const { post } = props;

    return(
        <li>
            <div>
                {post.title}
            </div>
            <div>
                创建人： <span> {post.author} </span>
            </div>
            <div>
                创建时间： <span> {post.date} </span>
            </div>
            <div>
                <button onClick={ handleclick}>点赞</button>
                &nbsp;
                <span>{post.vote}</span>
            </div>
        </li>
    );
}

export default PostItem;