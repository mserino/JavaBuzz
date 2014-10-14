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
		});
	});

	describe('when playing says', function(){
		it('Number when is not divisible by 3, 5 or 15', function(){
			expect(javabuzz.says(2)).toEqual(2);
		});
		
		it('"Java" when a number is divisible by 3', function(){
			expect(javabuzz.says(3)).toEqual('Java');
		});

		it('"Buzz" when a number is divisible by 5', function(){
			expect(javabuzz.says(5)).toEqual('Buzz');
		});

		it('"JavaBuzz" when a number is divisible by 15', function(){
			expect(javabuzz.says(15)).toEqual('JavaBuzz');
		});
	});
});