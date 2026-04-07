## Setup
1. Clone the repo: git clone `frontend-assessment-Emenike-Stephanie`
2. Install: `npm install`
3. Get PokeAPI (no API key needed)
4. Run: npm run dev

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