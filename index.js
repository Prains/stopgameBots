import { chromium } from "playwright"
import { accounts } from './accounts.js'
import likePost from './likePost.js'


accounts.forEach(async (account) => {
    const browser = await chromium.launch({
        headless: true 
    });
    const page = await browser.newPage();
    await likePost(page, account, '')
    await browser.close()
})


