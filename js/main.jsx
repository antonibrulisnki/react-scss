import React from 'react'
import Menu from './menu.jsx'
import MyCv from './mycv.jsx'
import AboutMe from './aboutme.jsx'
import Quiz from './quiz.jsx'
import Technologies from './technologies.jsx'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export default class Main extends React.Component {


    render() {
        return (
            <div className={"container"}>
                <Menu/>
                <div className={"page inline-block"}>
                    <Switch>
                        <Route exact path='/' component={AboutMe}/>
                        <Route path="/technologies" component={Technologies}/>
                        <Route path='/quiz' component={Quiz}/>
                        <Route path='/mycv' component={MyCv}/>
                    </Switch>
                </div>
            </div>
        )
    }
}