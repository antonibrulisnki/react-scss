import React from 'react'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
        return (
                <ul className={"menu inline-block"}>
                    <li className={"pulse"}><NavLink to="/"><i className="fas fa-user-circle"></i> O mnie</NavLink></li>
                    <li className={"pulse"}><NavLink to="/technologies"><i className="fas fa-info-circle"></i> Technologie</NavLink></li>
                    <li className={"pulse"}><NavLink to="/quiz"><i className="fab fa-fort-awesome-alt"></i> Quiz Historyczny</NavLink></li>
                    <li className={"pulse"}><NavLink to="/mycv"><i className="fas fa-play-circle"></i> Gra Klikanka</NavLink></li>
                </ul>
        )
    }
}