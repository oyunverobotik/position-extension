
enum PosEnum {
        //% block="x"
        X=1,
        //% block="y"
        Y=2
}

namespace Position {
    /**
    * TODO: You can create the position as row and cols
    * @param n describe parameter here, eg: 5
    * @param s describe parameter here, eg: "Hello"
    */

    /**
     * @param x describe parameter here, eg: 3
     * @param y describe parameter here, eg: 5
     */
    //% block
    export function position(x: number,  y:number): Position {
        return new Position(x, y);
    }

    //% block
    export function getPos(pos: Position,  e:PosEnum): number {
        if(e == 1)
            return pos.row;
        else
            return pos.col;
    }

    /**
     * A (col, row) location in the tilemap
     **/
    //% blockNamespace=scene color="#401255" blockGap=8
    export class Position {
        protected _row: number;
        protected _col: number;

        get col() {
            return this._col;
        }

        get row() {
            return this._row;
        }

        constructor(row: number, col: number) {
            this._col = col;
            this._row = row;
        }

        get x(): number {
            return this._col;
        }

        get y(): number {
            return this._row;
        }

        toString(): string{
            return this._row + ', ' + this._col;
        }

        /**
         * Center the given sprite on this tile
         * @param sprite
         */
        place(mySprite: Sprite): void {
            if (!mySprite) return;
            mySprite.setPosition(this.x, this.y);
        }

    }
}
