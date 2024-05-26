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

    it('should return 2 for the input [6, 6, 4, 4, 1, 3]', function() {
        const input = [6, 6, 4, 4, 1, 3];
        const expectedOutput = 2;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });

    it('should return 12 for the input [3, 5, 3, 5, 4, 2]', function() {
        const input = [3, 5, 3, 5, 4, 2];
        const expectedOutput = 12;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });

    it('should return 8 for the input [4, 2, 5, 5, 4]', function() {
        const input = [4, 2, 5, 5, 4];
        const expectedOutput = 8;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
    
    it('should return 8 for the input [2, 5, 1, 3, 3]', function() {
        const input = [2, 5, 1, 3, 3];
        const expectedOutput = 8;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
    
    it('should return 8 for the input [2, 5, 2, 5, 6]', function() {
        const input = [2, 5, 2, 5, 6];
        const expectedOutput = 8;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
    
    it('should return 6 for the input [6, 2, 5, 3, 2]', function() {
        const input = [6, 2, 5, 3, 2];
        const expectedOutput = 6;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
    
    it('should return 0 for the input [4, 2, 1, 1, 2]', function() {
        const input = [4, 2, 1, 1, 2];
        const expectedOutput = 0;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
    
    it('should return 6 for the input [5, 6, 3, 6, 6]', function() {
        const input = [5, 6, 3, 6, 6];
        const expectedOutput = 6;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
    
    it('should return 0 for the input [2, 6, 2, 2, 4]', function() {
        const input = [2, 6, 2, 2, 4];
        const expectedOutput = 0;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
    
    it('should return 2 for the input [3, 2, 4, 2, 1]', function() {
        const input = [3, 2, 4, 2, 1];
        const expectedOutput = 2;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
    
    it('should return 2 for the input [4, 4, 2, 6, 3]', function() {
        const input = [4, 4, 2, 6, 3];
        const expectedOutput = 2;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
    
    it('should return 8 for the input [2, 1, 5, 1, 5]', function() {
        const input = [2, 1, 5, 1, 5];
        const expectedOutput = 8;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
    
    it('should return 8 for the input [1, 5, 5, 2, 4]', function() {
        const input = [1, 5, 5, 2, 4];
        const expectedOutput = 8;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
    
    it('should return 6 for the input [5, 2, 4, 6, 3]', function() {
        const input = [5, 2, 4, 6, 3];
        const expectedOutput = 6;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
    
    it('should return 6 for the input [1, 6, 1, 5, 3]', function() {
        const input = [1, 6, 1, 5, 3];
        const expectedOutput = 6;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });
    
    it('should return 2 for the input [1, 4, 3, 2, 6]', function() {
        const input = [1, 4, 3, 2, 6];
        const expectedOutput = 2;
        const result = game.play(input);
        expect(result).toBe(expectedOutput);
    });    
});
