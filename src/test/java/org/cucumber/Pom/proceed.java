package org.cucumber.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class proceed {
	public static WebDriver driver;
	
	@FindBy(xpath = "(//a[@title='Proceed to checkout'])[2]")
	private WebElement summary;
	
	@FindBy(xpath = "//span[text()='Proceed to checkout']")
	private WebElement address;
	
	@FindBy(xpath ="//input[@type='checkbox']")
	private WebElement shipcheck;
	
	@FindBy(xpath ="//button[@name='processCarrier']")
	private WebElement shipping;
	
	public proceed(WebDriver Ts) {
		driver = Ts;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement getsummary() {
		return summary;
	
	}
	
	public WebElement getaddress() {
		return address;
		
	}
	
	public WebElement getshipcheck() {
		return shipcheck;
		
	}
	public WebElement getshipping() {
		return shipping;
	}
	
	
}
