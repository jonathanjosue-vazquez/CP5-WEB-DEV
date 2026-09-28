# GourmetOn 🍔

Landing Page do aplicativo de delivery **GourmetOn**, desenvolvida para o Check-Point 05 da disciplina **Web Development with JS**.

## Objetivo

O projeto apresenta uma proposta de aplicativo de delivery e utiliza React para a construção da interface. A página também consome dados de uma API externa para exibir pratos.

## Tecnologias utilizadas

- React 18
- Vite
- Tailwind CSS
- Fetch API
- JSON
- TheMealDB

## API

Os pratos exibidos na seção de cardápio são buscados na TheMealDB.

A requisição é feita com `fetch()` no arquivo `src/services/foodApi.js`. A resposta da API é convertida para JSON e os dados necessários são armazenados no estado do componente `FoodSection`.

O `useEffect` executa a busca quando a seção é carregada. Depois, cada prato é enviado para o componente `FoodCard` através de props.

A página também possui estados de carregamento e erro para a requisição.

## Estrutura do projeto

```text
gourmeton/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── services/
│   │   └── foodApi.js
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── FeatureCard.jsx
│       ├── Features.jsx
│       ├── FoodSection.jsx
│       ├── FoodCard.jsx
│       ├── Testimonials.jsx
│       ├── ContactForm.jsx
│       └── Footer.jsx
```

## Como executar

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## Integrantes

- Jonathan Josué — RM 569810
- Murillo Serrano — RM 569296
- Nicolas Prestelo — RM 570785

## Links

- GitHub: https://github.com/jonathanjosue-vazquez/CP5-WEB-DEV
- Deploy: 
