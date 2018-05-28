import ReactDOM from 'react-dom';
import React from 'react';
import '../sass/style.scss'
import Header from './header.jsx'
import Main from './main.jsx'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Footer from "./footer.jsx";


document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {
        render() {
            return (
                <HashRouter>
                    <div>
                        <Header/>
                        <Main/>
                        <Footer/>
                    </div>
                </HashRouter>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
})