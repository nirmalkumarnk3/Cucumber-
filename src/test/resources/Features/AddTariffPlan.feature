#Author: your.email@your.domain.com

@regression @sprint1 @addtarif
Feature: To test add tariff plan

  @us1234
  Scenario Outline: To verify success message upo adding multiple plans
    Given The user is in add tariff plan page
    When The user fill in the tariff plan details "<MonthRent>" , "<freeLoc>","<freeInt>","<freeSMS>","<localCharge>","<intCharge>","<smsCharge>"
    And The user clicks the sumbit button
    Then The user should see the success message "Congratulation you add Tariff Plan" in add tariff plan page

    Examples: 
      | MonthRent | freeLoc | freeInt | freeSMS | localCharge | intCharge | smsCharge |
      |       100 |     200 |     300 |     400 |         500 |       600 |       700 |
      |       200 |     300 |     400 |     500 |         600 |       700 |       800 |
      |       300 |     400 |     500 |     600 |         700 |       800 |       900 |
