export enum ColorEnum {
    Red,
    Black
}

export class Suit {
    constructor(initName: string, initColor: ColorEnum, initImage: string) {
        this.name = initName;
        this.color = initColor;
        this.image = initImage;
    }

    name: string;
    color: ColorEnum;
    image: string;
}

export class Suits {
    spades: Suit = new Suit("Spades", ColorEnum.Black, '');
    clubs: Suit = new Suit("Clubs", ColorEnum.Black, '');
    hearts: Suit = new Suit("Hearts", ColorEnum.Red, '');
    diamonds: Suit = new Suit("Diamonds", ColorEnum.Red, '');
}