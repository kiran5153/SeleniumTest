package utilities;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.*;
import java.io.File;
import java.io.FileInputStream;
import java.util.*;

public class GenericUtility {
    private WebDriver driver;
    private static int pageTimeout = Integer.parseInt(readConfigs("pageTimeout"));
    private static int elementTimeout = Integer.parseInt(readConfigs("elementTimeout"));

    public GenericUtility(){
        driver = DriverFactory.getWebDriver();
    }

    public static String readConfigs(String property) {
        String propValue=null;
        try {
            Properties props = new Properties();
            File fs = new File(new File("src"), "/test/resources/Config.properties");
            FileInputStream fis = new FileInputStream(fs.getAbsoluteFile());
            props.load(fis);
            propValue = props.getProperty(property);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return propValue;
    }

    public void waitForPageLoad(){
        try{
            WebDriverWait wait = new WebDriverWait(driver, pageTimeout);
           wait.until((ExpectedCondition<Boolean>) webDriver -> ((JavascriptExecutor) webDriver).executeScript("return document.readyState").equals("complete"));
        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }
    }

    public void waitFortextToBePresentInElement (WebElement element, String text) {
        try {
            WebDriverWait wait = new WebDriverWait(driver, elementTimeout);
            wait.until(ExpectedConditions.textToBePresentInElement(element, text));
        }catch (Exception e){
            e.printStackTrace();
        }
    }

}

