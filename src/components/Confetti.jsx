import { useMemo } from 'react'

const cores = ['#92A8D1', '#C6A24E', '#E8D5A2', '#FFFFFF', '#B9C8E4']

// Confete leve em CSS puro; é montado de novo a cada abertura do presente
export default function Confetti({ quantidade = 44 }) {
  const pecas = useMemo(
    () =>
      Array.from({ length: quantidade }, (_, i) => ({
        id: i,
        esquerda: Math.random() * 100,
        atraso: Math.random() * 0.6,
        duracao: 2.2 + Math.random() * 1.8,
        tamanho: 7 + Math.random() * 8,
        giro: (Math.random() < 0.5 ? -1 : 1) * (360 + Math.random() * 540),
        deriva: (Math.random() - 0.5) * 160,
        cor: cores[i % cores.length],
        redondo: i % 3 === 0,
      })),
    [quantidade],
  )

  return (
    <div className="confete" aria-hidden="true">
      {pecas.map((p) => (
        <span
          key={p.id}
          style={{
            left: `${p.esquerda}%`,
            width: p.tamanho,
            height: p.redondo ? p.tamanho : p.tamanho * 0.5,
            background: p.cor,
            borderRadius: p.redondo ? '50%' : '2px',
            animationDelay: `${p.atraso}s`,
            animationDuration: `${p.duracao}s`,
            '--giro': `${p.giro}deg`,
            '--deriva': `${p.deriva}px`,
          }}
        />
      ))}
    </div>
  )
}
