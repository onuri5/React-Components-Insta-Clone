import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log(likePost)

  return (
    <div className='posts-container-wrapper'>
      {posts.map((post, index) => <Post post={post} key={index} likePost={likePost}/>)}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
