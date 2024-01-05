const loginToWebsite = async (page, account) => {

    const loginButton = await page.$('button[aria-label="Войти"]');

    await loginButton.click();

    console.log('открыл панель входа')

    await page.waitForTimeout(5000);

    const stopgameAccountLoginButton = await page.$('use[href="#auth/stopgame"]');

    await stopgameAccountLoginButton.click();

    console.log('выбрал вход через стопгейм')

    await page.waitForTimeout(5000);

    const usernameInput = await page.$('input[name="login"]')

    await usernameInput.fill(account.login);

    const passwordInput = await page.$('input[name="password"]');

    await passwordInput.fill(account.password)

    const submitCredentialsButton = await page.$('._primary_1xvrs_130');

    await submitCredentialsButton.click()

    console.log('ввел логин и пароль, нажал войти')

    await page.waitForTimeout(5000);
}

export default loginToWebsite