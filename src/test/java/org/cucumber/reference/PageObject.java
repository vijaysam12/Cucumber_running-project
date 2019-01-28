package org.cucumber.reference;

import org.cucumber.Pom.CreateAccount;
import org.cucumber.Pom.Homepage;
import org.cucumber.Pom.Register;
import org.cucumber.Pom.TShirt;
import org.cucumber.Pom.dresses;
import org.cucumber.Pom.proceed;
import org.openqa.selenium.WebDriver;

public class PageObject {
	private WebDriver driver;
	private Homepage hp;
	private CreateAccount ca;
	private Register rt;
	private TShirt ts;
	private dresses ds;
	private proceed pd;
	
	public Homepage gethp() {
		return(hp==null) ? hp= new Homepage(driver) : hp; 
		
	}
	public CreateAccount getca() {
		return(ca==null) ? ca= new CreateAccount(driver) : ca; 
		
	}
	public Register getrt() {
		return(rt==null) ? rt= new Register(driver) : rt; 
		
	}
	
	public TShirt getts() {
		return (ts==null) ? ts = new TShirt(driver) : ts;
	}
	public dresses getDs() {
		return (ds==null) ? ds = new dresses(driver) : ds;
	}
	public proceed getPd() {
		return (pd==null) ? pd = new proceed(driver) : pd;
	}
	
	public PageObject(WebDriver po) {
		this.driver = po;
		
	}
	
}
	
	
	

