import React from 'react';
import { useSelector } from 'react-redux';
import { selectPostList } from '../../state/postListSlice/postListSlice';

import Post from './post/Post';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector(selectPostList);

  return (
    !posts.length ? <h1>no posts to show</h1> : (
      <div>
        {posts.map((post) => (
          <div key={post._id}>
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        ))}
      </div>
    )
  );
};

export default Posts;