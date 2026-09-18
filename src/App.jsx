import Hero from './components/Hero.jsx'
import Schedule from './components/Schedule.jsx'
import Gift from './components/Gift.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirgo } from '@fortawesome/free-solid-svg-icons'
import { config } from './data/config.js'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Schedule />
        <Gift />
      </main>
      <footer className="rodape">
        <FontAwesomeIcon icon={faVirgo} size="lg" />
        <p>Feito com bem muito amor por {config.de}</p>
      </footer>
    </>
  )
}
