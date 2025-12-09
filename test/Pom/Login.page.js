export class Loginpage
{ 
    /**
     * 
     * @param {import('playwright').Page} page
     */

    constructor(page)
    {
        this.page=page
        this.email=page.locator('#email')
        this.pwd=page.locator('#password')
        this.lgnbtn=page.getByRole('button',{name:'Login'})
    }
    async login(email,password)
    {
        await this.email.fill(email)
        await this.pwd.fill(password)
        await this.lgnbtn.click()
    }

}