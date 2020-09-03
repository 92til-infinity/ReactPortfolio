import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import AboutMe from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Portfolio from '../../pages/Portfolio/Portfolio';
import Resume from '../../pages/Resume/index';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;