@functional_tests
Feature: cash withdrawal feature
  I want to use this template for my feature file

  @happy_path
  Scenario: Successful withdrawal from an account in credit
    Given I have deposited $100 in my account
    When I request $20
    Then $20 should be dispensed
