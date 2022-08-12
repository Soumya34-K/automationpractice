

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

    addElementValue (){

         this.searchInput.setValue('T-SHIRTS ');
         this.searchBtn.click();


    }
}


