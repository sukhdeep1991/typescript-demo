enum Course {
	BTech,
	MTech,
	MBA
}

class Student {
	fullName: string;
	course: Course;
	constructor(public firstName: string, middleName: string, public lastName: string){
		this.course = Course.BTech;
		this.fullName = firstName + " " + middleName + " " + lastName;
	}
}

interface Person {
	firstName: string,
	lastName: string
}

function greeter(person: Person){
	let isReady: boolean = true;
	return `Good day!
	Mr. ${person.firstName}  ${person.lastName} `;
}

let user = new Student("Sukhdeep", "Singh", "Handa");

function greetPersons(persons: Student[]){
	var str = "";
	persons.forEach((person) => {
		str += `${person.firstName} ${person.lastName} is studying ${Course[person.course]} \n`;
	});
	return str;
}

document.body.innerHTML = `<pre> ${greeter(user)} 
${greetPersons([user, new Student("John", "m.", "McD")])}</pre>`;

for(let i = 0 ; i < 10 ; i ++){
	setTimeout(function(){
		document.body.innerHTML += i;
	}, 1000*i);
}