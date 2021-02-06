"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const touched_1 = __importDefault(require("./touched"));
const board_1 = __importDefault(require("./board"));
const setup = () => {
    var _a;
    const board = new board_1.default();
    board.initBoard();
    const fields = board.fields;
    for (let x = 0; x < board.boardSize; x++) {
        for (let y = 0; y < board.boardSize; y++) {
            const square = document.createElement('div');
            square.id = `${x},${y}`;
            square.className = 'square';
            square.className += x % 2 == y % 2 ? ' light' : ' dark';
            let field = fields[x][y];
            if (!field.isEmpty()) {
                square.innerHTML = field.piece.display;
            }
            square.addEventListener('click', (e) => {
                touched_1.default(e, board);
            });
            (_a = document.getElementById('board')) === null || _a === void 0 ? void 0 : _a.appendChild(square);
        }
    }
};
exports.setup = setup;
//# sourceMappingURL=setup.js.map