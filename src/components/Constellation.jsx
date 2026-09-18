const estrelas = [
  { id: 'spica', x: 118, y: 292, r: 9, principal: true },
  { id: 'heze', x: 176, y: 232, r: 5.5 },
  { id: 'porrima', x: 218, y: 168, r: 6 },
  { id: 'auva', x: 282, y: 128, r: 5 },
  { id: 'vindemiatrix', x: 348, y: 66, r: 6 },
  { id: 'minelauva', x: 150, y: 108, r: 4.5 },
  { id: 'zavijava', x: 66, y: 84, r: 5.5 },
  { id: 'syrma', x: 250, y: 262, r: 4 },
]

const linhas = [
  ['spica', 'heze'],
  ['heze', 'porrima'],
  ['porrima', 'auva'],
  ['auva', 'vindemiatrix'],
  ['porrima', 'minelauva'],
  ['minelauva', 'zavijava'],
  ['heze', 'syrma'],
]

const poeira = [
  [30, 200], [98, 40], [200, 34], [300, 30], [372, 170], [330, 250],
  [40, 320], [190, 330], [290, 320], [380, 300], [250, 90], [120, 190],
  [20, 140], [340, 130], [210, 290],
]

const mapa = Object.fromEntries(estrelas.map((e) => [e.id, e]))

export default function Constellation() {
  return (
    <svg
      className="constellation"
      viewBox="0 0 400 360"
      role="img"
      aria-label="Constelação de Virgem"
    >
      <defs>
        <radialGradient id="brilho" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF4C7" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#F3D98B" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F3D98B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {poeira.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.8 : 1.2} className="poeira" />
      ))}

      {linhas.map(([a, b], i) => (
        <path
          key={a + b}
          d={`M${mapa[a].x} ${mapa[a].y} L${mapa[b].x} ${mapa[b].y}`}
          pathLength="1"
          className="linha"
          style={{ '--i': i }}
        />
      ))}

      {estrelas.map((e, i) => (
        <g key={e.id} className={e.principal ? 'estrela principal' : 'estrela'} style={{ '--i': i }}>
          <circle cx={e.x} cy={e.y} r={e.r * (e.principal ? 4.4 : 3)} fill="url(#brilho)" />
          <path
            d={estrela4(e.x, e.y, e.r * 2.4, e.r * 0.55)}
            className="ponta"
          />
          <circle cx={e.x} cy={e.y} r={e.r * 0.55} className="miolo" />
        </g>
      ))}

      <text x="132" y="322" className="legenda-estrela">
        Spica
      </text>
    </svg>
  )
}

// estrela de 4 pontas
function estrela4(cx, cy, R, r) {
  const pts = []
  for (let i = 0; i < 8; i++) {
    const ang = (Math.PI / 4) * i - Math.PI / 2
    const raio = i % 2 === 0 ? R : r
    pts.push(`${(cx + Math.cos(ang) * raio).toFixed(2)} ${(cy + Math.sin(ang) * raio).toFixed(2)}`)
  }
  return `M${pts.join(' L')} Z`
}
