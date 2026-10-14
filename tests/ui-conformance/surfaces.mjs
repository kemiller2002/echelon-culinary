// Declared conformance inventory for visual-engineering/UI-LAYOUT-INTERACTION@1.0.0
// (pinned at visual-engineering 8da8fbc). This file is data: every route,
// every enabled action on it and every alignment group the composition
// intends. The suite fails when a page renders an enabled action that is not
// declared here, so new controls cannot ship without a contract (ULI-A10).

export const STANDARD = Object.freeze({ id: "visual-engineering/UI-LAYOUT-INTERACTION", version: "1.0.0", source: "kemiller2002/visual-engineering@8da8fbc" });
export const REPOSITORY = "kemiller2002/echelon-culinary";
export const CLASSIFICATION = "site-ui";
export const HELPERS = "@echelon-foundry/forma-conformance 0.1.0 vendored from kemiller2002/forma@f37be16 (forma main)";

const link = name => ({ role: "link", name });

export const ROUTES = Object.freeze([
  { id: "home", path: "/", current: "Home", heading: "Better foodservice operations, built on better technology." },
  { id: "consulting", path: "/consulting/", current: "Consulting", heading: "One operating problem. A proportionate next move." },
  { id: "clarity", path: "/clarity/", current: "Clarity", heading: "Before you automate, get clear." },
  { id: "research", path: "/research/", current: "Research", heading: "Practice informed by evidence, not appetite for novelty." },
  { id: "speaking", path: "/speaking/", current: "Speaking", heading: "A useful session should change a decision." },
  { id: "about", path: "/about/", current: "About", heading: "Echelon Foundry, applied to foodservice." },
  { id: "contact", path: "/contact/", current: "Let's talk", heading: "Bring us a foodservice problem." }
]);

const route = id => ROUTES.find(item => item.id === id);
export const NAV_NAMES = ["Home", "Consulting", "Clarity", "Research", "Speaking", "About", "Let's talk"];
const NAV_TARGET = Object.freeze({ "Home": "home", "Consulting": "consulting", "Clarity": "clarity", "Research": "research", "Speaking": "speaking", "About": "about", "Let's talk": "contact" });

// Internal navigation: the click must change the URL to the destination and
// land on a page whose level-one heading is the destination's heading.
// `region` names the landmark or labelled section that holds the control,
// because the same name legitimately appears in several regions.
const navigate = (id, name, target, region, from) => {
  const destination = route(target);
  return { id, control: link(name), kind: "navigate", destination: destination.path, heading: destination.heading, region, from, intent: `Navigate to ${destination.path}`, expectedOutcome: `URL becomes ${destination.path} and the heading "${destination.heading}" is shown` };
};

const anchor = (id, name, destination, heading, region, from) =>
  ({ id, control: link(name), kind: "anchor", destination, heading, region, from, intent: `Move to ${destination}`, expectedOutcome: `URL becomes ${destination} and "${heading}" is in view below the sticky header` });

const external = (id, name, href, region) =>
  ({ id, control: link(name), kind: "external", destination: href, region, intent: `Open ${href}`, expectedOutcome: `href is ${href} over https (the external site is not loaded)` });

const mail = (id, name, href, region) =>
  ({ id, control: link(name), kind: "mailto", destination: href, region, intent: `Compose mail to ${href.slice(7).split("?")[0]}`, expectedOutcome: `href is ${href} (the mail client is outside the page; delivery is not claimed)` });

const PROBE = "/research/";
// Start somewhere else when the destination is the probe page itself.
const startFor = target => (route(target).path === PROBE ? "/about/" : PROBE);
const FOOTER = { role: "contentinfo" };
const DESKTOP_NAV = { role: "navigation", name: "Primary navigation" };
const MOBILE_NAV = { role: "navigation", name: "Mobile navigation" };
const BANNER = { role: "banner" };

// Header and footer render on every route (components/site-shell.tsx).
export const CHROME = Object.freeze([
  anchor("skip-link", "Skip to main content", "#main-content", null, null, PROBE),
  navigate("brand-home", "Echelon Foundry Culinary home", "home", BANNER, PROBE),
  ...NAV_NAMES.map(name => ({ ...navigate(`nav-${NAV_TARGET[name]}`, name, NAV_TARGET[name], DESKTOP_NAV, startFor(NAV_TARGET[name])), widths: [1280] })),
  { id: "mobile-menu", control: { role: "disclosure", name: "Menu" }, kind: "disclosure", intent: "Open the mobile navigation", expectedOutcome: "The menu opens and lists every destination with the current page marked; it closes again on a second activation", widths: [320, 390, 768], resetStrategy: "Activate Menu again, or navigate" },
  ...NAV_NAMES.map(name => ({ ...navigate(`mobile-nav-${NAV_TARGET[name]}`, name, NAV_TARGET[name], MOBILE_NAV, startFor(NAV_TARGET[name])), widths: [390], viaMenu: true })),
  navigate("footer-contact", "Discuss a foodservice problem", "contact", FOOTER, PROBE),
  mail("footer-email", "kevin@echelonfoundry.com", "mailto:kevin@echelonfoundry.com", FOOTER),
  external("footer-parent", "Parent practice ↗", "https://echelonfoundry.com", FOOTER)
]);

const section = name => ({ role: "region", name });
const ctaBand = (id, title) => navigate(`${id}-cta`, "Discuss a foodservice problem", "contact", section(title), route(id).path);

export const SURFACES = Object.freeze([
  {
    id: "chrome", path: "/* (shared header and footer on every route)", kind: "marketing",
    actions: CHROME,
    groups: [
      { id: "primary-nav", ruleId: "ULI-L10", edge: "center", widths: [1280], scope: DESKTOP_NAV, peers: NAV_NAMES.map(link), rationale: "Primary navigation is one row of peer destinations in source order" },
      { id: "header-row", ruleId: "ULI-L10", edge: "center", widths: [320, 390, 768], scope: BANNER, peers: [link("Echelon Foundry Culinary home"), { role: "disclosure", name: "Menu" }], rationale: "Brand and Menu share the header row on narrow screens" },
      { id: "footer-actions", ruleId: "ULI-L10", edge: "left", widths: [320, 390, 768], scope: FOOTER, peers: [link("Discuss a foodservice problem"), link("kevin@echelonfoundry.com")], rationale: "Footer contact actions stack on one left edge at and below 48rem" },
      { id: "footer-actions-wide", ruleId: "ULI-L10", edge: "right", widths: [1280], scope: FOOTER, peers: [link("Discuss a foodservice problem"), link("kevin@echelonfoundry.com")], rationale: "Footer contact actions align to the footer's right edge on wide layouts" }
    ]
  },
  {
    id: "home", path: "/", kind: "marketing",
    actions: [
      navigate("home-hero-discuss", "Discuss a foodservice problem", "contact", section(route("home").heading), "/"),
      navigate("home-hero-clarity", "Explore Clarity", "clarity", section(route("home").heading), "/"),
      navigate("home-consulting", "Explore the consulting practice", "consulting", section("The operation is the architecture."), "/"),
      navigate("home-clarity", "See Clarity applied to foodservice", "clarity", section("Before you automate, get clear."), "/"),
      { ...anchor("home-engagements", "View all consulting engagements", "/consulting/#engagements", "Clear work. Clear outcome.", section("Start with a bounded piece of work."), "/"), crossPage: true },
      navigate("home-about", "Read the practice story", "about", section("Technical depth with culinary fluency."), "/"),
      navigate("home-speaking", "Explore the session", "speaking", section("Bring One Restaurant Problem: Leave With an AI Decision."), "/"),
      navigate("home-research", "See current lines of inquiry", "research", section("Questions before claims."), "/"),
      ctaBand("home", "You do not need to know whether the answer is AI.")
    ],
    groups: [
      { id: "hero-actions-row", ruleId: "ULI-L10", edge: "top", widths: [1280], scope: section(route("home").heading), peers: [link("Discuss a foodservice problem"), link("Explore Clarity")], rationale: "Hero calls to action share one row" },
      { id: "hero-actions-row-height", ruleId: "ULI-L02", edge: "bottom", widths: [1280], scope: section(route("home").heading), peers: [link("Discuss a foodservice problem"), link("Explore Clarity")], rationale: "Hero calls to action have one height" },
      { id: "hero-actions-stack", ruleId: "ULI-L10", edge: "left", widths: [320, 390, 768], scope: section(route("home").heading), peers: [link("Discuss a foodservice problem"), link("Explore Clarity")], rationale: "Hero calls to action stack as full-width peers at and below 48rem" },
      { id: "hero-actions-stack-width", ruleId: "ULI-L02", edge: "right", widths: [320, 390, 768], scope: section(route("home").heading), peers: [link("Discuss a foodservice problem"), link("Explore Clarity")], rationale: "Stacked hero calls to action have one width" }
    ]
  },
  { id: "consulting", path: "/consulting/", kind: "marketing", actions: [navigate("consulting-clarity", "See how the decision is made", "clarity", section("We can build. We do not begin by assuming we should."), "/consulting/"), ctaBand("consulting", "Bring one workflow, system, or decision.")], groups: [] },
  { id: "clarity", path: "/clarity/", kind: "marketing", actions: [ctaBand("clarity", "Bring one decision that has resisted easy answers.")], groups: [] },
  { id: "research", path: "/research/", kind: "marketing", actions: [external("research-echelon", "Explore Echelon research ↗", "https://echelonfoundry.com/research/", section("Culinary draws from the full Echelon research practice.")), ctaBand("research", "Bring a foodservice system that resists easy answers.")], groups: [] },
  { id: "speaking", path: "/speaking/", kind: "marketing", actions: [ctaBand("speaking", "Looking for a session with a practical outcome?")], groups: [] },
  { id: "about", path: "/about/", kind: "marketing", actions: [ctaBand("about", "You do not need to know whether the answer is AI.")], groups: [] },
  { id: "contact", path: "/contact/", kind: "marketing", actions: [mail("contact-email", "kevin@echelonfoundry.com", "mailto:kevin@echelonfoundry.com?subject=A%20foodservice%20problem", section("Start with the problem as you see it."))], groups: [] }
]);

export const surfaceForRoute = item => SURFACES.find(surface => surface.path === item.path);

// Every action a route renders: its own plus the shared chrome.
export const declaredActionsFor = item => [
  ...CHROME.map(action => ({ ...action, surfaceId: "chrome" })),
  ...(surfaceForRoute(item)?.actions ?? []).map(action => ({ ...action, surfaceId: surfaceForRoute(item).id }))
];

export const UNKNOWN_SCOPE = Object.freeze([
  "Translated and right-to-left text are not exercised (the site ships English only).",
  "Browser page zoom is approximated by the contract widths plus a 200% default text size; WebKit and Firefox are not exercised.",
  "Availability of external destinations and mail delivery are not verified; only their href is asserted.",
  "The suite serves the static export (dist/client) the way GitHub Pages does; the live custom domain is not requested."
]);

export const SURFACE_UNKNOWN = Object.freeze({});
