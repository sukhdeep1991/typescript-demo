function idintity<T>(arg: T): T{
	return arg;
}

console.log(idintity(100));

class Generic<T> {
	first: T;
	constructor(first: T){
		this.first = first;
	}
	add: (second: T) => T;
}

class SecondGeneric<T> extends Generic<T>{
	constructor(first: T){
		super(first);
	}
	substract: (second: T) => T;
}

let myGeneric = new Generic<number>(10);
myGeneric.add = function(this: Generic<number>, second){
	return this.first + second;
}
let mySecondGeneric = new SecondGeneric(50);
mySecondGeneric.substract = function(this: Generic<number>, second){
	return this.first + second;
}
console.log(myGeneric.add(20));
console.log(mySecondGeneric.substract(20));

interface Lengthwise {
	length: number;
}

function identityLength<T extends Lengthwise>(instance: T){
	return instance.length;
}

console.log(identityLength("100"));
console.log(identityLength(new Array<number>(100)));

