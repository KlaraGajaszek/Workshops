"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
exports.routes = [
    {
        path: '/about',
        label: 'O mnie',
        routes: [
            {
                path: '/consultations',
                label: "Konsultacje"
            }, {
                path: '/collaboration',
                label: "Współpraca"
            }
        ]
    }, {
        path: '/settings',
        label: 'Ustawienia',
        routes: [
            {
                path: '/agreements',
                label: 'Zgody'
            }, {
                path: '/data',
                label: 'Dane'
            }
        ]
    }
];
//# sourceMappingURL=description.js.map