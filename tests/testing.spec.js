import {test,expect} from '@playwright/test'
test('login',async({page})=>
{
    
    await page.goto("http://106.51.82.61:9007/");

    if (await page.isVisible('#submit') && !(await page.isDisabled('#submit'))) {
        console.log("Button is clickable");
    } else {
        console.log("Button is NOT clickable");
    }
})