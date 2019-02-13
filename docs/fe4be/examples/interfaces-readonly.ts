/// 5. \\\

interface IPoint {
    readonly x: number;
    readonly y: number;
}

class Point implements IPoint {
    // explicit readonly
    constructor(private _y: number, readonly x: number) {}

    // a return type can be interferred
    get y(): number {
        return this._y;
    }
}

new Point(1, 1).x = 4;

function modify(p: IPoint): void {
    p.y = 7;
}
