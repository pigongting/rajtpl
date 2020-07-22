import React, { 
    // useState 
} from 'react';

// https://github.com/ReactTraining/react-router
// component > render > children
import {
    BrowserRouter as Router,
    // HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// import logo from './logo.svg';
// import './App.css';

import AuthLayout from '@/layouts/AuthLayout';
import BasicLayout from '@/layouts/BasicLayout';
import BlankLayout from '@/layouts/BlankLayout';

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

const App = props => {

    return (
        <Router>

            <Switch>

                <Route
                    path='/auth'
                    component={AuthLayout}
                />

                <Route
                    path='/blank'
                    // component= {BlankLayout}
                    render={(props) => {
                        return (
                            <BlankLayout>BlankLayout</BlankLayout>
                        );
                    }}
                />

                <Route
                    path='/'
                    component={BasicLayout}
                >
                    {/* <IndexRoute component={Home}/>
                    ＜Redirect from="messages/:id" to="/messages/:id" />
                    ＜IndexRedirect to="/welcome" />
                    <Route path="accounts" component={Accounts}/>
                    <Route path="statements" component={Statements}/> */}
                </Route>

                {/* <Route
                    children={({ match, ...rest }) => (
                        {/ * Animate will always render, so you can use lifecycles
                        to animate its child in and out * /}
                        < Animate >
                            { match && <Something {...rest} />}
                        </Animate>
                    )}
                /> */}
            
            </Switch>

        </Router>
    );

}

export default App;



            // {/* <ul style={{ listStyleType: "none", padding: 0 }}>
            //     <li>
            //     <Link to="/">Home</Link>
            //     </li>
            //     <li>
            //     <Link to="/bubblegum">Bubblegum</Link>
            //     </li>
            //     <li>
            //     <Link to="/shoelaces">Shoelaces</Link>
            //     </li>
            //     <li>
            //     <Link to="/sandwiches">Sandwiches</Link>
            //     </li>
            //     <li>
            //     <Link to="/tacos">Tacos</Link>
            //     </li>
            // </ul> */}

            //         {/* <Switch>
            //     {routes.map((route, index) => (
            //     // You can render a <Route> in as many places
            //     // as you want in your app. It will render along
            //     // with any other <Route>s that also match the URL.
            //     // So, a sidebar or breadcrumbs or anything else
            //     // that requires you to render multiple things
            //     // in multiple places at the same URL is nothing
            //     // more than multiple <Route>s.
            //     <Route
            //         key={index}
            //         path={route.path}
            //         exact={route.exact}
            //         children={<route.sidebar />}
            //     />
            //     ))}
            // </Switch> */}

            // {/* <Switch>
            //     {routes.map((route, index) => (
            //     // Render more <Route>s with the same paths as
            //     // above, but different components this time.
            //     <Route
            //         key={index}
            //         path={route.path}
            //         exact={route.exact}
            //         children={<route.main />}
            //     />
            //     ))}
            // </Switch> */}