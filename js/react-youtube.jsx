import React from 'react';
import YouTube from 'react-youtube';

export default class YouTubeVideo extends React.Component {
    render() {
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: {
                autoplay: 1
            }
        };

        return (
            <YouTube
                videoId="Z76X1wb7CBI"
                opts={opts}
                onReady={this._onReady}
            />
        );
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}