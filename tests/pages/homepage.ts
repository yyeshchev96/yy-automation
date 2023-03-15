import { Locator, Page } from '@playwright/test'

export default class HomePage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get logo(): Locator {
    return this.page.getByTestId('logo')
  }

  get menuItems(): Locator {
    return this.page.getByTestId('desktop-nav-menu').locator('a')
  }

  async openPage() {
    await this.page.goto('/')
  }
}
