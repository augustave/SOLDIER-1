# CT Dossier — Code Review

Review of the original single-file prototype at [original/index.html](original/index.html). Severity: **H** = bug/blocker, **M** = quality/UX, **L** = polish. Items marked **[fixed]** are addressed in the refactor at [index.html](index.html).

## Functional bugs

- **[H] Stamps leak across tabs** **[fixed]**
  Stamps are appended to the shared manila container, so marks placed while viewing tab 03 persist (at the same absolute coordinates) when switching to 04/05. Fixed by giving each Doctrine B pane its own stamp surface.

- **[H] `playRustle()` defined but never called** **[fixed]**
  The function exists but no caller. Clearly intended for folder-tab switches. Wired into `switchTabB` in the refactor.

- **[M] Doctrine B tab toggle is brittle** **[fixed]**
  `switchTabB` imperatively shuffles `py-3`/`py-4`/`mt-2`/`opacity-70` between the active and inactive tabs. Works, but re-clicking the active tab or starting from a non-default state could desync the classes. Replaced with a single `data-active` attribute + CSS rules.

- **[M] Tab `<div onclick>` instead of `<button>`** **[fixed]**
  No keyboard activation, no focus state, no role. Switched to `<button type="button">` with full `role="tab"`/`aria-selected`/`aria-controls` wiring and arrow-key navigation.

- **[L] Invoice-table click is blocked from stamping**
  `addStamp` short-circuits when the click target is inside `.invoice-table`. Possibly intentional (so you don't stamp on the data); flagged but **left as-is** in the refactor.

- **[L] `playClick()` defined but never called**
  Doctrine A's hardware-click sound is wired up but no caller. Connected to `switchTabA` in the refactor.

## Accessibility

- **[M] No `aria-pressed` on mode buttons** **[fixed]**
- **[M] No `prefers-reduced-motion` handling** **[fixed]**
  Refactor disables transforms and skips audio when the user has reduced-motion set.
- **[M] Low-contrast secondary text**
  `text-gov-ink/40` (~40% opacity) on `#EAEAEA` fails WCAG AA for body text. Left as-is visually but documented.
- **[L] Stamp action has no AT announcement**
  Added an `aria-live="polite"` region in the refactor that says "Stamped APPROVED" when the user places a mark.

## Code organization

- **[M] 500-line single file mixing two design systems** **[fixed]**
  Split into per-doctrine CSS and per-concern JS modules.
- **[L] Dead font alias `font-archivo`** **[fixed]**
  Removed.
- **[L] `font-ibm` name vs loaded `JetBrains Mono` mismatch** **[fixed]**
  Renamed class to `font-mono` to match the actual loaded family.
- **[L] `.dotted-line` uses `top: -4px` to fake vertical alignment** **[fixed]**
  Replaced with `align-items: baseline`.
- **[L] Hex colors duplicated between Tailwind config and CSS**
  Acceptable for a static prototype with CDN Tailwind — leaving as-is to avoid introducing a build step.

## Not changed (intentional)

- **Tailwind via CDN.** It produces a console warning but is the right call for a no-build static page. Migration path noted in [README.md](README.md).
- **Visual design, copy, and color tokens.** Refactor preserves the design 1:1.
- **Web Audio engine.** Well-written; only the call sites changed.
- **`Ebenz Augustave` content.** Treated as authored copy.
