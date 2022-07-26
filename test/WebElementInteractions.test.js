
const webPage=require ('../pages/element.pages');

describe("Element actions on the page",  async () => {

    it("Get the title of the page",  async () => {

        await browser.url('/');
        webPage.pageTitle
        await browser.pause(3000);
    
    });


    it('should search for a product and verify the search text value',  async () =>{
     
    
     webPage.addElementValue
     await browser.pause(3000);

    });

})