package cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features",
monochrome = true, dryRun = false, glue = "cucumber", plugin = "html:target")
public class TestRunner {

}
