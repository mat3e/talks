/// 5. Interfejsy - readonly \\\

interface IPoint {
    readonly x: number;
    readonly y: number;
}

class Point implements IPoint {
    // dla x jawnie readonly, bo odczyt i zapis razem spełniają kontrakt odczytu
    constructor(private _y: number, readonly x: number) {}

    // nie musimy deklarować zwracanego typu (inference)
    get y(): number {
        return this._y;
    }
}

new Point(1, 1).x = 4;

function modify(p: IPoint): void {
    p.y = 7;
}
