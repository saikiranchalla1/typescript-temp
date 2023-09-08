interface NewPerson {
    firstName: string;
    lastName: string;
    birthDate?: string
    readonly age: number
}

interface UserProfile { // camel case

}
function getFullName(person: NewPerson) {
    return `${person.firstName} ${person.lastName} `;
}


let person = {
    firstName: "John",
    lastName: "Doe"
}

// getFullName(person);


