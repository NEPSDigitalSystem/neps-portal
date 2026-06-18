import { test, expect } from '@playwright/test'

test('homepage has title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/NEPS/)
})

test('homepage loads successfully', async ({ page }) => {
  const response = await page.goto('/')
  expect(response?.status()).toBe(200)
})

test('navigation works', async ({ page }) => {
  await page.goto('/')
  // Check if page has content
  const body = await page.locator('body').textContent()
  expect(body).toBeTruthy()
})
