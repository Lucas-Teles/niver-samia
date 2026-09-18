const MS_DIA = 24 * 60 * 60 * 1000
export function parseData(iso) {
  const [a, m, d] = iso.split('-').map(Number)
  return new Date(a, m - 1, d)
}

export function hojeSemHora() {
  const n = new Date()
  return new Date(n.getFullYear(), n.getMonth(), n.getDate())
}

export function diasAte(iso, hoje = hojeSemHora()) {
  return Math.round((parseData(iso) - hoje) / MS_DIA)
}

export function partesDaData(iso) {
  const d = parseData(iso)
  return {
    dia: String(d.getDate()).padStart(2, '0'),
    semana: d.toLocaleDateString('pt-BR', { weekday: 'long' }),
    mes: d.toLocaleDateString('pt-BR', { month: 'long' }),
  }
}

export function urlDoMapa(lugar) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lugar)}`
}

export function urlPublica(caminho) {
  return `${import.meta.env.BASE_URL}${caminho}`
}
