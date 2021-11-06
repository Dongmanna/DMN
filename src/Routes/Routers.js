import React, { useState } from "react";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Chatting from "./Chatting";
import Detail from "./Detail";
import Edit from "./Edit";
import Home from "./Home";
import Login from "./Login";
import Mypage from "./Mypage";
import Result from "./Result";
import Write from "./Write";
import SignUp from "./SignUp"



function Routers() {
    const [isLoggedin, setIsLoggein] = useState(false);
    return (
        <Router >
            <Switch>
                {/* {isLoggedin ? (
                    <>
                        <Route exact path="/" component={Home}>
                            <Home />
                        </Route>
                    </>) : (
                    <>
                        <Route path="/" component={Home}>
                            <Login />
                        </Route>
                    </>
                )} */}
                <>
                    <Route exact path="/Chatting">
                        <Chatting />
                    </Route>
                    <Route exact path="/Detail">
                        <Detail />
                    </Route>
                    <Route exact path="/Edit">
                        <Edit />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/Login">
                        <Login />
                    </Route>
                    <Route path="/Mypage">
                        <Mypage />
                    </Route>
                    <Route  path="/Result">
                        <Result />
                    </Route>
                    <Route exact path="/Write">
                        <Write />
                    </Route>
                    <Route exact path="/SignUp">
                        <SignUp />
                    </Route>
                </>
            </Switch>
        </Router>
    );
};

export default Routers;