import * as React from "react";
import {ICard} from "../../types.ts";

const CardItem: React.FC<ICard> = ({rank, suit}) => {
    const suits: {[key: string]: string} = {
        diams: '♦',
        hearts: '♥',
        clubs: '♣',
        spades: '♠'
    };
    return (
        <span className={`card rank-${String(rank).toLowerCase()} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suits[suit]}</span>
        </span>
    );
};

export default CardItem;