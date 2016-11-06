package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "./src/test/java/Features/", glue = { "steps" }, tags = { "@functional_tests" }, format = {
		"pretty", "html:target/test-report", "json:target/test-report.json",
		"junit:target/test-report.xml" })
public class TestRunner {

}