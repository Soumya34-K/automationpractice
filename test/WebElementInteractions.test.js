
const webPage=require ('../pages/element.pages');

describe("Element actions on the page",  async () => {

    it("Get the title of the page",  async () => {

        await browser.url('/');
        webPage.pageTitle
    
    });


    it('should search for a product and verify the search text value',  async () =>{
     
    
     webPage.addElementValue
     await browser.pause(3000);

     expect(webPage.searchInput).toHaveValue('T-SHIRTS')

    });

    it('should disply My order footer link ', async () => {

        
      console.log(webPage.getFooterLink);
        
    });

    it('Should click on the link', async() => {
    
        webPage.clickLink
        await browser.pause(2000);       
    });

    it('Should click on add to cart button', async() => {

        await browser.url('/');
        webPage.addElementToCart
        await browser.pause(2000); 
    });

    it('Should mouse hover on Women and click it ', async() => {

        await browser.url('/')
        webPage.clickLinkWomen
        await browser.pause(2000); 
    });

    it('Should click on Tops ', async() => {

       
        webPage.clickLinkTops
        await browser.pause(2000); 
        
    });

    it('Should count total products', async() => {
        
       webPage.getCount
    });

 
});






