
package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.*;
import utilities.DriverFactory;
import utilities.GenericUtility;
import java.util.List;

public class SeleniumTest  {

    GenericUtility genericUtility;
    public SeleniumTest () {
        PageFactory.initElements(DriverFactory.getWebDriver(), this);
        genericUtility = new GenericUtility();
    }

//********************************OBJECTS*********************************************

    @FindBy(css = ".App-title")
    private WebElement pageTitle;

    @FindBy(css = ".col-md-3 .panel-title")
    private List<WebElement> custNames;

    @FindBy(css = ".col-md-3 .panel-body p:nth-of-type(1)")
    private List<WebElement>  custEmails;

    @FindBy(css = ".col-md-3 .panel-body p:nth-of-type(2)")
    private List<WebElement>  custPhNums;

    @FindBy(css = ".btn.btn-info")
    private List<WebElement> clickToView_buttons;

    @FindBy(css = ".customerdetails .panel-title")
    private WebElement custDetails_Header;

    @FindBy(css = ".customerdetails .panel-body")
    private WebElement custDetails_Body;

//    @FindBy(css = ".customerdetails .panel-body p")
//    private List<WebElement> custDetails_pBody;


//**********************************METHODS*****************************************

    public void verifyUserIsOnHomepage() {
        try {
            genericUtility.waitForPageLoad();
            Assert.assertTrue("Failed to load 'Selenium Test' page", pageTitle.isDisplayed());
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public  void verifySTuiLayout (){
        try {
            Assert.assertTrue("'Selenium' page title is not present in the page", pageTitle.isDisplayed());
            Assert.assertTrue("'Customer List' is not present in the page", ! custNames.isEmpty());
            Assert.assertTrue("'Phone Number List' is not present in the page", ! custPhNums.isEmpty());
            Assert.assertTrue("'Email List' is not present in the page", ! custEmails.isEmpty());
            Assert.assertTrue("'Click to View Details' buttons are not present in the page", ! clickToView_buttons.isEmpty());
            Assert.assertTrue("'Customer Details header' is not present in the page", custDetails_Header.isDisplayed());
            Assert.assertTrue("'Customer Details section' is not present in the page", custDetails_Body.isDisplayed());
        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }
    }

    public void verifyCustomerInfo(String custName, String custEmail, String custPhNum) {
        try {
            boolean custFound= false;
            Assert.assertTrue("XPATH/CSS issue", custNames.size()==custPhNums.size() && custNames.size()==custEmails.size());

            for (int i =0; i<custNames.size(); i++){
                if (custNames.get(i).getText().trim().equalsIgnoreCase(custName)) {
                    Assert.assertTrue("Mismatch in Email ID displayed for " + custName + ". Expected: " + custEmail + ", Actual: " +
                            custEmails.get(i).getText(), custEmails.get(i).getText().trim().equalsIgnoreCase(custEmail.trim()));
                    Assert.assertTrue("Mismatch in Phone Number displayed for " + custName + ". Expected: " + custPhNum + ", Actual: " +
                            custPhNums.get(i).getText(), custPhNums.get(i).getText().trim().equalsIgnoreCase(custPhNum.trim()));
                    custFound= true;
                }
            }
            if (! custFound)
                Assert.fail(custName + ": was not found in the Customer list (left panel info)");
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public void ClickOnViewCustomer(String custName) {
        try {
            boolean custFound= false;
            Assert.assertTrue("XPATH/CSS issue", custNames.size()==clickToView_buttons.size());

            for (int i =0; i<custNames.size(); i++){
                if (custNames.get(i).getText().trim().equalsIgnoreCase(custName)) {
                    clickToView_buttons.get(i).click();
                    genericUtility.waitFortextToBePresentInElement(custDetails_Header, custName);
                    custFound= true;
                }
            }
            if (! custFound)
                Assert.fail(custName + ": was not found in the Customer list (left panel info)");
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public void VerifyCustomerDetails(String custAtrribute, String custValue) {
        try {
            // verify the customer header
            if (custAtrribute.equalsIgnoreCase("Name"))
                Assert.assertTrue("Mismatch in the name displayed in Customer details header. Expected:" +custValue +
                        ", Actual:" + custDetails_Header.getText(), custDetails_Header.getText().trim().equalsIgnoreCase(custValue));

            // verify the customer body
            String body = custDetails_Body.getText();
            Assert.assertTrue("'" +custAtrribute + " : " + custValue + "', is not present the customer details section. Actual ==> "
                    + body, body.toLowerCase().contains(custAtrribute.toLowerCase() + " : " + custValue.toLowerCase()));
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }


}
