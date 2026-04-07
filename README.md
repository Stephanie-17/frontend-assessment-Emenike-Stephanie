# PokéArchive

A high-performance Pokémon browsing experience built with Next.js, TypeScript, and Tailwind CSS. Explore the complete Pokédex with smooth pagination, smart search, and optimized image loading.



## ✨ Features

- **Complete Pokédex** – Browse through 1,300+ Pokémon with official artwork
- **Smart Pagination** – URL-stateful pagination that you can share (e.g., `?page=3`)
- **Instant Search** – Filter Pokémon by name on the current page
- **Responsive Design** – Works beautifully on desktop, tablet, and mobile
- **Optimized Images** – Automatic lazy loading, priority hints, and CLS prevention
- **Detailed Views** – Click any Pokémon to see abilities, types, stats, and more

## 🚀 Live Demo

[**View PokéArchive Live**](https://frontend-assessment-emenike-stephan-nine.vercel.app/?page=1)

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: [PokéAPI](https://pokeapi.co/) (free, no API key required)
- **Testing**: Jest + React Testing Library
- **Deployment**: Vercel

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Stephanie-17/frontend-assessment-Emenike-Stephanie.git
cd frontend-assessment-Emenike-Stephanie
```
### 2. Install dependencies
```
npm install
```

### 3. Run the development server

```
npm run dev
```

### 4. Open http://localhost:3000 to see the app


## API Choice
I used PokéAPI because it's free, requires no API key, and has clean
paginated endpoints for listing and individual item detail pages.

## Pagination Choice
I used pagination (not infinite scroll) because it keeps the URL
stateful, you can share a link to page 3 and it works. Infinite scroll
would have made URL state harder to manage. Also, it makes it easier for the user to search for Pokemons.

## Performance Optimisations
- next/image on all images with explicit width/height because it prevents CLS
  (layout jumping as images load)
- priority prop on above-the-fold images because it tells the browser to load
  these first, improving LCP
- force-cache on the listing fetch — Pokémon data doesn't change, so
  caching it avoids unnecessary API calls
- next/font for the font — loads the font at build time instead of
  runtime, prevents a flash of unstyled text

 ### Lighhouse scores
  I tried lighthouse on my project and using the live link on mobile, I got a 64 for performance and 90+ for other sections, but on desktop, I got a 90 for performance and 90+ for other sections.
  However, I decided to try it out on incognito mode, using the live link i got 99 for performance and 90+ for other sections and for desktop I got a 100 for SEO, Best practices and Performance and a 90 for Accessibility. 

## Architecture Decisions
- All fetch calls live in lib/api.ts — components never call fetch
  directly. This makes it easy to swap the API later and keeps
  components clean.
- Shared types are in types/index.ts so I'm not repeating the same
  type shapes across files.

## Trade-offs & Known Limitations
- I chose client-side filtering over API-level filtering for simplicity.
  With more time I'd move this to the API query to reduce data transfer.
- Tests cover 2 components. With more time I'd add tests for the search
  logic and the pagination component.
- I didn't attempt Cloudflare Workers deployment — I prioritised getting
  a stable Vercel deployment and a complete feature set.
- PokeAPI doesn't have a search endpoint, because of that, the user can only search through a page at a time, not the entire database. This is another thing I'd want to work on if given more than two hours

## What I'd tackle next (given 2 more hours)
I'd improve the search to use API-level filtering instead of client-side, add the Cloudflare Workers deployment with proper cache headers as well as optimising the search to go through the entire database. 