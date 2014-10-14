function Javabuzz() {

	Javabuzz.prototype._isDivisbleBy = function(number, divisor) {
		return(number % divisor === 0);
	};

	Javabuzz.prototype.isDivisibleByThree = function(number) {
		return this._isDivisbleBy(number, 3);
	};

	Javabuzz.prototype.isDivisibleByFive = function(number) {
		return this._isDivisbleBy(number, 5);
	};

	Javabuzz.prototype.isDivisibleByFifteen = function(number) {
		return this._isDivisbleBy(number, 15);
	};

	Javabuzz.prototype.says = function(number) {
		if (this.isDivisibleByFifteen(number)) return "JavaBuzz";
		if (this.isDivisibleByThree(number)) return "Java";
		if (this.isDivisibleByFive(number)) return "Buzz";
		return number
	};
};