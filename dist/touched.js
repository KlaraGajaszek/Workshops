"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const touched = (e, board) => {
    const target = e.currentTarget;
    if (target) {
        const x = parseInt(target.id[0]);
        const y = parseInt(target.id[2]);
        const field = board.getField(x, y);
        if (!field || !field.piece) {
            return;
        }
        const possibleMoves = field.piece.findLegalMoves(board, field);
        for (let move of possibleMoves) {
            document.getElementById(move).className += ` possibleMove`;
            document.getElementById(move).addEventListener('click', () => {
                var _a, _b;
                if (field.piece) {
                    field.piece.move(field, board.getField(parseInt(move[0]), parseInt(move[2])));
                }
                for (let x = 0; x < board.boardSize; x++) {
                    for (let y = 0; y < board.boardSize; y++) {
                        document.getElementById(`${x},${y}`).className = document
                            .getElementById(`${x},${y}`)
                            .className.replace(`possibleMove`, '');
                        let old_element = document.getElementById(`${x},${y}`);
                        let new_element = old_element.cloneNode(true);
                        (_a = old_element.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(new_element, old_element);
                        (_b = document.getElementById(`${x},${y}`)) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {
                            touched(e, board);
                        });
                    }
                }
            });
        }
    }
};
exports.default = touched;
//# sourceMappingURL=touched.js.map