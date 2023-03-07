import { Locator, Page } from '@playwright/test'

export default class HomePage {
  readonly page: Page
  readonly logo: Locator
  readonly menuItem: Locator

  constructor(page: Page) {
    this.page = page
    this.logo = page.getByTestId('logo')
    this.menuItem = this.page.getByTestId('desktop-nav-menu').locator('a')
  }

  async openPage() {
    await this.page.goto('/')
  }
}
