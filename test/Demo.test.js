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

    it ('Should select the values from dropdown and verify the results', async () => {

       
        const selectBox = await $('#selectProductSort');   
        await selectBox.selectByAttribute('value', 'price:desc');
        console.log(await selectBox.getValue());
        const result = $ ('span.heading-counter');
        console.log(await result.getText());
        await browser.pause(4000);
	   
    })

    it ('Should click on Electronics and click on boat checkbox' , async () => {

        await browser.url('https://www.amazon.in/');
        const link = await $("//a[contains(text(),'Electronics')]");
        console.log(await link.getText());
        await link.click();
        const checkBox= await $ ("//span[text()='boAt']");
        await checkBox.click();
        await browser.pause(4000);

    })

    it ('Should  add element to  the cart' , async () => {

        const link = $("//span[text()='boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)']")
        link.click()
        const addToCart = $("//input[@id='add-to-cart-button']")
        addToCart.click()
        await browser.pause(4000);

    })

    it ('Should  remove element from the cart' , async () => {

        const element = $("//span[@id='nav-cart-count']")
        element.click()
        const remove = $ ("input[value='Delete']")
        remove.click()
        await browser.pause(4000);

    })

    it ('Should click on Flights and search for direct flights' , async () => {

        await browser.url('https://www.phptravels.net/login');
        const userName = await $ ('[name="email"]')
        userName.addValue('admin@phptravels.com')
        const passWord = await $ ('[name="password"]')
        passWord.addValue ('demoadmin')
        const button = await $ ("//span[text()='Login']")
        await button.click()
        const clickFlight = $ ("//a[text()='flights']")
        await clickFlight.click()
        const flighName = await $("//h6[text()='Emirates Airlines']")
        await flighName.click()
        const radioButton = await $("//label[text()=' Stops 1']")
        await radioButton.click()
        await browser.pause(4000);

    })


})
