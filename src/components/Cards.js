//impoting react library, bootstrap libraby, images
import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ReactCardFlip from 'react-card-flip';
import cardBack from "../images/cardBack.jpeg"
import King from "../images/King.png"
import Joker from "../images/Joker.png"

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleCardClick = this.props.handleCardClick.bind(this);
        this.flipCard = this.flipCard.bind(this);
        this.backOfCardImage = cardBack;
    }

    flipCard(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {

        let onClick = null;
        //passing the card number back up
        if (!this.props.isAnyCardUp) {
            onClick = () => { this.handleCardClick(Number(this.props.number)); this.flipCard(window.event); };
        }

        const win = King;
        const lose = Joker;


        const isFlipped = this.props.isGameOver ? true : this.props.cardClicked ? true : false;

        // cards are either winners or losers and have images associated with each.
        if (this.props.isWinningCard) {
            return (
                <ReactCardFlip isFlipped={isFlipped}>
                    <div key="front">
                        <Image src={this.backOfCardImage} style={{ width: '200px', height: '300px', margin: '5px', borderRadius: '10px' }} onClick={onClick} />
                    </div>

                    <div key="back">
                        <Card style={{ width: '200px', height: '300px', margin: '5px', borderRadius: '18px' }} onClick={onClick}>
                            <Card.Body>
                                <Card.Text>
                                    <img className="cardImg" src={win} style={{ width: '200px', height: '300px', margin: '5px' }} alt={win} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </ReactCardFlip>
            )
        } else {
            return (
                <ReactCardFlip isFlipped={isFlipped}>
                    <div key="front">
                        <Image src={this.backOfCardImage} style={{ width: '200px', height: '300px', margin: '5px', borderRadius: '10px' }} onClick={onClick} />
                    </div>

                    <div key="back">
                        <Card style={{ width: '200px', height: '300px', margin: '5px', borderRadius: '18px' }} onClick={onClick}>
                            <Card.Body>
                                <Card.Text>
                                    <img className="cardImg" src={lose} style={{ width: '200px', height: '300px', margin: '5px' }} alt={lose} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </ReactCardFlip>
            )
        }
    }
}

export default Cards;