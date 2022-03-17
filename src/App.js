import React from 'react';
import { BrowserRouter as Router, Route, Routes, withRouter } from 'react-router-dom'
// import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Layout from './components/Layout';
import * as routes from './const/routes';

import {Home} from './screens/Home';

// const withLayout = (Component) => (props) => <Layout><Component {...props} /></Layout>

function App({location, ...props}) {
    return (
        <Router>
            <Layout>
                <TransitionGroup style = {{height: '100%'}}>
                    <CSSTransition
                        classNames = 'routefade'
                        timeout = { 500 }>
                        <Routes location = { location }>
                            <Route
                                exact
                                element={<Home />}
                                path = { routes.HOME }
                            />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            </Layout>
        </Router>
    );
}

export default App;
