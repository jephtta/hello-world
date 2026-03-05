import { test, expect } from "@playwright/test";

test.describe("Hello World App", () => {
  test("should display Hello World heading", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Hello World" })
    ).toBeVisible();
  });

  test("should center the Hello World text on the page", async ({ page }) => {
    await page.goto("/");
    const heading = page.getByRole("heading", { name: "Hello World" });
    const box = await heading.boundingBox();
    const viewport = page.viewportSize();
    expect(box).not.toBeNull();
    expect(viewport).not.toBeNull();
    // Heading center should be roughly at horizontal center of viewport
    const headingCenterX = box!.x + box!.width / 2;
    const viewportCenterX = viewport!.width / 2;
    expect(Math.abs(headingCenterX - viewportCenterX)).toBeLessThan(50);
    // Heading should be roughly vertically centered
    const headingCenterY = box!.y + box!.height / 2;
    const viewportCenterY = viewport!.height / 2;
    expect(Math.abs(headingCenterY - viewportCenterY)).toBeLessThan(50);
  });

  test("should have correct page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Hello World");
  });

  test("should load without JavaScript errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(errors).toHaveLength(0);
  });

  test("should have proper HTML lang attribute", async ({ page }) => {
    await page.goto("/");
    const lang = await page.locator("html").getAttribute("lang");
    expect(lang).toBe("en");
  });

  test("should have a meta description", async ({ page }) => {
    await page.goto("/");
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description).toBeTruthy();
  });

  test("should return 404 for non-existent routes", async ({ page }) => {
    const response = await page.goto("/this-route-does-not-exist");
    expect(response?.status()).toBe(404);
  });

  test("should render correctly on mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
    const heading = page.getByRole("heading", { name: "Hello World" });
    await expect(heading).toBeVisible();
    const box = await heading.boundingBox();
    expect(box).not.toBeNull();
    // Should still be horizontally centered on mobile
    const headingCenterX = box!.x + box!.width / 2;
    expect(Math.abs(headingCenterX - 375 / 2)).toBeLessThan(50);
  });
});
