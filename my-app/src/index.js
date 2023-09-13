import React from 'react';
// import react-dom 完成组件所代表的虚拟DOM节点到浏览器的DOM节点的转换
import ReactDOM from 'react-dom';

import PostList from './PostList';

ReactDOM.render(<PostList />, document.getElementById('root'));