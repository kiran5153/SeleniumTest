package stepDefinations;
import basePage.BasePage;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.*;
import java.util.List;
import java.util.Map;

public class ST_Stepdefs {
    private BasePage basePage = new BasePage();

    @Given("^User is on Selenium Test home page$")
    public void userIsOnSeleniumTestHomePage() {
        basePage.seltstPgObj.verifyUserIsOnHomepage();
    }

    @Then("^I should be able to view all fields as per UX\\/FSD$")
    public void iShouldBeAbleToViewAllFields() {
        basePage.seltstPgObj.verifySTuiLayout();
    }

    @Then("^I see customer is present in the Customer list along with its respective e-mail and phone number$")
    public void customerIsPresentInTheCustomerList(DataTable customerInfo) {
        List<Map<String, String>> cstInfoMap= customerInfo.asMaps();
        for (Map mapItem: cstInfoMap){
            basePage.seltstPgObj.verifyCustomerInfo((String) mapItem.get("customerName"), (String) mapItem.get("email"), (String) mapItem.get("phoneNo"));
        }
    }

    @When("^I click on View Customer Details for customer: \"(.*)\"$")
    public void iClickOnViewCustomerDetailsForCustomer(String customerName) {
        basePage.seltstPgObj.ClickOnViewCustomer(customerName);
    }

//    @Then("^The Customer Details should display .*: \"(.*)\"$")
    @Then("^The Customer Details should display \"(.*)\" : \"(.*)\"$")
    public void theCustomerDetailsShouldDisplay(String custAtrribute, String custValue) {
        basePage.seltstPgObj.VerifyCustomerDetails(custAtrribute, custValue);
    }

}
