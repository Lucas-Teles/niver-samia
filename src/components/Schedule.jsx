import { dias } from '../data/config.js'
import useChecklist from '../useChecklist.js'
import { diasAte, partesDaData, urlDoMapa } from '../utils.js'

const lista = new Intl.ListFormat('pt-BR', { style: 'long', type: 'conjunction' })

function IconePin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

function Atividade({ item, marcado, aoAlternar }) {
  return (
    <li className={marcado ? 'atividade feita' : 'atividade'}>
      <label className="atividade-corpo">
        <input type="checkbox" checked={!!marcado} onChange={() => aoAlternar(item.id)} />
        <span className="caixa" aria-hidden="true">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3.5 8.5l3 3 6-7" />
          </svg>
        </span>
        <span className="atividade-texto">
          <span className="atividade-titulo">{item.titulo}</span>
          {item.com?.length > 0 && (
            <span className="atividade-com">Com {lista.format(item.com)}</span>
          )}
        </span>
      </label>

      {item.lugar && (
        <a className="mapa" href={urlDoMapa(item.lugar)} target="_blank" rel="noopener noreferrer">
          <IconePin />
          Ver no mapa
        </a>
      )}
    </li>
  )
}

export default function Schedule() {
  const [marcados, alternar] = useChecklist()

  const todas = dias.flatMap((d) => d.atividades)
  const feitas = todas.filter((a) => marcados[a.id]).length
  const percentual = todas.length ? Math.round((feitas / todas.length) * 100) : 0

  return (
    <section className="programacao" id="programacao" aria-labelledby="titulo-programacao">
      <div className="programacao-topo">
        <h2 id="titulo-programacao">Programação do fim de semana</h2>
        <p>Marque cada momento quando ele acontecer.</p>

        <div className="progresso" role="group" aria-label="Progresso da programação">
          <div className="progresso-barra" aria-hidden="true">
            <span style={{ width: `${percentual}%` }} />
          </div>
          <p className="progresso-texto">
            {feitas} de {todas.length} {todas.length === 1 ? 'momento vivido' : 'momentos vividos'}
          </p>
        </div>
      </div>

      <ol className="dias">
        {dias.map((dia) => {
          const { dia: num, semana, mes } = partesDaData(dia.data)
          const dif = diasAte(dia.data)
          const classes = ['dia', dif === 0 && 'hoje', dif < 0 && 'passado', dia.aniversario && 'aniversario']
            .filter(Boolean)
            .join(' ')

          return (
            <li key={dia.id} className={classes}>
              <div className="dia-data">
                <span className="dia-num">{num}</span>
                <span className="dia-extenso">
                  <span className="dia-semana">{semana}</span>
                  <span className="dia-mes">{mes}</span>
                </span>
                {dif === 0 && <span className="etiqueta etiqueta-hoje">Hoje</span>}
                {dia.aniversario && <span className="etiqueta etiqueta-niver">Dia do aniversário</span>}
              </div>

              <ul className="atividades">
                {dia.atividades.map((a) => (
                  <Atividade key={a.id} item={a} marcado={marcados[a.id]} aoAlternar={alternar} />
                ))}
              </ul>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
