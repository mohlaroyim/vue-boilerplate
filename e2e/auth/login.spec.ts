import {test, expect} from "@playwright/test";

const BASE_URL = 'http://localhost:5173'
const LOGIN_URL = BASE_URL + '/auth/login'
const HOME_URL = BASE_URL + '/'

const testForm: {username: string, password: string} = {
  username: 'mohi1',
  password: 'mohi'
}

test.beforeEach(async ({ page }) => {
  await page.goto(LOGIN_URL);
});

test('Successful Login', async ({page})=>{
  const usernameInput = page.getByTestId('user_name')
  await usernameInput.fill(testForm.username)

  const passwordInput = page.getByTestId('user_password')
  await passwordInput.fill(testForm.password)

  const loginButton = page.getByTestId('login_button')
  await loginButton.click()

  await expect.soft(page).toHaveURL(HOME_URL)
})
