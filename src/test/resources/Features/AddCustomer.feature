#Author: Greens
@addcust
Feature: To test add customer


    

  @us12 @us21 @us22
  Scenario: Title of your scenario 1
  Given The user is in add customer page
    When The user fill in the customer details
      | fname   | lname    | email           | adress  | phnum       |
      | myfname | mylname  | test@gmail.com  | chennai |   723462348 |
      | myfname | mylname1 | test1@gmail.com | chennai |  2723462348 |
      | myfname | mylname  | test2@gmail.com | chennai | 12723462348 |
    And The user clicks the sumbit button
    Then The user should see the success message "Please Note Down Your CustomerID"
    And The user should see the customer ID

  