import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/loginPage.js";
import {VALID_LOGIN_FORM} from "../utils/mockData.js";
import {HOME_URL, LOGIN_URL} from "../utils/constants.js";

test.beforeEach(async ({ page }) => {
  await page.goto(LOGIN_URL);
});

test('Successful Login', async ({page})=>{
  const loginPage = new LoginPage(page)

  await loginPage.login(VALID_LOGIN_FORM.username, VALID_LOGIN_FORM.password)

  await expect.soft(page).toHaveURL(HOME_URL)
})
