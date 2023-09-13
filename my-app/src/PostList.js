import React, { Component } from "react";
import PostItem from "./PostItem";

// 动态组件的定义
class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.timer = null;
        this.handleVote = this.handleVote.bind(this); //手动绑定方法this的指向
    }

    componentDidMount () {
        // 使用 setTimeout 模拟异步从服务器端获取数据
        this.timer = setTimeout ( () => {
            this.setState({
                posts: [
                    {id:1, title:"学习react前端框架", author: "张三", date:"2023-09-13 19:00", vote:0},
                    {id:2, title:"前端知识及实践", author: "李四", date:"2023-09-13 19:10", vote:0},
                    {id:3, title:"加油加油", author: "王五", date:"2023-09-13 20:00", vote:0}
                ]
            });
        }, 1000);
    }

    componentWillUnmount(){
        if(this.timer){
            clearTimeout(this.timer); //清除定时器
        }
    }

    handleVote(id) {
        // 根据帖子ID进行过滤，找到待修改vote属性的帖子，返回新的posts对象
        const posts = this.state.posts.map(item => {
            const newItem = item.id === id ? {...item, vote: ++item.vote} :item;
            return newItem;
        });
        // 使用新的posts对象设置state
        this.setState({
            posts
        });
    }

    render() {
        return (
            <div>
                帖子列表：
                <ul>
                    {this.state.posts.map(item =>
                        <PostItem
                            post = {item}
                            onVote = {this.handleVote}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default PostList;