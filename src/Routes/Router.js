import React, { useState } from "react";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Chatting from "../Routes/Chatting";
import Detail from "../Routes/Detail";
import Edit from "../Routes/Edit";
import Home from "../Routes/Home";
import Login from "../Routes/Login";
import Mypage from "../Routes/Mypage";
import Result from "../Routes/Result";
import Write from "../Routes/Write";



function Routers() {
    const [isLoggedin, setIsLoggein] = useState(false);
    return (
        <Router>
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
                    <Route exact path="/Mypage">
                        <Mypage />
                    </Route>
                    <Route exact path="/Result">
                        <Result />
                    </Route>
                    <Route exact path="/Write">
                        <Write />
                    </Route>
                </>
            </Switch>
        </Router>
    );
};

export default Routers;