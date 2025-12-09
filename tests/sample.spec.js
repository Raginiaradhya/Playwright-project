import {test,expect} from '@playwright/test'
test('sample test', async ({page})=>
{
    await page.goto('https://www.amazon.in/')
    //await page.locator("//a[.='Today's Deals']").click()
    await page.getByRole('link',{name:"Today's Deals"}).click()
    await page.locator('//span[contains(.,"iQOO Neo")]').nth(3).click()
    await page.getByTitle("Buy Now").click()
    await page.getByLabel("Enter your mobile number or email").fill("kushi@gmail.com")
    
})
