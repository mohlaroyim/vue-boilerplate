import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/loginPage.js";
import {INVALID_LOGIN_FORM, VALID_LOGIN_FORM, WRONG_CREDENTIALS_FORM} from "../utils/mockData.js";
import {HOME_URL, LOGIN_URL} from "../utils/constants.js";

test.beforeEach(async ({ page }) => {
  await page.goto(LOGIN_URL);
});

test('should login successfully with valid credentials', async ({page})=>{
  const loginPage = new LoginPage(page)

  await loginPage.login(VALID_LOGIN_FORM.username, VALID_LOGIN_FORM.password)

  await expect.soft(page).toHaveURL(HOME_URL)
})

test('should display error message on invalid credentials', async ({page})=>{
  const loginPage = new LoginPage(page)

  await loginPage.login(WRONG_CREDENTIALS_FORM.username, WRONG_CREDENTIALS_FORM.password)

  const toast = page.locator('.error')

  await expect(toast).toBeVisible();
  await page.waitForTimeout(2000);
  await expect(toast).not.toBeVisible();
})

test('should highlight invalid fields on invalid credentials', async ({page})=>{
  const loginPage = new LoginPage(page)

  await loginPage.login(INVALID_LOGIN_FORM.username, INVALID_LOGIN_FORM.password)
  await expect(loginPage.usernameInput).toHaveClass(/error/)
  await expect(loginPage.passwordInput).toHaveClass(/error/)
})

test('should show error messages under invalid fields on invalid credentials', async ({page})=>{
  const loginPage = new LoginPage(page)

  await loginPage.login(INVALID_LOGIN_FORM.username, INVALID_LOGIN_FORM.password)

  const errorMessages = page.locator('.error-text')

  await expect(errorMessages).toHaveCount(2)
})
