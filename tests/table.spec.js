import {test,expect} from '@playwright/test'
test('table rows',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    let text= await page.locator('//h2[text()="Pagination Web Table"]/..//table/tbody/tr').all()
    let num=1
    while(num<=4)
    {
        await page.locator(`//u1[@class="pagination"]|//a[.=${num}]`).click()
      //await page.waitForTimeout(4000)
        for(let value of text)
        {
            //let text2= await page.locator('//table[@id="productTable"]').textContent()
            console.log(await value.textContent())
        }
        num++
    }
 } )