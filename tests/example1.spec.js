import {test,expect} from '@playwright/test'
test.skip('practice',async({page})=>
{
    await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    await page.getByText('Frames').click()
    await page.getByText('iframes').click()
    let f= page.frameLocator('//iframe[@class="w-full h-96"]')
    await f.locator('#username').fill("kushi aradhya")
    await f.locator('#password').fill("kushi@143")
    await f.getByRole('button',{name:"Login"}).click()
})

test.skip('drag&drop',async({page})=>
{
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    await page.getByText('Mobile Charger').dragTo(await page.getByText('Mobile Accessories'))
    await page.getByText('Mobile Cover').dragTo(page.getByText('Mobile Accessories'))
    await page.getByText('Laptop Charger').dragTo(page.getByText('Laptop Accessories'))
    await page.getByText('Laptop Cover').dragTo(page.getByText('Laptop Accessories'))

})
test.skip('another way draganddrop',async({page})=>
{
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
     const src=page.getByText('Mobile Charger')
     const dest=page.getByText('Mobile Accessories')
     const srcBox = await src.boundingBox();
    const destBox = await dest.boundingBox()
    //  await page.mouse.move(src)
    //  await page.mouse.down()
    //  await page.sr
    await page.mouse.move(
    srcBox.x + srcBox.width / 2,
    srcBox.y + srcBox.height / 2
     )
await page.mouse.down();
await page.mouse.move(
    destBox.x + destBox.width / 2,
    destBox.y + destBox.height / 2
)
await page.mouse.up();

})

test('mouse',async({page})=>
{
    await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0')   
    await page.getByPlaceholder('Enter Password').hover()
})