package stepDefinations;

import io.cucumber.java.*;
import org.openqa.selenium.WebDriver;
import utilities.DriverFactory;

public class ServiceHooks extends DriverFactory {

    @Before ("@SeleniumTest")
    public void setup() {
        WebDriver driver = initWebDriver();
        if (driver!=null) {
            setWebDriver(driver);
        }else {
            throw new RuntimeException("Unable to produce the driver");
        }
    }

    @After("@SeleniumTest")
    public void tearDown() {
        tearDownDrivers();
    }

}
