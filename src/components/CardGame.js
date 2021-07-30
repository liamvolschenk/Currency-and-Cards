//importing react library, stylesheet and bootstrap components
import React from 'react';
import Cards from './Cards.js';
import Quit from './Quit';
import "../css/card.css";
import Button from 'react-bootstrap/Button';

class CardGame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            winningCard: this.getWinningCard()
            , streakDetail: ""
            , winningCardEmoji: "King.png"
            , losingCardEmoji: "Joker.png"
            , cardClicked: 0
            , isGameOver: false
            ,
        }

        this.handleCardClick = this.handleCardClick.bind(this);

    }

    // get a random number from an array of [1, 2, 3] and make it the winning card number
    getWinningCard = () => {
        const cardArray = [1, 2, 3];
        const winningCard = Number(cardArray[Math.floor(Math.random() * cardArray.length)]);
        return winningCard;
    }

    // this is executed when a card is clicked
    handleCardClick(i) {
        const newGamesCount = this.state.gamesCount + 1;
        let winningCard = this.state.winningCard;

        // update the number of games played and the card that was clicked
        this.setState({
            gamesCount: newGamesCount
            , cardClicked: i
            ,
        });

        // declare winner or loser
        const oldStreak = this.state.streak;
        let streakDetail, adjustedStreak;
        let winningCardEmoji = "King.png";
        let losingCardEmoji = "Joker.png";

        if (i === winningCard) {
            streakDetail = "YOU WIN!";
        } else {
            streakDetail = "SORRY, YOU LOST!";
        }

        // update state
        this.setState({
            streak: adjustedStreak
            , streakDetail: streakDetail
            , oldStreak: oldStreak
            , winningCardEmoji: winningCardEmoji
            , losingCardEmoji: losingCardEmoji
            ,
        });

        // delay 1 second and flip the other two cards by changing isGameOver
        setTimeout(() => {
            this.setState({
                isGameOver: true
                ,
            })
        }
            , 1000);

    }

    resetGame() {
        this.setState({
            winningCard: this.getWinningCard()
            , cardClicked: 0
            , streakDetail: ""
            , oldStreak: this.state.streak
            , isGameOver: false
            ,
        });
    }

    render() {
        //show the play again button once a card has been clicked
        let playAgainButton;
        if (this.state.cardClicked !== 0) {
            playAgainButton = <><br /><Button onClick={() => this.resetGame()}>Play Again?</Button></>
        }
        return (
            <>
                <h3>Pick the King of Hearts to Win!</h3>
                <div className="col-9 row" style={{ width: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <Cards number="1" handleCardClick={this.handleCardClick} cardClicked={this.state.cardClicked === 1 ? true : false} isWinningCard={this.state.winningCard === 1 ? true : false} cardEmoji={this.state.winningCard === 1 ? this.state.winningCardEmoji : this.state.losingCardEmoji} isGameOver={this.state.isGameOver} />
                    <Cards number="2" handleCardClick={this.handleCardClick} cardClicked={this.state.cardClicked === 2 ? true : false} isWinningCard={this.state.winningCard === 2 ? true : false} cardEmoji={this.state.winningCard === 2 ? this.state.winningCardEmoji : this.state.losingCardEmoji} isGameOver={this.state.isGameOver} />
                    <Cards number="3" handleCardClick={this.handleCardClick} cardClicked={this.state.cardClicked === 3 ? true : false} isWinningCard={this.state.winningCard === 3 ? true : false} cardEmoji={this.state.winningCard === 3 ? this.state.winningCardEmoji : this.state.losingCardEmoji} isGameOver={this.state.isGameOver} />
                </div>
                <div style={{ width: '99%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <h3 className="result">{this.state.streakDetail}</h3><br />
                    <div className="playAgain">{playAgainButton}</div>
                </div>
                <Quit/>
            </>
        );
    }
}
export default CardGame;