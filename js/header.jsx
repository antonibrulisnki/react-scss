import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <div className={"header-container"}>
                <div className={"header"}>
                    <div className={"foto-circle bounceIn"}></div>
                    <div  className={"cssTyping "}>
                        <h1>Antoni Bruliński <i className="far fa-registered"></i></h1>
                        <h2>Junior Front-end Developer</h2>
                    </div>
                </div>
            </div>
        )
    }
}