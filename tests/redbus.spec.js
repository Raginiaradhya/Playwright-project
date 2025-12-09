import {test,expect} from '@playwright/test'
test('red bus',async({page})=>
{
    await page.goto("https://www.redbus.in/")
    await page.locator("//div[@class='labelCityWrapper___a65ec7']").nth(0).click()
    await page.locator('//div[.="Bangalore"]').nth(3).click()
    await page.getByLabel("Mangaluru").click()
    await page.getByText("Date of Journey").click()
    await page.getByLabel('Thursday, November 27, 2025').click()
    await page.getByRole('button',{name:"Search buses"}).click()
    await page.getByLabel('View seats for Cauvery Travels').nth(0).click()
    await page.getByLabel('Seat number L03, lower deck, seat type sleeper, reserved for female, price 1399 rupees, seat status available').click()
    await page.getByLabel('Select boarding & dropping points').click()
    await page.locator('//label[@for="bp-point-0"]').nth(0).click()
    await page.locator('//label[@for="bp-point-0"]').nth(1).click()
    await page.getByPlaceholder('Phone').fill("9876534564")
    await page.locator('//i[@class="icon___0148ef icon ciicon ciicon-arrow_drop_down "]').click()
   await page.locator('//label[@class="customRadio___2cef29 customRadio___2cef29"]').nth(4).click()
    await page.getByPlaceholder('Enter your Name').fill("kushi")
    await page.getByPlaceholder('Enter Age').fill("65")
    await page.getByLabel('Continue booking').click()

    





})