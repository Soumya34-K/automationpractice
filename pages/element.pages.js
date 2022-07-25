const { default: $ } = require("webdriverio/build/commands/browser/$");

class AutomationPracticePage {

    get pageTitle() {


        const title =   browser.getTitle(); 
        console.log(title); 
    }


    get searchInput() {

        return $('#search_query_top');
    }

    get searchBtn() {
        return $("//button[@name='submit_search']");
    }
    get footerLink() {

        return $ ("//a[@title='My orders']")
    }
    get link() {

        return $ ("//a[@title='Contact Us']")
    }
    get addToCart() {
 
        return $ ("//ul[@id='homefeatured']//li[@class='ajax_block_product col-xs-12 col-sm-4 col-md-3 last-item-of-mobile-line']//span[contains(text(),'Add to cart')]");
    }
    get mouseHover() {

        return $ ("//a[@title='Women']")
    }
    get clickTops () {

        return $("//a[@title='Tops']")


    }
    get productCount() {

        return $("//span[@class='heading-counter']")
    }
    get clickTshirt() {

        return $ ("//li[@class='sfHoverForce sfHover']//a[@title='T-shirts'][normalize-space()='T-shirts']")

    }
    get clickDresses () {

         return $ ('=Dresses')

    }

    getCount() {

        console.log(this.productCount.getText())
    }
    getFooterLink (){

        console.log(this.footerLink.isDisplayed())
    }
    addElementValue (){

        this.searchInput.addValue('T-SHIRTS ');
        this.searchBtn.click


    }
    clickLink () {

        this.link.click
    }
    addElementToCart() {

        this.addToCart.click
     
    }
    clickLinkWomen () {
        this.mouseHover.click
    }

    clickLinkTops () {

        this.clickTops.click ()
    }
    clickLinkTshirt () {

        this.clickTshirt .click
    }
    
    clickLinkDress () {

        let link = this.clickDresses.getText()
        console.log(link)
        link.click

    }

                           
 
}

module.exports =  new AutomationPracticePage();