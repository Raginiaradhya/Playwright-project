import {test,expect} from '@playwright/test'
import data from './TestData/testdata.json'
test.describe('', ()=>
{
    test.afterAll('',async({page})=>
    {
        console.log("browser is launched")
    })
})
