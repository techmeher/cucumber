package steps;

import org.junit.Assert;

import bank.Account;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BankingSteps {
	private Account _account;

	@Given("^I have deposited \\$(\\d+) in my account$")
	public void i_have_deposited_$_in_my_account(int amount) throws Throwable {
		_account = new Account();
		_account.deposit(amount);
		Assert.assertEquals(amount, _account.getBalance());
	}

	@When("^I request \\$(\\d+)$")
	public void i_request_$(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}

	@Then("^\\$(\\d+) should be dispensed$")
	public void $_should_be_dispensed(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		throw new PendingException();
	}
}
