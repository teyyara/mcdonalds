const { test, expect } = require('@playwright/test');
const { AxeBuilder } = require('@axe-core/playwright');

const routes = [
  ['home', /MONOPOLY® is back\./],
  ['menu', /Good food, fast\./],
  ['deals', /Deals worth checking\./],
  ['rewards', /Your points, your demo\./],
  ['locator', /Find your nearest spot\./],
  ['app', /A faster way to order and earn\./],
  ['about', /Built around familiar favorites\./],
  ['faq', /Frequently asked questions\./],
  ['contact', /Tell us what you think\./],
  ['accessibility', /Designed to be easier to use\./],
  ['privacy', /Privacy\./],
  ['terms', /Terms of use\./]
];

async function reset(page) {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'domcontentloaded' });
}

test.beforeEach(async ({ page }) => {
  await reset(page);
});

test('homepage renders with core navigation and no page errors', async ({ page }) => {
  const pageErrors = [];
  const consoleErrors = [];
  const failedCriticalRequests = [];

  page.on('pageerror', e => pageErrors.push(String(e)));
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('requestfailed', req => {
    if (['document', 'script', 'stylesheet'].includes(req.resourceType())) failedCriticalRequests.push(req.url());
  });

  await expect(page).toHaveTitle(/McDonald's/);
  const header = page.locator('header');
  await expect(header.getByRole('link', { name: 'Our Menu' }).first()).toBeVisible();
  await expect(header.getByRole('link', { name: 'Rewards' }).first()).toBeVisible();
  await expect(header.getByRole('link', { name: 'Locate' }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Order Now' })).toBeVisible();

  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
  expect(failedCriticalRequests).toEqual([]);
});

test('all primary routes render their intended heading', async ({ page }) => {
  for (const [route, heading] of routes) {
    await page.goto(route === 'home' ? '/' : `/#${route}`, { waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('heading', { level: 1 }).first()).toHaveText(heading);
  }
});

test('menu search and category navigation work', async ({ page }) => {
  await page.goto('/#menu', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { name: 'Good food, fast.' })).toBeVisible();

  const search = page.getByLabel('Search menu');
  await search.fill('Big Mac');
  await expect(page.getByRole('heading', { name: 'Big Mac®' })).toBeVisible();

  await page.getByRole('button', { name: 'Chicken' }).click();
  await expect(page.getByRole('heading', { name: '10 Piece Chicken McNuggets®' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Big Mac®' })).toHaveCount(0);
});

test('product detail, cart persistence, quantity changes and checkout complete', async ({ page }) => {
  await page.goto('/#menu', { waitUntil: 'domcontentloaded' });

  await page.locator('button[data-act="product"][data-id="big-mac"]').click();
  await expect(page.getByRole('dialog')).toBeVisible();

  await page.getByRole('button', { name: 'Increase quantity' }).click();
  await expect(page.locator('#dialogQty')).toHaveText('2');
  await page.getByRole('button', { name: 'Add to order' }).click();

  await page.getByRole('button', { name: /Open cart/ }).click();
  await expect(page.getByRole('heading', { name: 'Your order' })).toBeVisible();
  await expect(page.getByText('Big Mac®').last()).toBeVisible();
  await expect(page.locator('.summary .row.total strong')).toHaveText('$11.98');

  await page.getByRole('button', { name: /Continue to demo checkout/ }).click();
  await page.getByLabel('Name').fill('Demo Customer');
  await page.getByLabel('Email').fill('demo@example.com');
  await page.getByRole('button', { name: 'Place demo order' }).click();

  await expect(page.getByRole('heading', { name: 'Order confirmed' })).toBeVisible();
  await expect(page.getByText(/No payment or real McDonald’s order was created/)).toBeVisible();
});

test('rewards earn and reset locally', async ({ page }) => {
  await page.goto('/#rewards', { waitUntil: 'domcontentloaded' });
  await expect(page.getByText('120', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: '+100 points' }).click();
  await expect(page.getByText('220', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(page.locator('#main .points')).toHaveText('0');
});

test('restaurant locator can search and select a sample restaurant', async ({ page }) => {
  await page.goto('/#locator', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { name: /Find your nearest spot/ })).toBeVisible();
  await page.getByLabel('Search restaurants').fill('Riverside');
  await expect(page.getByRole('heading', { name: /Riverside/ })).toBeVisible();
  await page.getByRole('button', { name: /Use this restaurant/ }).click();
  await expect(page.getByText('Sample restaurant selected.')).toBeVisible();
});

test('contact form validates and stays local', async ({ page }) => {
  await page.goto('/#contact', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: /Submit demo message/ }).click();
  await expect(page.getByLabel('Name')).toBeFocused();
  await page.getByLabel('Name').fill('Demo Customer');
  await page.getByLabel('Email').fill('demo@example.com');
  await page.getByLabel('Message').fill('Hello');
  await page.getByRole('button', { name: /Submit demo message/ }).click();
  await expect(page.getByText(/submitted locally/i)).toBeVisible();
});

test('mobile layout has no horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const overflow = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
  await page.screenshot({ path: 'test-results/mobile-home.png', fullPage: true });
});

test('axe accessibility scan has no critical or serious violations on key routes', async ({ page }) => {
  for (const route of ['/', '/#menu', '/#deals', '/#rewards', '/#locator', '/#contact']) {
    await page.goto(route, { waitUntil: 'domcontentloaded' });
    const results = await new AxeBuilder({ page }).analyze();
    const blocking = results.violations.filter(v => ['critical', 'serious'].includes(v.impact));
    expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
  }
});
