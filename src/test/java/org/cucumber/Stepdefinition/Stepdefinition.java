package org.cucumber.Stepdefinition;

import javax.print.attribute.standard.PDLOverrideSupported;

import org.cucumber.Baseclass.BaseClass;
import org.cucumber.Pom.CreateAccount;
import org.cucumber.Pom.Homepage;
import org.cucumber.Pom.Register;
import org.cucumber.Pom.TShirt;
import org.cucumber.Pom.dresses;
import org.cucumber.Pom.proceed;
import org.cucumber.Runner.TestRunner;
import org.cucumber.reference.PageObject;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefinition extends BaseClass {

	public static WebDriver driver = TestRunner.driver;
	PageObject po = new PageObject(driver);
	

	@Given("^User hit the Automation Practice Application$")
	public void user_hit_the_Automation_Practice_Application() throws Throwable {
		getUrl("http://automationpractice.com/index.php");

	}

	@Given("^User wait for page load$")
	public void user_wait_for_page_load() throws Throwable {
		Thread.sleep(5000);

	}

	@When("^User click sign in button in the header$")
	public void user_click_sign_in_button_in_the_header() throws Throwable {
		clicktext(po.gethp().getsignin());

	}
	
	@When("^User enter the email address \"([^\"]*)\"$")
	public void user_enter_the_email_address(String arg1) throws Throwable {
		sendText(po.getca().getemailid(),arg1);
		

	}

	@When("^User click on create account button$")
	public void user_click_on_create_account_button() throws Throwable {
		clicktext(po.getca().tocreate());

	}

	@Then("^User validate the user email id$")
	public void user_validate_the_user_email_id() throws Throwable {
		Thread.sleep(5000);

	}

	@Given("^User click on mr button$")
	public void user_click_on_mr_button() throws Throwable {
		
		clicktext(po.getrt().getMr());

	}

	@Given("^User enter first name \"([^\"]*)\"$")
	public void user_enter_first_name(String arg1) throws Throwable {
		sendText(po.getrt().getcustomername(), arg1);

	}

	@Given("^User enter last name	\"([^\"]*)\"$")
	public void user_enter_last_name(String arg1) throws Throwable {
		
		sendText(po.getrt().getcustomerlastname(), arg1);

	}

	@Given("^User enter the password	\"([^\"]*)\"$")
	public void user_enter_the_password(String arg1) throws Throwable {
		
		sendText(po.getrt().getpassword(), arg1);

	}

	@Given("^User Dropdown and click on days by value \"([^\"]*)\"$")
	public void user_Dropdown_and_click_on_days_by_value(String arg1) throws Throwable {
		
		DD(po.getrt().getdays(), arg1, "value");

	}

	@Given("^user Dropdown and click on months by value \"([^\"]*)\"$")
	public void user_Dropdown_and_click_on_months_by_value(String arg1) throws Throwable {
		
		DD(po.getrt().getmonths(), arg1, "value");

	}

	@Given("^user Dropdown and click on years by value	\"([^\"]*)\"$")
	public void user_Dropdown_and_click_on_years_by_value(String arg1) throws Throwable {
		
		DD(po.getrt().getyears(), arg1, "value");

	}

	@Given("^user click on newsletter to suscribe button$")
	public void user_click_on_newsletter_to_suscribe_button() throws Throwable {
		
		clicktext(po.getrt().getnewsletter());

	}

	@Given("^user enter the first name	\"([^\"]*)\"$")
	public void user_enter_the_first_name(String arg1) throws Throwable {
		
		sendText(po.getrt().getfirstname(), arg1);

	}

	@Given("^user enter the last name	\"([^\"]*)\"$")
	public void user_enter_the_last_name(String arg1) throws Throwable {
		
		sendText(po.getrt().getlastname(), arg1);

	}

	@Given("^user enter the Company name	\"([^\"]*)\"$")
	public void user_enter_the_Company_name(String arg1) throws Throwable {
		
		sendText(po.getrt().getcompany(), arg1);

	}

	@Given("^user enter the first Address	\"([^\"]*)\"$")
	public void user_enter_the_first_Address(String arg1) throws Throwable {
		
		sendText(po.getrt().getaddress1(), arg1);

	}

	@Given("^user enter the Second Address	\"([^\"]*)\"$")
	public void user_enter_the_Second_Address(String arg1) throws Throwable {
		
		sendText(po.getrt().getaddress2(), arg1);

	}

	@Given("^user enter the city \"([^\"]*)\"$")
	public void user_enter_the_city(String arg1) throws Throwable {
		
		sendText(po.getrt().getcity(), arg1);

	}

	@Given("^user enter the postcode number	\"([^\"]*)\"$")
	public void user_enter_the_postcode_number(String arg1) throws Throwable {
		
		sendText(po.getrt().getcode(), arg1);

	}

	@Given("^user Dropdown and click state by value	\"([^\"]*)\"$")
	public void user_Dropdown_and_click_state_by_value(String arg1) throws Throwable {
		
		DD(po.getrt().getstate(), arg1, "value");

	}

	@Given("^user enter the country \"([^\"]*)\"$")
	public void user_enter_the_country(String arg1) throws Throwable {
		
		sendText(po.getrt().getcompany(), arg1);

	}

	@Given("^user enter the Additional information	\"([^\"]*)\"$")
	public void user_enter_the_Additional_information(String arg1) throws Throwable {
		
		sendText(po.getrt().getaddinfo(), arg1);

	}

	@Given("^user enter the home phone number\"(\\d+)$")
	public void user_enter_the_home_phone_number(String arg1) throws Throwable {
		
		sendText(po.getrt().gethomeph(), arg1);

	}

	@Given("^user enter the mobile number \"([^\"]*)\"$")
	public void user_enter_the_mobile_number(String arg1) throws Throwable {
		
		sendText(po.getrt().getphnum(), arg1);

	}

	@Given("^user enter the reference email address \"([^\"]*)\"$")
	public void user_enter_the_reference_email_address(String arg1) throws Throwable {
		
		sendText(po.getrt().getref(), arg1);

	}

	@Given("^User click register button to complete register$")
	public void user_click_register_button_to_complete_register() throws Throwable {
		
		clicktext(po.getrt().getreg());

	}

	@Then("^user valid and register$")
	public void user_valid_and_register() throws Throwable {
		Thread.sleep(5000);

	}

	@Given("^user enter on home searchtext \"([^\"]*)\"$")
	public void user_enter_on_home_searchtext(String arg1) throws Throwable {
	
		sendText(po.getts().getsearchtext(), arg1);

	}

	@Given("^user click on search button$")
	public void user_click_on_search_button() throws Throwable {
	
		clicktext(po.getts().getsearch());

	}

	@Given("^user mouseover on tshirt first dress$")
	public void user_mouseover_on_tshirt_first_dress() throws Throwable {
	
		mouseOver(po.getts().gettshirt());

	}

	@Given("^user click on add to cart$")
	public void user_click_on_add_to_cart() throws Throwable {
	
		clicktext(po.getts().getAddtocart());

	}

	@Given("^user print text on product details$")
	public void user_print_text_on_product_details() throws Throwable {
	
		getText(po.getts().gettext());

	}

	@Given("^user click on continue shopping$")
	public void user_click_on_continue_shopping() throws Throwable {
	
		clicktext(po.getts().getcontshop());

	}

	@Given("^user mouseover on dress to enter any category$")
	public void user_mouseover_on_dress_to_enter_any_category() throws Throwable {
		
		mouseOver(po.getDs().getmousedress());

	}

	@Given("^user click on Causal dress and enter the next page$")
	public void user_click_on_Causal_dress_and_enter_the_next_page() throws Throwable {
		
		clicktext(po.getDs().getcausaldress());

	}

	@Given("^user click on size in short,medium or large$")
	public void user_click_on_size_in_short_medium_or_large() throws Throwable {
		
		clicktext(po.getDs().getsize());

	}

	@Given("^user click on composition checkbox$")
	public void user_click_on_composition_checkbox() throws Throwable {
		
		clicktext(po.getDs().getcomposition());

	}

	@Given("^user click on styles checkbox$")
	public void user_click_on_styles_checkbox() throws Throwable {
		
		clicktext(po.getDs().getstyles());

	}

	@Given("^user click on properties checkbox$")
	public void user_click_on_properties_checkbox() throws Throwable {
		
		clicktext(po.getDs().getproperties());

	}

	@Given("^user click on manufacture checkbox$")
	public void user_click_on_manufacture_checkbox() throws Throwable {
		
		clicktext(po.getDs().getmanufacturer());

	}

	@Given("^user click on condition checking$")
	public void user_click_on_condition_checking() throws Throwable {
		
		clicktext(po.getDs().getcondition());

	}

	@Then("^user mouseover on stock$")
	public void user_mouseover_on_stock() throws Throwable {
		
		mouseOver(po.getDs().getdressclk());

	}

	@Then("^user click on stock to add to cart$")
	public void user_click_on_stock_to_add_to_cart() throws Throwable {
		
		clicktext(po.getDs().getaddcart());

	}

	@Then("^user click on  proceed to checkout$")
	public void user_click_on_proceed_to_checkout() throws Throwable {
		
		clicktext(po.getDs().getproceed());

	}

	@Given("^user click and proceed to checkout in summary$")
	public void user_click_and_proceed_to_checkout_in_summary() throws Throwable {
		clicktext(po.getPd().getsummary());

	}

	@Given("^user click and proceed to checkout in address$")
	public void user_click_and_proceed_to_checkout_in_address() throws Throwable {
		
		clicktext(po.getPd().getaddress());

	}

	@Given("^user click and proceed to checkout in shipcheck$")
	public void user_click_and_proceed_to_checkout_in_shipcheck() throws Throwable {
		
		clicktext(po.getPd().getshipcheck());

	}

	@Given("^use click and proceed to checkout in shipping$")
	public void use_click_and_proceed_to_checkout_in_shipping() throws Throwable {
		
		clicktext(po.getPd().getshipping());

	}

}
