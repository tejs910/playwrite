import { test, expect } from "@playwright/test";

test("homepage has title and links to about page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Create Next App/);

  const aboutLink = page.locator("text=Deploy Now");
  await expect(aboutLink).toBeVisible();
  await aboutLink.click();
});
