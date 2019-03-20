package cucumber;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import objectRepository.AddTariffPage;

public class AddTariffSteps extends BaseClass {

	@When("The user fill in the tariff plan details {string} , {string},{string},{string},{string},{string},{string}")
	public void the_user_fill_in_the_tariff_plan_details(String MonthRent, String freeLoc, String freeInt, String freeSMS,
			String localCharge, String intCharge, String smsCharge) {
		AddTariffPage page = new AddTariffPage();
		setValue(page.getMonthlyRental(),MonthRent);
		setValue(page.getFreeLocalMins(),freeLoc);
		setValue(page.getFreeIntMins(),freeInt);
		setValue(page.getFreeSMSpack(),freeSMS);
		setValue(page.getLocalperminchar(),localCharge);
		setValue(page.getInterpermincharges(),intCharge);
		setValue(page.getSmsPercharge(),smsCharge);
	
	}

	@Then("The user should see the success message {string} in add tariff plan page")
	public void the_user_should_see_the_success_message_in_add_tariff_plan_page(String successmessage) {
		
		AddTariffPage page = new AddTariffPage();
		Assert.assertEquals(successmessage, page.getSuccessmessage().getText());
		
	}

}
