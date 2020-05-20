@SeleniumTest
Feature: Random Date Generator Test Scenarios
  As a User I should be able to generate random date based on the selected options

  Background: Open browser
    Given User is on Selenium Test home page

  Scenario: Verify the UI layout of 'Selenium Test' page"
    Then I should be able to view all fields as per UX/FSD

  Scenario: Verify the Customer is listed  in the Customer list (left panel info)
    Then I see customer is present in the Customer list along with its respective e-mail and phone number
      | customerName | email                  | phoneNo       |
      | John Smith   | jsmith@test.com        | 0208092029    |
      | Jeff Bridges | abcd@test.com          | 0161 225 7632 |
      | Steve Jones  | steven.jones@test.com  | 01403 215100  |

  Scenario Outline: Verify user is able to view the customer details for the selected customer
    When I click on View Customer Details for customer: "<customerName>"
    Then The Customer Details should display "Name" : "<customerName>"
    * The Customer Details should display "Email" : "<email>"
    * The Customer Details should display "Phone" : "<phoneNo>"
    * The Customer Details should display "City" : "<city>"
    * The Customer Details should display "State" : "<state>"
    * The Customer Details should display "Country" : "<country>"
    * The Customer Details should display "Organization" : "<organization>"
    * The Customer Details should display "Job Profile" : "<jobProfile>"
    * The Customer Details should display "Additional Info" : "<additionalInfo>"

    Examples: This is test date
    | customerName | email                  | phoneNo       | city       | state              | country | organization | jobProfile         | additionalInfo                                                |
    | John Smith   | jsmith@test.com        | 0208092029    | London     | Greater London     | England | Company 1    | Software Developer | Has Bought a lot of products before and a high Value Customer |
    | Jeff Bridges | abcd@test.com          | 0161 225 7632 | Manchester | Greater Manchester | England | Company 2    | Software Developer | Buys Products Rarely                                          |
    | Steve Jones  | steven.jones@test.com  | 01403 215100  | Horsham    | West Sussex        | England | Company 3    | Software Developer | Buys Lots of Products in general                              |

