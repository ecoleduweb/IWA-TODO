import { test, expect } from '@playwright/test';

test('Tests dela page des todos', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.reload();

  await page.getByLabel('Ajouter une nouvelle tâche').fill('test');
  await page.getByRole('button', { name: '+' }).click();
  await page.getByLabel('Ajouter une nouvelle tâche').fill('test2');
  await page.getByRole('button', { name: '+' }).click();
  // on a deux todos
  await expect(page.locator('.todo-item')).toHaveCount(2);
  // on a un todo complété
  await page.getByText('test2').click();
  await expect(page.locator('.completed')).toHaveCount(1);
  // on supprime un todo
  await page.getByRole('button', { name: 'X' }).first().click();
  await expect(page.locator('.todo-item')).toHaveCount(1);

  // Quand on recharge la page, on a toujours notre todo
  await page.reload();
  await expect(page.locator('.todo-item')).toHaveCount(1);
});
