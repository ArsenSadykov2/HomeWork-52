import Card from "./Card.ts";
class CardDeck {
    public deck: Card[];
    suits = ['diams', 'hearts', 'clubs', 'spades'];
    ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];

    constructor() {
        this.deck = this.cardDeckCreate();
    }

    cardDeckCreate = () => {
        let arrayOfCard: Card[] = [];

        this.suits.forEach(suit => {
            this.ranks.forEach(rank => {
                arrayOfCard.push(new Card(rank, suit));
            });
        });

        return arrayOfCard;
    }

    getCard = () => {
        let randomIndex = Math.floor(Math.random() * this.deck.length);
        let randomCard = this.deck[randomIndex];
        this.deck.splice(randomIndex, 1);
        return randomCard;
    }

    getCards = (howMany:number) => {
        let arrayOfCards: Card[] = [];

        for(let i = 0; i < howMany; i++) {
            let randomCard = this.getCard();
            arrayOfCards.push(randomCard);
        }

        return arrayOfCards;
    }
}

export default CardDeck;