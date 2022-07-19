const { default: $ } = require("webdriverio/build/commands/browser/$");


class AutomationPracticePage {

    get pageTitle() {


        const title =   browser.getTitle(); 
        console.log(title); 
    }


    get searchInput() {

        return $("//input[@id='search_query_top']");
    }

    get searchBtn() {
        return $('[name="submit_search"]');
    }
    get footerLink() {

        return $ ("//a[@title='My orders']")
    }
    get clickLink () {

        return $ ("//a[@title='Contact Us']")
    }




 
}

module.exports =  new AutomationPracticePage();