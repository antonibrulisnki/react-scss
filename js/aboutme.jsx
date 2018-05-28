import React from 'react';
import YouTubeVideo from './react-youtube.jsx'


export default class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <h2 className={"css-typing"}>Cześć!</h2>
                <p>Jak już pewnie zauważyłeś mam na imię Antoni a to moje skromne portfolio :)</p>
                <p>Do jego stworzenia użyłem React.js i SCSS. </p>
                <h3 style={{marginBottom: "15px"}}>Zapraszam do zwiedzania!</h3>
                <div className={"youtubeDiv"}>
                    <YouTubeVideo className={"movie"}/>
                </div>
            </div>
        )
    }
}

