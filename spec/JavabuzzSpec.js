describe('JavaBuzz', function(){

	var javabuzz;

	beforeEach(function(){
		javabuzz = new Javabuzz();
	});

	describe('knows when a number is', function(){
		it('divisible by three', function(){
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
		});

		it('divisible by five', function(){
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
		});

		it('divisible by fifteen', function(){
			expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
		})
	});

	describe('knows when a number is not', function(){
		it('divisible by three', function(){
			expect(javabuzz.isDivisibleByThree(1)).toEqual(false);
		});

		it('divisible by five', function(){
			expect(javabuzz.isDivisibleByFive(1)).toEqual(false);
		});

		it('divisible by fifteen', function(){
			expect(javabuzz.isDivisibleByFifteen(1)).toEqual(false);
		})
	})
});