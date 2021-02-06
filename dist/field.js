"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Field {
    constructor(x, y, piece) {
        this._piece = piece;
        this._x = x;
        this._y = y;
    }
    get piece() {
        return this._piece;
    }
    set piece(piece) {
        this._piece = piece;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    isEmpty() {
        return this._piece === null;
    }
}
exports.default = Field;
//# sourceMappingURL=field.js.map