export const config = {
  nome: 'Sâmia',
  aniversario: '2026-09-20',
  de: 'Lucas',
  presente: {
    imagem: 'presente/Vale-Presente-Studio-Degrade.jpg',
    nomeDoArquivo: 'vale-presente-samia.jpg',
  },
}

export const dias = [
  {
    id: 'sex',
    data: '2026-09-18',
    atividades: [
      {
        id: 'sex-pizza',
        titulo: 'Noite da pizza',
        com: ['Luciana', 'a família'],
      },
    ],
  },
  {
    id: 'sab',
    data: '2026-09-19',
    atividades: [
      {
        id: 'sab-vestido',
        titulo: 'Prova de vestido da nova noivinha e café de miss',
        com: ['Karol'],
      },
      {
        id: 'sab-almoco',
        titulo: 'Almoço no Mayú',
        lugar: 'Mayú',
        com: ['Robson'],
      },
    ],
  },
  {
    id: 'dom',
    data: '2026-09-20',
    aniversario: true,
    atividades: [
      {
        id: 'dom-cafe',
        titulo: 'Café da manhã na Vonet Pâtisserie',
        lugar: 'Vonet Pâtisserie',
        com: ['Lauro', 'Suzana', 'Beatriz', 'Hugo'],
      },
      {
        id: 'dom-almoco',
        titulo: 'Almoço na Casa do Peixe',
        lugar: 'Casa do Peixe Vivo',
        com: ['a família'],
      },
      {
        id: 'dom-jantar',
        titulo: 'Jantar no Manur Izakaya',
        lugar: 'Manur Izakaya',
        com: ['Mateus', 'Daniel'],
      },
    ],
  },
]
