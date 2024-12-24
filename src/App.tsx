import './App.css'
import CardDeck from "./lib/CardDeck.ts";
import {useState} from "react";
import CardItem from "./Components/CardItem/CardItem.tsx";
import Card from "./lib/Card.ts";
import PokerHand from "./lib/PokerHand.ts";

const cardDeck = new CardDeck();


const App = () => {
    const [hand, setHand] = useState<Card[]>([]);
    const [combination, setCombination] = useState<string>('');

    const getFiveCards = () => {
        let fiveCards = cardDeck.getCards(5)
        setHand(fiveCards);

        const pokerHand = new PokerHand(fiveCards);
        setCombination(pokerHand.getOutcome());
    };

    return (
        <>
            <div className="container">
                <h4>Cards: {cardDeck.deck.length}</h4>
                <hr/>
                <p>Cards of round: {combination}</p>
                <hr/>
                {cardDeck.deck.length < 5 ?
                    null
                    :
                    <button onClick={getFiveCards}>Get Cards</button>}
                <hr/>
                <div className="playingCards faceImages">
                    {hand.map((card) => (
                        <CardItem
                            key={card.rank + card.suit}
                            rank={card.rank}
                            suit={card.suit}
                        />
                    ))}
                </div>
            </div>

        </>
    )
};

export default App