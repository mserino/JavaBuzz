describe('JavaBuzz', function(){

	var javabuzz;
	describe('knows when a number is', function(){
		it('divisible by three', function(){
			javabuzz = new Javabuzz();
			expect(isDivisibleByThree(3)).toEqual(true);
		});
	});
});