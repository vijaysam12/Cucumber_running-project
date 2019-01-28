$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Automationpractice.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality for automation practis application",
  "description": "It contains 3 scenarios includes Valid Crendentails, Invalid crendentials etc",
  "id": "login-functionality-for-automation-practis-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "User verify the login functionlity with valid credentials",
  "description": "",
  "id": "login-functionality-for-automation-practis-application;user-verify-the-login-functionlity-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User hit the Automation Practice Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User wait for page load",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click sign in button in the header",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User wait for page load",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter the email address \"hello27484@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User validate the user email id",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_hit_the_Automation_Practice_Application()"
});
formatter.result({
  "duration": 17028481227,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_wait_for_page_load()"
});
formatter.result({
  "duration": 5000068252,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_sign_in_button_in_the_header()"
});
formatter.result({
  "duration": 3890870715,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_wait_for_page_load()"
});
formatter.result({
  "duration": 5000040028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello27484@gmail.com",
      "offset": 30
    }
  ],
  "location": "Stepdefinition.user_enter_the_email_address(String)"
});
formatter.result({
  "duration": 334961809,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_create_account_button()"
});
formatter.result({
  "duration": 168145980,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_validate_the_user_email_id()"
});
formatter.result({
  "duration": 4999775742,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User enter his detail to register",
  "description": "",
  "id": "login-functionality-for-automation-practis-application;user-enter-his-detail-to-register",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User click on mr button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter first name \"Ak\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter last name\t\"s\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enter the password\t\"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Dropdown and click on days by value \"10\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Dropdown and click on months by value \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Dropdown and click on years by value\t\"1994\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user click on newsletter to suscribe button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user enter the first name\t\"hbk\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user enter the last name\t\"H\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enter the Company name\t\"accel\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user enter the first Address\t\"1/22 anna nagar\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user enter the Second Address\t\"west\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user enter the city \"chennai\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user enter the postcode number\t\"00000\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Dropdown and click state by value\t\"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user enter the country \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user enter the Additional information\t\"addition\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user enter the home phone number\"044248686",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user enter the mobile number \"7338993263\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user enter the reference email address \"abcas@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click register button to complete register",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user valid and register",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_click_on_mr_button()"
});
formatter.result({
  "duration": 122857750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ak",
      "offset": 23
    }
  ],
  "location": "Stepdefinition.user_enter_first_name(String)"
});
formatter.result({
  "duration": 149214431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "s",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.user_enter_last_name(String)"
});
formatter.result({
  "duration": 124365458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "Stepdefinition.user_enter_the_password(String)"
});
formatter.result({
  "duration": 169196963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 42
    }
  ],
  "location": "Stepdefinition.user_Dropdown_and_click_on_days_by_value(String)"
});
formatter.result({
  "duration": 313415120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "Stepdefinition.user_Dropdown_and_click_on_months_by_value(String)"
});
formatter.result({
  "duration": 170071414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1994",
      "offset": 43
    }
  ],
  "location": "Stepdefinition.user_Dropdown_and_click_on_years_by_value(String)"
});
formatter.result({
  "duration": 162495407,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_newsletter_to_suscribe_button()"
});
formatter.result({
  "duration": 95044678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hbk",
      "offset": 27
    }
  ],
  "location": "Stepdefinition.user_enter_the_first_name(String)"
});
formatter.result({
  "duration": 104203829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "H",
      "offset": 26
    }
  ],
  "location": "Stepdefinition.user_enter_the_last_name(String)"
});
formatter.result({
  "duration": 89914464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accel",
      "offset": 29
    }
  ],
  "location": "Stepdefinition.user_enter_the_Company_name(String)"
});
formatter.result({
  "duration": 129901594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1/22 anna nagar",
      "offset": 30
    }
  ],
  "location": "Stepdefinition.user_enter_the_first_Address(String)"
});
formatter.result({
  "duration": 224584995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "west",
      "offset": 31
    }
  ],
  "location": "Stepdefinition.user_enter_the_Second_Address(String)"
});
formatter.result({
  "duration": 131905030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chennai",
      "offset": 21
    }
  ],
  "location": "Stepdefinition.user_enter_the_city(String)"
});
formatter.result({
  "duration": 202983909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00000",
      "offset": 32
    }
  ],
  "location": "Stepdefinition.user_enter_the_postcode_number(String)"
});
formatter.result({
  "duration": 145774104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 40
    }
  ],
  "location": "Stepdefinition.user_Dropdown_and_click_state_by_value(String)"
});
formatter.result({
  "duration": 196790397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 24
    }
  ],
  "location": "Stepdefinition.user_enter_the_country(String)"
});
formatter.result({
  "duration": 228011979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addition",
      "offset": 39
    }
  ],
  "location": "Stepdefinition.user_enter_the_Additional_information(String)"
});
formatter.result({
  "duration": 115375655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "044248686",
      "offset": 33
    }
  ],
  "location": "Stepdefinition.user_enter_the_home_phone_number(String)"
});
formatter.result({
  "duration": 184726673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7338993263",
      "offset": 30
    }
  ],
  "location": "Stepdefinition.user_enter_the_mobile_number(String)"
});
formatter.result({
  "duration": 182309617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcas@gmail.com",
      "offset": 40
    }
  ],
  "location": "Stepdefinition.user_enter_the_reference_email_address(String)"
});
formatter.result({
  "duration": 208507727,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_register_button_to_complete_register()"
});
formatter.result({
  "duration": 2972301366,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_valid_and_register()"
});
formatter.result({
  "duration": 4999906089,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "user select Tshirt and add to cart",
  "description": "",
  "id": "login-functionality-for-automation-practis-application;user-select-tshirt-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@TC3"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "user enter on home searchtext \"T-shirts\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user mouseover on tshirt first dress",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user print text on product details",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user click on continue shopping",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User wait for page load",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "T-shirts",
      "offset": 31
    }
  ],
  "location": "Stepdefinition.user_enter_on_home_searchtext(String)"
});
formatter.result({
  "duration": 154067529,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_search_button()"
});
formatter.result({
  "duration": 2432690394,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_mouseover_on_tshirt_first_dress()"
});
formatter.result({
  "duration": 354074509,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_add_to_cart()"
});
formatter.result({
  "duration": 125352808,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_print_text_on_product_details()"
});
formatter.result({
  "duration": 70497452,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_continue_shopping()"
});
formatter.result({
  "duration": 700450876,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_wait_for_page_load()"
});
formatter.result({
  "duration": 4999679779,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "user select dress and add to cart",
  "description": "",
  "id": "login-functionality-for-automation-practis-application;user-select-dress-and-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@TC4"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "user mouseover on dress to enter any category",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user click on Causal dress and enter the next page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user click on size in short,medium or large",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user click on composition checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "user click on styles checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user click on properties checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user click on manufacture checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user click on condition checking",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user mouseover on stock",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user click on stock to add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user click on  proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User wait for page load",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_mouseover_on_dress_to_enter_any_category()"
});
formatter.result({
  "duration": 182498979,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_Causal_dress_and_enter_the_next_page()"
});
formatter.result({
  "duration": 3917611251,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_size_in_short_medium_or_large()"
});
formatter.result({
  "duration": 125077746,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_composition_checkbox()"
});
formatter.result({
  "duration": 94263111,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_styles_checkbox()"
});
formatter.result({
  "duration": 107347028,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_properties_checkbox()"
});
formatter.result({
  "duration": 100989812,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_manufacture_checkbox()"
});
formatter.result({
  "duration": 104641567,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_condition_checking()"
});
formatter.result({
  "duration": 108766983,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_mouseover_on_stock()"
});
formatter.result({
  "duration": 173701615,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_stock_to_add_to_cart()"
});
formatter.result({
  "duration": 127024220,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_on_proceed_to_checkout()"
});
formatter.result({
  "duration": 16237436443,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_wait_for_page_load()"
});
formatter.result({
  "duration": 4999908655,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "user proceed to checkout",
  "description": "",
  "id": "login-functionality-for-automation-practis-application;user-proceed-to-checkout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 66,
      "name": "@TC5"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "user click and proceed to checkout in summary",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "user click and proceed to checkout in address",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "user click and proceed to checkout in shipcheck",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "use click and proceed to checkout in shipping",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User wait for page load",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_click_and_proceed_to_checkout_in_summary()"
});
formatter.result({
  "duration": 1992285436,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_and_proceed_to_checkout_in_address()"
});
formatter.result({
  "duration": 1429094061,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_click_and_proceed_to_checkout_in_shipcheck()"
});
formatter.result({
  "duration": 104379848,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.use_click_and_proceed_to_checkout_in_shipping()"
});
formatter.result({
  "duration": 2350176429,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_wait_for_page_load()"
});
formatter.result({
  "duration": 4999854771,
  "status": "passed"
});
});