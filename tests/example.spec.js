import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  
  await expect(page.getByRole('heading', { name: 'Hello World!' })).toBeVisible();
  await expect(page.getByText('Welcome to your React app')).toBeVisible();
});

test('page has correct title', async ({ page }) => {
  await page.goto('/');
  
  await expect(page).toHaveTitle(/Vite \+ React/);
});

test('page styling is applied correctly', async ({ page }) => {
  await page.goto('/');
  
  const container = page.locator('div').first();
  await expect(container).toHaveCSS('display', 'flex');
  await expect(container).toHaveCSS('justify-content', 'center');
  await expect(container).toHaveCSS('align-items', 'center');
});