import Constellation from './Constellation.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirgo } from '@fortawesome/free-solid-svg-icons'
import { config } from '../data/config.js'
import { diasAte, partesDaData } from '../utils.js'

function textoContagem(faltam) {
  if (faltam > 1) return `Faltam ${faltam} dias`
  if (faltam === 1) return 'O Grande dia ta chegando'
  if (faltam === 0) return 'É HOJE? É HOJE? É HOJEEEE!!!'
  return 'Que dia lindo foi esse'
}

export default function Hero() {
  const faltam = diasAte(config.aniversario)
  const { dia, mes } = partesDaData(config.aniversario)

  return (
    <header className="hero">
      <div className="hero-conteudo">
        <div className="selo">
          <FontAwesomeIcon icon={faVirgo} />
          <span>{dia} de {mes}</span>
        </div>

        <h1>
          Ihuuul chegou seu final de semana !!!
        </h1>

        <p className="hero-sub">
          O que temos de programação para o final de semana?
          <br />
           30 da {config.nome}
        </p>

        <p className="contagem" aria-live="polite">
          {textoContagem(faltam)}
        </p>

        <a className="hero-link" href="#programacao">
          Programação
        </a>
      </div>

      <div className="hero-arte">
        <Constellation />
      </div>
    </header>
  )
}
