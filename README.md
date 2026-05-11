# CT Dossier

Two-doctrine portfolio prototype. One page, two visual systems:

- **Doctrine A — Civic Plastic.** Neumorphic hardware panel with embossed numerals and a stamped-metal data table.
- **Doctrine B — Archival Record.** Manila-folder file tabs, blueprint-grid background, click-anywhere rubber stamps.

## Run

ES modules require a server (not `file://`). Pick one:

```bash
python3 -m http.server 8080
# or
npx serve .
```

Then open <http://localhost:8080>.

## Structure

```
index.html              refactored shell
original/index.html     verbatim original single-file version
styles/
  shared.css            mode switcher + reduced-motion
  doctrine-a.css        Civic Plastic
  doctrine-b.css        Archival Record
scripts/
  main.js               entry — wires everything
  audio.js              Web Audio (click / stamp / rustle)
  mode-switch.js        global doctrine toggle
  tabs.js               WAI-ARIA tabs + keyboard nav
  stamps.js             interactive stamps with AT announcement
REVIEW.md               code review of the original
```

## Going to production

Tailwind ships from a CDN here, which is fine for a static prototype but emits a console warning. To productionize:

- Install `tailwindcss` locally and generate a built CSS file.
- Move the `tailwind.config` block inline in `index.html` into `tailwind.config.js`.
- Drop the `<script src="https://cdn.tailwindcss.com">` line and link the built stylesheet.
- Optionally deploy on Vercel as a static site — no framework needed.
