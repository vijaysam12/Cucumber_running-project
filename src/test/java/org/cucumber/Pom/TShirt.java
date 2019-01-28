package org.cucumber.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class TShirt {
	public static WebDriver driver;
	
	@FindBy(xpath = "//input[@placeholder='Search']")
	private WebElement searchtext;
	
	@FindBy(xpath="(//button[@type='submit'])[1]")
	private WebElement search;
	
	@FindBy(xpath = "//div[@class='product-container']")
	private WebElement tshirt;
	
	@FindBy(xpath = "//span[text()='Add to cart']")
	private WebElement Addtocart;
	
	@FindBy(xpath = "//div[contains(@class,'layer_cart_product col-xs-12 col-md-6')]/h2")
	private WebElement text;
	
	@FindBy(xpath ="//span[@title='Continue shopping']")
	private WebElement contshop;
	
	public TShirt(WebDriver Ts) {
		driver = Ts;
		PageFactory.initElements(driver, this);
	}
	
	public WebElement getsearchtext() {
		return searchtext;
		
	}
	
	public WebElement getsearch() {
		return search;
		
	}

	public WebElement gettshirt() {
		return tshirt;
		
	}
	public WebElement getAddtocart() {
		return Addtocart;
		
	}
	public WebElement gettext() {
		return text;
	}
	public WebElement getcontshop(){
		return contshop;
		
	}	

}
