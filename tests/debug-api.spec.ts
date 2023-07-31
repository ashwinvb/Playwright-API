import { expect, test, APIRequestContext } from "@playwright/test"

test("ping google.com", async ({ request }) => {
  const response = await request.get("https://www.google.com")
  expect(response.ok()).toBeTruthy()
})
