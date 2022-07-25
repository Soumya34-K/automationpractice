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
        let value =input.addValue('T-SHIRTS');
        let value = await $ ('li.ac_even.ac_over')
        //value.click
        const btn = await $("//button[@name='submit_search']")
        await btn.click
        await browser.pause(2000);
        
    })


})
