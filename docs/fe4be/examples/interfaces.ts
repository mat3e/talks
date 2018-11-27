/// 3. Interfejsy - wstęp \\\

interface IFullName {
    name: string;
    surname: string;
}

interface IPerson {
    fullName: IFullName;
    introduce(): void;
}

class FullName implements IFullName {
    name: string;
    surname: string;
    
    constructor({ name, surname }: IFullName) {
        this.name = name;
        this.surname = surname;
    }

    toString() {
        return `${this.name} ${this.surname}`;
    }
}

class Person implements IPerson {
    fullName: FullName;

    // 1. duck typing = dowolny {name: string, surname: string} spełnia kontrakt IFullName
    // 2. [key: string]: any = fallback (będą jeszcze inne klucze-stringi z dowolnymi wartościami)
    constructor(fullName: { name: string, surname: string/*, [key: string]: any*/}) {
        this.fullName = new FullName(fullName);
    }
    
    introduce(): void {
        alert(`Hi, I'm ${this.fullName}!`);
    }
}

new Person({name: 'Mietek', surname: 'Szczęsny', age: 99}).introduce();
