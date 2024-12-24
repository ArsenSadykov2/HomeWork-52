import Card from "./Card.ts";
class PokerHand {
    constructor(public hand: Card[]) {
        this.hand = hand;
    }

    getOutcome = () => {
        const suit: {[key: string]: number} = {
            diams: 0,
            hearts: 0,
            clubs: 0,
            spades: 0,
        };

        const rank: {[key: string]: number} = {
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            J: 0,
            Q: 0,
            K: 0,
            A: 0
        };
        console.log(this.hand);
        const suitHandArray = this.hand.map(card => {
            return card.suit;
        });
        const rankHandArray = this.hand.map(card => {
            return card.rank;
        });

        console.log(suitHandArray);
        console.log(rankHandArray);

        console.log('-----------');
        suitHandArray.forEach(s => suit[s]++);
        rankHandArray.forEach(r => rank[r]++);

        let suitCountArray = Object.values(suit);
        let flushCheck = suitCountArray.filter(s => s === 5);
        if(flushCheck.length === 1) {
            return 'You Have a Flush';
        }

        let rankCountArray = Object.values(rank);


        let pairCheck = rankCountArray.filter(rank => {
            if(rank === 2) {
                return rank;
            }
        });

        if(pairCheck.length === 1) {
            return 'One Pair';
        }
        if(pairCheck.length === 2) {
            return 'Two Pairs';
        }

        let threeCardsCheck = rankCountArray.filter(rank => {
            if(rank === 3) {
                return rank;
            }
        });
        if(threeCardsCheck.length === 1) {
            return 'Three of a kind';
        }

        return 'High Card';
    }
}

export default PokerHand;