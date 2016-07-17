import {Suit, Suits} from './suits';
import {Card} from './card';


// populate the deck
export class Deck {
    constructor(initAcesHigh: boolean) {
        this.acesHigh = initAcesHigh;
        
        let descriptions = {
            Jack: 11,
            Queen: 12,
            King: 13,
            Ace: this.acesHigh ? 14 : 1,
            findDescription: function(value: number) : string {
                for (var prop in this) {
                    let propValue = this[prop];
                    if (propValue == value)
                        return prop;
                }

                return "";
            } 
        };

        // populate each suit
        let suits = new Suits();
        for (var suit in suits) {
            // add each card    
            for (var value = 1; value <= 13; value++) {
                let usedValue = this.acesHigh ? 2 : 1;
                let description = descriptions.findDescription(value);
                
                // create the card
                let card = new Card(value, description, suits[suit]);

                // add it to the deck
                this.cards.push(card);
            }
        }
    }
    
    cards: Card[];

    acesHigh: boolean;

    shuffle() : void {
        // duh
    }

    draw(howMany: number) : Card[] {
        // TODO:
        // 1. get howMany cards from the top of the deck
        // 2. assign those to the return array
        // 3. remove from the deck
        // 4. return the array
        
        return null;
    }
};