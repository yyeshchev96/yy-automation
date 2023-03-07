import { test, expect } from '@playwright/test'
import HomePage from './pages/homepage'

let homePage: HomePage

// Open base page before each test
test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('Homepage elements are rendered', async ({ page }) => {
  homePage = new HomePage(page)
  // check header
  await expect(homePage.page).toHaveTitle(/YY Automation/)

  // check logo
  await expect(homePage.logo).toBeInViewport()

  // check menu items
  await expect(homePage.menuItem).toHaveText(['Home', 'Blog', 'Tags', 'About'])
})
