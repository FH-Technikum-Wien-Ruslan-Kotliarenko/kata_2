function Game() {}

Game.prototype.play = function(dice) {
    let totalPetals = 0;
        
    dice.forEach(die => {
        if (die === 3) {
            totalPetals += 2;
        } else if (die === 5) {
            totalPetals += 4;
        }
    });

    return totalPetals;
};
