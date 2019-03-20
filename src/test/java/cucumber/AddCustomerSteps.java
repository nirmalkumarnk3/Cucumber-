package cucumber;

import java.util.List;
import java.util.Map;

import com.google.common.collect.Lists;

import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import objectRepository.AddCustomerPage;

public class AddCustomerSteps extends BaseClass {
	@When("The user fill in the customer details")
	public void the_user_fill_in_the_customer_details(DataTable customerDetails) {
		AddCustomerPage page= new AddCustomerPage();
		List<Map<String,String>>customerDetailsMaps=customerDetails.asMaps(String.class, String.class);
		System.out.println(customerDetails);
		setValue(page.getTxtfname(),customerDetailsMaps.get(1).get("fname"));
		setValue(page.getTxtlname(),customerDetailsMaps.get(2).get("lname"));
		setValue(page.getTxtemail(),customerDetailsMaps.get(1).get("email"));
		setValue(page.getTxtaddr(),customerDetailsMaps.get(2).get("adress"));
		setValue(page.getTxttelephoneno(),customerDetailsMaps.get(1).get("phnum"));
		
		
		
	}

	@When("The user clicks the sumbit button")
	public void the_user_clicks_the_sumbit_button() {
		AddCustomerPage cust = new AddCustomerPage();
		click(cust.getBtnsubmit());
	}
}
