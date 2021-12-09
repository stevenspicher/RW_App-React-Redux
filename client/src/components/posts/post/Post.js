import React from 'react';
import { useDispatch } from 'react-redux';

import { removePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <div className="post-container">
      <img className="post-image" src={post.selectedFile} alt="" title={post.title} />
      {(user?.result) && (
        <div>
          <button onClick={() => setCurrentId(post._id)}>
            Edit
          </button>
          {(user?.result) && (
            <button onClick={() => dispatch(removePost(post._id))}>
              Delete
            </button>
          )}
        </div>
      )}
      <h2>{post.title}</h2>
      <h3>{post.message}</h3>
    </div>
  );
};

export default Post;