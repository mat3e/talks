/// 4. \\\

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
    // if you want this, then only number!
    age: 'abc'
}
