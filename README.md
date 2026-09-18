# Aniversário da Samia

Página web (React + Vite) com a programação do fim de semana em formato de checklist
e um botão que entrega o vale-presente. Funciona em celular e computador.

## Rodar no computador

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Trocar o vale-presente

Coloque o cartão real na pasta `public/presente/`, **com estes nomes**:

- `vale-presente.png` (é o arquivo baixado automaticamente quando a janela abre)
- `vale-presente.pdf` (fica guardado junto; a página não o usa)

(Se preferir outros nomes, altere em `src/data/config.js`.)

## Fonte

O visual segue o álbum Renaissance, que usa a BB Manual Mono (Bold Studio, fonte paga).
Por padrão o site usa a IBM Plex Mono, que é gratuita. Se você comprar a licença da BB Manual Mono:

1. Converta para `.woff2` e coloque em `public/fonts/`.
2. Em `src/styles.css`, descomente o bloco `@font-face` do topo e ajuste o nome do arquivo.

O site passa a usar a original automaticamente.

## Editar programação, nome e datas

Tudo fica em `src/data/config.js`: nome, data do aniversário, assinatura do rodapé,
dias, atividades, pessoas e locais. Atividades com `lugar` ganham um link "Ver no mapa".

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `niver-samia`) e envie o projeto:

   ```bash
   git init
   git add .
   git commit -m "Página de aniversário"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/niver-samia.git
   git push -u origin main
   ```

2. No repositório, vá em **Settings > Pages** e, em **Source**, escolha **GitHub Actions**.
3. A cada `git push` na branch `main`, o site é publicado sozinho.
   O endereço será `https://SEU-USUARIO.github.io/niver-samia/`.

## Observações

- Os itens marcados no checklist ficam salvos no navegador de quem usa (localStorage).
- A página tem `noindex`, então o Google não deve listá-la, mas quem tiver o link consegue abrir.
  Em repositório público, o vale-presente também fica visível no código.
