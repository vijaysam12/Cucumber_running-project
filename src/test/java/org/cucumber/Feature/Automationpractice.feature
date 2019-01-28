
Feature: Login functionality for automation practis application
It contains 3 scenarios includes Valid Crendentails, Invalid crendentials etc

@TC1
Scenario: User verify the login functionlity with valid credentials
    Given User hit the Automation Practice Application
    And User wait for page load
    When User click sign in button in the header
    And User wait for page load
    And User enter the email address "hello255484@gmail.com"
    And User click on create account button 
    Then User validate the user email id
        
  @TC2  
 Scenario: User enter his detail to register
  And User click on mr button
  And User enter first name "Ak"
  And User enter last name	"s"
	And User enter the password	"abc123"
	And User Dropdown and click on days by value "10"
	And user Dropdown and click on months by value "2"
	And user Dropdown and click on years by value	"1994"
	And user click on newsletter to suscribe button
	And user enter the first name	"hbk"
	And user enter the last name	"H"
	And user enter the Company name	"accel"
	And user enter the first Address	"1/22 anna nagar"
	And user enter the Second Address	"west"
	And user enter the city "chennai"
	And user enter the postcode number	"00000"
	And user Dropdown and click state by value	"4"
	And user enter the country "United States"
	And user enter the Additional information	"addition"
	And user enter the home phone number"044248686
	And user enter the mobile number "7338993263"
	And user enter the reference email address "abcas@gmail.com"
	And User click register button to complete register 
	Then user valid and register 

@TC3	
Scenario: user select Tshirt and add to cart
	And user enter on home searchtext "T-shirts"
	And user click on search button
	And user mouseover on tshirt first dress 
	And user click on add to cart
	And user print text on product details
	And user click on continue shopping
	Then User wait for page load
	
@TC4
Scenario: user select dress and add to cart
	And user mouseover on dress to enter any category
	And user click on Causal dress and enter the next page
	And user click on size in short,medium or large
	And user click on composition checkbox
	And user click on styles checkbox
	And user click on properties checkbox
	And user click on manufacture checkbox
	And user click on condition checking
	Then user mouseover on stock 
	And user click on stock to add to cart
	And user click on  proceed to checkout
	Then User wait for page load

@TC5
Scenario: user proceed to checkout
	And user click and proceed to checkout in summary
	And user click and proceed to checkout in address
	And user click and proceed to checkout in shipcheck
	And use click and proceed to checkout in shipping
	Then User wait for page load
