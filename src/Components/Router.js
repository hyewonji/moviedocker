import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from 'Components/Header'
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';

export default () => (
    //Router 안에서만 Route할 수 있다.
    <Router>
        <>
            <Header />
            {/* Switch : Redirect시 오직 하나의 Route만 render할 수 있게 해준다. */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tv" exact component={TV} />
                <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
                <Route path="/search" component={Search} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Redirect from="*" to="/" />
            </Switch> 
        </>
    </Router>
)