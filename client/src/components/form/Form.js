import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createNewPost, editPost } from '../../actions/posts';
import { useHistory } from 'react-router';
import { selectPostList } from '../../state/postListSlice/postListSlice';
import { logout } from '../../state/authSlice/authSlice';

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const post = useSelector(selectPostList);
  const foundPost = (currentId ? post.find((post) => post._id === currentId) : null);
  const user = JSON.parse(localStorage.getItem('profile'));

  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });

  useEffect(() => {
    if (foundPost) setPostData(foundPost);
  }, [foundPost]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createNewPost({ ...postData, name: user?.result?.name }));
    } else {
      dispatch(editPost(currentId, { ...postData, name: user?.result?.name }));
    }
    clear();
  };

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const logoutUser = () => {
    dispatch(logout());

    history.push('/');
  };

  return (
    <div className="form-container">
      <h1 variant="h6">{currentId ? `Editing "${foundPost.title}"` : 'Add Project'}</h1>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div><input name="title" placeholder="Title" value={postData.title} onChange={handleChange} /></div>
        <div><input name="message" placeholder="Message" value={postData.message} onChange={handleChange} /></div>
        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        <button type="submit">Submit</button>
        <button onClick={clear}>Clear</button>
        <button onClick={logoutUser}>Logout</button>
      </form>
    </div>
  );
};

export default Form;