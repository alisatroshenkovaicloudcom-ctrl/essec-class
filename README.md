# glacé — Stay icy.

Interactive website / marketing presentation for **glacé**, a cooling facial moisturiser with SPF 30, launching in Singapore.
Built with React + Tailwind CSS (Vite). One section per slide of the Canva deck, 12 in total.

## Run it

```bash
npm install
npm run dev            # local dev server
npm run build          # production build → dist/
npm run build:single   # ONE self-contained HTML file → dist-single/index.html
```

`dist-single/index.html` has every image and font inlined, so it opens offline by double-clicking — the safest option for the live presentation.

## Presenting

- **→ / PageDown / Space**: next slide · **← / PageUp**: previous slide
- The counter in the top right shows the current slide (`05 / 12`); the dots on the right (desktop) jump to any slide.
- The top menu jumps to each chapter; on mobile and tablet it becomes a hamburger menu.

## Replacing images

All images are set in **`src/data/images.js`**. Drop a file into `src/assets/images/`, import it there and assign it to the key.
Keys set to `null` render a frosted placeholder showing the key name, so it's clear what goes where.

| Key | Slide | Status |
| --- | --- | --- |
| `glace-hero-image` | 1 cover | original image |
| `singapore-skyline` | 2 | original image |
| `competitor-evereden`, `competitor-suu-balm`, `competitor-eucerin`, `competitor-laneige` | 3 | **placeholder — add Canva exports** |
| `glace-ice-photo` | 5 | original image |
| `glace-wordmark` | 6 | optional — drawn in type until set |
| `glace-asset-ice-cube`, `glace-asset-product`, `glace-asset-frost` | 6 | original images |
| `glace-mental-availability` | 7 | original image |
| `glace-retail-display` | 8 | optional — a shelf display is built from the bottle photo until set |
| `glace-50ml-product` | 9 | original bottle image |
| `glace-15ml-product` | 9 | **placeholder — add the 15 ml mockup** |
| `glace-texture-closeup` | 10 | original image |
| `glace-closing-bottle` | 12 | original image |

The e-commerce page on slide 10 is built in code (`src/sections/S10Digital.jsx`). It is a demo: Add to cart only updates the counter, and nothing is bought.

## Structure

```
src/
  App.jsx               section order
  data/images.js        image registry (edit this to swap images)
  data/sections.js      section ids, titles and menu labels
  components/           Nav, Reveal (scroll animation), ImageSlot, Decor (drops, snowflakes, condensation, caustics)
  sections/S01…S12      one file per slide
```
