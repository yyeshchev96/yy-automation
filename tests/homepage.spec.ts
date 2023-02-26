import { test, expect } from '@playwright/test'

// Open base page before each test
test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('Homepage elements are rendered', async ({ page }) => {
  // check header
  await expect(page).toHaveTitle(/YY Automation/)

  // check logo
  await expect(page.getByTestId('logo')).toBeInViewport()

  // check menu items
  let menu_items = await page.getByTestId('desktop-nav-menu').locator('a').all()
  await expect(menu_items[0]).toHaveText('Home')
  await expect(menu_items[1]).toHaveText('Blog')
  await expect(menu_items[2]).toHaveText('About')
});
