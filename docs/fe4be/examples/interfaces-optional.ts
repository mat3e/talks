/// 4. Interfejsy - pola niewymagane \\\

interface IPerson {
    name: string;
    surname: string;
    age?: number;
}

class Person implements IPerson {
    // syntactic sugar; Kotlin?
    constructor(public name: string, public surname: string) {}
}

const obj: IPerson = {
    name: 'Test',
    surname: 'Testowy',
    // jak już jest, to musi być number!
    age: 'abc'
}
