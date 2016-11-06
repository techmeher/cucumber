package steps;

import maths.Calculator;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalculationTests {
	private Calculator _calculator;
	private int result;

	@Given("^I have Calculator instance$")
	public void i_have_Calculator_instance() throws Throwable {
		_calculator = new Calculator();
	}

	@When("^I pass (\\d+) and pass (\\d+) into addition method$")
	public void i_pass_and_pass_into_addition_method(int firstNumber,
			int secondNumber) throws Throwable {
		result = _calculator.addition(firstNumber, secondNumber);
	}

	@When("^I pass (\\d+) and pass (\\d+) into substraction method$")
	public void i_pass_and_pass_into_substraction_method(int firstNumber,
			int secondNumber) throws Throwable {
		result = _calculator.subtraction(firstNumber, secondNumber);
	}

	@Then("^I should get (\\d+) for Additions$")
	public void i_should_get_for_Additions(int _result) throws Throwable {
		Assert.assertEquals(result, _result);
	}

	@Then("^I calculator instance will not be null$")
	public void i_calculator_instance_will_not_be_null() throws Throwable {
		Assert.assertNotNull(_calculator);
	}

	@Then("^I should get (\\d+) for Subtractions$")
	public void i_should_get_for_Subtractions(int _result) throws Throwable {
		Assert.assertEquals(result, _result);
	}
}
