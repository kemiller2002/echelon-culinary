// UI conformance suite for culinary.echelonfoundry.com against
// visual-engineering/UI-LAYOUT-INTERACTION@1.0.0. Every assertion resolves
// controls by role and accessible name, waits with web-first assertions and
// compares observed pre/post state. No coordinates, no fixed sleeps.
import { expect, test } from "@playwright/test";
import {
  CONTRACT_WIDTHS,
  expectActionOutcome,
  expectDestinationClearOfHeader,
  expectLabelIntact,
  expectNoOverflow,
  expectPeerAlignment,
  inventoryActions,
  recordTabSequence,
  scaleDefaultText,
  settleFontsAndFrames,
  wasFocusedDuringSequence
} from "./forma-conformance/index.mjs";
import { CHROME, NAV_NAMES, ROUTES, SURFACES, declaredActionsFor } from "./surfaces.mjs";

const escape = value => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const annotate = (type, description) => test.info().annotations.push({ type, description });
const banner = page => page.getByRole("banner");
const primaryNav = page => page.getByRole("navigation", { name: "Primary navigation" });
const mobileNav = page => page.getByRole("navigation", { name: "Mobile navigation" });
const menu = page => banner(page).getByText("Menu", { exact: true });
const pathPattern = destination => new RegExp(`^https?://[^/]+${escape(destination)}$`);
const nameMatches = (declared, actual) => (declared instanceof RegExp ? declared.test(actual) : declared === actual);
const regionOf = (page, region) => (region ? page.getByRole(region.role, region.name ? { name: region.name, exact: true } : {}) : page);
const controlOf = (page, action) => regionOf(page, action.region).getByRole(action.control.role, { name: action.control.name, exact: true });

const DESKTOP = 1280;
const isDesktop = width => width > 1088; // the 68rem navigation breakpoint at 100% text

// --- ULI-L05/L06/L09/A10: every route at every contract width -------------

for (const width of CONTRACT_WIDTHS) {
  test.describe(`at ${width}px`, () => {
    test.use({ viewport: { width, height: 900 } });

    for (const route of ROUTES) {
      test(`${route.path} renders without overflow, with intact navigation labels`, async ({ page }) => {
        annotate("uli-surface", route.id);
        annotate("uli-surface", "chrome");
        await page.goto(route.path);
        await expect(page.getByRole("heading", { level: 1 })).toHaveText(route.heading);
        await expectNoOverflow(page);
        await expect(banner(page).getByRole("link", { name: "Echelon Foundry Culinary home", exact: true })).toBeVisible();
        if (isDesktop(width)) {
          for (const name of NAV_NAMES) await expectLabelIntact(primaryNav(page).getByRole("link", { name, exact: true }));
          await expect(primaryNav(page).getByRole("link", { name: route.current, exact: true })).toHaveAttribute("aria-current", "page");
        } else {
          await expect(primaryNav(page)).toBeHidden();
          await menu(page).click();
          for (const name of NAV_NAMES) await expectLabelIntact(mobileNav(page).getByRole("link", { name, exact: true }));
          await expect(mobileNav(page).getByRole("link", { name: route.current, exact: true })).toHaveAttribute("aria-current", "page");
          await expect(mobileNav(page).locator("[aria-current=page]")).toHaveCount(1);
          await expectNoOverflow(page);
        }
      });

      test(`${route.path} renders only declared actions`, async ({ page }) => {
        annotate("uli-surface", route.id);
        await page.goto(route.path);
        await settleFontsAndFrames(page);
        const declared = declaredActionsFor(route);
        const rendered = await inventoryActions(page.locator("body"), { includeHidden: true });
        const undeclared = rendered.filter(item => !declared.some(action => action.control.role === item.role && nameMatches(action.control.name, item.name)));
        expect(undeclared.map(item => `${item.role} "${item.name}" -> ${item.href}`), "ULI-A10: enabled actions without a declared contract").toEqual([]);
        expect(rendered.filter(item => !item.name), "ULI-A06: actions without an accessible name").toEqual([]);
      });
    }
  });
}

// --- ULI-L05: 200% default text size (browser text-scaling setting) -------

for (const width of CONTRACT_WIDTHS) {
  test.describe(`at ${width}px with 200% text`, () => {
    test.use({ viewport: { width, height: 900 } });
    for (const route of ROUTES) {
      test(`${route.path} reflows without overflow`, async ({ page }) => {
        annotate("uli-surface", route.id);
        await page.goto(route.path);
        await scaleDefaultText(page, 2);
        await expectNoOverflow(page);
        await expect(banner(page).getByRole("link", { name: "Echelon Foundry Culinary home", exact: true })).toBeInViewport();
        // At 200% text the 68rem breakpoint applies at every contract width.
        await expect(menu(page)).toBeInViewport();
      });
    }
  });
}

// --- Every link destination is meaningful (ULI-A01) ------------------------

for (const route of ROUTES) {
  test.describe(`${route.path} link destinations`, () => {
    test.use({ viewport: { width: DESKTOP, height: 900 } });
    for (const action of declaredActionsFor(route).filter(item => item.control.role === "link" && !item.viaMenu)) {
      test(`${action.surfaceId}/${action.id} is valid`, async ({ page, request }) => {
        annotate("uli-action", `${action.surfaceId}/${action.id}`);
        await page.goto(route.path);
        const control = controlOf(page, action);
        await expect(control).toHaveCount(1);
        if (action.kind === "navigate") {
          await expect(control).toHaveAttribute("href", action.destination);
          expect((await request.get(action.destination)).status(), action.destination).toBe(200);
          // A link to the page it is on must say so (wayfinding), except the
          // brand mark, which conventionally always links home.
          if (action.destination === route.path && action.id !== "brand-home") await expect(control).toHaveAttribute("aria-current", "page");
        }
        if (action.kind === "anchor") {
          await expect(control).toHaveAttribute("href", action.destination);
          const [path, hash] = action.destination.split("#");
          if (path) expect(await (await request.get(path)).text()).toContain(`id="${hash}"`);
          else await expect(page.locator(`#${hash}`)).toHaveCount(1);
        }
        if (action.kind === "external") {
          await expect(control).toHaveAttribute("href", action.destination);
          expect(new URL(action.destination).protocol).toBe("https:");
        }
        if (action.kind === "mailto") {
          await expect(control).toHaveAttribute("href", action.destination);
          expect(action.destination).toMatch(/^mailto:[^@\s]+@[^@\s?]+\.[a-z]{2,}(\?.*)?$/);
        }
      });
    }
  });
}

// --- ULI-A02/A06: every navigation action changes the page ----------------

const navigationActions = SURFACES.flatMap(surface => surface.actions
  .filter(action => action.kind === "navigate" || action.kind === "anchor")
  .map(action => ({ surface, action })));

for (const { surface, action } of navigationActions) {
  const widths = action.widths ?? [390, DESKTOP];
  for (const width of widths) {
    test(`${surface.id}: ${action.id} reaches ${action.destination} at ${width}px`, async ({ page }) => {
      annotate("uli-action", `${surface.id}/${action.id}`);
      await page.setViewportSize({ width, height: 900 });
      await page.goto(action.from);
      if (action.viaMenu) {
        await expect(mobileNav(page)).toBeHidden();
        await menu(page).click();
        await expect(mobileNav(page)).toBeVisible();
      }
      const expected = action.kind === "anchor"
        ? (action.crossPage ? action.destination : `${action.from}${action.destination}`)
        : action.destination;
      await expectActionOutcome(page, {
        ruleId: "ULI-A02",
        action: action.control,
        scope: action.region ? regionOf(page, action.region) : undefined,
        outcome: { kind: "url", expected: pathPattern(expected) }
      });
      if (action.kind === "navigate") await expect(page.getByRole("heading", { level: 1 })).toHaveText(action.heading);
      if (action.kind === "anchor" && action.heading) {
        await expectDestinationClearOfHeader(page, page.getByRole("heading", { name: action.heading }), banner(page));
      }
      if (action.id === "skip-link") await expect(page.locator("#main-content")).toBeInViewport();
      if (action.viaMenu) await expect(mobileNav(page)).toBeHidden();
    });
  }
}

// External and mail actions: the destination is the observable outcome; the
// suite does not open third-party sites or a mail client.
for (const surface of SURFACES) {
  for (const action of surface.actions.filter(item => item.kind === "external" || item.kind === "mailto")) {
    test(`${surface.id}: ${action.id} points at ${action.destination}`, async ({ page }) => {
      annotate("uli-action", `${surface.id}/${action.id}`);
      await page.goto(surface.id === "chrome" ? "/research/" : surface.path);
      const control = controlOf(page, action);
      await expect(control).toBeVisible();
      await expect(control).toHaveAttribute("href", action.destination);
    });
  }
}

// --- Mobile menu disclosure (ULI-A02/A08/L08) -------------------------------

for (const width of [320, 390, 768]) {
  test(`chrome: the Menu disclosure opens and closes at ${width}px`, async ({ page }) => {
    annotate("uli-action", "chrome/mobile-menu");
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/research/");
    await expectActionOutcome(page, {
      ruleId: "ULI-A02",
      action: { role: "disclosure", name: "Menu" },
      outcome: { kind: "open", target: "controlled", expected: true }
    });
    await expect(mobileNav(page)).toBeVisible();
    for (const name of NAV_NAMES) await expect(mobileNav(page).getByRole("link", { name, exact: true })).toBeInViewport();
    await expectNoOverflow(page);
    await menu(page).click();
    await expect(mobileNav(page)).toBeHidden();
  });
}

test("chrome: the Menu disclosure is operable by keyboard", async ({ page }) => {
  annotate("uli-action", "chrome/mobile-menu");
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto("/research/");
  await menu(page).focus();
  await page.keyboard.press("Enter");
  await expect(mobileNav(page)).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(mobileNav(page).getByRole("link", { name: "Home", exact: true })).toBeFocused();
});

// --- ULI-L01/L02/L10: declared alignment groups ---------------------------

for (const surface of SURFACES) {
  for (const group of surface.groups) {
    for (const width of group.widths) {
      test(`${surface.id}: ${group.id} aligns at ${width}px`, async ({ page }) => {
        annotate("uli-group", `${surface.id}/${group.id}@${width}`);
        await page.setViewportSize({ width, height: 900 });
        await page.goto(surface.id === "chrome" ? "/research/" : surface.path);
        await expectPeerAlignment(page, {
          ruleId: group.ruleId,
          id: group.id,
          edge: group.edge,
          peers: group.peers,
          scope: group.scope ? regionOf(page, group.scope) : undefined
        });
      });
    }
  }
}

// --- ULI-A08: keyboard reachability; reduced motion; forced colors ----------

test("every desktop chrome action is reachable by keyboard", async ({ page }) => {
  annotate("uli-surface", "chrome");
  await page.setViewportSize({ width: DESKTOP, height: 900 });
  await page.goto("/about/");
  await recordTabSequence(page, 12);
  for (const action of CHROME.filter(item => item.region === undefined || item.region?.name === "Primary navigation" || item.region?.role === "banner")) {
    if (action.control.role !== "link") continue;
    expect(await wasFocusedDuringSequence(controlOf(page, action)), action.id).toBe(true);
  }
});

test("reduced motion removes smooth scrolling and transitions", async ({ page }) => {
  annotate("uli-surface", "home");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect.poll(() => page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe("auto");
  const discuss = page.getByRole("region", { name: "Better foodservice operations, built on better technology." }).getByRole("link", { name: "Discuss a foodservice problem" });
  await expect.poll(() => discuss.evaluate(element => parseFloat(getComputedStyle(element).transitionDuration))).toBeLessThan(0.001);
});

test("forced colors keep filled controls bounded and navigation visible", async ({ page }) => {
  annotate("uli-surface", "home");
  await page.setViewportSize({ width: DESKTOP, height: 900 });
  await page.emulateMedia({ forcedColors: "active" });
  await page.goto("/");
  await expect.poll(() => primaryNav(page).getByRole("link", { name: "Let's talk" }).evaluate(element => getComputedStyle(element).borderTopStyle)).toBe("solid");
  for (const name of NAV_NAMES) await expect(primaryNav(page).getByRole("link", { name, exact: true })).toBeVisible();
  await expectNoOverflow(page);
});
