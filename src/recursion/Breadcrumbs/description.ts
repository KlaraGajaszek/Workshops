// IN url for example '/about/consultations/collaboration'
// OUT 'o mnie/ Konsultacje/ Współpraca

export const routes = [
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
