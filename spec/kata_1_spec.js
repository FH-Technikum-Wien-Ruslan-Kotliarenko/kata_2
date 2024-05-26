describe('Self Study 2 – TDD Pair Programming Coding Kata “Electrons around the cores“', function() {
    beforeEach(function() {
        game = new Game();
    });

    it('should return 6 for the input [1, 2, 3, 4, 5]', function() {
        const input = [1, 2, 3, 4, 5];
        const expectedOutput = 6;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });

    it('should return 4 for the input [2, 2, 3, 3]', function() {
        const input = [2, 2, 3, 3];
        const expectedOutput = 4;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
});

