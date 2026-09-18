import { useRef, useState } from 'react'
import Confetti from './Confetti.jsx'
import { config } from '../data/config.js'
import { urlPublica } from '../utils.js'

function baixar(url, nome) {
  const a = document.createElement('a')
  a.href = url
  a.download = nome
  a.rel = 'noopener'
  document.body.appendChild(a)
  a.click()
  a.remove()
}

function IconePresente() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}

export default function Gift() {
  const dialogRef = useRef(null)
  const [aberturas, setAberturas] = useState(0)

  const { presente } = config
  const urlImagem = urlPublica(presente.imagem)

  function abrir() {
    setAberturas((n) => n + 1)
    dialogRef.current?.showModal()
    baixar(urlImagem, presente.nomeDoArquivo)
  }

  function fechar() {
    dialogRef.current?.close()
  }

  function aoClicarNoFundo(e) {
    if (e.target === dialogRef.current) fechar()
  }

  return (
    <section className="presente" aria-labelledby="titulo-presente">
      <h2 id="titulo-presente">O que temos aqui?</h2>
      <p>2 reais ou um presente misterioso?</p>

      <button type="button" className="botao-presente" onClick={abrir}>
        <IconePresente />
      </button>

      <dialog
        ref={dialogRef}
        className="modal"
        aria-labelledby="titulo-modal"
        onClick={aoClicarNoFundo}
      >
        {aberturas > 0 && <Confetti key={aberturas} />}

        <div className="modal-cartao">
          <button type="button" className="modal-fechar" onClick={fechar} aria-label="Fechar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <h2 id="titulo-modal">Presente misterioso aberto!</h2>

          <img className="modal-imagem" src={urlImagem} alt="Vale-presente" />

          <p className="modal-texto">
            O vale-presente foi baixado no seu aparelho. Se o download não começar, segure a imagem para salvar.
          </p>
        </div>
      </dialog>
    </section>
  )
}
