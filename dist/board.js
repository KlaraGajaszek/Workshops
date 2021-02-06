"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const field_1 = __importDefault(require("./field"));
const pawn_1 = __importDefault(require("./pieces/pawn"));
const rook_1 = __importDefault(require("./pieces/rook"));
const knight_1 = __importDefault(require("./pieces/knight"));
const bishop_1 = __importDefault(require("./pieces/bishop"));
const queen_1 = __importDefault(require("./pieces/queen"));
const king_1 = __importDefault(require("./pieces/king"));
class Board {
    constructor() {
        this.boardSize = 8;
        this._fields = new Array(this.boardSize);
        for (let i = 0; i < 8; i++) {
            this._fields[i] = new Array(this.boardSize);
        }
    }
    get fields() {
        return this._fields;
    }
    getField(x, y) {
        if (x < 0 || x > 7 || y < 0 || y > 7) {
            throw new Error('Index out of bound');
        }
        return this.fields[x][y];
    }
    initBoard() {
        this.initPawns();
        this.initRooks();
        this.initKnights();
        this.initBishops();
        this.initQueens();
        this.initKings();
        this.initEmptyFields();
    }
    initPawns() {
        for (let i = 0; i < this.boardSize; i++) {
            this._fields[1][i] = new field_1.default(1, i, new pawn_1.default('black'));
            this._fields[6][i] = new field_1.default(6, i, new pawn_1.default('white'));
        }
    }
    initRooks() {
        this._fields[0][0] = new field_1.default(0, 0, new rook_1.default('black'));
        this._fields[0][7] = new field_1.default(0, 7, new rook_1.default('black'));
        this._fields[7][0] = new field_1.default(7, 0, new rook_1.default('white'));
        this._fields[7][7] = new field_1.default(7, 7, new rook_1.default('white'));
    }
    initKnights() {
        this._fields[0][1] = new field_1.default(0, 1, new knight_1.default('black'));
        this._fields[0][6] = new field_1.default(0, 6, new knight_1.default('black'));
        this._fields[7][1] = new field_1.default(7, 1, new knight_1.default('white'));
        this._fields[7][6] = new field_1.default(7, 6, new knight_1.default('white'));
    }
    initBishops() {
        this._fields[0][2] = new field_1.default(0, 2, new bishop_1.default('black'));
        this._fields[0][5] = new field_1.default(0, 5, new bishop_1.default('black'));
        this._fields[7][2] = new field_1.default(7, 2, new bishop_1.default('white'));
        this._fields[7][5] = new field_1.default(7, 5, new bishop_1.default('white'));
    }
    initQueens() {
        this._fields[0][3] = new field_1.default(0, 3, new queen_1.default('black'));
        this._fields[7][3] = new field_1.default(7, 3, new queen_1.default('white'));
    }
    initKings() {
        this._fields[0][4] = new field_1.default(0, 4, new king_1.default('black'));
        this._fields[7][4] = new field_1.default(7, 4, new king_1.default('white'));
    }
    initEmptyFields() {
        for (let i = 0; i < this.boardSize; i++) {
            if (i !== 0 && i !== 1 && i !== 6 && i !== 7) {
                for (let j = 0; j < this.boardSize; j++) {
                    this._fields[i][j] = new field_1.default(i, j, null);
                }
            }
        }
    }
}
exports.default = Board;
//# sourceMappingURL=board.js.map