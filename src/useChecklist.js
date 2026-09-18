import { useCallback, useEffect, useState } from 'react'

const CHAVE = 'niver-samia:checklist:v1'

function ler() {
  try {
    const bruto = window.localStorage.getItem(CHAVE)
    return bruto ? JSON.parse(bruto) : {}
  } catch {
    return {}
  }
}

export default function useChecklist() {
  const [marcados, setMarcados] = useState(ler)

  useEffect(() => {
    navigator.storage?.persist?.().catch(() => {})
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(CHAVE, JSON.stringify(marcados))
    } catch {
    }
  }, [marcados])

  const alternar = useCallback((id) => {
    setMarcados((atual) => ({ ...atual, [id]: !atual[id] }))
  }, [])

  return [marcados, alternar]
}
