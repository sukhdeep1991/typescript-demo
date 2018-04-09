interface ParseInt {
	number: string;
	getStringNumber(): string;
}

class Parser implements ParseInt {
	number: string;
	constructor(number: string) {
		this.number = number;
	}
	getStringNumber(){
		return this.number;
	}
	parseInt(){
		return parseInt(this.number);
	}
}

var instance = <ParseInt>{
	getStringNumber: function(this: ParseInt){
		return this.number;
	}
}
instance.getStringNumber = function(this: ParseInt) : string {
	return this.number;
}
instance.number = "10";
console.log(instance.getStringNumber());

var parser = new Parser(instance.number);
console.log(parser.getStringNumber());
console.log(parser.parseInt());
