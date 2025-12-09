import {test,expect} from '@playwright/test'
test('table',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const rows=await page.locator('//table[@name="BookTable"]/tbody/descendant::tr').all()
    
    for(let row of rows){
        const col=await row.locator('//td').nth(0).allInnerTexts()
        const price=await row.locator('//td').nth(3).allInnerTexts()
        console.log(col+"--->"+price);
        
    }
})