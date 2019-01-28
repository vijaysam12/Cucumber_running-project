package org.cucumber.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class dresses {
	public static WebDriver driver;
	
	@FindBy(xpath = "(//a[text()='Dresses'])[2]")
	private WebElement dresses;
	
	@FindBy(xpath = "(//a[text()='Casual Dresses'])[2]")
	private WebElement Causaldresses;
	
	@FindBy(xpath = "(//input[@type='checkbox'])[1]")
	private WebElement size;
	
	@FindBy(xpath = "(//input[@type='checkbox'])[4]")
	private WebElement composition;
	
	@FindBy(xpath = "(//input[@type='checkbox'])[5]")
	private WebElement styles;
	
	@FindBy(xpath = "(//input[@type='checkbox'])[6]")
	private WebElement properties;
	
	@FindBy(xpath = "(//input[@type='checkbox'])[7]")
	private WebElement availability;

	@FindBy(xpath = "(//input[@type='checkbox'])[8]")
	private WebElement manufacturer;
	
	@FindBy(xpath = "(//input[@type='checkbox'])[9]")
	private WebElement condition;
	
	@FindBy(xpath="//div[@class='product-container']")
	private WebElement dressesclk;
	
	@FindBy(xpath = "//span[text()='Add to cart']")
	private WebElement addcart;
	
	@FindBy(xpath = "//div[contains(@class,'layer_cart_product col-xs-12 col-md-6')]/h2")
	private WebElement text;
	
	@FindBy(xpath = "//a[@title='Proceed to checkout']")
	private WebElement proceed;
	
	public dresses(WebDriver ds) {
		driver = ds;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement getmousedress() {
		return dresses;
		
	}
	public WebElement getcausaldress() {
		return Causaldresses;
		
	}
	public WebElement getsize() {
		return size;
		
	}
	public WebElement getcomposition() {
		return composition;
		
	}
	public WebElement getstyles() {
		return styles;
		
	}
	public WebElement getproperties() {
		return properties;
		
	}
	
	public WebElement getmanufacturer() {
		return manufacturer;
		
	}
	public WebElement getcondition() {
		return condition ;
		
	}
	public WebElement getavailability() {
		return availability;
		
	}
	public WebElement getdressclk() {
		return dressesclk;
		
	}
	public WebElement getaddcart() {
		return addcart;
		
	}
	public WebElement gettext() {
		return text;
		
	}
	public WebElement getproceed() {
		return proceed;
		
	}

}
