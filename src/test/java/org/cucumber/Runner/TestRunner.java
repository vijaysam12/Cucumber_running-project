package org.cucumber.Runner;

import org.cucumber.Baseclass.BaseClass;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", 
			"html:Report", 
			"junit:Report/cucumber.xml",
			"json:Report/cucumber.json"},
		features = "src\\test\\java\\org\\cucumber\\Feature",
		glue = "org\\cucumber\\Stepdefinition", 
		tags= {"@TC1,@TC2,@TC3,@TC4,@TC5"},
		strict = false, 
		dryRun = false,
		monochrome = true)
public class TestRunner {
	public static WebDriver driver;

	@BeforeClass
	public static void setUp() throws Exception {
		driver = BaseClass.getdriver("chrome");
	}

	@AfterClass
	public static void tearDown() {
		 driver.quit();
	}

}
