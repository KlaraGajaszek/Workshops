"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Piece {
    constructor(side) {
        this.side = side;
        this.side = side;
    }
    get display() {
        return this._display;
    }
    move(oldField, newField) {
        oldField.piece = null;
        document.getElementById(`${oldField.x},${oldField.y}`).innerHTML = '';
        newField.piece = this;
        document.getElementById(`${newField.x},${newField.y}`).innerHTML = this.display;
    }
}
exports.default = Piece;
//# sourceMappingURL=piece.js.map