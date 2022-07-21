const { searchInput } = require('../pages/element.pages');
const webPage=require ('../pages/element.pages');

describe("Element actions on the page",  async () => {

    it("Get the title of the page",  async () => {

        await browser.url('/')
        webPage.pageTitle
    
    });


    it('should search for a product and verify the search text value',  async () =>{
    
     webPage.searchInput.addValue('T-SHIRTS ');
     webPage.searchBtn.click;
     await browser.pause(3000);

    expect(webPage.searchInput).toHaveValue('T-SHIRTS')

    });

    it('should disply My order footer link ', async () => {
       let ele =  webPage.footerLink
       console.log(ele.isDisplayed);
        
    });

    it('Should click on the link', async() => {
        webPage.clickLink.click
        await browser.pause(3000);       
    });
 
});






