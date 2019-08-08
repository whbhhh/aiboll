import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'


class IRouter extends React.Component {
    render() {
        return (
            <Home>
                <HashRouter>
                    
                </HashRouter>
            </Home>

        )
    }
}

export default IRouter;