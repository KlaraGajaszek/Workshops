"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const piece_1 = __importDefault(require("./piece"));
class Rook extends piece_1.default {
    constructor(side) {
        super(side);
        this.side = side;
        this._display = `<i class="fas fa-chess-rook ${side}"></i>`;
    }
    findLegalMoves(board, actualField) {
        const possibleMoves = new Array();
        return possibleMoves;
    }
}
exports.default = Rook;
//# sourceMappingURL=rook.js.map