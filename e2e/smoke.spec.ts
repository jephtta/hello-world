import { test, expect } from "@playwright/test";

test.describe("Smoke Tests", () => {
  test("should return HTTP 200 for the home page", async ({ request }) => {
    const response = await request.get("/");
    expect(response.status()).toBe(200);
  });

  test("should render the page without JavaScript errors", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(errors).toHaveLength(0);
  });

  test("should display the main heading", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Hello World" })
    ).toBeVisible();
  });

  test("should have a valid HTML document structure", async ({ page }) => {
    await page.goto("/");
    const doctype = await page.evaluate(
      () => document.doctype?.name === "html"
    );
    expect(doctype).toBe(true);
    const lang = await page.locator("html").getAttribute("lang");
    expect(lang).toBeTruthy();
  });
});
