package cucumber;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClass {

	public static WebDriver driver;

	public static void openBrowser() {
		System.setProperty("webdriver.chrome.driver",
				"E:\\Java programs\\CucumberTask\\cucumberpom\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	// Closing Browser
	public static void quitBrowser() {
		driver.quit();
	}

	// Close Window
	public static void closeWindow() {
		driver.close();
	}

	// Enter URL
	public void enterUrl(String url) {
		driver.get(url);
	}

	// Get PageTitle
	public String getPageTitle() {
		String title = driver.getTitle();
		return title;
	}

	// Get Url
	public String getCurrentUrl() {
		String url = driver.getCurrentUrl();
		return url;
	}

	public void setValue(WebElement ele, String value) {
		ele.sendKeys(value);
	}

	public void click(WebElement ele) {
		ele.click();
	}
}
