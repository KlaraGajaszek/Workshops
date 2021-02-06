"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const piece_1 = __importDefault(require("./piece"));
class Pawn extends piece_1.default {
    constructor(side) {
        super(side);
        this.side = side;
        this._display = `<i class="fas fa-chess-pawn ${side}"></i>`;
    }
    findLegalMoves(board, actualField) {
        const possibleMoves = new Array();
        if (this.side == 'white') {
            actualField.x - 1 > 0 && possibleMoves.push(`${actualField.x - 1},${actualField.y}`);
            actualField.x - 2 > 0 && possibleMoves.push(`${actualField.x - 2},${actualField.y}`);
        }
        return possibleMoves;
    }
}
exports.default = Pawn;
//# sourceMappingURL=pawn.js.map