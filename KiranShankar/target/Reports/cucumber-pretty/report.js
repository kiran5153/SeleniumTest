$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/features/ST_Scenarios.feature");
formatter.feature({
  "name": "Random Date Generator Test Scenarios",
  "description": "  As a User I should be able to generate random date based on the selected options",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SeleniumTest"
    }
  ]
});
formatter.background({
  "name": "Open browser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Selenium Test home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.userIsOnSeleniumTestHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the UI layout of \u0027Selenium Test\u0027 page\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "name": "I should be able to view all fields as per UX/FSD",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.iShouldBeAbleToViewAllFields()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open browser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Selenium Test home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.userIsOnSeleniumTestHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the Customer is listed  in the Customer list (left panel info)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "name": "I see customer is present in the Customer list along with its respective e-mail and phone number",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.customerIsPresentInTheCustomerList(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify user is able to view the customer details for the selected customer",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I click on View Customer Details for customer: \"\u003ccustomerName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The Customer Details should display \"Name\" : \"\u003ccustomerName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "The Customer Details should display \"Email\" : \"\u003cemail\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "The Customer Details should display \"Phone\" : \"\u003cphoneNo\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "The Customer Details should display \"City\" : \"\u003ccity\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "The Customer Details should display \"State\" : \"\u003cstate\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "The Customer Details should display \"Country\" : \"\u003ccountry\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "The Customer Details should display \"Organization\" : \"\u003corganization\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "The Customer Details should display \"Job Profile\" : \"\u003cjobProfile\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "The Customer Details should display \"Additional Info\" : \"\u003cadditionalInfo\u003e\"",
  "keyword": "* "
});
formatter.examples({
  "name": "This is test date",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "customerName",
        "email",
        "phoneNo",
        "city",
        "state",
        "country",
        "organization",
        "jobProfile",
        "additionalInfo"
      ]
    },
    {
      "cells": [
        "John Smith",
        "jsmith@test.com",
        "0208092029",
        "London",
        "Greater London",
        "England",
        "Company 1",
        "Software Developer",
        "Has Bought a lot of products before and a high Value Customer"
      ]
    },
    {
      "cells": [
        "Jeff Bridges",
        "abcd@test.com",
        "0161 225 7632",
        "Manchester",
        "Greater Manchester",
        "England",
        "Company 2",
        "Software Developer",
        "Buys Products Rarely"
      ]
    },
    {
      "cells": [
        "Steve Jones",
        "steven.jones@test.com",
        "01403 215100",
        "Horsham",
        "West Sussex",
        "England",
        "Company 3",
        "Software Developer",
        "Buys Lots of Products in general"
      ]
    }
  ]
});
formatter.background({
  "name": "Open browser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Selenium Test home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.userIsOnSeleniumTestHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is able to view the customer details for the selected customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "name": "I click on View Customer Details for customer: \"John Smith\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.iClickOnViewCustomerDetailsForCustomer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Name\" : \"John Smith\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Email\" : \"jsmith@test.com\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Phone\" : \"0208092029\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"City\" : \"London\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"State\" : \"Greater London\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Country\" : \"England\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Organization\" : \"Company 1\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Job Profile\" : \"Software Developer\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Additional Info\" : \"Has Bought a lot of products before and a high Value Customer\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open browser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Selenium Test home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.userIsOnSeleniumTestHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is able to view the customer details for the selected customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "name": "I click on View Customer Details for customer: \"Jeff Bridges\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.iClickOnViewCustomerDetailsForCustomer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Name\" : \"Jeff Bridges\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Email\" : \"abcd@test.com\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Phone\" : \"0161 225 7632\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"City\" : \"Manchester\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"State\" : \"Greater Manchester\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Country\" : \"England\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Organization\" : \"Company 2\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Job Profile\" : \"Software Developer\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Additional Info\" : \"Buys Products Rarely\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open browser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Selenium Test home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.userIsOnSeleniumTestHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is able to view the customer details for the selected customer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "name": "I click on View Customer Details for customer: \"Steve Jones\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.iClickOnViewCustomerDetailsForCustomer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Name\" : \"Steve Jones\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Email\" : \"steven.jones@test.com\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Phone\" : \"01403 215100\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"City\" : \"Horsham\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"State\" : \"West Sussex\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Country\" : \"England\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Organization\" : \"Company 3\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Job Profile\" : \"Software Developer\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Customer Details should display \"Additional Info\" : \"Buys Lots of Products in general\"",
  "keyword": "* "
});
formatter.match({
  "location": "stepDefinations.ST_Stepdefs.theCustomerDetailsShouldDisplay(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});