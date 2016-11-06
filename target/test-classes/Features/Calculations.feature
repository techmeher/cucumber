#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@functional_tests
Feature: Addition Feature
  I want to perform calculation of two numbers

  Background: 
    Given I have Calculator instance

  @addition_happy_path
  Scenario Outline: Addition tests
    When I pass <firstNumber> and pass <secondNumber> into addition method
    Then I should get <result> for Additions
    But I calculator instance will not be null

    Examples: 
      | firstNumber | secondNumber | result |
      |           0 |            5 |      5 |
      |           2 |            5 |      7 |
      |           7 |            7 |     14 |

  @substraction_happy_path
  Scenario Outline: Substraction tests
    When I pass <firstNumber> and pass <secondNumber> into substraction method
    Then I should get <result> for Subtractions

    Examples: 
      | firstNumber | secondNumber | result |
      |          50 |            5 |     45 |
      |          12 |            5 |      7 |
      |          27 |            7 |     20 |
