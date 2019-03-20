$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/AddCustomer.feature");
formatter.feature({
  "name": "To test add customer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@addcust"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario 1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addcust"
    },
    {
      "name": "@us12"
    },
    {
      "name": "@us21"
    },
    {
      "name": "@us22"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the customer details",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "adress",
        "phnum"
      ]
    },
    {
      "cells": [
        "myfname",
        "mylname",
        "test@gmail.com",
        "chennai",
        "723462348"
      ]
    },
    {
      "cells": [
        "myfname",
        "mylname1",
        "test1@gmail.com",
        "chennai",
        "2723462348"
      ]
    },
    {
      "cells": [
        "myfname",
        "mylname",
        "test2@gmail.com",
        "chennai",
        "12723462348"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_fill_in_the_customer_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the sumbit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_sumbit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message \"Please Note Down Your CustomerID\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessPageSteps.the_user_should_see_the_success_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the customer ID",
  "keyword": "And "
});
formatter.match({
  "location": "AccessPageSteps.the_user_should_see_the_customer_ID()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/AddTariffPlan.feature");
formatter.feature({
  "name": "To test add tariff plan",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@sprint1"
    },
    {
      "name": "@addtarif"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To verify success message upo adding multiple plans",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@us1234"
    }
  ]
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user fill in the tariff plan details \"\u003cMonthRent\u003e\" , \"\u003cfreeLoc\u003e\",\"\u003cfreeInt\u003e\",\"\u003cfreeSMS\u003e\",\"\u003clocalCharge\u003e\",\"\u003cintCharge\u003e\",\"\u003csmsCharge\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user clicks the sumbit button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see the success message \"Congratulation you add Tariff Plan\" in add tariff plan page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthRent",
        "freeLoc",
        "freeInt",
        "freeSMS",
        "localCharge",
        "intCharge",
        "smsCharge"
      ]
    },
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800"
      ]
    },
    {
      "cells": [
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify success message upo adding multiple plans",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@sprint1"
    },
    {
      "name": "@addtarif"
    },
    {
      "name": "@us1234"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the tariff plan details \"100\" , \"200\",\"300\",\"400\",\"500\",\"600\",\"700\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_the_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the sumbit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_sumbit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message \"Congratulation you add Tariff Plan\" in add tariff plan page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.the_user_should_see_the_success_message_in_add_tariff_plan_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify success message upo adding multiple plans",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@sprint1"
    },
    {
      "name": "@addtarif"
    },
    {
      "name": "@us1234"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the tariff plan details \"200\" , \"300\",\"400\",\"500\",\"600\",\"700\",\"800\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_the_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the sumbit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_sumbit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message \"Congratulation you add Tariff Plan\" in add tariff plan page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.the_user_should_see_the_success_message_in_add_tariff_plan_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify success message upo adding multiple plans",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@sprint1"
    },
    {
      "name": "@addtarif"
    },
    {
      "name": "@us1234"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in add tariff plan page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the tariff plan details \"300\" , \"400\",\"500\",\"600\",\"700\",\"800\",\"900\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffSteps.the_user_fill_in_the_tariff_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the sumbit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_clicks_the_sumbit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message \"Congratulation you add Tariff Plan\" in add tariff plan page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffSteps.the_user_should_see_the_success_message_in_add_tariff_plan_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});