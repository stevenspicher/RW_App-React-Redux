import React, { useEffect } from 'react';

import Home from './components/home/Home';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/auth/Auth';

const App = () => {
    //Redirect visitor to Admin login by pressing and holding Esc Key on keyboard
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.keyCode === 27) {
                window.location.replace("/auth");
            }
        };
        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/auth" component={Auth} exact />
            </Switch>
        </div>
    );
};

export default App;
