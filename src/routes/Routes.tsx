import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import {PageTwo} from "../pages/PageTwo/PageTwo";
import {PageOne} from "../pages/PageOne/PageOne";
import {Page3} from "../pages/Page_3/Page3";


export const PATH = {
    PAGE_ONE: "/page_one",
    PAGE_TWO: "/page_two",
    PAGE_TREE: "/page_3",
}

export const Routes = () => {

    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.PAGE_ONE}/>}/>
                <Route path={PATH.PAGE_ONE} render={() => <PageOne/>}/>
                <Route path={PATH.PAGE_TWO} render={() => <PageTwo/>}/>
                <Route path={PATH.PAGE_TREE} render={() => <Page3/>}/>
            </Switch>
        </div>
    )
}