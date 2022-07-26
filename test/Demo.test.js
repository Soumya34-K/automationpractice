const { default: executeAsync } = require("webdriverio/build/commands/browser/executeAsync");


describe("Element actions on the page",   async() => {

    it("Get the title of the page",  async () => {

        await browser.url('/');
        const title =   browser.getTitle(); 
        console.log(title); 
        await browser.pause(3000);

    })

    it("should search for a product and verify the search text value",  async() =>{

        const input= await $('#search_query_top');
        let value =input.addValue('DRESSES');
        const btn = await $('[name="submit_search"]')
        await btn.click()
        await browser.pause(2000);
        
    })

    it('should disply My order footer link ', async () => {

        const footerLink = $ ("//a[@title='My orders']")
        console.log(footerLink.isDisplayed())
        await browser.pause(2000);



    })




})
