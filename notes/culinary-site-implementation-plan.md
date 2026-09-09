# Echelon Foundry Culinary — Implementation Plan

**Status:** Active implementation plan
**Date:** 2026-09-09

## 1. Existing architecture discovered

- The repository contains strategy notes only; there is no existing application, router, component library, styling layer, analytics, SEO implementation, or deployment manifest to extend.
- The current public Echelon Foundry site is the parent-brand reference. Its reusable language is editorial: warm paper surfaces, dark ink, oversized serif display type, compact sans-serif navigation, monospace labels, fine grid lines, restrained rust accents, direct evidence-led copy, and strong section sequencing.
- The site will use the supported Sites React/Vite starter and static export. Content is editorial and does not require authentication, persistence, uploads, or a server runtime.

## 2. Relevant notes found

- `notes/echelon-foundry-culinary-site-decisions.md` is the only repository note and is the V1 strategy baseline.
- `.visual-engineering/` provides UI research reference material. Context version `0.1.0`, source commit `2d2e72e220169c621fa94e97f6f229159d894c13`.

## 3. Design decisions inherited

- Culinary is a practice within Echelon Foundry, not a separate lifestyle brand.
- Retain the Echelon wordmark hierarchy, editorial type scale, grid discipline, direct CTAs, restrained palette, and diagnostic/decision-first voice.
- Extend the palette with burgundy and brass roles and use operational diagrams as the distinctive Culinary visual layer.
- Avoid generic cards, AI imagery, chef iconography, and unauthenticated food photography.

### Conflict resolution

- The earlier strategy note leads the hero with “AI, software…”. The newer mission brief explicitly prioritizes the foodservice problem and proposes “Better foodservice operations, built on better technology.” The newer brief governs.
- The earlier note names the content area “Culinary Perspective”; the newer brief prefers “Research” or “Insights” to avoid food-editorial ambiguity. V1 uses “Research”.
- The earlier Clarity flow ends in “Decision”; the newer brief more precisely uses “Decision Posture”. V1 uses “Decision Posture”.
- The public parent site currently foregrounds EDF and Framework Engineering. Culinary does not duplicate those sections; it inherits diagnosis-before-prescription and connects to Clarity in foodservice language.

## 4. New pages and routes

- `/` — Foodservice-first narrative homepage.
- `/consulting` — Defined engagements and foodservice systems in scope.
- `/clarity` — Decision methodology demonstrated through a food-waste problem.
- `/speaking` — Interactive flagship workshop and organizer-facing evidence.
- `/research` — Honest launch-state research surface without fabricated articles.
- `/about` — Kevin’s technical and culinary grounding with credential-safe language.
- `/contact` — Direct, accessible conversation path using the established Echelon contact email.

## 5. Components to reuse

- Starter routing, build pipeline, metadata entry point, and any existing accessible primitive that directly matches a required interaction.
- Parent-site information patterns rather than source components, because parent application source is not present in this repository.

## 6. New components required

- Shared site header, mobile navigation, footer, page intro, section heading, CTA band, engagement list, problem index, decision path, state-flow diagram, and editorial link treatment.
- Components will follow durable content semantics; page-specific composition remains page-specific.

## 7. Copy and content plan

- Lead with recognizable foodservice constraints and consequences.
- Show software, automation, AI, and process change as intervention options rather than the product being sold.
- Use only supported culinary and technical background. Do not imply restaurant employment, formal culinary-school attendance, client casework, speaking appearances, or quantified outcomes.
- Keep Research explicitly pre-publication until substantive work exists.

## 8. Styling changes

- Establish semantic tokens for paper, ink, muted ink, burgundy, brass, line, dark surface, focus, and status roles.
- Pair an editorial serif with a highly legible sans-serif and monospace micro-labels while preserving system fallbacks.
- Use fine grids, asymmetric editorial compositions, strong typographic hierarchy, and limited bordered groupings.

## 9. Responsive considerations

- Mobile navigation becomes an accessible disclosure.
- Wide comparison and process layouts recompose vertically in source order.
- Diagrams wrap or scroll only where doing so preserves their relationships; CTAs remain visible and readable.
- Maintain readable measures and minimum 16px body text.

## 10. Accessibility considerations

- Semantic landmarks and heading order, skip link, keyboard-operable navigation, visible focus, sufficient contrast, descriptive links, reduced-motion handling, forced-color support, and clear active-page state.
- Verify reflow at narrow widths and 200% zoom/text enlargement.
- Use native links and disclosure controls; no icon-only critical actions.

## 11. Testing strategy

- Production build, lint/type checks if configured, source/content assertions, internal-route/link validation, and accessibility-oriented static checks.
- Browser verification at desktop, tablet, and mobile widths, including navigation, focus, overflow, diagrams, and the complete page set.
- Separate copy audit plus foodservice executive, technical buyer, and conference reviewer passes.

## 12. Risks and open questions

- No authentic Culinary photography exists in the repository; V1 intentionally uses typography and diagrams.
- No published Culinary research articles, testimonials, engagements, or speaker recordings are available; V1 will not fabricate them.
- The public parent site provides visual evidence but no local design-system source, so exact font assets and implementation tokens cannot be inherited directly.
- Contact uses the established `kevin@echelonfoundry.com` address. A form backend can be added later if a supported handling destination is chosen.
