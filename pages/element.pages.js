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
        return $ ('[name="submit_search"]');
    }

    async addElementValue (){

        await this.searchInput.addValue('T-SHIRTS ');
        await this.searchBtn.click();


    }
}


