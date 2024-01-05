import loginToWebsite from "./loginToWebsite.js";




const likePost = async (page, account, url) => {

    await page.goto(url);

    console.log('зашел на страницу')

    await page.waitForTimeout(3000);

    await loginToWebsite(page, account);

    const likeButton = await page.$('._rating-spinner__plus_1f9ma_1')

    await likeButton.click()

    console.log('лайкнул запись')

}

export default likePost