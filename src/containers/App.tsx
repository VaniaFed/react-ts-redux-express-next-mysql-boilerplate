import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { User } from 'containers/user';

export const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={User} />
            <Route path="/user" component={User} />
        </Switch>
    );
};
