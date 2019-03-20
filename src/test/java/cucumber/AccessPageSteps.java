package cucumber;

import cucumber.api.java.en.Then;
import junit.framework.Assert;
import objectRepository.AccessPage;

public class AccessPageSteps {

	@Then("The user should see the success message {string}")
	public void the_user_should_see_the_success_message(String customeridmesage) {
		
		AccessPage page = new AccessPage();
		Assert.assertEquals(customeridmesage, page.getcustomeridmesage().getText());
	}

	@Then("The user should see the customer ID")
	public void the_user_should_see_the_customer_ID() {
		AccessPage acc = new AccessPage();
		Assert.assertTrue(acc.getcustomeriddisplayed().isDisplayed());
	}
}
