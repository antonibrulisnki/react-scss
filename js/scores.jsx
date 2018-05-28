import React from 'react'

class ScoresRow extends React.Component {


    render() {
        return (
            <tr>
                <td></td>
                <td>{this.props.arr.name}</td>
                <td>{this.props.arr.points}</td>
            </tr>
        )
    }
}

export default class Scores extends React.Component {
    state = {
        arrScores: [],
    };

    urlScores = 'https://api.myjson.com/bins/127yvm';


    loadScores = () => {
        fetch(this.urlScores)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('blad!');
                }
            })
            .then(data => {

                this.setState({
                    arrScores:data.sort(function compareNumbers(a, b) {
                        return b.points - a.points
                    })
                });
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadScores();
    }

    render() {
        if(this.state.arrScores.length == 0){
            return null
        }
        console.log(this.state.arrScores);
        var rows = [];
        const len = this.state.arrScores.length > 10 ? 10 : this.state.arrScores.length;
        for (let i = 0; i < len ; i++) {
            //console.log('for');
            rows.push(<ScoresRow key={i} arr={this.state.arrScores[i]}/>)
        }


        return (
            <div>
                <h2>Takie wyniki uzyskali pozostali:</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Imie</th>
                        <th>Wynik</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        )
    }
}