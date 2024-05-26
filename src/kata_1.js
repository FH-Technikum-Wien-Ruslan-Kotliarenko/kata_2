class Game {
    constructor() {
        this.PETALS_MAP = {
            3: 2,
            5: 4
        };
    }

    play(dice) {
        return dice.reduce((totalPetals, die) => totalPetals + (this.PETALS_MAP[die] || 0), 0);
    }
}
