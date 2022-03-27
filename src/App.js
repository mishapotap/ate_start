import React from 'react';
import { BrowserRouter as Router, Route, Routes, withRouter } from 'react-router-dom'
// import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Layout from './components/Layout';
import * as routes from './const/routes';

import {Home} from './screens/Home';
import { Map } from './screens/Map';
import { A0 } from './screens/steps/A0';
import { A1 } from './screens/steps/A1';
import { A2 } from './screens/steps/A2';
import { A3 } from './screens/steps/A3';
import { A4 } from './screens/steps/A4';
import { B0 } from './screens/steps/B0';
import { B1 } from './screens/steps/B1';
import { B2 } from './screens/steps/B2';
import { Final } from './screens/steps/Final';
import { G0 } from './screens/steps/G0';
import { G1 } from './screens/steps/G1';
import { G2 } from './screens/steps/G2';
import { V0 } from './screens/steps/V0';

// const withLayout = (Component) => (props) => <Layout><Component {...props} /></Layout>

function App({location, ...props}) {
    return (
        <Router>
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
                        <Route
                            exact
                            element={<Map />}
                            path = { routes.MAP }
                        />
                        <Route
                            exact
                            element={<A0 />}
                            path = { routes.A0 }
                        />
                        <Route
                            exact
                            element={<A1 />}
                            path = { routes.A1 }
                        />
                        <Route
                            exact
                            element={<A2 />}
                            path = { routes.A2 }
                        />
                        <Route
                            exact
                            element={<A3 />}
                            path = { routes.A3 }
                        />
                        <Route
                            exact
                            element={<A4 />}
                            path = { routes.A4 }
                        />
                        <Route
                            exact
                            element={<B0 />}
                            path = { routes.B0 }
                        />
                        <Route
                            exact
                            element={<B1 />}
                            path = { routes.B1 }
                        />
                        <Route
                            exact
                            element={<B2 />}
                            path = { routes.B2 }
                        />
                        <Route
                            exact
                            element={<V0 />}
                            path = { routes.V0 }
                        />
                        <Route
                            exact
                            element={<G0 />}
                            path = { routes.G0 }
                        />
                        <Route
                            exact
                            element={<G1 />}
                            path = { routes.G1 }
                        />
                        <Route
                            exact
                            element={<G2 />}
                            path = { routes.G2 }
                        />
                        <Route
                            exact
                            element={<Final />}
                            path = { routes.FINAL }
                        />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </Router>
    );
}

export default App;
