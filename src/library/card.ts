import {Suit, Suits} from './suits';

export class Card {
    constructor(initValue: number, initDescription: string, initSuit: Suit) {
        this.value = initValue;
        this.description = initDescription;
        this.suit = initSuit;
    }

    value: number;
    description: string;
    suit: Suit;
}