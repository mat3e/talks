/// 9. Własne type guards \\\

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

// załóżmy, że nie znamy implementacji
function getSmallPet(): Fish | Bird {
    return { swim: () => alert('swimming'), layEggs: () => alert('laying') }
}

const pet = getSmallPet();
// ok
pet.layEggs();
// compile error, runtime ok
pet.swim();
// compile ok, runtime error
(pet as Bird).fly();

// type guard
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
// użycie
if(isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}
