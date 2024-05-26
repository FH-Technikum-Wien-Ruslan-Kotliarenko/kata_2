describe('Self Study 1 – TDD Coding Kata “Help ALF“', function() {
    beforeEach(function() {
        space = new Space();
    });

    // Todo List:
    // 1. Should return the correct coordinates of the spaceship when it's found in the center of the map.
	it('should return the correct coordinates when the spaceship is in the center of the map', function() {
		const map = "......\n" +
				  "......\n" +
				  "..X...\n" +
				  "......\n" +
				  "......\n"
		expect(space.findSpaceship(map)).toEqual([2, 2]);
	});

    // 2. Should return the correct coordinates of the spaceship when it's found at the top-left corner of the map.
	it('should return the correct coordinates when the spaceship is at the top-left corner of the map', function() {
		const map = "X......\n" +
				  "......\n" +
				  "......\n" +
				  "......\n" +
				  "......\n"
		expect(space.findSpaceship(map)).toEqual([0, 0]);
	});

    // 3. Should return the correct coordinates of the spaceship when it's found at the bottom-right corner of the map.
	it('should return the correct coordinates when the spaceship is at the bottom-right corner of the map', function() {
		const map = "......\n" +
				  "......\n" +
				  "......\n" +
				  "......\n" +
				  "......X\n"
		expect(space.findSpaceship(map)).toEqual([4, 6]);
	});

    // 4. Should return "Spaceship lost forever." if the spaceship is not found in the map.
	it('should return "Spaceship lost forever." if the spaceship is not found in the map', function() {
		const map = "......\n" +
				  "......\n" +
				  "......\n" +
				  "......\n" +
				  "......\n"
		expect(space.findSpaceship(map)).toEqual("Spaceship lost forever.");
	});


    // 5. Should handle a map with irregular shapes and sizes.
	it('should handle a map with irregular shapes and sizes', function() {
		const map = "......\n" +
				  "......\n" +
				  "......\n" +
				  "......\n" +
				  "......X\n" +
				  "......\n" +
				  "......\n"
		expect(space.findSpaceship(map)).toEqual([4, 6]);
	});
});

