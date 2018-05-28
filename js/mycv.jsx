import React from 'react'

export default class MyCv extends React.Component {
    state = {
        width: '50px',
        height: '50px',
        backgroundColor: 'rgb(230, 230, 0)',
        position: "relative",
        sec: 0,
        pkt: 0,
        time: 2000,
        disable: false,
        left: 0,
        top: 0,
        radius: '50%',
    }

    mouseClick = () => {
        this.setState({
            left: Math.floor(Math.random() * 500),
            top: Math.floor(Math.random() * 100),
        });
        if (this.state.time > 0) {
            this.setState({
                pkt: this.state.pkt + 1,
            })
        }
    }

    componentDidMount() {
        this.id = setInterval( () => {
            if(this.state.time > 0) {
                this.setState({
                    time: this.state.time - 100,
                })
            } else {
                this.setState({
                    disabled: true,
                })
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    render() {

        const styleDiv = {
            width: this.state.width,
            height: this.state.height,
            backgroundColor: this.state.backgroundColor,
            position: this.state.position,
            top: this.state.top,
            left: this.state.left,
            borderRadius: this.state.radius,
        }

        return (
            <div style={{position: "absolute"}}>
                <h1>Pozostało: {this.state.time / 100} sekund</h1>
                <h2>Punkty: {this.state.pkt}</h2>
                <button style={styleDiv} className={"clickDiv pulse bounceIn"} onClick={this.mouseClick}><i className="fas fa-play-circle"></i></button>
            </div>
        )
    }
}