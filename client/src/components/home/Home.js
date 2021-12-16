import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { retrievePosts } from '../../actions/posts';
import Posts from '../posts/Posts';
import Form from '../form/Form';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        dispatch(retrievePosts());
    }, [currentId, dispatch]);

    return (
        <div>
            <div>
                {(user?.result?.name) ? <Form currentId={currentId} setCurrentId={setCurrentId} /> : null}
            </div>
            <div>
                <Posts setCurrentId={setCurrentId} />
            </div>
        </div>
    );
};

export default Home;