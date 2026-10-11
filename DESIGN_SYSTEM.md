# TheTechSpectra design system

The redesign preserves Next.js App Router content loading, blog pagination, social links, and the contact form’s POST action. The former pricing page has been replaced with an AI integration page, and `/pricing` redirects there to keep old links useful.

## Foundation

`config/theme.json` supplies Tailwind colors and font configuration. `styles/premium.scss` owns the shared visual system and responsive rules. Legacy content utilities remain available for existing Markdown and shortcodes.

- Canvas: ivory `#fafbf8`; surface: white; ink: `#172b24`; secondary text: `#59645c`.
- Accent: teal `#076f62`; accent hover: `#056356`; border: `#dde3dd`.
- Typography: Manrope with a system sans-serif fallback. Fluid heading sizes; compact interface labels; comfortable prose line height.
- Spacing: an 8px foundation, responsive section padding, and a centered 1200px content container.
- Radius: 9px controls, 12px icon tiles, 20px cards, and 24px feature panels.
- Motion: short CSS transitions and entrance animations; reduced-motion preferences disable movement and smooth scrolling.

## Reusable components

- `Logo`, `Icon`, `Header`, `Footer`, `Cta`, and `Pagination` are shared components.
- Buttons: `.btn` with `.btn-primary`, `.btn-secondary`, `.btn-outline-primary`, or `.btn-light`.
- Fields: `.form-input`, `.form-textarea`, semantic labels, native required/email validation, and visible focus treatment.
- Surfaces: `.panel`, `.service-card`, `.blog-card`, `.expertise-card`, and the AI integration page’s provider and workflow cards.
- Content: `.eyebrow`, `.section-heading`, `.page-heading`, `.icon-tile`, and `.text-link`.
- States: `.empty-state`, `.skeleton`, `.alert`, and `.badge`; `app/loading.js` provides route loading feedback.
- Supporting patterns: `.tabs`, native `dialog`, native `details` dropdowns/accordions, accessible tooltip selectors, and scrollable prose tables.

Use actual controls only when the experience needs them. The site does not add invented dashboard functionality, customer metrics, or testimonials. The homepage product illustration is explicitly illustrative.

## Content editing

Homepage copy and service data live in `content/_index.md`. Existing engineering benefits are retained in its `principles` block. AI integration page copy lives in `content/ai-integration.md`; its page layout presents capabilities, provider options, and illustrative workflows. The Open Source page uses `content/open-source.md` and `layouts/OpenSource.js` to present Taskautomation as in development, including a clearly illustrative project board and self-hosting overview. FAQ questions remain in their content file. Placeholder FAQ answers are replaced with project guidance that avoids inventing commercial policies; additional questions cover existing products, timelines, and SaaS integrations. The navigation and footer remain driven by `config/menu.json`.

## Contact configuration

Set `config.params.contact_form_action` to a real form submission endpoint before expecting delivery. It was empty in the original repository and remains unchanged. The form now submits `name`, `email`, `subject`, and `message`; the original message textarea had no field name. Contact details in `content/contact.md` and social URLs in `config/social.json` are inherited template values and should be replaced by verified business information.

## Verification

Run `npm install`, `npm run build`, and `npm run start`. Check the homepage, contact, AI integration, Open Source, FAQ, blog listing, paginated listing, articles, content elements, and the not-found page. Responsive QA should cover 375px, 768px, 1024px, and 1440px widths. Keyboard checks cover the mobile menu, Escape dismissal, FAQ expansion, form validation, and reduced motion. AI provider marks, the AI workflow, and Taskautomation screenshots/diagrams are presentation illustrations; model access and project release status are selected per project.

## Editorial library

The blog contains 50 original short guides in seven service-related categories, alongside the five existing posts. Markdown frontmatter supports `category` and `author`; reading time is derived from article content. Existing URLs and four-post server pagination remain intact.

`BlogExplorer` searches titles, summaries, and categories across the entire library. Topic buttons combine with search, results are announced through a live region, and larger filtered collections load in groups of twelve. `ArticleCover` supplies a shared decorative cover when an article has no image. Existing post images and MDX shortcodes are preserved.

New guides contain no external source links. Unknown article slugs return the site's missing-page response. Add Markdown files and rebuild to publish new article routes.

Article layout correction: `PostSingle` uses a bounded 820px reading column with an intrinsic 16:9 hero image. The title and metadata precede the image. The fallback cover also uses an aspect ratio instead of inheriting its article's height. Each of the 50 new guides now has a topic-specific SVG illustration in `public/images/articles` and descriptive `image_alt` frontmatter. The same image appears in the listing thumbnail and article hero. Article geometry verification checks image loading, horizontal overflow, article content containment, and separation from the footer across every article on mobile and desktop.
