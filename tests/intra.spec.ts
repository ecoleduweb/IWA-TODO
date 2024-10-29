import { test, expect } from '@playwright/test';

test("Ajout d'une tasse quand on clic sur la cafetière", async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.reload();

  await page.once('dialog', (dialog) => {
    expect(dialog.type()).toBe('alert');
    dialog.dismiss().catch(() => {});
  });

  await page.locator('#the-french-press .french-press').first().click();

  await expect(page.locator('.cup')).toHaveCount(1);
  await expect(page.locator('#the-french-press .french-press').getByText('240 ml')).toHaveCount(1);
});

test('Quand vide le café on affiche vide et la cafetière 0 ml', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.reload();

  await page.locator('#the-french-press .french-press').first().click({ clickCount: 9 });
  await expect(await page.getByText('VIDE', { exact: true })).toHaveCount(1);
  await expect(page.locator('#the-french-press .french-press').getByText('0 ml')).toHaveCount(1);
});

test('Quand on ajoute une tasse sans café, on affiche une erreur', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.reload();

  await page.once('dialog', (dialog) => {
    expect(dialog.type()).toBe('alert');
    dialog.dismiss().catch(() => {});
  });

  await page.locator('#the-french-press .french-press').first().click({ clickCount: 10 });
});

test('On ne peut pas verser de tasses de plus de 50 ml', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.reload();

  await page.once('dialog', (dialog) => {
    expect(dialog.type()).toBe('alert');
    dialog.dismiss().catch(() => {});
  });

  await page.getByLabel('Verser : mls').fill('51');
  await page.locator('#the-french-press .french-press').first().click();
});

test('On ne peut pas verser de tasse quand il manque de café', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.reload();

  await page.once('dialog', (dialog) => {
    expect(dialog.type()).toBe('alert');
    dialog.dismiss().catch(() => {});
  });

  await page.locator('#the-french-press .french-press').first().click({ clickCount: 8 });
  await page.getByLabel('Verser : mls').fill('50');
  await page.locator('#the-french-press .french-press').first().click();
});
