class Game {
    /**
     * Constructs a new Game object.
     * Initializes the PETALS_MAP property to map die numbers to their corresponding number of petals.
     */
    constructor() {
        // PETALS_MAP maps die numbers to their corresponding number of petals
        this.PETALS_MAP = {
            3: 2, // Die number 3 has 2 petals
            5: 4  // Die number 5 has 4 petals
        };
    }

    /**
     * Calculates the total number of petals around the cores based on the rolled dice.
     * @param {number[]} dice - The array of rolled dice numbers.
     * @returns {number} The total number of petals around the cores.
     */
    play(dice) {
        // Use reduce method to calculate the total number of petals
        return dice.reduce((totalPetals, die) => totalPetals + (this.PETALS_MAP[die] || 0), 0);
    }
}
