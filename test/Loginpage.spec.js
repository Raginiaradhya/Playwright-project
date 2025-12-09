import {test} from '@playwright/test'
import { Loginpage } from './Pom/Login.page'
import lgndata from  './TestData/login.json'

test('logining in', async({page})=>
{
    await page.goto(lgndata.url)
    let lp=new Loginpage(page)
    await lp.login(lgndata.email,lgndata.pwd)
    await page.waitForTimeout(2000)
    
}
)