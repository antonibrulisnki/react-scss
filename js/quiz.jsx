import React from 'react'
import Scores from './scores.jsx'

export default class Quiz extends React.Component {
    state = {
        quests: [],
        points: 0,
        number: 0,
        value: ' ',
        clicked: ' ',
        arrScores: [],
        clickedScores: false,
        askedQuestions: [],
    };

    url = 'https://api.myjson.com/bins/6o92q';
    urlScores = 'https://api.myjson.com/bins/127yvm';

    loadQuests = () => {
        fetch(this.url)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('blad!');
                }
            })
            .then(data => {

                this.setState({
                    quests: data,
                })
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadQuests();
    }

    handleClickA = () => {
        this.setState({
            number: this.state.number + 1,
            askedQuestions: this.state.askedQuestions + [this.i],
        });
        console.log(this.state.askedQuestions);
        if (this.state.quests.quests[this.i].answers.a.value === true) {
            this.setState({
                points: this.state.points + 1
            });
        }
    };
    handleClickB = () => {
        this.setState({
            number: this.state.number + 1,
            askedQuestions: this.state.askedQuestions + [this.i],
        });
        console.log(this.state.askedQuestions);
        if (this.state.quests.quests[this.i].answers.b.value === true) {
            this.setState({
                points: this.state.points + 1
            });
        }
    };
    handleClickC = () => {
        this.setState({
            number: this.state.number + 1,
            askedQuestions: this.state.askedQuestions + [this.i],
        });
        console.log(this.state.askedQuestions);
        if (this.state.quests.quests[this.i].answers.c.value === true) {
            this.setState({
                points: this.state.points + 1
            });
        }
    };

    handleClickD = () => {
        this.setState({
            number: this.state.number + 1,
            askedQuestions: this.state.askedQuestions + [this.i],
        });
        console.log(this.state.askedQuestions);
        if (this.state.quests.quests[this.i].answers.d.value === true) {
            this.setState({
                points: this.state.points + 1
            });
        }
    };

    SendValue = () => {

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
                    arrScores: data,
                }, () => {
                    console.log(this.state.value);

                    const obj = {
                        points: this.state.points,
                        name: this.state.value,
                    };

                    const newScores = this.state.arrScores.slice();
                    newScores.push(obj);

                    fetch(this.urlScores, {
                        method: 'PUT',
                        body: JSON.stringify(newScores),
                        headers: {"Content-Type": "application/json; charset=utf-8"}
                    })
                        .then(resp => {
                            if (resp.ok) {
                                return resp.json();
                            } else {
                                throw new Error('blad!');
                            }
                        })
                        .then(() => {
                            console.log('działa');
                            this.setState({
                                clickedScores: true
                            });
                        })
                        .catch(err => console.log(err));
                })
            })
            .catch(err => console.log(err));
    };

    inputChange = (e) => {
        this.setState({value: e.target.value})
    };


    render() {

        if (this.state.quests.length === 0) {
            return null
        }


        if (this.state.clickedScores === true) {
            return (
                <Scores/>
            )
        } else {

            this.i = 0;
            let searchQuestion = true;

            while (this.state.askedQuestions.includes(this.i) === true && searchQuestion) {
                console.log('wykonuje sie');
                this.i = Math.floor(Math.random() * this.state.quests.quests.length);

                if (this.state.askedQuestions.length >= 10) {
                    searchQuestion = false
                }
            }
            if (this.state.number == 10) {
                return (
                    <div className={"quiz fadeInRight"}>
                        <h2>Gratulacje!</h2>
                        <h3>UKOŃCZYŁEŚ QUIZ HISTORYCZNY!</h3>
                        <p>Podziel się wynikami z innymi :)</p>
                        <input onChange={this.inputChange}/>
                        <button type={"submit"} onClick={this.SendValue}>Dodaj wynik</button>
                        <h3>Twój wynik to: {this.state.points}</h3>
                    </div>)

            } else {
                return (
                    <div className={"quiz fadeInRight"}>
                        <h2><i className="far fa-bookmark"></i> Quiz Historyczny</h2>
                        <h3>Pytanie {this.state.number}/10:</h3>
                        <h3>{this.state.quests.quests[this.i].content}</h3>
                        <div className={"pulse"} onClick={this.handleClickA}><p>A: {this.state.quests.quests[this.i].answers.a.text}</p></div>
                        <div className={"pulse"} onClick={this.handleClickB}><p>B: {this.state.quests.quests[this.i].answers.b.text}</p></div>
                        <div className={"pulse"} onClick={this.handleClickC}><p>C: {this.state.quests.quests[this.i].answers.c.text}</p></div>
                        <div className={"pulse"} onClick={this.handleClickD}><p>D: {this.state.quests.quests[this.i].answers.d.text}</p></div>
                        <h3>Łączna ilość pkt: {this.state.points}</h3>
                    </div>)
            }
        }
    }
}